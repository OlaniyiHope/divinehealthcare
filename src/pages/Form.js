import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Form = () => {
  return (
    <>
      <div id="review_form_wrapper">
        <div id="review_form" class="comment-input">
          <div id="respond" class="comment-respond">
            <span id="reply-title" class="comment-reply-title">
              Place order for DIvine Health Supplements
              <small></small>
            </span>
            <form
              action="https://themegenix.net/wp/suxnix/wp-comments-post.php"
              method="post"
              id="commentform"
              class="comment-form"
              novalidate
            >
              <p class="comment-form-author">
                <label for="author">
                  Full Name&nbsp;
                  <span class="required">*</span>
                </label>
                <div class="comment-field">
                  <input
                    id="author"
                    name="author"
                    type="text"
                    size="30"
                    required
                  />
                </div>
              </p>
              <p class="comment-form-email">
                <label for="email">
                  Email&nbsp;
                  <span class="required">*</span>
                </label>
                <div class="comment-field">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    size="30"
                    required
                  />
                </div>
              </p>
              <p class="comment-form-cookies-consent">
                <input
                  id="wp-comment-cookies-consent"
                  name="wp-comment-cookies-consent"
                  type="checkbox"
                  value="yes"
                />{" "}
                <label for="wp-comment-cookies-consent">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </p>

              <p class="comment-form-email">
                <label for="email">
                  Select Supplement&nbsp;
                  <span class="required">*</span>
                </label>
                <div class="comment-field">
                  <span
                    class="wpcf7-form-control-wrap"
                    data-name="your-subject"
                  >
                    <select
                      class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required form-select"
                      aria-required="true"
                      aria-invalid="false"
                      name="your-subject"
                    >
                      <option value="Select Subject **" disabled>
                        Select Supplement **
                      </option>
                      <option value="Delivery &amp; Orders">
                        Arthritis and Rheumatism
                      </option>
                      <option value="Delivery &amp; Orders">Diabetes</option>
                      <option value="Diet &amp; Exercise">
                        Fibroid/Cyst/fertility-booster
                      </option>
                      <option value="Marketing &amp; Press">Ulcer</option>
                      <option value="Marketing &amp; Press">
                        Erectile Dysfunction
                      </option>
                      <option value="Share Your Success">
                        HIV/Cancer/Hepatitis
                      </option>
                      <option value="Wholesale And Returns">
                        High blood pressure and Stroke
                      </option>
                    </select>
                  </span>
                </div>
              </p>
              <p class="comment-form-email">
                <label for="email">
                  Number of bottles&nbsp;
                  <span class="required">*</span>
                </label>
                <div class="comment-field">
                  <span
                    class="wpcf7-form-control-wrap"
                    data-name="your-subject"
                  >
                    <select
                      class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required form-select"
                      aria-required="true"
                      aria-invalid="false"
                      name="your-subject"
                    >
                      <option value="Select Subject **" disabled>
                        Select Number **
                      </option>
                      <option value="Delivery &amp; Orders">1</option>
                      <option value="Delivery &amp; Orders">2</option>
                      <option value="Diet &amp; Exercise">3</option>
                      <option value="Marketing &amp; Press">4</option>
                      <option value="Marketing &amp; Press">5</option>
                      <option value="Share Your Success">6</option>
                      <option value="Wholesale And Returns">7</option>
                    </select>
                  </span>
                </div>
              </p>
              <p class="comment-form-email">
                <label for="email">
                  Phone Number&nbsp;
                  <span class="required">*</span>
                </label>
                <div class="comment-field">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    size="30"
                    required
                  />
                </div>
              </p>
              <p class="comment-form-email">
                <label for="email">
                  Address(Delivery location)&nbsp;
                  <span class="required">*</span>
                </label>
                <div class="comment-field">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    size="30"
                    required
                  />
                </div>
              </p>

              <p class="comment-form-cookies-consent">
                <input
                  id="wp-comment-cookies-consent"
                  name="wp-comment-cookies-consent"
                  type="checkbox"
                  value="yes"
                />{" "}
                <label for="wp-comment-cookies-consent">Phone NUmber</label>
              </p>
              <p class="comment-form-email">
                <label for="email">
                  Any Message&nbsp;
                  <span class="required">*</span>
                </label>
                <div class="comment-field">
                  <textarea
                    cols="40"
                    rows="10"
                    class="wpcf7-form-control wpcf7-textarea"
                    id="message"
                    aria-invalid="false"
                    placeholder="Enter here"
                    name="your-message"
                  ></textarea>
                </div>
              </p>

              <p class="comment-form-cookies-consent">
                <input
                  id="wp-comment-cookies-consent"
                  name="wp-comment-cookies-consent"
                  type="checkbox"
                  value="yes"
                />{" "}
                <label for="wp-comment-cookies-consent">Request/Order</label>
              </p>
              <div class="form-btn">
                <input
                  class="wpcf7-form-control wpcf7-submit has-spinner btn"
                  type="submit"
                  value="make request"
                />
              </div>
            </form>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
