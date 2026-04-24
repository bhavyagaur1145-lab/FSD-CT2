import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api, { getImageUrl, placeholderImage } from "../services/api";

function ViewMembersPage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await api.get("/members");
        setMembers(response.data);
      } catch (fetchError) {
        setError(
          fetchError.response?.data?.message || "Unable to fetch team members."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <section className="panel">
      <h2 className="section-title">View Team Members</h2>
      <p className="section-copy">
        Browse the members stored in the database and open a dedicated details
        page for each team member.
      </p>

      {loading ? <p className="loading-text">Loading members...</p> : null}
      {error ? <div className="status-message status-error">{error}</div> : null}

      {!loading && !error && members.length === 0 ? (
        <div className="empty-state">
          No members found yet. Add a member to populate the list.
        </div>
      ) : null}

      {!loading && !error && members.length > 0 ? (
        <div className="members-grid">
          {members.map((member) => (
            <article className="member-card" key={member._id}>
              <img
                className="member-image"
                src={
                  member.image ? getImageUrl(member.image) : placeholderImage
                }
                alt={member.fullName}
              />
              <div className="member-card-body">
                <h3>{member.fullName}</h3>
                <p className="member-meta">Role: {member.role}</p>
                <p className="member-meta">Email: {member.email}</p>
                <Link className="button-secondary" to={`/members/${member._id}`}>
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default ViewMembersPage;
