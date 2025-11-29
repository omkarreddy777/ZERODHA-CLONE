import React from "react";

const appsData = [
  {
    name: "Smallcase",
    desc: "Invest in ready-made portfolios created by experts.",
    logo: "https://zerodha.com/static/images/partners/smallcase.png",
    link: "https://smallcase.com",
  },
  {
    name: "Streak",
    desc: "Build, backtest & deploy trading strategies without coding.",
    logo: "https://zerodha.com/static/images/partners/streak.png",
    link: "https://streak.tech",
  },
  {
    name: "Sensibull",
    desc: "Options trading platform for analysis & execution.",
    logo: "https://zerodha.com/static/images/partners/sensibull.png",
    link: "https://sensibull.com",
  },
  {
    name: "TickerTape",
    desc: "Stock analysis, screening, and fundamental insights.",
    logo: "https://zerodha.com/static/images/partners/tickertape.png",
    link: "https://tickertape.in",
  },
  {
    name: "GoldenPi",
    desc: "Invest in corporate bonds & fixed income securities.",
    logo: "https://zerodha.com/static/images/partners/goldenpi.png",
    link: "https://goldenpi.com",
  },
];

const Apps = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Apps & Integrations</h2>

      <div style={styles.grid}>
        {appsData.map((app, index) => (
          <div key={index} style={styles.card}>
            <img src={app.logo} alt={app.name} style={styles.logo} />

            <h3 style={styles.title}>{app.name}</h3>
            <p style={styles.desc}>{app.desc}</p>

            <a href={app.link} target="_blank" rel="noreferrer">
              <button style={styles.button}>Open App</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #e6e6e6",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  logo: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  title: {
    margin: "10px 0 5px",
    fontSize: "18px",
    fontWeight: "600",
  },
  desc: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "15px",
  },
  button: {
    padding: "8px 16px",
    background: "#0f62fe",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
  },
};

export default Apps;
