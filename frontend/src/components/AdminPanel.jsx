import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPanel() {
    const API_URL = import.meta.env.VITE_API_BASE_URL;
    const [urls, setUrls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUrls = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/urls`);
                setUrls(response.data);
            } catch (err) {
                setError('Failed to fetch URL data.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUrls();
    }, []);

    if (loading) {
        return <p>Loading Recent Links...</p>;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    return (
        <div className="admin-panel">
            <h2>Recent Links</h2>
            <table className="url-table">
                <thead>
                    <tr>
                        <th>Original URL</th>
                        <th>Short URL</th>
                        <th>Clicks</th>
                    </tr>
                </thead>
                <tbody>
                    {urls.map((url) => (
                        <tr key={url._id}>
                            <td>
                                <a href={url.originalUrl} target="_blank" rel="noopener noreferrer">
                                    {url.originalUrl}
                                </a>
                            </td>
                            <td>
                                <a href={url.shortUrl} target="_blank" rel="noopener noreferrer">
                                    {url.shortUrl}
                                </a>
                            </td>
                            <td>{url.clicks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPanel;