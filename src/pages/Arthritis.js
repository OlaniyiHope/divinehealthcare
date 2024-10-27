import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import white from "./home.png";
import young from "./woman.jpg";
import old from "./shop2.jpg";
import Navbar from "../components/Navbar";
import step from "./quicks.png";
import oil from "./safe.png";
import hiab from "./ran.png";
import "./home.css";
import Footer from "../components/Footer";
const Arthritis = () => {
  const whiteSrcSet = `${white} 800w, ${white} 213w, ${white} 726w, ${white} 768w`;
  const blackSrcSet = `${step} 1000w, ${step} 258w, ${step} 879w, ${step} 768w, ${step} 800w`;
  const [activeTab, setActiveTab] = useState("description");

  return (
    <>
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
                    <h2 class="title">Treatments for Arthritis and Stroke</h2>
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
                    src="wp-content/uploads/2022/09/knee-arthritis.png"
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
                      <span class="rating-count">( 20 Customers Review )</span>
                    </div>
                    <h3 class="product_title title entry-title">
                      Arthritis stroke e.g Pains in joint, Waist, Shoulder,
                      Wrist, Leg, Knees etc
                    </h3>
                    <div class="inner-shop-details-price">
                      <span class="woocommerce-Price-amount amount">
                        <span class="woocommerce-Price-currencySymbol">₦</span>
                        20,000
                      </span>
                    </div>
                    <div class="woocommerce-product-details__short-description">
                      <p>
                        Suxnix food is food produced by methods complying with
                        the standards of Rrganic farming. Standards vary Lorem
                        ipsum dolor sit amet, consectetur adipiscing worldwide,
                        but organic farming.
                      </p>
                    </div>

                    <div class="inner-shop-details-bottom">
                      <div class="posted_in">
                        <b>Category :</b>{" "}
                        <a href="product/artheris-and-stroke" rel="tag">
                          Arthritis and Stroke
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
                        <a className="nav-link">Reviews (1)</a>
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
                            <h4 class="title">The true strength of Suxnix :</h4>
                            <p>
                              Whey Protein Isolates (WPIs) are the purest form
                              of whey protein that currently exists. WPIs are
                              costly to use, but rate among the best proteins
                              that money can buy. That’s why they’re the first
                              ingredient you read on the Gold Standard 100%
                              Whey™ label. By using WPI as the primary
                              ingredient along with premium ultra-filtered whey
                              protein concentrate (WPC), we’re able to pack 24
                              grams of protein into every serving to support
                              your muscle building needs after training.
                              ON’attention to detail also extends to mixability.
                              This superior quality powder has been instantized
                              to mix easliy using a shaker cup or just a glass
                              and spoon. There’s no doubt that this is the
                              standard by which all other whey proteins are
                              measured.
                            </p>
                            <h4 class="title">Suxnix the basics :</h4>
                            <ul class="product-desc-list list-wrap">
                              <li>
                                82% Protein by Weight (24g of Protein Per 31.5g
                                Serving Size).
                              </li>
                              <li>
                                Whey Protein Isolates (WPI) Main Ingredient.
                              </li>
                              <li>
                                Whey Protein Micro-functions from Whey Protein
                                Isolate and Ultra-Filtered Whey Protein
                                Concentrate.
                              </li>
                              <li>
                                Over 4g of Naturally Occurring Glutamine &#038;
                                Glutamic Acid in Each Serving.
                              </li>
                              <li>
                                More than 5g of the Naturally Occurring Branched
                                Chain Amino Acids (BCAAs) Leucine, Isoleucine,
                                and Valine in Each Serving.
                              </li>
                              <li>The “Gold Standard” for Protein Quality.</li>
                              <li>Banned Substance Tested Protein</li>
                              <li>
                                French Vanilla Creme Flavored Whey Protein
                                Powder
                              </li>
                            </ul>
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
                                1 review for <span>Optimum Nutrition</span>{" "}
                              </h2>

                              <ol class="commentlist list-wrap">
                                <li
                                  class="review byuser comment-author-admin bypostauthor even thread-even depth-1"
                                  id="li-comment-9"
                                >
                                  <div id="comment-9" class="comment_container">
                                    <img
                                      alt=""
                                      src="https://secure.gravatar.com/avatar/2e2a0b7d5fedd5648f765fd38d2a3d3f?s=60&amp;d=mm&amp;r=g"
                                      srcset="https://secure.gravatar.com/avatar/2e2a0b7d5fedd5648f765fd38d2a3d3f?s=120&#038;d=mm&#038;r=g 2x"
                                      class="avatar avatar-60 photo"
                                      height="60"
                                      width="60"
                                      loading="lazy"
                                      decoding="async"
                                    />
                                    <div class="comment-text">
                                      <div
                                        class="star-rating"
                                        role="img"
                                        aria-label="Rated 5 out of 5"
                                      >
                                        <span style={{ width: "100%" }}>
                                          Rated{" "}
                                          <strong class="rating">5</strong> out
                                          of 5
                                        </span>
                                      </div>
                                      <p class="meta">
                                        <strong class="woocommerce-review__author">
                                          admin{" "}
                                        </strong>
                                        <span class="woocommerce-review__dash">
                                          &ndash;
                                        </span>{" "}
                                        <time
                                          class="woocommerce-review__published-date"
                                          datetime="2022-09-07T17:24:09+00:00"
                                        >
                                          September 7, 2022
                                        </time>
                                      </p>

                                      <div class="description">
                                        <p>
                                          Sed do eiusmod tempor incididunt ut
                                          labore et dolore magna aliqua. Ut enim
                                          ad minim veniam quis nostrud
                                          exercitation ullamco laboris nisi ut
                                          aliquip ex ea commodo consequat. Enim
                                          ad minim veniam, quis nostrud
                                          exercitation ullamco.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ol>
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

export default Arthritis;
