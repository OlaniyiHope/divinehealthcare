import React, { useState, useEffect } from "react";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    supplement: "",
    bottle: "",
    phone: "",
    address: "",
    request: "",
  });

  const [showModal, setShowModal] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;
  const { fullname, email, supplement, bottle, phone, address, request } =
    formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      supplement: "Select Supplement **",
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.supplement ||
      formData.supplement === "Select Supplement **"
    ) {
      alert("Please select a valid supplement.");
      return;
    }

    if (!formData.bottle || formData.bottle === "Select Number **") {
      alert("Please select a valid number of bottles.");
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/api/divine/post-contact-form`,
        formData
      );

      setShowModal(true); // Show modal after successful submission
    } catch (error) {}
  };

  return (
    <>
      <div id="review_form_wrapper">
        <div id="review_form" className="comment-input">
          <div id="respond" className="comment-respond">
            <span id="reply-title" className="comment-reply-title">
              Place order for Divine Health Supplements
              <small></small>
            </span>
            <form
              onSubmit={handleSubmit}
              id="commentform"
              className="comment-form"
              novalidate
            >
              {/* Form Fields Here */}
              <p className="comment-form-author">
                <label htmlFor="fullname">
                  Full Name&nbsp;
                  <span className="required">*</span>
                </label>
                <div className="comment-field">
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    value={fullname}
                    onChange={handleChange}
                  />
                </div>
              </p>
              <p className="comment-form-email">
                <label htmlFor="email">
                  Email&nbsp;
                  <span className="required">*</span>
                </label>
                <div className="comment-field">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
              </p>
              <p className="comment-form-cookies-consent">
                <input
                  id="wp-comment-cookies-consent"
                  name="wp-comment-cookies-consent"
                  type="checkbox"
                  value="yes"
                />{" "}
                <label htmlFor="wp-comment-cookies-consent">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </p>

              <p className="comment-form-email">
                <label htmlFor="supplement">
                  Select Supplement&nbsp;
                  <span className="required">*</span>
                </label>
                <div className="comment-field">
                  <select
                    className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required form-select"
                    id="supplement"
                    name="supplement"
                    value={supplement}
                    onChange={handleChange}
                  >
                    <option value="Select Subject **">
                      Select Supplement **
                    </option>
                    <option value="Arthritis and Rheumatism">
                      Arthritis and Rheumatism
                    </option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Fibroid/Cyst/fertility-booster">
                      Fibroid/Cyst/fertility-booster
                    </option>
                    <option value="Ulcer">Ulcer</option>
                    <option value="Erectile Dysfunction">
                      Erectile Dysfunction
                    </option>
                    <option value="HIV/Cancer/Hepatitis">
                      HIV/Cancer/Hepatitis
                    </option>
                    <option value="High blood pressure and Stroke">
                      High blood pressure and Stroke
                    </option>
                  </select>
                </div>
              </p>
              <p className="comment-form-email">
                <label htmlFor="bottle">
                  Number of bottles&nbsp;
                  <span className="required">*</span>
                </label>
                <div className="comment-field">
                  <select
                    className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required form-select"
                    id="bottle"
                    name="bottle"
                    value={bottle}
                    onChange={handleChange}
                  >
                    <option value="Select Subject **">Select Number **</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                </div>
              </p>
              <p className="comment-form-email">
                <label htmlFor="phone">
                  Phone Number&nbsp;
                  <span className="required">*</span>
                </label>
                <div className="comment-field">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={handleChange}
                  />
                </div>
              </p>
              <p className="comment-form-email">
                <label htmlFor="address">
                  Address(Delivery location)&nbsp;
                  <span className="required">*</span>
                </label>
                <div className="comment-field">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={address}
                    onChange={handleChange}
                  />
                </div>
              </p>

              <p className="comment-form-email">
                <label htmlFor="request">
                  Any Message&nbsp;
                  <span className="required">*</span>
                </label>
                <div className="comment-field">
                  <textarea
                    cols="40"
                    rows="10"
                    className="wpcf7-form-control wpcf7-textarea"
                    id="request"
                    aria-invalid="false"
                    placeholder="Enter here"
                    name="request"
                    value={request}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </p>

              <div className="form-btn">
                <button
                  type="submit"
                  className="wpcf7-form-control wpcf7-submit has-spinner btn"
                >
                  Make Request
                </button>
              </div>
            </form>{" "}
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div
        className={`modal ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Form Submitted</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <p>Your form has been submitted successfully!</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
