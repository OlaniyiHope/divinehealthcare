import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import white from "./home.png";
import young from "./woman.jpg";
import old from "./shop2.jpg";
import Navbar from "../components/Navbar";
import step from "./quicks.png";
import oil from "./safe.png";
import hiab from "./ran.png";
import "./whatsapp.css";
import "./home.css";
import Footer from "../components/Footer";
const Home = () => {
  const whiteSrcSet = `${white} 800w, ${white} 213w, ${white} 726w, ${white} 768w`;
  const blackSrcSet = `${step} 1000w, ${step} 258w, ${step} 879w, ${step} 768w, ${step} 800w`;

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
          <div
            data-elementor-type="wp-page"
            data-elementor-id="65"
            class="elementor elementor-65"
          >
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-c80e885 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="c80e885"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-no">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e6bd24c"
                  data-id="e6bd24c"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-9f87d03 elementor-widget elementor-widget-hero-banner"
                      data-id="9f87d03"
                      data-element_type="widget"
                      data-widget_type="hero-banner.default"
                    >
                      <div class="elementor-widget-container">
                        <section class="banner-area">
                          <div class="container">
                            <div class="row justify-content-center">
                              <div class="col-xxl-8 col-xl-7 col-lg-8 col-md-10">
                                <div class="banner-content text-center ">
                                  <p class="banner-caption">
                                    Natural solution for wellness essentials
                                  </p>

                                  <h2 class="title">
                                    Elevate your well-being : the latest health
                                    news and trends
                                  </h2>

                                  <a
                                    href="/shop"
                                    target="_self"
                                    rel="nofollow"
                                    class="btn btn-two"
                                  >
                                    Shop Now{" "}
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-12">
                                <div class="banner-images text-center">
                                  <img
                                    decoding="async"
                                    src="wp-content/uploads/2022/09/group10.png"
                                    alt=""
                                    class="main-img"
                                  />
                                  <img
                                    decoding="async"
                                    src="wp-content/uploads/2022/09/banner_round_bg.png"
                                    alt=""
                                    class="bg-shape"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="banner-shape one">
                            <img
                              decoding="async"
                              src="wp-content/uploads/2022/09/banner_shape01.png"
                              alt=""
                              class="wow bannerFadeInLeft"
                              data-wow-delay=".2s"
                              data-wow-duration="2s"
                            />
                          </div>
                          <div class="banner-shape two">
                            <img
                              decoding="async"
                              src="wp-content/uploads/2022/09/banner_shape02.png"
                              alt=""
                              class="wow bannerFadeInRight"
                              data-wow-delay=".2s"
                              data-wow-duration="2s"
                            />
                          </div>
                          <div class="banner-shape three">
                            <img
                              decoding="async"
                              src="wp-content/uploads/2022/09/banner_shape03.png"
                              alt=""
                              class="wow bannerFadeInDown"
                              data-wow-delay=".2s"
                              data-wow-duration="2s"
                            />
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-c3ee463 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="c3ee463"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-no">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fc5ad54"
                  data-id="fc5ad54"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-fef10f2 elementor-widget elementor-widget-brand"
                      data-id="fef10f2"
                      data-element_type="widget"
                      data-widget_type="brand.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="brand-area">
                          <div class="container">
                            <div class="row">
                              <div class="col-12">
                                <div class="brand-title text-center mb-50">
                                  <div class="row">
                                    <div class="col-12">
                                      <h2 class="title">
                                        Treatment for all kind of illness
                                      </h2>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row brand-active">
                              <div class="col-2">
                                <div class="brand-item">
                                  <a
                                    href="/product/diabetes"
                                    style={{
                                      color: "black",
                                      fontSize: "25px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    Diabetes
                                  </a>
                                </div>
                              </div>
                              <div class="col-2">
                                <div class="brand-item">
                                  <a
                                    href="/product/arthritis-and-rheumatism"
                                    style={{
                                      color: "black",
                                      fontSize: "25px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    Arthritis
                                  </a>
                                </div>
                              </div>
                              <div class="col-2">
                                <div class="brand-item">
                                  <a
                                    href="/product/ulcer"
                                    style={{
                                      color: "black",
                                      fontSize: "25px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    Ulcer
                                  </a>
                                </div>
                              </div>
                              <div class="col-2">
                                <div class="brand-item">
                                  <a
                                    href="/product/hiv-cancer-hepatitis"
                                    style={{
                                      color: "black",
                                      fontSize: "25px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    HIV/Cancer
                                  </a>
                                </div>
                              </div>
                              <div class="col-2">
                                <div class="brand-item">
                                  <a
                                    href="/product/fibroid"
                                    style={{
                                      color: "black",
                                      fontSize: "25px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    Fibroid
                                  </a>
                                </div>
                              </div>
                              <div class="col-2">
                                <div class="brand-item">
                                  <a
                                    href="/product/hbp-and-stroke"
                                    style={{
                                      color: "black",
                                      fontSize: "25px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    HBP & Stroke
                                  </a>
                                </div>
                              </div>
                              <div class="col-2">
                                <div class="brand-item">
                                  <a
                                    href="/product/erectile-dysfunction"
                                    style={{
                                      color: "black",
                                      fontSize: "25px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    Erectile Dysfunction
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-803f652 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="803f652"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-no">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-817384f"
                  data-id="817384f"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-d4a38ae elementor-widget elementor-widget-features"
                      data-id="d4a38ae"
                      data-element_type="widget"
                      data-widget_type="features.default"
                    >
                      <div class="elementor-widget-container">
                        <section
                          id="features"
                          class="features-area features-bg"
                          data-background="https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/features_bg.jpg"
                        >
                          <div class="container">
                            <div class="row align-items-center">
                              <div class="col-xxl-6 col-lg-5 order-0 order-lg-2">
                                <div
                                  class="features-img wow featuresRollOut"
                                  data-wow-delay="s"
                                >
                                  <img
                                    decoding="async"
                                    // src="wp-content/uploads/2022/09/group10.png"
                                    src="wp-content/uploads/2022/09/repair.png"
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div class="col-xxl-6 col-lg-7">
                                <div class="features-items-wrap">
                                  <div class="row justify-content-center">
                                    <div class="col-md-6 col-sm-8">
                                      <div class="features-item">
                                        <div class="features-icon">
                                          <i
                                            aria-hidden="true"
                                            class="tp flaticon-tape-measure"
                                          ></i>{" "}
                                        </div>
                                        <div class="features-content">
                                          <h4
                                            class="title"
                                            style={{ color: "white" }}
                                          >
                                            Health Benefits
                                          </h4>

                                          <ul>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Powerful blend of natural herbs
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Supports overall health and
                                              wellness
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Detoxifies and purifies the body
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Boost immune function
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Promote healthy blood pressure
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-6 col-sm-8">
                                      <div class="features-item">
                                        <div class="features-icon">
                                          <i
                                            aria-hidden="true"
                                            class="tp flaticon-tape-measure"
                                          ></i>{" "}
                                        </div>
                                        <div class="features-content">
                                          <h4
                                            class="title"
                                            style={{ color: "white" }}
                                          >
                                            More benefits
                                          </h4>
                                          <ul>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Reverses signs of aging
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Enhances energy levels
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Improves skin quality
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Aids in digestion
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Helps manage chronic conditions
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-54ab94f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="54ab94f"
              data-element_type="section"
              id="ingredient"
            >
              <div class="elementor-container elementor-column-gap-no">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3b2ad98"
                  data-id="3b2ad98"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-11b4b55 elementor-widget elementor-widget-ingredient"
                      data-id="11b4b55"
                      data-element_type="widget"
                      data-widget_type="ingredient.default"
                    >
                      <div class="elementor-widget-container">
                        <section class="ingredients-area">
                          <div class="container">
                            <div class="row align-items-center justify-content-center">
                              <div class="col-xl-5 col-lg-6 col-md-7">
                                <div class="ingredients-img yoo">
                                  <img
                                    decoding="async"
                                    src="wp-content/uploads/2022/09/product5.png"
                                    alt=""
                                  />
                                  <img
                                    decoding="async"
                                    src="wp-content/uploads/2022/09/ingredients_shape.png"
                                    alt=""
                                    class="shape"
                                  />
                                </div>
                              </div>

                              <div class="col-xl-7 col-lg-9">
                                <div class="ingredients-items-wrap">
                                  <div class="section-title mb-60">
                                    <h2 class="title">Mix Purifier</h2>
                                  </div>

                                  <div class="row justify-content-center justify-content-lg-start">
                                    <div class="col-md-6 col-sm-8">
                                      <div
                                        class="ingredients-item wow fadeInUp"
                                        data-wow-delay=".2s"
                                      >
                                        <div class="ingredients-content">
                                          <h5 class="title">Health Benefit</h5>

                                          <ul>
                                            <li>
                                              {" "}
                                              Tackles urinary tract infection in
                                              men and women
                                            </li>
                                            <li>Handles women discharge</li>
                                            <li>Cares for skin infection</li>
                                            <li>
                                              Boost fertility in men and women
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-6 col-sm-8">
                                      <div
                                        class="ingredients-item wow fadeInUp"
                                        data-wow-delay="0.3s"
                                      >
                                        <div class="ingredients-content">
                                          <h5 class="title">Ingredients</h5>

                                          <ul>
                                            <li>Allium Sativum</li>
                                            <li>Zingiber Officinale</li>
                                            <li>Cymbopogen Citrates</li>
                                            <li>Panax Quinquefolius</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-be24124 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="be24124"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-no">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-faa853f"
                  data-id="faa853f"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-9690b0f elementor-widget elementor-widget-formula"
                      data-id="9690b0f"
                      data-element_type="widget"
                      data-widget_type="formula.default"
                    >
                      <div class="elementor-widget-container">
                        <section
                          class="formula-area formula-bg"
                          data-background="https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/formula_bg.jpg"
                        >
                          <div class="container">
                            <div class="row align-items-center">
                              <div class="col-lg-6 order-0 order-lg-2">
                                <div class="formula-img">
                                  <img
                                    decoding="async"
                                    src="wp-content/uploads/2022/09/female.png"
                                    alt=""
                                  />
                                </div>
                              </div>

                              {/*}  <div class="col-lg-6">
                              <div class="formula-content">
                                <div class="section-title white-title mb-50">
                                  <h2
                                    class="title"
                                    style={{ color: "white" }}
                                  >
                                    Health Benefit
                                  </h2>
                                </div>

                                <ul class="formula-list list-wrap">
                                  <li style={{ color: "white" }}>
                                    Boost blood and immunity
                                  </li>
                                  <li style={{ color: "white" }}>
                                    Good for sickle cell
                                  </li>
                                  <li style={{ color: "white" }}>
                                    Boost fertility for both men and women
                                  </li>
                                  <li style={{ color: "white" }}>
                                    Serves as Anti-oxidant
                                  </li>
                                  <li>Anti-inflammatory</li>
                                  <li style={{ color: "white" }}>
                                    Promote digestion
                                  </li>
                                  <li style={{ color: "white" }}>
                                    Prevent diseases
                                  </li>
                                </ul>

                                <a
                                  href="/contact"
                                  target="_self"
                                  rel="nofollow"
                                  class="btn btn-two"
                                >
                                  Know More{" "}
                                </a>
                              </div>
                            </div>*/}
                              <div class="col-xxl-6 col-lg-6">
                                <div class="features-items-wrap">
                                  <div class="row justify-content-center">
                                    <div class="col-md-6 col-sm-8">
                                      <div class="features-item">
                                        <div class="features-icon">
                                          <i
                                            aria-hidden="true"
                                            class="tp flaticon-tape-measure"
                                          ></i>{" "}
                                        </div>
                                        <div class="features-content">
                                          <h2
                                            class="title"
                                            style={{ color: "white" }}
                                          >
                                            Benefit of Female Care
                                          </h2>

                                          <ul>
                                            <li style={{ color: "white" }}>
                                              Handles subserosal & Submucosal
                                              Fibroid
                                            </li>
                                            <li style={{ color: "white" }}>
                                              Handles intramural Fibroid
                                            </li>
                                            <li style={{ color: "white" }}>
                                              Cervical health challenge
                                            </li>
                                            <li style={{ color: "white" }}>
                                              Stops heavy pain during
                                              menstruation
                                            </li>
                                            <li style={{ color: "white" }}>
                                              Handles lower back pain
                                            </li>
                                            <li style={{ color: "white" }}>
                                              Stops pain during sexual
                                              intercourse
                                            </li>
                                            <li style={{ color: "white" }}>
                                              Enhance female infertility
                                            </li>
                                            <li style={{ color: "white" }}>
                                              Hormonal inbalance rectifier
                                            </li>
                                            <li style={{ color: "white" }}>
                                              Corrects irregular menstruation
                                            </li>
                                            <li style={{ color: "white" }}>
                                              Virgina discharge
                                            </li>
                                            <li style={{ color: "white" }}>
                                              Stop unhealthy breast milk
                                              discharge
                                            </li>
                                            <li style={{ color: "white" }}>
                                              Handles miscarriage cases
                                            </li>
                                            <li style={{ color: "white" }}>
                                              Sized Menstruation
                                            </li>
                                            <li style={{ color: "white" }}>
                                              Eradicate pelvic muscles pain
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-6 col-sm-8">
                                      <div class="features-item">
                                        <div class="features-icon">
                                          <i
                                            aria-hidden="true"
                                            class="tp flaticon-test"
                                          ></i>{" "}
                                        </div>
                                        <div class="features-content">
                                          <h2
                                            class="title"
                                            style={{ color: "white" }}
                                          >
                                            Ingredients
                                          </h2>
                                          <ul>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Citruslimonum
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Hydrasis canadensis
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Natural honey
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Echinacea
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Fennel.Cinnamon
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Chamomile
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Fenugreek
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*} <section
              class="elementor-section elementor-top-section elementor-element elementor-element-105b343 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="105b343"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-no">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c61b202"
                  data-id="c61b202"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-976fda6 elementor-widget elementor-widget-products"
                      data-id="976fda6"
                      data-element_type="widget"
                      data-widget_type="products.default"
                    >
                      <div class="elementor-widget-container">
                        <section class="home-shop-area">
                          <div class="container">
                            <div class="row home-shop-active">
                              <div class="col-xl-3">
                                <div class="home-shop-item">
                                  <div class="home-shop-thumb">
                                    <a href="product/box-full-of-muscles/index.html">
                                      <img
                                        decoding="async"
                                        src="wp-content/uploads/2022/09/home_shop_thumb01.png"
                                        alt="img"
                                      />

                                      <div class="discount">-34%</div>
                                    </a>
                                    <div
                                      class="shop-thumb-shape"
                                      data-bg-color="#A3D86D"
                                    ></div>
                                  </div>
                                  <div class="home-shop-content">
                                    <h4 class="title">
                                      <a href="product/box-full-of-muscles/index.html">
                                        Box Full of Muscles
                                      </a>
                                    </h4>

                                    <span class="home-shop-price price">
                                      <del>
                                        <span class="woocommerce-Price-amount amount">
                                          <span class="woocommerce-Price-currencySymbol">
                                            &#036;
                                          </span>
                                          59.99
                                        </span>
                                      </del>{" "}
                                      <span class="woocommerce-Price-amount amount">
                                        <span class="woocommerce-Price-currencySymbol">
                                          &#036;
                                        </span>
                                        39.99
                                      </span>{" "}
                                    </span>

                                    <div class="home-shop-rating">
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>{" "}
                                      <span class="total-rating">(0)</span>
                                    </div>

                                    <div class="shop-content-bottom">
                                      <a
                                        href="cart/indexe038.html?add-to-cart=82"
                                        class="cart"
                                      >
                                        <i class="flaticon-shopping-cart-1"></i>
                                      </a>

                                      <a
                                        href="product/box-full-of-muscles/index.html"
                                        class="btn btn-two"
                                      >
                                        Buy Now
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xl-3">
                                <div class="home-shop-item">
                                  <div class="home-shop-thumb">
                                    <a href="product/protein-powder-2kg/index.html">
                                      <img
                                        decoding="async"
                                        src="wp-content/uploads/2022/09/home_shop_thumb02.png"
                                        alt="img"
                                      />
                                    </a>
                                    <div
                                      class="shop-thumb-shape"
                                      data-bg-color="#F0DE5A"
                                    ></div>
                                  </div>
                                  <div class="home-shop-content">
                                    <h4 class="title">
                                      <a href="product/protein-powder-2kg/index.html">
                                        Protein Powder 2kg
                                      </a>
                                    </h4>

                                    <span class="home-shop-price price">
                                      <span class="woocommerce-Price-amount amount">
                                        <span class="woocommerce-Price-currencySymbol">
                                          &#036;
                                        </span>
                                        59.99
                                      </span>{" "}
                                    </span>

                                    <div class="home-shop-rating">
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>{" "}
                                      <span class="total-rating">(0)</span>
                                    </div>

                                    <div class="shop-content-bottom">
                                      <a
                                        href="cart/index3c0e.html?add-to-cart=81"
                                        class="cart"
                                      >
                                        <i class="flaticon-shopping-cart-1"></i>
                                      </a>

                                      <a
                                        href="product/protein-powder-2kg/index.html"
                                        class="btn btn-two"
                                      >
                                        Buy Now
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xl-3">
                                <div class="home-shop-item">
                                  <div class="home-shop-thumb">
                                    <a href="product/amino-energy-health-2kg/index.html">
                                      <img
                                        decoding="async"
                                        src="wp-content/uploads/2022/09/home_shop_thumb03.png"
                                        alt="img"
                                      />
                                    </a>
                                    <div
                                      class="shop-thumb-shape"
                                      data-bg-color="#996BAC"
                                    ></div>
                                  </div>
                                  <div class="home-shop-content">
                                    <h4 class="title">
                                      <a href="product/amino-energy-health-2kg/index.html">
                                        Amino Energy Health 2kg
                                      </a>
                                    </h4>

                                    <span class="home-shop-price price">
                                      <span class="woocommerce-Price-amount amount">
                                        <span class="woocommerce-Price-currencySymbol">
                                          &#036;
                                        </span>
                                        19.99
                                      </span>{" "}
                                    </span>

                                    <div class="home-shop-rating">
                                      <div
                                        class="star-rating"
                                        title="Rated 5.00 out of 5"
                                      >
                                        <span style={{ width: "100%" }}>
                                          <strong
                                            itemprop="ratingValue"
                                            class="rating"
                                          >
                                            5.00
                                          </strong>{" "}
                                          out of 5
                                        </span>
                                      </div>{" "}
                                      <span class="total-rating">(1)</span>
                                    </div>

                                    <div class="shop-content-bottom">
                                      <a
                                        href="cart/index15fb.html?add-to-cart=80"
                                        class="cart"
                                      >
                                        <i class="flaticon-shopping-cart-1"></i>
                                      </a>

                                      <a
                                        href="product/amino-energy-health-2kg/index.html"
                                        class="btn btn-two"
                                      >
                                        Buy Now
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xl-3">
                                <div class="home-shop-item">
                                  <div class="home-shop-thumb">
                                    <a href="product/seriour-mass-2kg/index.html">
                                      <img
                                        decoding="async"
                                        src="wp-content/uploads/2022/09/home_shop_thumb05.png"
                                        alt="img"
                                      />
                                    </a>
                                    <div
                                      class="shop-thumb-shape"
                                      data-bg-color="#25A1D0"
                                    ></div>
                                  </div>
                                  <div class="home-shop-content">
                                    <h4 class="title">
                                      <a href="product/seriour-mass-2kg/index.html">
                                        SERIOUR MASS 2kg
                                      </a>
                                    </h4>

                                    <span class="home-shop-price price">
                                      <span class="woocommerce-Price-amount amount">
                                        <span class="woocommerce-Price-currencySymbol">
                                          &#036;
                                        </span>
                                        24.99
                                      </span>{" "}
                                    </span>

                                    <div class="home-shop-rating">
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>{" "}
                                      <span class="total-rating">(0)</span>
                                    </div>

                                    <div class="shop-content-bottom">
                                      <a
                                        href="cart/indexb0be.html?add-to-cart=77"
                                        class="cart"
                                      >
                                        <i class="flaticon-shopping-cart-1"></i>
                                      </a>

                                      <a
                                        href="product/seriour-mass-2kg/index.html"
                                        class="btn btn-two"
                                      >
                                        Buy Now
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xl-3">
                                <div class="home-shop-item">
                                  <div class="home-shop-thumb">
                                    <a href="product/antiaging-and-longevity/index.html">
                                      <img
                                        decoding="async"
                                        src="wp-content/uploads/2022/09/home_shop_thumb04.png"
                                        alt="img"
                                      />

                                      <div class="discount">-51%</div>
                                    </a>
                                    <div
                                      class="shop-thumb-shape"
                                      data-bg-color="#DEDEDD"
                                    ></div>
                                  </div>
                                  <div class="home-shop-content">
                                    <h4 class="title">
                                      <a href="product/antiaging-and-longevity/index.html">
                                        Antiaging and Longevity
                                      </a>
                                    </h4>

                                    <span class="home-shop-price price">
                                      <del>
                                        <span class="woocommerce-Price-amount amount">
                                          <span class="woocommerce-Price-currencySymbol">
                                            &#036;
                                          </span>
                                          39.99
                                        </span>
                                      </del>{" "}
                                      <span class="woocommerce-Price-amount amount">
                                        <span class="woocommerce-Price-currencySymbol">
                                          &#036;
                                        </span>
                                        19.99
                                      </span>{" "}
                                    </span>

                                    <div class="home-shop-rating">
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>{" "}
                                      <span class="total-rating">(0)</span>
                                    </div>

                                    <div class="shop-content-bottom">
                                      <a
                                        href="cart/index70f8.html?add-to-cart=79"
                                        class="cart"
                                      >
                                        <i class="flaticon-shopping-cart-1"></i>
                                      </a>

                                      <a
                                        href="product/antiaging-and-longevity/index.html"
                                        class="btn btn-two"
                                      >
                                        Buy Now
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xl-3">
                                <div class="home-shop-item">
                                  <div class="home-shop-thumb">
                                    <a href="product/whey-protein-powder/index.html">
                                      <img
                                        decoding="async"
                                        src="wp-content/uploads/2022/09/home_shop_thumb06.png"
                                        alt="img"
                                      />
                                    </a>
                                    <div
                                      class="shop-thumb-shape"
                                      data-bg-color="#09AFEC"
                                    ></div>
                                  </div>
                                  <div class="home-shop-content">
                                    <h4 class="title">
                                      <a href="product/whey-protein-powder/index.html">
                                        Whey Protein Powder
                                      </a>
                                    </h4>

                                    <span class="home-shop-price price">
                                      <span class="woocommerce-Price-amount amount">
                                        <span class="woocommerce-Price-currencySymbol">
                                          &#036;
                                        </span>
                                        29.99
                                      </span>{" "}
                                    </span>

                                    <div class="home-shop-rating">
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>
                                      <i class="far fa-star"></i>{" "}
                                      <span class="total-rating">(0)</span>
                                    </div>

                                    <div class="shop-content-bottom">
                                      <a
                                        href="cart/index1950.html?add-to-cart=67"
                                        class="cart"
                                      >
                                        <i class="flaticon-shopping-cart-1"></i>
                                      </a>

                                      <a
                                        href="product/whey-protein-powder/index.html"
                                        class="btn btn-two"
                                      >
                                        Buy Now
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>*/}
            {/*<section
              class="elementor-section elementor-top-section elementor-element elementor-element-696c4cd elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="696c4cd"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-no">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-990ff2e"
                  data-id="990ff2e"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-48f6db8 elementor-widget elementor-widget-tp-video-popup"
                      data-id="48f6db8"
                      data-element_type="widget"
                      data-widget_type="tp-video-popup.default"
                    >
                      <div class="elementor-widget-container">
                        <div
                          class="video-area video-bg"
                          data-background="https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/video_bg.jpg"
                        >
                          <div class="video-bg-overlay"></div>
                          <div class="container">
                            <div class="row">
                              <div class="col-12">
                                <div class="video-btn">
                                  <a
                                    href="https://www.youtube.com/watch?v=HQfF5XRVXjU"
                                    class="popup-video ripple-white"
                                  >
                                    <i
                                      aria-hidden="true"
                                      class="fas fa-play"
                                    ></i>{" "}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="video-shape one">
                            <img
                              decoding="async"
                              src="wp-content/uploads/2022/09/video_shape01.png"
                              alt=""
                            />
                          </div>
                          <div class="video-shape two">
                            <img
                              decoding="async"
                              src="wp-content/uploads/2022/09/video_shape02.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>*/}
            {/*} <section
              class="elementor-section elementor-top-section elementor-element elementor-element-c58b431 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="c58b431"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-no">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3e94234"
                  data-id="3e94234"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-e7f7207 elementor-widget elementor-widget-tp-fact"
                      data-id="e7f7207"
                      data-element_type="widget"
                      data-widget_type="tp-fact.default"
                    >
                      <div class="elementor-widget-container">
                        <section class="fact-area">
                          <div class="container">
                            <div class="fact-items-wrapper">
                              <div class="row g-0 justify-content-center">
                                <div class="col-lg-4 col-md-6 col-sm-9">
                                  <div class="fact-item">
                                    <div class="chart" data-percent="65">
                                      <span class="percentage">
                                        65<small>%</small>{" "}
                                      </span>
                                    </div>
                                    <div class="fact-content">
                                      <h4 class="title">Active Members</h4>

                                      <span>Yes we did it asap software</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-9">
                                  <div class="fact-item">
                                    <div class="chart" data-percent="90">
                                      <span class="percentage">
                                        90<small>%</small>{" "}
                                      </span>
                                    </div>
                                    <div class="fact-content">
                                      <h4 class="title">Projects Done</h4>

                                      <span>Yes we did it asap software</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-9">
                                  <div class="fact-item">
                                    <div class="chart" data-percent="80">
                                      <span class="percentage">
                                        80<small>%</small>{" "}
                                      </span>
                                    </div>
                                    <div class="fact-content">
                                      <h4 class="title">Get Rewards</h4>

                                      <span>Yes we did it asap software</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>*/}
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-54ab94f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="54ab94f"
              data-element_type="section"
              id="ingredient"
            >
              <div class="elementor-container elementor-column-gap-no">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3b2ad98"
                  data-id="3b2ad98"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-11b4b55 elementor-widget elementor-widget-ingredient"
                      data-id="11b4b55"
                      data-element_type="widget"
                      data-widget_type="ingredient.default"
                    >
                      <div class="elementor-widget-container">
                        <section class="ingredients-area">
                          <div class="container">
                            <div class="row align-items-center justify-content-center">
                              <div class="col-xl-5 col-lg-6 col-md-7">
                                <div class="ingredients-img yoo">
                                  <img
                                    decoding="async"
                                    src="wp-content/uploads/2022/09/procare.png"
                                    alt=""
                                  />
                                  <img
                                    decoding="async"
                                    src="wp-content/uploads/2022/09/ingredients_shape.png"
                                    alt=""
                                    class="shape"
                                  />
                                </div>
                              </div>

                              <div class="col-xl-7 col-lg-9">
                                <div class="ingredients-items-wrap">
                                  <div class="section-title mb-60">
                                    <h2 class="title">Procare</h2>
                                  </div>

                                  <div class="row justify-content-center justify-content-lg-start">
                                    <div class="col-md-6 col-sm-8">
                                      <div
                                        class="ingredients-item wow fadeInUp"
                                        data-wow-delay=".2s"
                                      >
                                        <div class="ingredients-content">
                                          <h5 class="title">Health Benefit</h5>

                                          <ul>
                                            <li>Improve urinary function</li>
                                            <li>Handles enlarged prostrate</li>
                                            <li>Boost libido in men</li>
                                            <li>Reduce inflammation</li>
                                            <li>
                                              Support kidney and liver function
                                              in man
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-6 col-sm-8">
                                      <div
                                        class="ingredients-item wow fadeInUp"
                                        data-wow-delay="0.3s"
                                      >
                                        <div class="ingredients-content">
                                          <h5 class="title">Ingredients</h5>

                                          <ul>
                                            <li>Pyguem Africana</li>
                                            <li>Serenoa Repens</li>
                                            <li>Origanum Volgare</li>
                                            <li>Carica Papaya</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-be24124 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="be24124"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-no">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-faa853f"
                  data-id="faa853f"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-9690b0f elementor-widget elementor-widget-formula"
                      data-id="9690b0f"
                      data-element_type="widget"
                      data-widget_type="formula.default"
                    >
                      <div class="elementor-widget-container">
                        <section
                          class="formula-area formula-bg"
                          data-background="https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/formula_bg.jpg"
                        >
                          <div class="container">
                            <div class="row align-items-center">
                              <div class="col-lg-6 order-0 order-lg-2">
                                <div class="formula-img">
                                  <img
                                    decoding="async"
                                    src="wp-content/uploads/2022/09/clear2.png"
                                    alt=""
                                  />
                                </div>
                              </div>

                              {/*}  <div class="col-lg-6">
                                <div class="formula-content">
                                  <div class="section-title white-title mb-50">
                                    <h2
                                      class="title"
                                      style={{ color: "white" }}
                                    >
                                      Health Benefit
                                    </h2>
                                  </div>

                                  <ul class="formula-list list-wrap">
                                    <li style={{ color: "white" }}>
                                      Boost blood and immunity
                                    </li>
                                    <li style={{ color: "white" }}>
                                      Good for sickle cell
                                    </li>
                                    <li style={{ color: "white" }}>
                                      Boost fertility for both men and women
                                    </li>
                                    <li style={{ color: "white" }}>
                                      Serves as Anti-oxidant
                                    </li>
                                    <li>Anti-inflammatory</li>
                                    <li style={{ color: "white" }}>
                                      Promote digestion
                                    </li>
                                    <li style={{ color: "white" }}>
                                      Prevent diseases
                                    </li>
                                  </ul>

                                  <a
                                    href="/contact"
                                    target="_self"
                                    rel="nofollow"
                                    class="btn btn-two"
                                  >
                                    Know More{" "}
                                  </a>
                                </div>
                              </div>*/}
                              <div class="col-xxl-6 col-lg-6">
                                <div class="features-items-wrap">
                                  <div class="row justify-content-center">
                                    <div class="col-md-6 col-sm-8">
                                      <div class="features-item">
                                        <div class="features-icon">
                                          <i
                                            aria-hidden="true"
                                            class="tp flaticon-tape-measure"
                                          ></i>{" "}
                                        </div>
                                        <div class="features-content">
                                          <h2
                                            class="title"
                                            style={{ color: "white" }}
                                          >
                                            Health Benefit
                                          </h2>

                                          <ul>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Boost blood and immunity
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Boost fertility for both men and
                                              women
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Serves as Anti-oxidant
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Promote digestion
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Prevent diseases
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Assist in fatigue and weakness
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Releases stress
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-6 col-sm-8">
                                      <div class="features-item">
                                        <div class="features-icon">
                                          <i
                                            aria-hidden="true"
                                            class="tp flaticon-test"
                                          ></i>{" "}
                                        </div>
                                        <div class="features-content">
                                          <h2
                                            class="title"
                                            style={{ color: "white" }}
                                          >
                                            Ingredients
                                          </h2>
                                          <ul>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Ficus Capensis
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Alchornea Cordifolia
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Newbouldia laevis
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Alstoonia boonei
                                            </li>
                                            <li
                                              style={{
                                                color: "white",
                                                fontSize: "20px",
                                              }}
                                            >
                                              Sorghum bicolor
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*} <section
              class="elementor-section elementor-top-section elementor-element elementor-element-abcb398 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="abcb398"
              data-element_type="section"
              id="pricing"
              data-settings='{"background_background":"classic"}'
            >
              <div class="elementor-container elementor-column-gap-no">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cb9037f"
                  data-id="cb9037f"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-b2238a8 elementor-widget elementor-widget-tp-heading"
                      data-id="b2238a8"
                      data-element_type="widget"
                      data-widget_type="tp-heading.default"
                    >
                      <div class="elementor-widget-container">
                        <div class="section-title">
                          <p class="sub-title">.. Suxnix Plans ..</p>

                          <h2 class="title">SUPPLEMENT PACKAGES</h2>
                        </div>
                      </div>
                    </div>
                    <section
                      class="elementor-section elementor-inner-section elementor-element elementor-element-29131c8 elementor-section-full_width elementor-section-content-bottom elementor-section-height-default elementor-section-height-default"
                      data-id="29131c8"
                      data-element_type="section"
                    >
                      <div class="elementor-container elementor-column-gap-no">
                        <div
                          class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-bb1f3c5"
                          data-id="bb1f3c5"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-d915873 elementor-widget elementor-widget-tp-pricing"
                              data-id="d915873"
                              data-element_type="widget"
                              data-widget_type="tp-pricing.default"
                            >
                              <div class="elementor-widget-container">
                                <div
                                  class="pricing-item wow fadeInUp regular"
                                  data-wow-delay=".2s"
                                >
                                  <div class="pricing__box text-center">
                                    <div class="pricing-hade">
                                      <span>1 Bottle Of</span>
                                      <h3 class="title">Suxnix</h3>
                                      <p>(1 x 250 veggie caps bottle)</p>
                                    </div>

                                    <div class="pricing-img">
                                      <img
                                        decoding="async"
                                        src="wp-content/uploads/2022/09/pricing_01.png"
                                        alt=""
                                      />
                                    </div>

                                    <div class="pricing-price">
                                      <h4 class="price">&#036;69</h4>
                                      <span>
                                        per <br /> bottle
                                      </span>
                                    </div>

                                    <h5 class="total">($69 TOTAL)</h5>

                                    <div class="price-savings">
                                      <h4 class="save">Save 14%</h4>
                                      <span>&nbsp;</span>
                                    </div>

                                    <div class="pricing-btn">
                                      <a
                                        href="contact-us/index.html"
                                        target="_self"
                                        rel="nofollow"
                                        class="pricing-link"
                                      >
                                        Buy Now{" "}
                                        <span>
                                          365 Day Full Money Back Guaranteed
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6459f3d"
                          data-id="6459f3d"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-1922fab elementor-widget elementor-widget-tp-pricing"
                              data-id="1922fab"
                              data-element_type="widget"
                              data-widget_type="tp-pricing.default"
                            >
                              <div class="elementor-widget-container">
                                <div
                                  class="pricing-item wow fadeInUp popular-plan"
                                  data-wow-delay="0.4s"
                                >
                                  <div class="pricing-title text-center mb-10">
                                    <h4 class="title">★ Most Popular ★</h4>
                                  </div>

                                  <div class="pricing__box text-center">
                                    <div class="pricing-hade">
                                      <span>3 Bottle Of</span>
                                      <h3 class="title">Suxnix</h3>
                                      <p>(3 x 250 veggie caps bottle)</p>
                                    </div>

                                    <div class="pricing-img">
                                      <img
                                        decoding="async"
                                        src="wp-content/uploads/2022/09/pricing_02.png"
                                        alt=""
                                      />
                                    </div>

                                    <div class="pricing-price">
                                      <h4 class="price">&#036;59</h4>
                                      <span>
                                        per <br /> bottle
                                      </span>
                                    </div>

                                    <h5 class="total">($179 TOTAL)</h5>

                                    <div class="price-savings">
                                      <h4 class="save">Save 25%</h4>
                                      <span>+ Free Shipping</span>
                                    </div>

                                    <div class="pricing-btn">
                                      <a
                                        href="contact-us/index.html"
                                        target="_self"
                                        rel="nofollow"
                                        class="pricing-link"
                                      >
                                        Buy Now{" "}
                                        <span>
                                          365 Day Full Money Back Guaranteed
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2aad11d"
                          data-id="2aad11d"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-190f235 elementor-widget elementor-widget-tp-pricing"
                              data-id="190f235"
                              data-element_type="widget"
                              data-widget_type="tp-pricing.default"
                            >
                              <div class="elementor-widget-container">
                                <div
                                  class="pricing-item wow fadeInUp best-value-plan"
                                  data-wow-delay="0.6s"
                                >
                                  <div class="pricing-title text-center mb-10">
                                    <h4 class="title">✓ Best Value</h4>
                                  </div>

                                  <div class="pricing__box text-center">
                                    <div class="pricing-hade">
                                      <span>6 Bottle Of</span>
                                      <h3 class="title">Suxnix</h3>
                                      <p>(6 x 250 veggie caps bottle)</p>
                                    </div>

                                    <div class="pricing-img">
                                      <img
                                        decoding="async"
                                        src="wp-content/uploads/2022/09/pricing_03.png"
                                        alt=""
                                      />
                                    </div>

                                    <div class="pricing-price">
                                      <h4 class="price">&#036;49</h4>
                                      <span>
                                        per <br /> bottle
                                      </span>
                                    </div>

                                    <h5 class="total">($299 TOTAL)</h5>

                                    <div class="price-savings">
                                      <h4 class="save">Save 40%</h4>
                                      <span>+ Free Shipping</span>
                                    </div>

                                    <div class="pricing-btn">
                                      <a
                                        href="contact-us/index.html"
                                        target="_self"
                                        rel="nofollow"
                                        class="pricing-link"
                                      >
                                        Buy Now{" "}
                                        <span>
                                          365 Day Full Money Back Guaranteed
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>*/}
            <section
              class="elementor-section elementor-top-section elementor-element elementor-element-8976bfb elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="8976bfb"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-no">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b32b237"
                  data-id="b32b237"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-ccea969 elementor-widget elementor-widget-testimonial"
                      data-id="ccea969"
                      data-element_type="widget"
                      data-widget_type="testimonial.default"
                    >
                      <div class="elementor-widget-container">
                        <section
                          class="testimonial-area testimonial-bg"
                          data-background="https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/testimonial_bg.jpg"
                        >
                          <div class="testimonial-overlay"></div>
                          <h1 style={{ color: "white", textAlign: "center" }}>
                            Recent testimonial
                          </h1>
                          <div class="container">
                            <div class="row justify-content-center">
                              <div class="col-xxl-8 col-xl-9 col-lg-11">
                                <div class="testimonial-active">
                                  <div class="testimonial-item text-center">
                                    <div class="testimonial-rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <img
                                      decoding="async"
                                      src="wp-content/uploads/2022/09/r4.jpeg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="testimonial-item text-center">
                                    <div class="testimonial-rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <img
                                      decoding="async"
                                      src="wp-content/uploads/2022/09/r3.jpeg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="testimonial-item text-center">
                                    <div class="testimonial-rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <img
                                      decoding="async"
                                      src="wp-content/uploads/2022/09/r7.png"
                                      alt=""
                                    />
                                  </div>
                                  <div class="testimonial-item text-center">
                                    <div class="testimonial-rating">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <img
                                      decoding="async"
                                      src="wp-content/uploads/2022/09/r6.png"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*}   <section
              class="elementor-section elementor-top-section elementor-element elementor-element-4f93b80 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="4f93b80"
              data-element_type="section"
            >
              <div class="elementor-container elementor-column-gap-no">
                <div
                  class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-08d1f6e"
                  data-id="08d1f6e"
                  data-element_type="column"
                >
                  <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                      class="elementor-element elementor-element-f46398b elementor-widget elementor-widget-tg-blog-faq"
                      data-id="f46398b"
                      data-element_type="widget"
                      data-widget_type="tg-blog-faq.default"
                    >
                      <div class="elementor-widget-container">
                        <section id="news" class="blog-post-area">
                          <div class="container">
                            <div class="blog-inner-wrapper">
                              <div class="row justify-content-center">
                                <div class="col-lg-6 col-md-10">
                                  <div class="blog-posts-wrapper">
                                    <div class="section-title mb-50">
                                      <p class="sub-title">.. Suxnix News ..</p>

                                      <h2 class="title">Latest News</h2>
                                    </div>

                                    <div class="blog-post-item">
                                      <a href="culpa-qui-officia-deserunt-mollit-anim-id-est-laborum-sed-ut-perspiciatis/index.html">
                                        <div
                                          class="blog-post-thumb"
                                          data-background="https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/inner_blog_thumb04.jpg"
                                        ></div>
                                      </a>

                                      <div class="blog-post-content">
                                        <div class="content-top">
                                          <div class="tags">
                                            <a href="category/technology/index.html">
                                              Technology
                                            </a>
                                          </div>

                                          <span class="date">
                                            <i class="far fa-clock"></i>{" "}
                                            September 6, 2022
                                          </span>
                                        </div>

                                        <h3 class="title">
                                          <a href="culpa-qui-officia-deserunt-mollit-anim-id-est-laborum-sed-ut-perspiciatis/index.html">
                                            Culpa qui officia deserunt mollit
                                            anim id est laborum sed ut
                                            perspiciatis
                                          </a>
                                        </h3>

                                        <div class="content-bottom">
                                          <ul class="list-wrap">
                                            <li class="user">
                                              Post By -{" "}
                                              <a href="author/admin/index.html">
                                                admin
                                              </a>
                                            </li>
                                            <li class="comments">
                                              <i class="far fa-envelope"></i>
                                              3734
                                            </li>
                                            <li class="viewers">
                                              <i class="far fa-eye"></i>
                                              33402 Views{" "}
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="blog-post-item">
                                      <a href="lorem-ipsum-dolor-sit-amet-consecte-cing-elit-sed-do-eiusmod-tempor/index.html">
                                        <div
                                          class="blog-post-thumb"
                                          data-background="https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/inner_blog_thumb01.jpg"
                                        ></div>
                                      </a>

                                      <div class="blog-post-content">
                                        <div class="content-top">
                                          <div class="tags">
                                            <a href="category/consultant/index.html">
                                              Consultant
                                            </a>
                                          </div>

                                          <span class="date">
                                            <i class="far fa-clock"></i>{" "}
                                            September 6, 2022
                                          </span>
                                        </div>

                                        <h3 class="title">
                                          <a href="lorem-ipsum-dolor-sit-amet-consecte-cing-elit-sed-do-eiusmod-tempor/index.html">
                                            Lorem ipsum dolor sit amet consecte
                                            cing elit sed do eiusmod tempor
                                          </a>
                                        </h3>

                                        <div class="content-bottom">
                                          <ul class="list-wrap">
                                            <li class="user">
                                              Post By -{" "}
                                              <a href="author/admin/index.html">
                                                admin
                                              </a>
                                            </li>
                                            <li class="comments">
                                              <i class="far fa-envelope"></i>
                                              35
                                            </li>
                                            <li class="viewers">
                                              <i class="far fa-eye"></i>
                                              33356 Views{" "}
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="blog-post-item">
                                      <a href="magna-aliqua-ut-enim-minim-venia-mola-quis-nostrud-exercitation-ullamco/index.html">
                                        <div
                                          class="blog-post-thumb"
                                          data-background="https://themegenix.net/wp/suxnix/wp-content/uploads/2022/09/inner_blog_thumb03.jpg"
                                        ></div>
                                      </a>

                                      <div class="blog-post-content">
                                        <div class="content-top">
                                          <div class="tags">
                                            <a href="category/consultant/index.html">
                                              Consultant
                                            </a>
                                          </div>

                                          <span class="date">
                                            <i class="far fa-clock"></i>{" "}
                                            September 6, 2022
                                          </span>
                                        </div>

                                        <h3 class="title">
                                          <a href="magna-aliqua-ut-enim-minim-venia-mola-quis-nostrud-exercitation-ullamco/index.html">
                                            Magna aliqua ut enim minim venia
                                            mola quis nostrud exercitation
                                            ullamco
                                          </a>
                                        </h3>

                                        <div class="content-bottom">
                                          <ul class="list-wrap">
                                            <li class="user">
                                              Post By -{" "}
                                              <a href="author/admin/index.html">
                                                admin
                                              </a>
                                            </li>
                                            <li class="comments">
                                              <i class="far fa-envelope"></i>0
                                            </li>
                                            <li class="viewers">
                                              <i class="far fa-eye"></i>
                                              33305 Views{" "}
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-6 col-md-10">
                                  <div class="faq-wrapper">
                                    <div class="section-title mb-50">
                                      <p class="sub-title">
                                        .. Ask Question ..
                                      </p>

                                      <h2 class="title">Get Every Answers</h2>
                                    </div>

                                    <div
                                      class="accordion"
                                      id="accordionExample"
                                    >
                                      <div class="accordion-item active-item">
                                        <h2
                                          class="accordion-header"
                                          id="headingOne-0"
                                        >
                                          <button
                                            class="accordion-button "
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne-0"
                                            aria-expanded="true"
                                            aria-controls="collapseOne-0"
                                          >
                                            <span class="count">01.</span>{" "}
                                            Suxnix ingredients provides a
                                            searchable ?{" "}
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseOne-0"
                                          class="accordion-collapse collapse show"
                                          aria-labelledby="headingOne-0"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div class="accordion-body">
                                            There are many variations of
                                            passages of lorem ipsum that
                                            available but the majority have
                                            alteration in some form by injected
                                            humour. There are many variations of
                                            passages.{" "}
                                          </div>
                                        </div>
                                      </div>

                                      <div class="accordion-item ">
                                        <h2
                                          class="accordion-header"
                                          id="headingOne-1"
                                        >
                                          <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne-1"
                                            aria-expanded="false"
                                            aria-controls="collapseOne-1"
                                          >
                                            <span class="count">02.</span> How
                                            to edit Suxnix themes ?{" "}
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseOne-1"
                                          class="accordion-collapse collapse "
                                          aria-labelledby="headingOne-1"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div class="accordion-body">
                                            There are many variations of
                                            passages of lorem ipsum that
                                            available but the majority have
                                            alteration in some form by injected
                                            humour. There are many variations of
                                            passages.{" "}
                                          </div>
                                        </div>
                                      </div>

                                      <div class="accordion-item ">
                                        <h2
                                          class="accordion-header"
                                          id="headingOne-2"
                                        >
                                          <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne-2"
                                            aria-expanded="false"
                                            aria-controls="collapseOne-2"
                                          >
                                            <span class="count">03.</span>{" "}
                                            Suxnix app is a powerful application
                                            ?{" "}
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseOne-2"
                                          class="accordion-collapse collapse "
                                          aria-labelledby="headingOne-2"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div class="accordion-body">
                                            There are many variations of
                                            passages of lorem ipsum that
                                            available but the majority have
                                            alteration in some form by injected
                                            humour. There are many variations of
                                            passages.{" "}
                                          </div>
                                        </div>
                                      </div>

                                      <div class="accordion-item ">
                                        <h2
                                          class="accordion-header"
                                          id="headingOne-3"
                                        >
                                          <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne-3"
                                            aria-expanded="false"
                                            aria-controls="collapseOne-3"
                                          >
                                            <span class="count">04.</span>{" "}
                                            Latest version thorough Suxnix
                                            powerful ?{" "}
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseOne-3"
                                          class="accordion-collapse collapse "
                                          aria-labelledby="headingOne-3"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div class="accordion-body">
                                            There are many variations of
                                            passages of lorem ipsum that
                                            available but the majority have
                                            alteration in some form by injected
                                            humour. There are many variations of
                                            passages.{" "}
                                          </div>
                                        </div>
                                      </div>

                                      <div class="accordion-item ">
                                        <h2
                                          class="accordion-header"
                                          id="headingOne-4"
                                        >
                                          <button
                                            class="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne-4"
                                            aria-expanded="false"
                                            aria-controls="collapseOne-4"
                                          >
                                            <span class="count">05.</span> How
                                            to Track My Order ?{" "}
                                          </button>
                                        </h2>
                                        <div
                                          id="collapseOne-4"
                                          class="accordion-collapse collapse "
                                          aria-labelledby="headingOne-4"
                                          data-bs-parent="#accordionExample"
                                        >
                                          <div class="accordion-body">
                                            There are many variations of
                                            passages of lorem ipsum that
                                            available but the majority have
                                            alteration in some form by injected
                                            humour. There are many variations of
                                            passages.{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="blog-bg-shape one"></div>
                          <div class="blog-bg-shape two"></div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>*/}
          </div>
        </main>
        <Footer />
      </body>
    </>
  );
};

export default Home;
