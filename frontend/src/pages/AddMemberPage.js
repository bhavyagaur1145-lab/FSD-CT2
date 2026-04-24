import { useState } from "react";
import api from "../services/api";

const initialForm = {
  fullName: "",
  role: "",
  email: "",
  phone: "",
  department: "",
  year: "",
  bio: "",
};

function AddMemberPage() {
  const [formData, setFormData] = useState(initialForm);
  const [imageFile, setImageFile] = useState(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (
      !formData.fullName.trim() ||
      !formData.role.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields before submitting.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value);
      });

      if (imageFile) {
        payload.append("image", imageFile);
      }

      await api.post("/members", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFormData(initialForm);
      setImageFile(null);
      event.target.reset();
      setStatus({
        type: "success",
        message: "Team member added successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message || "Failed to add team member. Try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="panel">
      <h2 className="section-title">Add New Team Member</h2>
      <p className="section-copy">
        Fill out the form below to store a new team member in MongoDB and upload
        a professional profile photo.
      </p>

      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
          />
        </div>

        <div className="field">
          <label htmlFor="role">Role *</label>
          <input
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Frontend Developer"
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="member@example.com"
          />
        </div>

        <div className="field">
          <label htmlFor="phone">Phone *</label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
          />
        </div>

        <div className="field">
          <label htmlFor="department">Department</label>
          <input
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="CSE"
          />
        </div>

        <div className="field">
          <label htmlFor="year">Year</label>
          <input
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="III Year / VI Sem"
          />
        </div>

        <div className="field-full">
          <label htmlFor="image">Profile Image</label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/png,image/jpeg,image/jpg,image/webp"
            onChange={(event) => setImageFile(event.target.files?.[0] || null)}
          />
        </div>

        <div className="field-full">
          <label htmlFor="bio">Additional Details</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Write a short introduction, skills, or project contribution."
          />
        </div>

        <div className="field-full">
          <button className="button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Add Member"}
          </button>
        </div>
      </form>

      {status.message ? (
        <div
          className={`status-message ${
            status.type === "success" ? "status-success" : "status-error"
          }`}
        >
          {status.message}
        </div>
      ) : null}
    </section>
  );
}

export default AddMemberPage;

