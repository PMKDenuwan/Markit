import React from 'react';
import Header from './components/common/Header';
import Hero from './components/ui/Hero';
import './index.css';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
        </div>
    );
};

export default App;