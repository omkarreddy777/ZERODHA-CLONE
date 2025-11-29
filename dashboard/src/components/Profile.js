import React from "react";

const Profile = () => {
  // Get values from sessionStorage
  const name = sessionStorage.getItem("userName") || "No Name";
  const email = sessionStorage.getItem("userEmail") || "No Email";

  // Logout function
  const handleLogoutClick = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("userEmail");

    window.location.href = "http://localhost:3000/login";
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Profile</h1>

      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          maxWidth: "480px",
          width: "100%",
          background: "#fff",
          marginTop: "20px",
        }}
      >
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>

        <button
          style={{
            background: "#ff4d4f",
            color: "#fff",
            padding: "8px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "20px",
            fontWeight: 500,
          }}
          onClick={handleLogoutClick}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
