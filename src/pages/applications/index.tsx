// pages/applications.js
import Link from 'next/link';

export default function ApplicationsPage() {
    return (
        <main>
            <h1>Applications Catalog</h1>
            <div>
                <input type="text" placeholder="Search applications..." />
                <Link href="/applications/create">
                    <button>Create New Application</button>
                </Link>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Owner</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example of a row */}
                    <tr>
                        <td>App 1</td>
                        <td>Description of App 1</td>
                        <td>Owner 1</td>
                    </tr>
                    <tr>
                        <td>App 2</td>
                        <td>Description of App 2</td>
                        <td>Owner 2</td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}
