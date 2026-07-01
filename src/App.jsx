import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [theme, lang]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en');

  return (
    <Router>
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
          
          {/* جزء اللوجو والعنوان */}
          <div className="header-title">
            <img src="/images/logo.jpg" alt="Eye of Horus Logo" className="logo" />
            <h1 style={{ color: 'var(--border-color)', margin: 0 }}>
              {lang === 'en' ? 'Ancient Egyptian Art' : 'الفن المصري القديم'}
            </h1>
          </div>

          {/* زراير التحكم */}
          <div>
            <button onClick={toggleLang} style={btnStyle}>
              {lang === 'en' ? 'عربي' : 'English'}
            </button>
            <button onClick={toggleTheme} style={{ ...btnStyle, margin: '0 10px' }}>
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </div>
        </header>

        {/* الصفحات */}
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/details/:id" element={<Details lang={lang} />} />
        </Routes>
      </div>
    </Router>
  );
}

const btnStyle = {
  padding: '10px 15px',
  cursor: 'pointer',
  backgroundColor: 'var(--border-color)',
  color: 'var(--bg-color)',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold'
};

export default App;