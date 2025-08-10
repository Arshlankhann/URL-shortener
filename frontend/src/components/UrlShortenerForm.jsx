import React, { useState } from 'react';
import axios from 'axios';
import { FiLink, FiArrowRight, FiCopy, FiCheck } from 'react-icons/fi';

function UrlShortenerForm() {
    const API_URL = import.meta.env.VITE_API_BASE_URL;
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setShortUrl('');
        setIsCopied(false);

        if (!originalUrl) {
            setError('Please enter a URL to shorten.');
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post(`${API_URL}/api/shorten`, {
                originalUrl,
            });
            setShortUrl(response.data.shortUrl);
            setOriginalUrl('');
        } catch (err) {
            setError('Failed to shorten URL. The server may be down or the URL is invalid.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <FiLink size={24} color="#718096" />
                <input
                    type="url"
                    placeholder="Enter a long URL here..."
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    disabled={isLoading}
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Shortening...' : 'Shorten'}
                    <FiArrowRight />
                </button>
            </form>

            {error && <p className="error">{error}</p>}

            {shortUrl && (
                <div className="result">
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                        {shortUrl}
                    </a>
                    <button onClick={handleCopy} className={`copy-btn ${isCopied ? 'copied' : ''}`}>
                        {isCopied ? <FiCheck /> : <FiCopy />}
                        {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default UrlShortenerForm;