import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="hero">
      <div>
        <h2>Welcome to the Student Team Members Management Application</h2>
        <p>
          Organize your project team in one place. Add members, store their
          profile details in MongoDB, upload professional photos, and view each
          member&apos;s complete information through a simple full stack app.
        </p>

        <div className="hero-actions">
          <Link className="button" to="/add-member">
            Add Member
          </Link>
          <Link className="button-secondary" to="/members">
            View Members
          </Link>
        </div>
      </div>

      <aside className="hero-card">
        <h3>What this app includes</h3>
        <ul>
          <li>React Router based page navigation</li>
          <li>Axios API integration with Express backend</li>
          <li>MongoDB storage for member details</li>
          <li>Image upload and display from the uploads folder</li>
        </ul>
      </aside>
    </section>
  );
}

export default HomePage;

