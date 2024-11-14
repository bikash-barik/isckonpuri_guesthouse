import React, { useState } from 'react';
import './Query.css';
import loadingImage from '../assets/hotelbookingreloader.gif';
import '../components/contactus.css';
const Query = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [query, setQuery] = useState('');

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !mobile || !query) {
      alert('Please fill all the fields.');
      return;
    }

    try {
      setLoading(true);
      setMessage({text:"Wait Until Your Data is Submitted!..."})
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
        setName('');
        setMobile('');
        setQuery('');
        setMessage({ type: 'success', text: 'Data submitted successfully!' });
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setMessage({ type: 'error', text: error });
      setTimeout(() => {
       setLoading(false);
     }, 5000);
    }
  };

  return (
    <>
    {
      loading ?
      <section
      style={{
        height: "90vh",
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={loadingImage}
        alt="Loading"
        className="loading-image"
        style={{ width: "300px",height:"300px" }}
      />
      <div className="loadingimagemessage">
          <h2 style={{ color: message.type === 'success' ? 'green' : message.type === 'error' ? 'red' :'yellow'}}>{message.text}</h2>
          </div>
    </section>
    :
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
    }
    </>
    
  );
};

export default Query;
