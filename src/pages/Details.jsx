import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { statuesData } from '../data';

function Details({ lang }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const statue = statuesData.find(s => s.id === parseInt(id));

  if (!statue) return <h2>{lang === 'en' ? "Statue not found" : "التمثال غير موجود"}</h2>;

  return (
    <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'var(--card-bg)', borderRadius: '15px', border: '2px solid var(--border-color)' }}>
      <img 
        src={statue.image} 
        alt={statue.nameEn} 
        style={{ width: '100%', maxWidth: '400px', borderRadius: '10px', marginBottom: '20px', border: '2px solid var(--border-color)' }} 
      />
      <h1>{lang === 'en' ? statue.nameEn : statue.nameAr}</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginTop: '20px', padding: '0 20px' }}>
        {lang === 'en' ? statue.detailsEn : statue.detailsAr}
      </p>
      
      <button 
        onClick={() => navigate('/')} 
        style={{ marginTop: '30px', padding: '10px 20px', cursor: 'pointer', backgroundColor: 'var(--border-color)', color: 'var(--bg-color)', border: 'none', borderRadius: '5px', fontSize: '1.1rem', fontWeight: 'bold' }}
      >
        {lang === 'en' ? '⬅ Back to Gallery' : '⬅ العودة للمعرض'}
      </button>
    </div>
  );
}

export default Details;