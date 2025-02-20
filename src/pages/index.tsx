import { fetchPosts, usePosts } from '@/hooks/usePosts';
import { dehydrate, QueryClient } from '@tanstack/react-query';

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts', 10],
    queryFn: () => fetchPosts(10),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient), 
    },
  };
};

export default function Home() {
  const { data: posts } = usePosts(10);

  return (
    <main>
      <h1>Post Catalog</h1>
        <ul>
          {posts && posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
    </main>
  );
}
