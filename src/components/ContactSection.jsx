import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const initialErrors = {
  name: "",
  email: "",
  phone: "",
};

const emailJsConfig = {
  serviceId: 'service_jkcucf9',
  templateId: 'template_ubgnzw6',
  publicKey: 'Nb6198i1H6lm0dzQQ',
};

const ContactSection = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    if (!notice) return undefined;

    const timeoutId = window.setTimeout(() => setNotice(null), 5000);
    return () => window.clearTimeout(timeoutId);
  }, [notice]);

  const validateField = (name, value) => {
    const trimmedValue = value.trim();

    if (name === "name") {
      if (!trimmedValue) return "Name is required.";
      if (!/^[A-Za-z\s.'-]{2,}$/.test(trimmedValue)) {
        return "Enter a valid name.";
      }
    }

    if (name === "email") {
      if (!trimmedValue) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
        return "Enter a valid email address.";
      }
    }

    if (name === "phone") {
      if (!trimmedValue) return "Phone number is required.";
      if (!/^\+?[0-9\s-]{10,15}$/.test(trimmedValue)) {
        return "Enter a valid phone number.";
      }
    }

    return "";
  };

  const validateForm = () => {
    const nextErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
    };

    setErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean);
  };

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (name in initialErrors) {
      setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
    }
  };

  const showNotice = (type, title, text) => {
    setNotice({ type, title, text });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();

    if (!validateForm()) {
      showNotice("error", "Check your details", "Please correct the highlighted fields.");
      return;
    }

    if (
      !emailJsConfig.serviceId ||
      !emailJsConfig.templateId ||
      !emailJsConfig.publicKey
    ) {
      showNotice(
        "error",
        "Email setup incomplete",
        "Add the EmailJS Vite keys before sending inquiries.",
      );
      return;
    }

    setSubmitting(true);

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          service: formData.service.trim(),
          message: formData.message.trim(),
        },
        {
          publicKey: emailJsConfig.publicKey,
        },
      );

      setFormData(initialForm);
      setErrors(initialErrors);
      showNotice("success", "Inquiry sent", "Your message was sent successfully.");
    } catch {
      showNotice("error", "Send failed", "Something went wrong. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell contact-section">
      <div className={`contact-toast ${notice ? `show ${notice.type}` : ""}`} role="status">
        {notice ? (
          <>
            <div className="contact-toast-icon">
              <i
                className={`bi ${
                  notice.type === "success" ? "bi-check2-circle" : "bi-exclamation-octagon"
                }`}
              />
            </div>
            <div className="contact-toast-body">
              <strong>{notice.title}</strong>
              <span>{notice.text}</span>
            </div>
          </>
        ) : null}
      </div>

      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <a
              className="contact-info-card contact-info-link"
              href="https://www.google.com/maps?q=10.878667,79.612389"
              target="_blank"
              rel="noreferrer"
              aria-label="Open MM Computers location in Google Maps"
            >
              <i className="fas fa-map-marker-alt" />
              <h4>Visit Us</h4>
              <p>MM COMPUTERS, No. 5A, SBI Road, South Street, Nannilam, Thiruvarur (Dt) – 610105</p>
            </a>
          </div>
          <div className="col-md-4">
            <a
              className="contact-info-card contact-info-link"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mmcomputers.nnm@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email MM Computers"
            >
              <i className="fas fa-envelope" />
              <h4>Email</h4>
              <p>mmcomputers.nnm@gmail.com</p>
            </a>
          </div>
          <div className="col-md-4">
            <a
              className="contact-info-card contact-info-link"
              href="tel:+918807329654"
              aria-label="Call MM Computers"
            >
              <i className="fas fa-phone-alt" />
              <h4>Call</h4>
              <p>+91 88073 29654</p>
            </a>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="contact-panel">
              <div className="section-tag">Contact Us</div>
              <h2 className="section-title">Get in touch with us today to discuss your need&apos;s</h2>
              <p className="section-text">
                Share what you need and MM COMPUTERS can help.
                Your information is safe with us. We’ll only use it to contact you for the requested service.
              </p>
              <form className="contact-form-grid" onSubmit={handleSubmit}>
                <div className="contact-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={updateField}
                    required
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name ? <span className="contact-field-error">{errors.name}</span> : null}
                </div>
                <div className="contact-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={updateField}
                    required
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? (
                    <span className="contact-field-error">{errors.email}</span>
                  ) : null}
                </div>
                <div className="contact-field">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={updateField}
                    required
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone ? (
                    <span className="contact-field-error">{errors.phone}</span>
                  ) : null}
                </div>
                <input
                  type="text"
                  name="service"
                  placeholder="Service needed"
                  value={formData.service}
                  onChange={updateField}
                />
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Tell us about your requirement"
                  value={formData.message}
                  onChange={updateField}
                />
                <div className="contact-form-note">Name, email, and phone number are mandatory.</div>
                <button type="submit" className="primary-pill" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="map-panel">
              <iframe
                title="MM Computers location"
                src="https://www.google.com/maps?q=10.878667,79.612389&z=17&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
