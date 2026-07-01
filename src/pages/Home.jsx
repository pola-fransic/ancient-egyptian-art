import React from 'react';
import { useNavigate } from 'react-router-dom';
import { statuesData } from '../data';

function Home({ lang }) {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
      {statuesData.map((statue) => (
        <div 
          key={statue.id} 
          className="statue-card"
          onClick={() => navigate(`/details/${statue.id}`)}
        >
          <img src={statue.image} alt={statue.nameEn} className="statue-image" />
          <h2 style={{ marginTop: '15px' }}>
            {lang === 'en' ? statue.nameEn : statue.nameAr}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Home;