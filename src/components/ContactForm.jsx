import { useState } from 'react';
import { submitAdmissionEnquiry } from '../data/api';
import { courses } from '../data/courses';

const INITIAL = {
  fullName: '',
  phone: '',
  email: '',
  qualification: '',
  course: '',
  mode: '',
  message: '',
};

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.';
  if (!values.phone.trim()) {
    errors.phone = 'Please enter a phone number.';
  } else if (!/^[+]?[\d\s-]{10,14}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.course.trim()) errors.course = 'Please tell us which course interests you.';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('loading');
    try {
      await submitAdmissionEnquiry(values);
      setStatus('success');
      setValues(INITIAL);
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form className="vi-card p-4 p-lg-5 reveal" onSubmit={handleSubmit} noValidate aria-describedby="contact-form-status">
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <label htmlFor="fullName" className="form-label fw-semibold">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
            value={values.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="phone" className="form-label fw-semibold">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            value={values.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="email" className="form-label fw-semibold">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="qualification" className="form-label fw-semibold">Qualification</label>
          <input
            id="qualification"
            name="qualification"
            type="text"
            className="form-control"
            value={values.qualification}
            onChange={handleChange}
            placeholder="e.g. B.Com, 12th"
          />
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="course" className="form-label fw-semibold">Course Interested In</label>
           <select
    id="course"
    name="course"
    className={`form-control ${errors.course ? 'is-invalid' : ''}`}
    value={values.course}
    onChange={handleChange}
    required
  >
    <option value="">Select a course</option>

    {courses.map((course) => (
      <option key={course.id} value={course.id}>
        {course.name} - {course.fullName}
      </option>
    ))}
  </select>
          {errors.course && <div className="invalid-feedback">{errors.course}</div>}
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="mode" className="form-label fw-semibold">Learning Mode</label>
          <select id="mode" name="mode" className="form-select" value={values.mode} onChange={handleChange}>
            <option value="">Select mode</option>
            <option value="Regular">Regular</option>
            <option value="Online">Online</option>
            <option value="ODL">ODL</option>
            <option value="Need Guidance">Need Guidance</option>
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="message" className="form-label fw-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="form-control"
            value={values.message}
            onChange={handleChange}
            placeholder="Tell us a bit about your goals..."
          ></textarea>
        </div>
      </div>

      <button type="submit" className="btn-vi-primary mt-4" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Sending&hellip;
          </>
        ) : (
          <>Request Admission Guidance <i className="bi bi-send ms-1" aria-hidden="true"></i></>
        )}
      </button>

      <div id="contact-form-status" aria-live="polite" className="mt-3">
        {status === 'success' && (
          <div className="alert alert-success mb-0" role="status">
            Thank you! Our admission guidance team will contact you shortly.
          </div>
        )}
        {status === 'error' && (
          <div className="alert alert-danger mb-0" role="alert">
            Something went wrong while sending your request. Please call us at 94431 73657 or try again.
          </div>
        )}
      </div>
    </form>
  );
}
