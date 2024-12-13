import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import white from "./home.png";
import young from "./woman.jpg";
import old from "./shop2.jpg";
import Navbar from "../components/Navbar";
import step from "./quicks.png";
import oil from "./safe.png";
import hiab from "./ran.png";
import "./home.css";
import Footer from "../components/Footer";
const Fibroid = () => {
  const whiteSrcSet = `${white} 800w, ${white} 213w, ${white} 726w, ${white} 768w`;
  const blackSrcSet = `${step} 1000w, ${step} 258w, ${step} 879w, ${step} 768w, ${step} 800w`;
  const [activeTab, setActiveTab] = useState("description");
  const [description, setDescription] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  // Fetch the existing fibroid description on component mount
  useEffect(() => {
    const fetchFibroidDescription = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/divine/get-fibroid`);
        const data = await response.json();

        // Check if description exists and set it
        if (data.description) {
          setDescription(data.description);
        }
      } catch (error) {
        console.error("Error fetching fibroid description:", error);
      }
    };

    fetchFibroidDescription();
  }, [apiUrl]); // Make sure apiUrl is correctly set

  return (
    <>
      <a
        class="header-whatsapp"
        href="https://wa.me/2348113201322"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          class="whatsapp-icon svg-primary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.978 0-7.51 6.11-13.62 13.62-13.62 7.51 0 13.62 6.11 13.62 13.62s-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.316-0.117-0.547-0.174-0.776 0.174s-0.892 1.123-1.094 1.347c-0.201 0.224-0.402 0.251-0.748 0.076-0.346-0.174-1.461-0.539-2.785-1.722-1.031-0.922-1.727-2.061-1.929-2.407-0.201-0.346-0.022-0.533 0.152-0.707 0.156-0.155 0.346-0.402 0.518-0.603 0.174-0.201 0.231-0.346 0.346-0.571 0.117-0.224 0.058-0.427-0.028-0.603s-0.776-1.87-1.063-2.565c-0.28-0.672-0.56-0.58-0.776-0.591-0.2-0.008-0.428-0.010-0.656-0.010s-0.603 0.085-0.92 0.427c-0.316 0.346-1.206 1.179-1.206 2.873s1.235 3.333 1.406 3.561c0.174 0.224 2.425 3.732 5.872 5.234 0.821 0.354 1.462 0.566 1.962 0.724 0.825 0.262 1.577 0.225 2.168 0.137 0.662-0.099 2.049-0.835 2.335-1.642 0.288-0.807 0.288-1.501 0.201-1.642-0.086-0.14-0.316-0.224-0.662-0.398z"></path>
        </svg>
      </a>
      <body class="home page-template page-template-elementor_header_footer page page-id-65 wp-embed-responsive theme-suxnix woocommerce-no-js tinvwl-theme-style no-sidebar elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-65">
        <main class="main-area fix">
          <section
            class="breadcrumb-area breadcrumb-bg "
            data-background="wp-content/uploads/2022/09/REALDIVINE3.png"
          >
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-xl-10">
                  <div class="breadcrumb-content text-center">
                    <h2 class="title">FIbroid - Shrink and Melt Fibroid</h2>
                    <nav aria-label="breadcrumb" class="breadcrumb">
                      <span property="itemListElement" typeof="ListItem">
                        <a
                          property="item"
                          typeof="WebPage"
                          title="Go to Suxnix."
                          href="/"
                          class="home"
                        >
                          <span property="name">Home</span>
                        </a>
                      </span>
                      <span class="breadcrumb-separator">
                        <i class="fas fa-angle-right"></i>
                      </span>
                      <span property="itemListElement" typeof="ListItem">
                        <a
                          property="item"
                          typeof="WebPage"
                          title="Go to Products."
                          href="../../shop/index.html"
                          class="archive post-product-archive"
                        >
                          <span property="name">Category</span>
                        </a>
                      </span>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div class="video-shape one">
              <img
                src="wp-content/themes/suxnix/assets/img/others/video_shape01.png"
                alt="shape"
              />
            </div>
            <div class="video-shape two">
              <img
                src="wp-content/themes/suxnix/assets/img/others/video_shape02.png"
                alt="shape"
              />
            </div>
          </section>

          <div class="inner-shop-area">
            <div class="container">
              <div class="woocommerce-notices-wrapper"></div>
              <div
                id="product-83"
                class="row product type-product post-83 status-publish first instock product_cat-nutrition product_tag-food product_tag-organic product_tag-training has-post-thumbnail shipping-taxable purchasable product-type-simple"
              >
                <div class="col-lg-6">
                  <img
                    decoding="async"
                    src="wp-content/uploads/2022/09/fibroid.jpg"
                    alt=""
                    class="main-img"
                  />
                </div>

                <div class="col-lg-6">
                  <div class="summary entry-summary inner-shop-details-content">
                    <div
                      class="details-rating shop-single-rating"
                      title="20 Customers Review"
                    >
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <span class="rating-count">( 2 Customers Review )</span>
                    </div>
                    <h3 class="product_title title entry-title">
                      FIbroid - Shrink and Melt Fibroid
                    </h3>

                    <div class="woocommerce-product-details__short-description">
                      <p>
                        If you are really serious of getting rid of Fibroids And
                        Infertility just in a Natural and Safe way within a
                        short period of time then, this is the most important
                        report you would ever read on Fibroid Healthy Solution!
                        Are you looking for a permanent solution to your Fibroid
                        problem that have denied you of giving birth or have
                        caused you several pains and shame? Welcome to the world
                        of Women!
                      </p>
                    </div>

                    <div class="inner-shop-details-bottom">
                      <div class="posted_in">
                        <b>Category :</b>{" "}
                        <a rel="tag">FIbroid - Shrink and Melt Fibroid</a>
                      </div>
                      {/*} <div class="tagged_as">
                        <b>Tags : </b>
                        <a href="../../product-tag/food/index.html" rel="tag">
                          Food
                        </a>
                        ,{" "}
                        <a
                          href="../../product-tag/organic/index.html"
                          rel="tag"
                        >
                          Organic
                        </a>
                        ,{" "}
                        <a
                          href="../../product-tag/training/index.html"
                          rel="tag"
                        >
                          Training
                        </a>
                      </div>*/}
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <div class="woocommerce-tabs wc-tabs-wrapper product-desc-wrap">
                    <ul
                      className="tabs wc-tabs nav list-wrap nav-tabs"
                      role="tablist"
                    >
                      <li
                        className={`description_tab nav-item ${
                          activeTab === "description" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("description")}
                        role="tab"
                        aria-controls="tab-description"
                      >
                        <a className="nav-link">Description</a>
                      </li>
                      <li
                        className={`reviews_tab nav-item ${
                          activeTab === "reviews" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("reviews")}
                        role="tab"
                        aria-controls="tab-reviews"
                      >
                        <a className="nav-link">Reviews (3)</a>
                      </li>
                      <li
                        className={`reviews_tab nav-item ${
                          activeTab === "package" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("package")}
                        role="tab"
                        aria-controls="tab-package"
                      >
                        <a className="nav-link">Packages</a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      {activeTab === "description" && (
                        <div
                          class="tp-content-tab woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                          id="tab-description"
                          role="tabpanel"
                          aria-labelledby="tab-title-description"
                        >
                          <h2>Description</h2>
                          <div class="product-desc-content">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: description || "Loading description...",
                              }}
                            ></div>
                            <a
                              href="https://wa.me/+2348113201322"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                decoding="async"
                                src="wp-content/uploads/2022/09/whatsapp.jpeg"
                                alt="WhatsApp"
                                class="main-img"
                                style={{ width: "250px", height: "80px" }}
                              />
                            </a>

                            <img
                              decoding="async"
                              src="wp-content/uploads/2022/09/bar.jpeg"
                              alt=""
                              class="main-img"
                              style={{ width: "250px", height: "250px" }}
                            />
                            <br></br>
                            <br></br>
                            <br></br>
                            <p>
                              {" "}
                              2. OR Call/Text /Send your Address as SMS to
                              08113201322
                            </p>

                            <p> 3. OR Fill our form below</p>

                            <div id="review_form_wrapper">
                              <div id="review_form" class="comment-input">
                                <div id="respond" class="comment-respond">
                                  <span
                                    id="reply-title"
                                    class="comment-reply-title"
                                  >
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
                                          value=""
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
                                          value=""
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
                                        Save my name, email, and website in this
                                        browser for the next time I comment.
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
                                            <option
                                              value="Select Subject **"
                                              disabled
                                            >
                                              Select Supplement **
                                            </option>
                                            <option value="Delivery &amp; Orders">
                                              Arthritis and Rheumatism
                                            </option>
                                            <option value="Delivery &amp; Orders">
                                              Diabetes
                                            </option>
                                            <option value="Diet &amp; Exercise">
                                              Fibroid/Cyst/fertility-booster
                                            </option>
                                            <option value="Marketing &amp; Press">
                                              Ulcer
                                            </option>
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
                                            <option
                                              value="Select Subject **"
                                              disabled
                                            >
                                              Select Number **
                                            </option>
                                            <option value="Delivery &amp; Orders">
                                              1
                                            </option>
                                            <option value="Delivery &amp; Orders">
                                              2
                                            </option>
                                            <option value="Diet &amp; Exercise">
                                              3
                                            </option>
                                            <option value="Marketing &amp; Press">
                                              4
                                            </option>
                                            <option value="Marketing &amp; Press">
                                              5
                                            </option>
                                            <option value="Share Your Success">
                                              6
                                            </option>
                                            <option value="Wholesale And Returns">
                                              7
                                            </option>
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
                                          value=""
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
                                          value=""
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
                                        Phone NUmber
                                      </label>
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
                                      <label for="wp-comment-cookies-consent">
                                        Request/Order
                                      </label>
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
                            <br></br>
                            <br></br>
                            <p style={{ fontWeight: "700" }}>
                              IF YOU HAVE ANY QUESTIONS OR CLARIFICATIONS BEFORE
                              YOU ORDER, CALL ME ON: 08113201322<br></br>
                              NOTE: Payment is made at the point of delivery.
                              Please do not place an order if you are not ready
                              to pay and receive your product within the next 1
                              or 2 days. Please in case you call and the number
                              is busy, kindly send me a text message and I will
                              reply you. Due to demands, the phone number is
                              always very busy.
                            </p>
                          </div>
                        </div>
                      )}
                      {activeTab === "reviews" && (
                        <div
                          class="tp-content-tab woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab"
                          id="tab-reviews"
                          role="tabpanel"
                          aria-labelledby="tab-title-reviews"
                        >
                          <div id="reviews" class="woocommerce-Reviews">
                            <div id="comments">
                              <h2 class="woocommerce-Reviews-title">
                                3 review for <span>Fibroid</span>{" "}
                              </h2>
                              <br></br>
                              <img
                                decoding="async"
                                src="wp-content/uploads/2022/09/sol.jpeg"
                                alt=""
                                style={{ width: "400px", height: "600px" }}
                              />
                              <img
                                decoding="async"
                                src="wp-content/uploads/2022/09/c1.jpeg"
                                alt=""
                                class="main-img"
                                style={{ width: "400px", height: "600px" }}
                              />
                              <img
                                decoding="async"
                                src="wp-content/uploads/2022/09/c2.jpeg"
                                alt=""
                                class="main-img"
                                style={{ width: "400px", height: "600px" }}
                              />
                            </div>

                            <div id="review_form_wrapper">
                              <div id="review_form" class="comment-input">
                                <div id="respond" class="comment-respond">
                                  <span
                                    id="reply-title"
                                    class="comment-reply-title"
                                  >
                                    Add a review{" "}
                                    <small>
                                      <a
                                        rel="nofollow"
                                        id="cancel-comment-reply-link"
                                        href="index.html#respond"
                                        style={{ display: "none" }}
                                      >
                                        Cancel reply
                                      </a>
                                    </small>
                                  </span>
                                  <form
                                    action="https://themegenix.net/wp/suxnix/wp-comments-post.php"
                                    method="post"
                                    id="commentform"
                                    class="comment-form"
                                    novalidate
                                  >
                                    <p class="comment-notes">
                                      <span id="email-notes">
                                        Your email address will not be
                                        published.
                                      </span>{" "}
                                      <span class="required-field-message">
                                        Required fields are marked{" "}
                                        <span class="required">*</span>
                                      </span>
                                    </p>
                                    <p class="comment-form-author">
                                      <label for="author">
                                        Name&nbsp;
                                        <span class="required">*</span>
                                      </label>
                                      <div class="comment-field">
                                        <input
                                          id="author"
                                          name="author"
                                          type="text"
                                          value=""
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
                                          value=""
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
                                        Save my name, email, and website in this
                                        browser for the next time I comment.
                                      </label>
                                    </p>
                                    <div class="comment-form-rating">
                                      <label for="rating">
                                        Your rating&nbsp;
                                        <span class="required">*</span>
                                      </label>
                                      <select
                                        class="d-none"
                                        name="rating"
                                        id="rating"
                                        required
                                      >
                                        <option value="">Rate&hellip;</option>
                                        <option value="5">Perfect</option>
                                        <option value="4">Good</option>
                                        <option value="3">Average</option>
                                        <option value="2">Not that bad</option>
                                        <option value="1">Very poor</option>
                                      </select>
                                    </div>
                                    <p class="comment-form-comment">
                                      <label for="comment">
                                        Your review&nbsp;
                                        <span class="required">*</span>
                                      </label>
                                      <div class="comment-field">
                                        <textarea
                                          id="comment"
                                          name="comment"
                                          cols="45"
                                          rows="8"
                                          required
                                        ></textarea>
                                      </div>
                                    </p>
                                    <p class="form-submit">
                                      <input
                                        name="submit"
                                        type="submit"
                                        id="submit"
                                        class="submit"
                                        value="Submit Review"
                                      />{" "}
                                      <input
                                        type="hidden"
                                        name="comment_post_ID"
                                        value="83"
                                        id="comment_post_ID"
                                      />
                                      <input
                                        type="hidden"
                                        name="comment_parent"
                                        id="comment_parent"
                                        value="0"
                                      />
                                    </p>
                                  </form>{" "}
                                </div>
                              </div>
                            </div>

                            <div class="clear"></div>
                          </div>
                        </div>
                      )}
                      {activeTab === "package" && (
                        <div
                          class="tp-content-tab woocommerce-Tabs-panel woocommerce-Tabs-panel--package panel entry-content wc-tab"
                          id="tab-package"
                          role="tabpanel"
                          aria-labelledby="tab-title-package"
                        >
                          <div id="package" class="woocommerce-package">
                            <div id="comments">
                              <h2 class="woocommerce-Reviews-title">
                                Here are the packages available and cost
                              </h2>
                              <br></br>
                              <h6>1 REPAIR + 1 Tumour free 42,000 Naira</h6>
                              <img
                                decoding="async"
                                src="wp-content/uploads/2022/09/tur.jpeg"
                                alt=""
                                style={{ width: "500px", height: "500px" }}
                              />
                              <h6>
                                3 in 1 pack 1 repair 1 tumour free 1 female care
                                57,000 naira
                              </h6>
                              <img
                                decoding="async"
                                src="wp-content/uploads/2022/09/tur2.jpeg"
                                alt=""
                                style={{ width: "500px", height: "500px" }}
                              />
                              <br></br>
                              <h6>
                                4 in 1 pack 1 repair 2 tumour free 1 female care
                                72,000 naira
                              </h6>
                              <img
                                decoding="async"
                                src="wp-content/uploads/2022/09/tur3.jpeg"
                                alt=""
                                style={{ width: "500px", height: "500px" }}
                              />
                              <br></br>

                              <p>The full packages come with guarantee</p>
                              <p>
                                The Number Of bottles Depends On The Severity Of
                                The Condition<br></br>
                                NOTE: The duration of treatment you are to use
                                depends on the level of severity of your Fibroid
                                <br></br>
                                This Is Permanent Treatment That Clears The
                                Viral Load So You Will Be Free From Sickness And
                                Live A Normal Long Healthy Life<br></br>
                                This treatment is for those that think it is
                                finished after they discovered they have
                                Fibroid. don't lose hope.<br></br>
                                When there’s life there’s hope take this simple
                                step today by getting this treatment and you
                                will have your testimonies very soon.
                              </p>
                            </div>

                            <div class="clear"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/*<div class="related-products-area">
                <div class="related-products-wrap">
                  <h2 class="title">Related products</h2>

                  <div class="row rel-product-slider-active">
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="suxnix-product-main">
                        <div class="home-shop-item inner-shop-item">
                          <div class="home-shop-thumb">
                            <a href="../box-full-of-muscles/index.html">
                              <img
                                width="605"
                                height="580"
                                src="wp-content/uploads/2022/09/shop-details-thumb04.png"
                                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                alt=""
                                decoding="async"
                                loading="lazy"
                                srcset="https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/shop-details-thumb04.png 605w, https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/shop-details-thumb04-300x288.png 300w"
                                sizes="(max-width: 605px) 100vw, 605px"
                              />
                            </a>

                            <div class="on-sale-wrap">
                              <span class="onsale">Sale!</span>
                            </div>
                          </div>

                          <div class="home-shop-content">
                            <div class="shop-item-cat">
                              <a href="../../product-category/nutrition/index.html">
                                Nutrition
                              </a>{" "}
                            </div>
                            <h4 class="title">
                              <a href="../box-full-of-muscles/index.html">
                                Box Full of Muscles
                              </a>
                            </h4>
                            <div class="home-shop-price">
                              <span class="price">
                                <del aria-hidden="true">
                                  <span class="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span class="woocommerce-Price-currencySymbol">
                                        &#36;
                                      </span>
                                      59.99
                                    </bdi>
                                  </span>
                                </del>{" "}
                                <ins>
                                  <span class="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span class="woocommerce-Price-currencySymbol">
                                        &#36;
                                      </span>
                                      39.99
                                    </bdi>
                                  </span>
                                </ins>
                              </span>
                            </div>
                            <div class="home-shop-rating">
                              <div
                                class="details-rating shop-single-rating"
                                title="Rating 0 out of 5"
                              >
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <span class="rating-count">( 0 out of 5 )</span>
                              </div>{" "}
                            </div>
                            <div class="shop-content-bottom">
                              <a
                                href="indexe038.html?add-to-cart=82"
                                data-quantity="1"
                                class="add-cart-btn cart-button icon-btn product_type_simple add_to_cart_button ajax_add_to_cart"
                                data-product_id="82"
                                data-product_sku="QZX8VG-T"
                                aria-label="Add &ldquo;Box Full of Muscles&rdquo; to your cart"
                                rel="nofollow"
                              >
                                <i class="flaticon-shopping-cart-1"></i>
                              </a>{" "}
                              <a
                                href="../../checkout/indexe038.html?add-to-cart=82"
                                class="btn btn-two"
                              >
                                Buy Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tinv-wraper woocommerce tinv-wishlist tinvwl-after-add-to-cart tinvwl-loop-button-wrapper tinvwl-woocommerce_after_shop_loop_item"
                          data-tinvwl_product_id="82"
                        >
                          <div class="tinv-wishlist-clear"></div>
                          <a
                            role="button"
                            tabindex="0"
                            name="add-to-wishlist"
                            aria-label="Add to Wishlist"
                            class="tinvwl_add_to_wishlist_button tinvwl-icon-heart  tinvwl-position-after tinvwl-loop"
                            data-tinv-wl-list="[]"
                            data-tinv-wl-product="82"
                            data-tinv-wl-productvariation="0"
                            data-tinv-wl-productvariations="[]"
                            data-tinv-wl-producttype="simple"
                            data-tinv-wl-action="add"
                          >
                            <span class="tinvwl_add_to_wishlist-text">
                              Add to Wishlist
                            </span>
                          </a>
                          <div class="tinv-wishlist-clear"></div>{" "}
                          <div class="tinvwl-tooltip">Add to Wishlist</div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="suxnix-product-main">
                        <div class="home-shop-item inner-shop-item">
                          <div class="home-shop-thumb">
                            <a href="../protein-powder-2kg/index.html">
                              <img
                                width="605"
                                height="580"
                                src="wp-content/uploads/2022/09/shop-details-thumb01.png"
                                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                alt=""
                                decoding="async"
                                loading="lazy"
                                srcset="https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/shop-details-thumb01.png 605w, https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/shop-details-thumb01-300x288.png 300w"
                                sizes="(max-width: 605px) 100vw, 605px"
                              />
                            </a>

                            <div class="on-sale-wrap"></div>
                          </div>

                          <div class="home-shop-content">
                            <div class="shop-item-cat">
                              <a href="../../product-category/body-fit/index.html">
                                Body &amp; Fit
                              </a>{" "}
                            </div>
                            <h4 class="title">
                              <a href="../protein-powder-2kg/index.html">
                                Protein Powder 2kg
                              </a>
                            </h4>
                            <div class="home-shop-price">
                              <span class="price">
                                <span class="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    59.99
                                  </bdi>
                                </span>
                              </span>
                            </div>
                            <div class="home-shop-rating">
                              <div
                                class="details-rating shop-single-rating"
                                title="Rating 0 out of 5"
                              >
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <span class="rating-count">( 0 out of 5 )</span>
                              </div>{" "}
                            </div>
                            <div class="shop-content-bottom">
                              <a
                                href="index3c0e.html?add-to-cart=81"
                                data-quantity="1"
                                class="add-cart-btn cart-button icon-btn product_type_simple add_to_cart_button ajax_add_to_cart"
                                data-product_id="81"
                                data-product_sku="QZX8VGA-9"
                                aria-label="Add &ldquo;Protein Powder 2kg&rdquo; to your cart"
                                rel="nofollow"
                              >
                                <i class="flaticon-shopping-cart-1"></i>
                              </a>{" "}
                              <a
                                href="../../checkout/index3c0e.html?add-to-cart=81"
                                class="btn btn-two"
                              >
                                Buy Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tinv-wraper woocommerce tinv-wishlist tinvwl-after-add-to-cart tinvwl-loop-button-wrapper tinvwl-woocommerce_after_shop_loop_item"
                          data-tinvwl_product_id="81"
                        >
                          <div class="tinv-wishlist-clear"></div>
                          <a
                            role="button"
                            tabindex="0"
                            name="add-to-wishlist"
                            aria-label="Add to Wishlist"
                            class="tinvwl_add_to_wishlist_button tinvwl-icon-heart  tinvwl-position-after tinvwl-loop"
                            data-tinv-wl-list="[]"
                            data-tinv-wl-product="81"
                            data-tinv-wl-productvariation="0"
                            data-tinv-wl-productvariations="[]"
                            data-tinv-wl-producttype="simple"
                            data-tinv-wl-action="add"
                          >
                            <span class="tinvwl_add_to_wishlist-text">
                              Add to Wishlist
                            </span>
                          </a>
                          <div class="tinv-wishlist-clear"></div>{" "}
                          <div class="tinvwl-tooltip">Add to Wishlist</div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="suxnix-product-main">
                        <div class="home-shop-item inner-shop-item">
                          <div class="home-shop-thumb">
                            <a href="../body-shaping-foods/index.html">
                              <img
                                width="605"
                                height="580"
                                src="wp-content/uploads/2022/09/shop-details-thumb05.png"
                                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                alt=""
                                decoding="async"
                                loading="lazy"
                                srcset="https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/shop-details-thumb05.png 605w, https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/shop-details-thumb05-300x288.png 300w"
                                sizes="(max-width: 605px) 100vw, 605px"
                              />
                            </a>

                            <div class="on-sale-wrap">
                              <span class="onsale">Sale!</span>
                            </div>
                          </div>

                          <div class="home-shop-content">
                            <div class="shop-item-cat">
                              <a href="../../product-category/nutrition/index.html">
                                Nutrition
                              </a>{" "}
                            </div>
                            <h4 class="title">
                              <a href="../body-shaping-foods/index.html">
                                Body Shaping Foods
                              </a>
                            </h4>
                            <div class="home-shop-price">
                              <span class="price">
                                <del aria-hidden="true">
                                  <span class="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span class="woocommerce-Price-currencySymbol">
                                        &#36;
                                      </span>
                                      49.99
                                    </bdi>
                                  </span>
                                </del>{" "}
                                <ins>
                                  <span class="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span class="woocommerce-Price-currencySymbol">
                                        &#36;
                                      </span>
                                      29.99
                                    </bdi>
                                  </span>
                                </ins>
                              </span>
                            </div>
                            <div class="home-shop-rating">
                              <div
                                class="details-rating shop-single-rating"
                                title="Rating 4.00 out of 5"
                              >
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <span class="rating-count">
                                  ( 4.00 out of 5 )
                                </span>
                              </div>{" "}
                            </div>
                            <div class="shop-content-bottom">
                              <a
                                href="index6b8f.html?add-to-cart=86"
                                data-quantity="1"
                                class="add-cart-btn cart-button icon-btn product_type_simple add_to_cart_button ajax_add_to_cart"
                                data-product_id="86"
                                data-product_sku="QZX8VG-U"
                                aria-label="Add &ldquo;Body Shaping Foods&rdquo; to your cart"
                                rel="nofollow"
                              >
                                <i class="flaticon-shopping-cart-1"></i>
                              </a>{" "}
                              <a
                                href="../../checkout/index6b8f.html?add-to-cart=86"
                                class="btn btn-two"
                              >
                                Buy Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tinv-wraper woocommerce tinv-wishlist tinvwl-after-add-to-cart tinvwl-loop-button-wrapper tinvwl-woocommerce_after_shop_loop_item"
                          data-tinvwl_product_id="86"
                        >
                          <div class="tinv-wishlist-clear"></div>
                          <a
                            role="button"
                            tabindex="0"
                            name="add-to-wishlist"
                            aria-label="Add to Wishlist"
                            class="tinvwl_add_to_wishlist_button tinvwl-icon-heart  tinvwl-position-after tinvwl-loop"
                            data-tinv-wl-list="[]"
                            data-tinv-wl-product="86"
                            data-tinv-wl-productvariation="0"
                            data-tinv-wl-productvariations="[]"
                            data-tinv-wl-producttype="simple"
                            data-tinv-wl-action="add"
                          >
                            <span class="tinvwl_add_to_wishlist-text">
                              Add to Wishlist
                            </span>
                          </a>
                          <div class="tinv-wishlist-clear"></div>{" "}
                          <div class="tinvwl-tooltip">Add to Wishlist</div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-sm-6">
                      <div class="suxnix-product-main">
                        <div class="home-shop-item inner-shop-item">
                          <div class="home-shop-thumb">
                            <a href="../sneaky-supplements/index.html">
                              <img
                                width="605"
                                height="580"
                                src="wp-content/uploads/2022/09/shop-details-thumb08.png"
                                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                alt=""
                                decoding="async"
                                loading="lazy"
                                srcset="https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/shop-details-thumb08.png 605w, https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/shop-details-thumb08-300x288.png 300w"
                                sizes="(max-width: 605px) 100vw, 605px"
                              />
                            </a>

                            <div class="on-sale-wrap"></div>
                          </div>

                          <div class="home-shop-content">
                            <div class="shop-item-cat">
                              <a href="../../product-category/nutrition/index.html">
                                Nutrition
                              </a>{" "}
                            </div>
                            <h4 class="title">
                              <a href="../sneaky-supplements/index.html">
                                Sneaky Supplements
                              </a>
                            </h4>
                            <div class="home-shop-price">
                              <span class="price">
                                <span class="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span class="woocommerce-Price-currencySymbol">
                                      &#36;
                                    </span>
                                    18.99
                                  </bdi>
                                </span>
                              </span>
                            </div>
                            <div class="home-shop-rating">
                              <div
                                class="details-rating shop-single-rating"
                                title="Rating 5.00 out of 5"
                              >
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span class="rating-count">
                                  ( 5.00 out of 5 )
                                </span>
                              </div>{" "}
                            </div>
                            <div class="shop-content-bottom">
                              <a
                                href="index1278.html?add-to-cart=84"
                                data-quantity="1"
                                class="add-cart-btn cart-button icon-btn product_type_simple add_to_cart_button ajax_add_to_cart"
                                data-product_id="84"
                                data-product_sku="QZX8VG-L"
                                aria-label="Add &ldquo;Sneaky Supplements&rdquo; to your cart"
                                rel="nofollow"
                              >
                                <i class="flaticon-shopping-cart-1"></i>
                              </a>{" "}
                              <a
                                href="../../checkout/index1278.html?add-to-cart=84"
                                class="btn btn-two"
                              >
                                Buy Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tinv-wraper woocommerce tinv-wishlist tinvwl-after-add-to-cart tinvwl-loop-button-wrapper tinvwl-woocommerce_after_shop_loop_item"
                          data-tinvwl_product_id="84"
                        >
                          <div class="tinv-wishlist-clear"></div>
                          <a
                            role="button"
                            tabindex="0"
                            name="add-to-wishlist"
                            aria-label="Add to Wishlist"
                            class="tinvwl_add_to_wishlist_button tinvwl-icon-heart  tinvwl-position-after tinvwl-loop"
                            data-tinv-wl-list="[]"
                            data-tinv-wl-product="84"
                            data-tinv-wl-productvariation="0"
                            data-tinv-wl-productvariations="[]"
                            data-tinv-wl-producttype="simple"
                            data-tinv-wl-action="add"
                          >
                            <span class="tinvwl_add_to_wishlist-text">
                              Add to Wishlist
                            </span>
                          </a>
                          <div class="tinv-wishlist-clear"></div>{" "}
                          <div class="tinvwl-tooltip">Add to Wishlist</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </main>

        <Footer />
      </body>
    </>
  );
};

export default Fibroid;
