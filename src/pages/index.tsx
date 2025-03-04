import { fetchPosts, usePosts } from "@/hooks/usePosts";
import { dehydrate, QueryClient } from "@tanstack/react-query";

export default function HomePage() {
  const { data: posts, error, isError, isFetched } = usePosts(10)

  if (!isFetched) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>
  }

  return (
    <main>
      <h1>Home</h1>
      <ul>
        {posts?.map((post) => {
          return (
            <li key={post.id}>{post.title}</li>
          )
        })}
      </ul>
    </main>
  );

}

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['posts', 10],
    queryFn: () => fetchPosts(10),
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}