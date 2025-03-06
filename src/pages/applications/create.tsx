// pages/applications/create.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CreateApplicationPage() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [owner, setOwner] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // For now, simulate a redirect after form submission
        router.push('/applications');
    };

    return (
        <main>
            <h1>Create New Application</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Owner:</label>
                    <input 
                        type="text" 
                        value={owner} 
                        onChange={(e) => setOwner(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Create Application</button>
            </form>
        </main>
    );
}
