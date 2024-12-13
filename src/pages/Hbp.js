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
const Hbp = () => {
  const whiteSrcSet = `${white} 800w, ${white} 213w, ${white} 726w, ${white} 768w`;
  const blackSrcSet = `${step} 1000w, ${step} 258w, ${step} 879w, ${step} 768w, ${step} 800w`;
  const [activeTab, setActiveTab] = useState("description");
  const [description, setDescription] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  // Fetch the existing fibroid description on component mount
  useEffect(() => {
    const fetchFibroidDescription = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/divine/get-hbp`);
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
                    <h2 class="title">
                      High Blood Pressure(HBP) Also called Hypertension
                    </h2>
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
                    src="wp-content/uploads/2022/09/hbp.jpeg"
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
                      High Blood Pressure(HBP) Also called Hypertension is a
                      silence disease with no symptoms for years
                    </h3>

                    <div class="woocommerce-product-details__short-description">
                      <p>
                        Finally Discovered! A PROVEN Method To Control, Prevent
                        And NORMALIZE YOUR BLOOD PRESSURE and TREAT STROKE
                        Naturally WITHOUT USING DANGEROUS SUBSTANCES … IN 30
                        DAYS OR LESS… Hello There, Are you suffering from High
                        Blood Pressure, Angina, Palpitations, High Cholesterol
                        or Heart Failure?
                      </p>
                    </div>

                    <div class="inner-shop-details-bottom">
                      <div class="posted_in">
                        <b>Category :</b>{" "}
                        <a rel="tag">
                          High Blood Pressure(HBP) Also called Hypertension
                        </a>
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
                        <a className="nav-link">Reviews (2)</a>
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
                            <img
                              decoding="async"
                              src="wp-content/uploads/2022/09/whatsapp.jpeg"
                              alt=""
                              class="main-img"
                              style={{ width: "250px", height: "80px" }}
                            />
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
                                        Full Address&nbsp;
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
                                        Full Address
                                      </label>
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
                                        Request/Order&nbsp;
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
                                        Request/Order
                                      </label>
                                    </p>
                                  </form>{" "}
                                </div>
                              </div>
                            </div>
                            <br></br>
                            <br></br>
                            <p>
                              IF YOU HAVE ANY QUESTIONS OR CLARIFICATIONS BEFORE
                              YOU ORDER, CALL ME ON: 08113201322<br></br>
                              NOTE: Payment is made at the point of delivery.
                              Please do not place an order if you are not ready
                              to pay and receive your product within the next 1
                              or 2 days. Please in case you call and the number
                              is busy, kindly send me a text message and I will
                              reply you. Due to demands, the phone number is
                              always very busy.( smaller text)
                            </p>
                          </div>
                        </div>
                      )}
                      {/*}  {activeTab === "description" && (
                        <div
                          class="tp-content-tab woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                          id="tab-description"
                          role="tabpanel"
                          aria-labelledby="tab-title-description"
                        >
                          <h2>Description</h2>

                          <div class="product-desc-content">
                            <h4 class="title">
                              Natural Answer to High Blood Pressure!
                            </h4>
                            <p>
                              Finally Discovered! A PROVEN Method To Control,
                              Prevent And NORMALIZE YOUR BLOOD PRESSURE and
                              TREAT STROKE Naturally WITHOUT USING DANGEROUS
                              SUBSTANCES … IN 30 DAYS OR LESS… Hello There, Are
                              you suffering from High Blood Pressure, Angina,
                              Palpitations, High Cholesterol or Heart Failure?
                            </p>
                            <img
                              decoding="async"
                              src="wp-content/uploads/2022/09/hbp.jpeg"
                              alt=""
                              style={{ width: "500px", height: "300px" }}
                              class="main-img"
                            />
                            <br></br>
                            <br></br>
                            <p>
                              Are you struggling with any of these BP-related
                              symptoms?
                            </p>

                            <br></br>

                            <ul class="product-desc-list list-wrap">
                              <li>Headaches</li>
                              <li> Shortness of breath</li>
                              <li> Dizziness or lightheadedness</li>
                              <li> Chest pain or tightness</li>
                              <li> Fatigue or weakness</li>
                              <li> Irregular heartbeat</li>
                              <li>Vision problems</li>
                              <li>
                                {" "}
                                Nosebleeds Or any other cardiovascular-related
                                symptoms?
                              </li>
                            </ul>
                            <br></br>
                            <p>Then you’ve come to the right place!</p>
                            <img
                              decoding="async"
                              src="wp-content/uploads/2022/09/older.jpg"
                              alt=""
                              style={{ width: "500px", height: "300px" }}
                              class="main-img"
                            />
                            <br></br>
                            <p>
                              As You are about to find out how to be FREE from
                              high blood pressure FOREVER! Join the number of
                              aged citizens enjoying their life using 100%
                              Natural solutions without battling hypertension
                              and stroke. High blood pressure is often referred
                              to as the "silent killer," because you feel fine,
                              until suddenly you don't. And this issue is
                              widespread, impacting an estimated 1 in 3 adults.
                              Few people know the direct relationship between
                              stroke and high blood pressure, If you’ve ever had
                              a stroke, you very likely also had high blood
                              pressure. Your doctor may call it hypertension.
                              There are two main types of strokes (Blocked blood
                              flow and bleeding around the brain). Little do
                              people know that untreated high blood pressure
                              makes it more likely to have a stroke
                            </p>
                            <h4>
                              AVOID GETTING THAT STROKE, CONTROL YOUR BLOOD
                              PRESSURE
                            </h4>

                            <img
                              decoding="async"
                              src="wp-content/uploads/2022/09/hbp.jpeg"
                              alt=""
                              style={{ width: "500px", height: "300px" }}
                              class="main-img"
                            />
                            <br></br>
                            <p>
                              When Is Blood Pressure Too High? If your blood
                              pressure is around 135/80 and above, you have
                              hypertension. Your numbers naturally rise and fall
                              depending on what you’re doing and how stressed
                              you are throughout the day. You should check it
                              regularly.
                            </p>
                            <p>
                              First, Understand What causes High Blood Pressure
                              <br></br>
                              Genetics
                              <br></br> Sometimes, it runs in families. If your
                              parents or close relatives have high blood
                              pressure, you might be more likely to have it too.
                              <br></br> Aging
                              <br></br> As people get older, their blood vessels
                              can get less flexible, which can lead to higher
                              blood pressure.
                              <br></br> Certain Health Conditions
                              <br></br> Things like kidney problems, thyroid
                              issues, or sleep apnea can affect blood pressure.
                              <br></br> Unhealthy Lifestyle
                              <br></br> Eating too much salty or fatty food, not
                              getting enough exercise, and being overweight can
                              make your blood pressure go up.
                              <br></br> Stress
                              <br></br> When you are really stressed a lot, it
                              can make your blood pressure rise.
                            </p>
                            <h4 class="title">
                              Here are some dangers of prolonged high blood
                              pressure
                            </h4>
                            <ul>
                              <li>
                                Heart Problems
                                <p>
                                  High blood pressure makes your heart work
                                  harder, which can lead to heart disease, heart
                                  attack, or heart failure.
                                </p>
                              </li>
                              <li>
                                Stroke
                                <p>
                                  It can damage blood vessels in the brain,
                                  increasing the risk of a stroke.
                                </p>
                              </li>
                              <li>
                                Kidney Damage
                                <p>
                                  High blood pressure can harm the kidneys,
                                  affecting their ability to filter waste from
                                  the blood
                                </p>
                              </li>
                              <li>
                                Aneurysms
                                <p>
                                  High blood pressure can cause weakened areas
                                  in blood vessel walls, potentially leading to
                                  dangerous bulges called aneurysms.
                                </p>
                              </li>
                            </ul>
                            <p>
                              High Blood pressure and Stroke is treatable
                              <br></br>
                              If You Have suffered a Stroke you might have one
                              of the following issues;
                            </p>
                            <ul>
                              <li> Paralysis</li>
                              <li>
                                {" "}
                                Impaired sensory organs e.g eyesight, hearing,
                                taste e.t.c
                              </li>
                              <li> Erectile dysfunction</li>
                              <li> General weakness and lack of Strength</li>
                            </ul>
                            <h4 class="title">
                              DISCOVERY OF A HERBAL SOLUTION THAT CURES ALL
                              TYPES OF HBP WITH NO SIDE EFFECTS
                            </h4>
                            <h6>
                              {" "}
                              Introducing The Best Ever High Blood Pressure
                              Ultimate Natural Solution!
                            </h6>
                            <img
                              decoding="async"
                              src="wp-content/uploads/2022/09/p1.jpeg"
                              alt=""
                              style={{ width: "500px", height: "500px" }}
                            />

                            <p>
                              They are Fully approved by NAFDAC and FDA On top
                              of that, The Nigerian Medical Association (NMA)
                              has endorsed and partnered with the company behind
                              these products as a result of the effectiveness.
                            </p>
                            <h4 class="title">
                              Few Reasons you need to consider this “Natural
                              Remedy For HIGH BLOOD PRESSURE and STROKE
                              treatment Pack”
                            </h4>

                            <ul class="product-desc-list list-wrap">
                              <li>
                                This all-natural therapy does not have any side
                                effect unlike the synthetic substances you are
                                used to.
                              </li>
                              <li>
                                They offer effective and guaranteed solution.
                              </li>
                              <li>
                                {" "}
                                The company behind these products are
                                internationally recognized and well known-
                                Forever Living Products
                              </li>
                              <li> The products work…Guaranteed</li>
                              <li>They are NAFDAC Approved And Certified</li>
                            </ul>
                            <br></br>
                            <p>
                              Elixir products are a proven remedy to Control and
                              normalize your BLOOD PRESSURE AND treat STROKE
                              NATURALLY. The Products we advertise are 100% from
                              organic sources and not chemicals, that is why we
                              all them Natural cure.
                            </p>

                            <p>
                              Free Delivery all over NIGERIA Included is our
                              free DIETRY APPROACH TO STOP HYPERTENSION (DASH),
                              which is a low sodium meal plan that eliminate all
                              cardiovascular diseases and bad cholesterol.
                            </p>
                            <p>
                              WHEN YOU BUY OUR PRODUCT WE INCLUDE A FREE
                              EXERCISE VIDEO FOR STROKE PATIENTS TO RESTORE
                              MOBILITY TO HANDS AND LEGS PLUS DIET PLAN FOR
                              REGULATING HBP
                            </p>
                            <h4 class="title">HOW TO GET THE SUPPLEMENTS</h4>
                            <p>
                              I know you may be wondering if you will pay first
                              before you get this product. NO! You don't have to
                              pay first. Once you place your order the items
                              would be sent to your state and once it gets to
                              your state our courier agent would contact
                              you,deliver the products to you at your provided
                              address at no extra cost. So, once our delivery
                              agent brings it to you, You would receive your
                              products and pay at the point of delivery.
                              <br></br>
                              <br></br>
                              <h6>HOW TO PLACE YOUR ORDER</h6>
                              <br></br>
                              There are three ways to make your order so you
                              choose the most convenient;<br></br>
                            </p>
                            <p>
                              {" "}
                              1. You can click this Whatsapp Logo to Chat with
                              Pharmacst Mary
                            </p>
                            <img
                              decoding="async"
                              src="wp-content/uploads/2022/09/whatsapp.jpeg"
                              alt=""
                              class="main-img"
                              style={{ width: "250px", height: "80px" }}
                            />
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
                                        Full Address&nbsp;
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
                                        Full Address
                                      </label>
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
                                        Request/Order&nbsp;
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
                                        Request/Order
                                      </label>
                                    </p>
                                  </form>{" "}
                                </div>
                              </div>
                            </div>
                            <br></br>
                            <br></br>
                            <p>
                              IF YOU HAVE ANY QUESTIONS OR CLARIFICATIONS BEFORE
                              YOU ORDER, CALL ME ON: 08113201322<br></br>
                              NOTE: Payment is made at the point of delivery.
                              Please do not place an order if you are not ready
                              to pay and receive your product within the next 1
                              or 2 days. Please in case you call and the number
                              is busy, kindly send me a text message and I will
                              reply you. Due to demands, the phone number is
                              always very busy.( smaller text)
                            </p>
                          </div>
                        </div>
                      )}*/}
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
                                2 review for <span>HBP</span>{" "}
                              </h2>
                              <br></br>
                              <img
                                decoding="async"
                                src="wp-content/uploads/2022/09/st1.jpeg"
                                alt=""
                                style={{ width: "400px", height: "600px" }}
                              />
                              <img
                                decoding="async"
                                src="wp-content/uploads/2022/09/st2.jpeg"
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
                                Heere are the packages available and cost
                              </h2>
                              <br></br>
                              <h6>1 REPAIR + 1 PROCARE 37,000 Naira</h6>
                              <img
                                decoding="async"
                                src="wp-content/uploads/2022/09/p1.jpeg"
                                alt=""
                                style={{ width: "500px", height: "500px" }}
                              />
                              <h6>2 PROCARE 1 REPAIR 47,000 naira</h6>
                              <img
                                decoding="async"
                                src="wp-content/uploads/2022/09/p2.jpeg"
                                alt=""
                                style={{ width: "500px", height: "500px" }}
                              />
                              <br></br>

                              <p>The full packages come with guarantee</p>
                              <p>
                                The Number Of bottles Depends On The Severity Of
                                The Condition<br></br>
                                NOTE: The duration of treatment you are to use
                                depends on the level of severity of your High
                                blood pressure<br></br>
                                This Is Permanent Treatment That Clears The
                                Viral Load So You Will Be Free From Sickness And
                                Live A Normal Long Healthy Life<br></br>
                                This treatment is for those that think it is
                                finished after they discovered they have High
                                blood pressure. don't lose hope.<br></br>
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

export default Hbp;
