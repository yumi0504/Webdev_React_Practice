import React, { useState } from 'react';
import '../../App.css';

import './Profile.css';

function Profile() {
  const StarField = () => {
    const stars = Array.from({ length: 100 });
  
    return (
      <div className="stars">
        {stars.map((_, i) => {
          const style = {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 2}s`,
          };
          return <div className="star" style={style} key={i} />;
        })}
      </div>
    );
  };

  const [selected, setSelected] = useState('ted');

  const profiles = {
    ted: {
      name: 'Ted Bae',
      description: 'Hi, I am Ted, nice to meet you.',
      image: '/images/Ted_Bae_Profile.jpg',
      experience: ['DUMMY1', 'DUMMY2', 'DUMMY3'],
      sns: {
        linkedin: 'https://www.linkedin.com/in/ted-profile',
        github: 'https://github.com/ted-profile'
      }
    },
    yumi: {
      name: 'Yumi Choi',
      description: 'Hi, I am Yumi, nice to meet you.',
      image: '/images/Yumi_Choi_Profile.jpg',
      experience: ['DUMMY1', 'DUMMY2', 'DUMMY3'],
      sns: {
        linkedin: 'https://www.linkedin.com/in/ted-profile',
        github: 'https://github.com/ted-profile'
      }
    }
  };

  const current = profiles[selected];

  return (
    <div className="profile-page">
      <StarField />
      <div className="profile-container"> 
      <div className="profile-buttons">
      <button 
        onClick={() => setSelected('ted')}
        className={selected === 'ted' ? 'active' : ''}
      >
        TED
      </button>
      <button 
        onClick={() => setSelected('yumi')}
        className={selected === 'yumi' ? 'active' : ''}
      >
        YUMI
      </button>
      </div>
      <div className="profile-content">
        <div className="profile-left">
          <img src={current.image} alt={`${current.name}'s profile`} />
        </div>
        <div className="profile-right">
        <h2>{current.name}</h2>
          <p>{current.description}</p>
          <ul>
            {current.experience.map((item, idx) => (
              <li key={idx}>🚀 {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="profile-sns">
        {current.sns.linkedin && (
          <a href={current.sns.linkedin} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        )}
        {current.sns.github && (
          <a href={current.sns.github} target="_blank" rel="noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
        )}
        {current.sns.instagram && (
          <a href={current.sns.instagram} target="_blank" rel="noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        )}
        {current.sns.youtube && (
          <a href={current.sns.youtube} target="_blank" rel="noreferrer">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        )}
      </div>
      </div>
    </div>
  );
}

export default Profile;
