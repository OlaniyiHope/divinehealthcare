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
import "./home.css";
import Footer from "../components/Footer";
const Shop = () => {
  const whiteSrcSet = `${white} 800w, ${white} 213w, ${white} 726w, ${white} 768w`;
  const blackSrcSet = `${step} 1000w, ${step} 258w, ${step} 879w, ${step} 768w, ${step} 800w`;

  return (
    <>
      <body class="home page-template page-template-elementor_header_footer page page-id-65 wp-embed-responsive theme-suxnix woocommerce-no-js tinvwl-theme-style no-sidebar elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-65">
        <main class="main-area fix">
          <section
            class="breadcrumb-area breadcrumb-bg "
            data-background="https://themegenix.net/wp/suxnix/wp-content/themes/suxnix/assets/img/bg/video_bg.jpg"
          >
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-xl-10">
                  <div class="breadcrumb-content text-center">
                    <h2 class="title">Shop</h2>
                    <nav aria-label="breadcrumb" class="breadcrumb">
                      <span property="itemListElement" typeof="ListItem">
                        <a
                          property="item"
                          typeof="WebPage"
                          title="Go to Suxnix."
                          href="https://themegenix.net/wp/suxnix"
                          class="home"
                        >
                          <span property="name">Divine Health Care</span>
                        </a>
                        <meta property="position" content="1" />
                      </span>
                      <span class="breadcrumb-separator">
                        <i class="fas fa-angle-right"></i>
                      </span>
                      <span property="itemListElement" typeof="ListItem">
                        <span
                          property="name"
                          class="archive post-product-archive current-item"
                        >
                          Shop
                        </span>
                      </span>{" "}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div class="video-shape one">
              <img
                src="../wp-content/themes/suxnix/assets/img/others/video_shape01.png"
                alt="shape"
              />
            </div>
            <div class="video-shape two">
              <img
                src="../wp-content/themes/suxnix/assets/img/others/video_shape02.png"
                alt="shape"
              />
            </div>
          </section>

          <div class="inner-shop-area">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-xl-9 col-lg-8 col-md-12 col-sm-8">
                  <div class="shop-top-wrap">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="shop-top-left">
                          <div class="woocommerce-notices-wrapper"></div>
                          <p>
                            Showing <span>1</span>&ndash;<span>6</span> of{" "}
                            <span>9</span> results
                          </p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="shop-top-right">
                          <form class="woocommerce-ordering" method="get">
                            <select
                              name="orderby"
                              class="orderby"
                              aria-label="Shop order"
                            >
                              <option value="menu_order" selected="selected">
                                Default sorting
                              </option>
                              <option value="popularity">
                                Sort by popularity
                              </option>
                              <option value="rating">
                                Sort by average rating
                              </option>
                              <option value="date">Sort by latest</option>
                              <option value="price">
                                Sort by price: low to high
                              </option>
                              <option value="price-desc">
                                Sort by price: high to low
                              </option>
                            </select>
                            <input type="hidden" name="paged" value="1" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-1">
                    <div class="col">
                      <div class="suxnix-product-main">
                        <div class="home-shop-item inner-shop-item">
                          <div class="home-shop-thumb">
                            <a href="/product/arthritis-and-stroke">
                              <img
                                width="605"
                                height="580"
                                src="wp-content/uploads/2022/09/knee-arthritis.png"
                                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                alt=""
                                decoding="async"
                                fetchpriority="high"
                                srcset="wp-content/uploads/2022/09/knee-arthritis.png 605w, wp-content/uploads/2022/09/knee-arthritis.png 300w"
                                sizes="(max-width: 605px) 100vw, 605px"
                              />
                            </a>

                            <div class="on-sale-wrap"></div>
                          </div>

                          <div class="home-shop-content">
                            <h4 class="title">
                              <a href="/product/arthritis-and-stroke">
                                Arthritis and Stroke
                              </a>
                            </h4>
                            <div class="home-shop-price">
                              <span class="price">
                                <span class="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span class="woocommerce-Price-currencySymbol">
                                      N
                                    </span>
                                    20,000
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
                            <div class="" style={{ marginTop: "15px" }}>
                              <a
                                href="/product/arthritis-and-stroke"
                                class="btn btn-two"
                              >
                                Buy Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tinv-wraper woocommerce tinv-wishlist tinvwl-after-add-to-cart tinvwl-loop-button-wrapper tinvwl-woocommerce_after_shop_loop_item"
                          data-tinvwl_product_id="80"
                        >
                          <div class="tinv-wishlist-clear"></div>
                          <a
                            role="button"
                            tabindex="0"
                            name="add-to-wishlist"
                            aria-label="Add to Wishlist"
                            class="tinvwl_add_to_wishlist_button tinvwl-icon-heart  tinvwl-position-after tinvwl-loop"
                            data-tinv-wl-list="[]"
                            data-tinv-wl-product="80"
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
                    <div class="col">
                      <div class="suxnix-product-main">
                        <div class="home-shop-item inner-shop-item">
                          <div class="home-shop-thumb">
                            <a href="product/ulcer">
                              <img
                                width="605"
                                height="580"
                                src="wp-content/uploads/2022/09/ulcer.jpg"
                                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                alt=""
                                decoding="async"
                                fetchpriority="high"
                                srcset="wp-content/uploads/2022/09/ulcer.jpg 605w, wp-content/uploads/2022/09/ulcer.jpg 300w"
                                sizes="(max-width: 605px) 100vw, 605px"
                              />
                            </a>

                            <div class="on-sale-wrap"></div>
                          </div>

                          <div class="home-shop-content">
                            <h4 class="title">
                              <a href="/product/ulcer">Ulcer</a>
                            </h4>
                            <div class="home-shop-price">
                              <span class="price">
                                <span class="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span class="woocommerce-Price-currencySymbol">
                                      N
                                    </span>
                                    20,000
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
                            <div class="" style={{ marginTop: "15px" }}>
                              <a href="/product/ulcer" class="btn btn-two">
                                Buy Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tinv-wraper woocommerce tinv-wishlist tinvwl-after-add-to-cart tinvwl-loop-button-wrapper tinvwl-woocommerce_after_shop_loop_item"
                          data-tinvwl_product_id="80"
                        >
                          <div class="tinv-wishlist-clear"></div>
                          <a
                            role="button"
                            tabindex="0"
                            name="add-to-wishlist"
                            aria-label="Add to Wishlist"
                            class="tinvwl_add_to_wishlist_button tinvwl-icon-heart  tinvwl-position-after tinvwl-loop"
                            data-tinv-wl-list="[]"
                            data-tinv-wl-product="80"
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
                    <div class="col">
                      <div class="suxnix-product-main">
                        <div class="home-shop-item inner-shop-item">
                          <div class="home-shop-thumb">
                            <a href="/product/diabetes">
                              <img
                                width="605"
                                height="580"
                                src="wp-content/uploads/2022/09/diabetes.jpg"
                                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                alt=""
                                decoding="async"
                                fetchpriority="high"
                                srcset="wp-content/uploads/2022/09/diabetes.jpg 605w, wp-content/uploads/2022/09/diabetes.jpg  300w"
                                sizes="(max-width: 605px) 100vw, 605px"
                              />
                            </a>

                            <div class="on-sale-wrap"></div>
                          </div>

                          <div class="home-shop-content">
                            <h4 class="title">
                              <a href="/product/diabetes">Diabetes</a>
                            </h4>
                            <div class="home-shop-price">
                              <span class="price">
                                <span class="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span class="woocommerce-Price-currencySymbol">
                                      N
                                    </span>
                                    20,000
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
                            <div class="" style={{ marginTop: "15px" }}>
                              <a href="/product/diabetes" class="btn btn-two">
                                Buy Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tinv-wraper woocommerce tinv-wishlist tinvwl-after-add-to-cart tinvwl-loop-button-wrapper tinvwl-woocommerce_after_shop_loop_item"
                          data-tinvwl_product_id="80"
                        >
                          <div class="tinv-wishlist-clear"></div>
                          <a
                            role="button"
                            tabindex="0"
                            name="add-to-wishlist"
                            aria-label="Add to Wishlist"
                            class="tinvwl_add_to_wishlist_button tinvwl-icon-heart  tinvwl-position-after tinvwl-loop"
                            data-tinv-wl-list="[]"
                            data-tinv-wl-product="80"
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
                    <div class="col">
                      <div class="suxnix-product-main">
                        <div class="home-shop-item inner-shop-item">
                          <div class="home-shop-thumb">
                            <a href="/product/fertility-booster">
                              <img
                                width="605"
                                height="580"
                                src="wp-content/uploads/2022/09/loweja.jpg"
                                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                alt=""
                                decoding="async"
                                fetchpriority="high"
                                srcset="wp-content/uploads/2022/09/loweja.jpg 605w, wp-content/uploads/2022/09/loweja.jpg 300w"
                                sizes="(max-width: 605px) 100vw, 605px"
                              />
                            </a>

                            <div class="on-sale-wrap"></div>
                          </div>

                          <div class="home-shop-content">
                            <h4 class="title">
                              <a href="/product/fertility-booster">
                                Fertility Booster
                              </a>
                            </h4>
                            <div class="home-shop-price">
                              <span class="price">
                                <span class="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span class="woocommerce-Price-currencySymbol">
                                      N
                                    </span>
                                    20,000
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
                            <div class="" style={{ marginTop: "15px" }}>
                              <a
                                href="/product/fertility-booster"
                                class="btn btn-two"
                              >
                                Buy Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tinv-wraper woocommerce tinv-wishlist tinvwl-after-add-to-cart tinvwl-loop-button-wrapper tinvwl-woocommerce_after_shop_loop_item"
                          data-tinvwl_product_id="80"
                        >
                          <div class="tinv-wishlist-clear"></div>
                          <a
                            role="button"
                            tabindex="0"
                            name="add-to-wishlist"
                            aria-label="Add to Wishlist"
                            class="tinvwl_add_to_wishlist_button tinvwl-icon-heart  tinvwl-position-after tinvwl-loop"
                            data-tinv-wl-list="[]"
                            data-tinv-wl-product="80"
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
                    <div class="col">
                      <div class="suxnix-product-main">
                        <div class="home-shop-item inner-shop-item">
                          <div class="home-shop-thumb">
                            <a href="/product/hiv-cancer-hepatitis">
                              <img
                                width="605"
                                height="580"
                                src="wp-content/uploads/2022/09/cancer.jpeg"
                                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                alt=""
                                decoding="async"
                                fetchpriority="high"
                                srcset="wp-content/uploads/2022/09/cancer.jpeg 605w, wp-content/uploads/2022/09/cancer.jpeg 300w"
                                sizes="(max-width: 605px) 100vw, 605px"
                              />
                            </a>

                            <div class="on-sale-wrap"></div>
                          </div>

                          <div class="home-shop-content">
                            <h4 class="title">
                              <a href="p/roduct/hiv-cancer-hepatitis">
                                HIV/Cancer
                              </a>
                            </h4>
                            <div class="home-shop-price">
                              <span class="price">
                                <span class="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span class="woocommerce-Price-currencySymbol">
                                      N
                                    </span>
                                    20,000
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
                            <div class="" style={{ marginTop: "15px" }}>
                              <a
                                href="/product/hiv-cancer-hepatitis"
                                class="btn btn-two"
                              >
                                Buy Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tinv-wraper woocommerce tinv-wishlist tinvwl-after-add-to-cart tinvwl-loop-button-wrapper tinvwl-woocommerce_after_shop_loop_item"
                          data-tinvwl_product_id="80"
                        >
                          <div class="tinv-wishlist-clear"></div>
                          <a
                            role="button"
                            tabindex="0"
                            name="add-to-wishlist"
                            aria-label="Add to Wishlist"
                            class="tinvwl_add_to_wishlist_button tinvwl-icon-heart  tinvwl-position-after tinvwl-loop"
                            data-tinv-wl-list="[]"
                            data-tinv-wl-product="80"
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
                    <div class="col">
                      <div class="suxnix-product-main">
                        <div class="home-shop-item inner-shop-item">
                          <div class="home-shop-thumb">
                            <a href="/product/fibroid">
                              <img
                                width="605"
                                height="580"
                                src="wp-content/uploads/2022/09/fibroid.jpg"
                                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                alt=""
                                decoding="async"
                                fetchpriority="high"
                                srcset="wp-content/uploads/2022/09/fibroid.jpg 605w, wp-content/uploads/2022/09/fibroid.jpg 300w"
                                sizes="(max-width: 605px) 100vw, 605px"
                              />
                            </a>

                            <div class="on-sale-wrap"></div>
                          </div>

                          <div class="home-shop-content">
                            <h4 class="title">
                              <a href="/product/fibroid">Fibroid</a>
                            </h4>
                            <div class="home-shop-price">
                              <span class="price">
                                <span class="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span class="woocommerce-Price-currencySymbol">
                                      N
                                    </span>
                                    20,000
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
                            <div class="" style={{ marginTop: "15px" }}>
                              <a href="/product/fibroid" class="btn btn-two">
                                Buy Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tinv-wraper woocommerce tinv-wishlist tinvwl-after-add-to-cart tinvwl-loop-button-wrapper tinvwl-woocommerce_after_shop_loop_item"
                          data-tinvwl_product_id="80"
                        >
                          <div class="tinv-wishlist-clear"></div>
                          <a
                            role="button"
                            tabindex="0"
                            name="add-to-wishlist"
                            aria-label="Add to Wishlist"
                            class="tinvwl_add_to_wishlist_button tinvwl-icon-heart  tinvwl-position-after tinvwl-loop"
                            data-tinv-wl-list="[]"
                            data-tinv-wl-product="80"
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
                  <div class="suxnix-shop-pagination">
                    <nav aria-label="Page navigation pagination-wrap">
                      <ul class="page-numbers">
                        <li>
                          <span
                            aria-current="page"
                            class="page-numbers current"
                          >
                            1
                          </span>
                        </li>
                        <li>
                          <a class="page-numbers" href="page/2/index.html">
                            2
                          </a>
                        </li>
                        <li>
                          <a class="next page-numbers" href="page/2/index.html">
                            <i class="fas fa-angle-double-right"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-8 col-sm-8">
                  <aside class="shop-sidebar">
                    <div
                      id="woocommerce_price_filter-2"
                      class="product-widgets side-cat woocommerce widget_price_filter"
                    >
                      <h4 class="sidebar-title">Filter by Price</h4>
                      <form
                        method="get"
                        action="https://themegenix.net/wp/suxnix/shop/"
                      >
                        <div class="price_slider_wrapper">
                          <div
                            class="price_slider"
                            style={{ display: "none" }}
                          ></div>
                          <div class="price_slider_amount" data-step="10">
                            <label class="screen-reader-text" for="min_price">
                              Min price
                            </label>
                            <input
                              type="text"
                              id="min_price"
                              name="min_price"
                              value="10"
                              data-min="10"
                              placeholder="Min price"
                            />
                            <label class="screen-reader-text" for="max_price">
                              Max price
                            </label>
                            <input
                              type="text"
                              id="max_price"
                              name="max_price"
                              value="60"
                              data-max="60"
                              placeholder="Max price"
                            />
                            <button type="submit" class="button">
                              Filter
                            </button>
                            <div
                              class="price_label"
                              style={{ display: "none" }}
                            >
                              Price: <span class="from"></span> &mdash;{" "}
                              <span class="to"></span>
                            </div>
                            <div class="clear"></div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      id="woocommerce_product_categories-2"
                      class="product-widgets side-cat woocommerce widget_product_categories"
                    >
                      <h4 class="sidebar-title">Product categories</h4>
                      <ul class="product-categories">
                        <li class="cat-item cat-item-38">
                          <a href="product/arthritis-and-stroke">
                            Arthritis &amp; Stroke
                          </a>{" "}
                          <span class="float-right">1</span>
                        </li>
                        <li class="cat-item cat-item-27">
                          <a href="/product/ulcer">Ulcer</a>{" "}
                          <span class="float-right">1</span>
                        </li>
                        <li class="cat-item cat-item-31">
                          <a href="/product/diabetes">Diabetes</a>{" "}
                          <span class="float-right">2</span>
                        </li>
                        <li class="cat-item cat-item-42">
                          <a href="/product/fertility-booster">
                            Fertility booster
                          </a>{" "}
                          <span class="float-right">4</span>
                        </li>
                        <li class="cat-item cat-item-35">
                          <a href="/product/hiv-cancer-hepatitis">
                            HIV &amp; Cancer
                          </a>{" "}
                          <span class="float-right">1</span>
                        </li>
                        <li class="cat-item cat-item-15">
                          <a href="/product/fibroid">Fibroid</a>{" "}
                          <span class="float-right">0</span>
                        </li>
                        <li class="cat-item cat-item-15">
                          <a href="/product/Hbp">HBP</a>{" "}
                          <span class="float-right">0</span>
                        </li>
                      </ul>
                    </div>
                    {/*} <div
                      id="woocommerce_products-2"
                      class="product-widgets side-cat woocommerce widget_products"
                    >
                      <h4 class="sidebar-title">LATEST PRODUCTS</h4>
                      <ul class="product_list_widget">
                        <li>
                          <div class="lp-post-thumb">
                            <div class="product-widget-thumb-inner">
                              <a href="../product/body-shaping-foods/index.html">
                                <img
                                  width="350"
                                  height="350"
                                  src="../wp-content/uploads/2022/09/shop-details-thumb05-350x350.png"
                                  class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                  alt=""
                                  loading="lazy"
                                />{" "}
                              </a>
                            </div>
                          </div>

                          <div class="lp-post-content">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 4.00 out of 5"
                            >
                              <span style={{ width: "80%" }}>
                                Rated <strong class="rating">4.00</strong> out
                                of 5
                              </span>
                            </div>
                            <h4 class="title">
                              <a href="../product/body-shaping-foods/index.html">
                                Body Shaping Foods{" "}
                              </a>
                            </h4>
                            <del aria-hidden="true">
                              <span class="woocommerce-Price-amount amount">
                                <span class="woocommerce-Price-currencySymbol">
                                  &#036;
                                </span>
                                49.99
                              </span>
                            </del>{" "}
                            <ins>
                              <span class="woocommerce-Price-amount amount">
                                <span class="woocommerce-Price-currencySymbol">
                                  &#036;
                                </span>
                                29.99
                              </span>
                            </ins>{" "}
                          </div>
                        </li>
                        <li>
                          <div class="lp-post-thumb">
                            <div class="product-widget-thumb-inner">
                              <a href="../product/sneaky-supplements/index.html">
                                <img
                                  width="350"
                                  height="350"
                                  src="../wp-content/uploads/2022/09/shop-details-thumb08-350x350.png"
                                  class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                  alt=""
                                  loading="lazy"
                                />{" "}
                              </a>
                            </div>
                          </div>

                          <div class="lp-post-content">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 5.00 out of 5"
                            >
                              <span style={{ width: "100%" }}>
                                Rated <strong class="rating">5.00</strong> out
                                of 5
                              </span>
                            </div>
                            <h4 class="title">
                              <a href="../product/sneaky-supplements/index.html">
                                Sneaky Supplements{" "}
                              </a>
                            </h4>
                            <span class="woocommerce-Price-amount amount">
                              <span class="woocommerce-Price-currencySymbol">
                                &#036;
                              </span>
                              18.99
                            </span>{" "}
                          </div>
                        </li>
                        <li>
                          <div class="lp-post-thumb">
                            <div class="product-widget-thumb-inner">
                              <a href="../product/optimum-nutrition/index.html">
                                <img
                                  width="350"
                                  height="350"
                                  src="../wp-content/uploads/2022/09/shop-details-thumb02-350x350.png"
                                  class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                  alt=""
                                  loading="lazy"
                                />{" "}
                              </a>
                            </div>
                          </div>

                          <div class="lp-post-content">
                            <div
                              class="star-rating"
                              role="img"
                              aria-label="Rated 5.00 out of 5"
                            >
                              <span style={{ width: "100%" }}>
                                Rated <strong class="rating">5.00</strong> out
                                of 5
                              </span>
                            </div>
                            <h4 class="title">
                              <a href="../product/optimum-nutrition/index.html">
                                Optimum Nutrition{" "}
                              </a>
                            </h4>
                            <span class="woocommerce-Price-amount amount">
                              <span class="woocommerce-Price-currencySymbol">
                                &#036;
                              </span>
                              18.99
                            </span>{" "}
                          </div>
                        </li>
                      </ul>
                    </div>*/}
                    <div
                      id="woocommerce_product_tag_cloud-2"
                      class="product-widgets side-cat woocommerce widget_product_tag_cloud"
                    >
                      <h4 class="sidebar-title">Product tags</h4>
                      <div class="tagcloud">
                        <a
                          href="/product/"
                          class="tag-cloud-link tag-link-37 tag-link-position-1"
                          style={{ fontSize: "13.25pt" }}
                          aria-label="Energy Support (2 products)"
                        >
                          Arthritis
                        </a>
                        <a
                          href="/product/ulcer"
                          class="tag-cloud-link tag-link-39 tag-link-position-2"
                          style={{ fontSize: "22pt" }}
                          aria-label="Food (5 products)"
                        >
                          Ulcer
                        </a>
                        <a
                          href="/product/Hbp"
                          class="tag-cloud-link tag-link-29 tag-link-position-3"
                          style={{ fontSize: "8pt" }}
                          aria-label="Health (1 product)"
                        >
                          HBP
                        </a>
                        <a
                          href="/product/diabetes"
                          class="tag-cloud-link tag-link-32 tag-link-position-4"
                          style={{ fontSize: "8pt" }}
                          aria-label="Muscle (1 product)"
                        >
                          Diabetes
                        </a>
                        <a
                          href="../product-tag/natural-vitamin/index.html"
                          class="tag-cloud-link tag-link-28 tag-link-position-5"
                          style={{ fontSize: "8pt" }}
                          aria-label="Natural Vitamin (1 product)"
                        >
                          HIV
                        </a>
                        <a
                          href="../product-tag/organic/index.html"
                          class="tag-cloud-link tag-link-41 tag-link-position-6"
                          style={{ fontSize: "22pt" }}
                          aria-label="Organic (5 products)"
                        >
                          Fertility Booster
                        </a>
                        <a
                          href="../product-tag/skin-nails/index.html"
                          class="tag-cloud-link tag-link-36 tag-link-position-7"
                          style={{ fontSize: "13.25pt" }}
                          aria-label="Skin &amp; Nails (2 products)"
                        >
                          Fibroid
                        </a>

                        <a
                          href="../product-tag/workout/index.html"
                          class="tag-cloud-link tag-link-30 tag-link-position-11"
                          style={{ fontSize: "8pt" }}
                          aria-label="Workout (1 product)"
                        >
                          Cancer
                        </a>
                      </div>
                    </div>{" "}
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </body>
    </>
  );
};

export default Shop;
