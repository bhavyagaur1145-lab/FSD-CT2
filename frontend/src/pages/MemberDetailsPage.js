import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api, { getImageUrl, placeholderImage } from "../services/api";

function MemberDetailsPage() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await api.get(`/members/${id}`);
        setMember(response.data);
      } catch (fetchError) {
        setError(
          fetchError.response?.data?.message || "Unable to fetch member details."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) {
    return <p className="loading-text">Loading member details...</p>;
  }

  if (error) {
    return <div className="status-message status-error">{error}</div>;
  }

  if (!member) {
    return <div className="empty-state">Member details are unavailable.</div>;
  }

  return (
    <section className="panel">
      <div className="inline-actions">
        <Link className="button-secondary" to="/members">
          Back to Members
        </Link>
      </div>

      <div className="detail-card" style={{ marginTop: "20px" }}>
        <img
          className="detail-image"
          src={
            member.image ? getImageUrl(member.image) : placeholderImage
          }
          alt={member.fullName}
        />

        <div className="detail-content">
          <h2>{member.fullName}</h2>
          <p className="detail-row">
            <strong>Role:</strong> {member.role}
          </p>
          <p className="detail-row">
            <strong>Email:</strong> {member.email}
          </p>
          <p className="detail-row">
            <strong>Phone:</strong> {member.phone}
          </p>
          <p className="detail-row">
            <strong>Department:</strong> {member.department || "Not provided"}
          </p>
          <p className="detail-row">
            <strong>Year:</strong> {member.year || "Not provided"}
          </p>
          <p className="detail-row">
            <strong>Additional Details:</strong>{" "}
            {member.bio || "No additional details provided"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MemberDetailsPage;
