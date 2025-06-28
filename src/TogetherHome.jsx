import React from "react";

export default function TogetherHome() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#fff", color: "#111" }}>
      {/* Sticky Navbar */}
      <nav style={{
        position: "sticky", top: 0, background: "#fff", padding: "1rem 2rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)", zIndex: 1000
      }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Together</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="#">Home</a>
          <a href="#">Funding</a>
          <a href="#">Community</a>
          <a href="#">Resources</a>
          <button style={{ padding: "0.5rem 1rem", border: "1px solid #000" }}>Login</button>
        </div>
      </nav>

      <main style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
        {/* Hero */}
        <section style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Together: India’s Most Powerful Female Founder Network
          </h2>
          <p style={{ maxWidth: "600px", margin: "1rem auto" }}>
            From our roots in Goa to WhatsApp groups across the country, Together is your platform to connect, fund, grow, and thrive.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
            <button style={{ background: "#000", color: "#fff", padding: "0.75rem 1.5rem" }}>I’m Looking for Funding</button>
            <button style={{ border: "1px solid #000", padding: "0.75rem 1.5rem" }}>Join the Community</button>
          </div>
        </section>

        {/* Login */}
        <section style={{ background: "#f9f9f9", padding: "2rem", borderRadius: "8px", marginBottom: "3rem" }}>
          <h2>Log In</h2>
          <p>Already a member? Log in to access the community dashboard.</p>
          <input type="email" placeholder="Email" style={{ width: "100%", padding: "0.5rem", marginTop: "1rem" }} />
          <input type="password" placeholder="Password" style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }} />
          <button style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", width: "100%", background: "#111", color: "#fff" }}>Log In</button>
          <p style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: "#555" }}>Forgot Password?</p>
        </section>

        {/* Typeform */}
        <section style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2>Join the Tribe</h2>
          <p>Enter your startup into our founder database to get discovered and supported.</p>
          <a href="https://form.typeform.com/to/yZKv4xsc" target="_blank" rel="noopener noreferrer">
            <button style={{ marginTop: "1rem", padding: "0.75rem 1.5rem", background: "#000", color: "#fff" }}>
              Submit Your Startup on Typeform
            </button>
          </a>
        </section>

        {/* Dashboard Preview */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Your Together Dashboard</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "250px", background: "#f0f0f0", padding: "1rem", borderRadius: "6px" }}>
              <h3>Community Updates</h3>
              <ul>
                <li>3 new asks this week</li>
                <li>5 new members joined your circle</li>
                <li>New AMA session this Friday</li>
              </ul>
            </div>
            <div style={{ flex: 1, minWidth: "250px", background: "#f0f0f0", padding: "1rem", borderRadius: "6px" }}>
              <h3>Funding Matches</h3>
              <ul>
                <li>Matched with 2 active VCs</li>
                <li>Follow-up request from Capital Ventures</li>
              </ul>
            </div>
            <div style={{ flex: 1, minWidth: "250px", background: "#f0f0f0", padding: "1rem", borderRadius: "6px" }}>
              <h3>Grants & Perks</h3>
              <ul>
                <li>2 new grants available</li>
                <li>Startup toolkit discount: AWS + Canva</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "250px", background: "#fafafa", padding: "1rem", border: "1px solid #eee" }}>
              <h3>Apply for Funding</h3>
              <p>Tell us about your startup, and we'll help connect you with relevant investors.</p>
              <button>Start Application</button>
            </div>
            <div style={{ flex: 1, minWidth: "250px", background: "#fafafa", padding: "1rem", border: "1px solid #eee" }}>
              <h3>Ask the Community</h3>
              <p>Post a question and get help from fellow founders.</p>
              <button>View Board</button>
            </div>
            <div style={{ flex: 1, minWidth: "250px", background: "#fafafa", padding: "1rem", border: "1px solid #eee" }}>
              <h3>Join WhatsApp Alerts</h3>
              <p>Sign up to receive grant alerts, opportunities, and event invites.</p>
              <input placeholder="Your Phone Number" />
              <button>Join Group</button>
            </div>
          </div>
        </section>

        {/* Wins */}
        <section style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2>Wall of Wins</h2>
          <p>Read uplifting stories from your fellow founders.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
            <div style={{ background: "#f2f2f2", padding: "1rem", borderRadius: "6px" }}>Just raised my seed round 🚀</div>
            <div style={{ background: "#f2f2f2", padding: "1rem", borderRadius: "6px" }}>Got into an international accelerator ✨</div>
            <div style={{ background: "#f2f2f2", padding: "1rem", borderRadius: "6px" }}>Launched my MVP! 💥</div>
          </div>
        </section>

        {/* Admin */}
        <section style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2>Admin Panel (Restricted Access)</h2>
          <p>Review submissions, approve member applications, and manage content.</p>
          <button style={{ border: "1px solid #000", padding: "0.5rem 1rem" }}>Go to Admin Dashboard</button>
        </section>

        <footer style={{ textAlign: "center", fontSize: "0.85rem", color: "#999", padding: "2rem 0", borderTop: "1px solid #eee" }}>
          © 2025 Together | Built to champion female founders
        </footer>
      </main>
    </div>
  );
}
