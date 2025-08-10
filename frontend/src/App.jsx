import React from 'react';
import UrlShortenerForm from './components/UrlShortenerForm.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>URL Shortener</h1>
            </header>
            <main>
                <UrlShortenerForm />
                <hr />
                <AdminPanel />
            </main>
        </div>
    );
}

export default App;