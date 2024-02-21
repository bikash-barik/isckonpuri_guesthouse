import React from 'react'

const NotFound = () => {
  return (
    <div
      style={{
        position: "absolute",
        width:"100vw",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backdropFilter: "blur(16px)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: "gray",
          padding: "20px",
        }}
      >
        No Page Found Sorry....
      </h1>
    </div>
  );
}

export default NotFound
