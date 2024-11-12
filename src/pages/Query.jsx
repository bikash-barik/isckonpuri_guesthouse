import React, { useState } from 'react';
import './Query.css';

const Query = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !mobile || !query) {
      alert('Please fill all the fields.');
      return;
    }

    try {
      const response = await fetch('https://iskconpuriguesthouse-backend.onrender.com/helpForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          mobile,
          query,
        }),
      });

      if (response.ok) {
        alert('Thank you for contacting us. We will get back to you soon.');
        setName('');
        setMobile('');
        setQuery('');
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      alert('Network error. Please check your connection and try again.');
      console.error("Network error:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="header">Feel Free to Submit Your Query!</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="inputName"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="inputName"
          type="tel"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          maxLength={10}
        />
        <textarea
          className="textArea"
          placeholder="Enter your query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default Query;
