import React from 'react';

function Team() {
  const team = [
    {
      name: "Nadia Ramadhani",
      role: "CEO",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Muhammad Nurfaqih",
      role: "CTO",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Ayu Putri",
      role: "Creative Director",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Nasa Zakiyyan",
      role: "Marketing",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
  ];

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f4f4f9', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#000' }}>Tim Kami</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
        {team.map((member, idx) => (
          <div key={idx} style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '1rem',
            width: '200px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '1rem',
                border: '3px solid#79bdce',
              }}
            />
            <h4 style={{ margin: '0.5rem 0', color: '#79bdce' }}>{member.name}</h4>
            <p style={{ color: '#666' }}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;