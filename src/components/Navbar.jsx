import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import "./nav.css";
import oga from "./correctlogo.png";
import oga1 from "./correctlogo.png";
import oga3 from "./correctlogo.png";
import oga2 from "./correctlogo.png";
import oga4 from "./correctlogo.png";
const Navbar = () => {
  const srcset = `${oga1} 1024w, ${oga2} 300w, ${oga3} 768w, ${oga4} 1536w, ${oga} 800w`;
  return (
    <>
      <body class="home page-template page-template-elementor_header_footer page page-id-65 wp-embed-responsive theme-suxnix woocommerce-no-js tinvwl-theme-style no-sidebar elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-65">
        <header id="home">
          <div id="header-top-fixed"></div>
          <div id="sticky-header" class="menu-area">
            <div class="container custom-container">
              <div class="row">
                <div class="col-12">
                  <div class="mobile-nav-toggler">
                    <i class="flaticon-layout"></i>
                  </div>
                  <div class="menu-wrap">
                    <nav class="menu-nav">
                      <div class="logo">
                        <a class="sticky-logo" href="/">
                          <img
                            src="wp-content/themes/suxnix/assets/img/logo/secondary_logo.png"
                            alt="Logo"
                          />
                        </a>
                      </div>
                      <div class="navbar-wrap main-menu d-none d-xl-flex">
                        <ul id="menu-main-menu" class="navigation">
                          <li
                            id="menu-item-105"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-65 current_page_item menu-item-105"
                          >
                            <a href="/" aria-current="page">
                              Home
                            </a>
                          </li>
                          <li
                            id="menu-item-106"
                            class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-106"
                          >
                            <a href="/" aria-current="page">
                              Features
                            </a>
                          </li>
                          <li
                            id="menu-item-107"
                            class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-107"
                          >
                            <a href="/" aria-current="page">
                              Product
                            </a>
                          </li>
                          <li
                            id="menu-item-108"
                            class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-108"
                          >
                            <a href="/" aria-current="page">
                              Ingredient
                            </a>
                          </li>
                          <li
                            id="menu-item-109"
                            class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-109"
                          >
                            <a href="/" aria-current="page">
                              Pricing
                            </a>
                          </li>
                          <li
                            id="menu-item-110"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-110"
                          >
                            <a href="#">Shop</a>
                            <ul class="sub-menu">
                              <li
                                id="menu-item-112"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-112"
                              >
                                <a href="/">Our Shop</a>
                              </li>
                              <li
                                id="menu-item-111"
                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-111"
                              >
                                <a href="/">Shop Details</a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="menu-item-114"
                            class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children menu-item-114"
                          >
                            <a href="/" aria-current="page">
                              Blog
                            </a>
                            <ul class="sub-menu">
                              <li
                                id="menu-item-115"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115"
                              >
                                <a href="/">Our Blog</a>
                              </li>
                              <li
                                id="menu-item-116"
                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-116"
                              >
                                <a href="/">Blog Details</a>
                              </li>
                            </ul>
                          </li>
                          <li
                            id="menu-item-113"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"
                          >
                            <a href="/">Contacts</a>
                          </li>
                        </ul>{" "}
                      </div>
                      <div class="header-action d-none d-sm-block">
                        <ul>
                          <li class="header-shop-cart">
                            <a href="/" class="cart-count">
                              <i class="flaticon-shopping-cart"></i>
                              <span id="tp-cart-item" class="mini-cart-count">
                                0
                              </span>
                            </a>
                            <div class="header-mini-cart">
                              <p class="woocommerce-mini-cart__empty-message">
                                No products in the cart.
                              </p>
                            </div>
                          </li>

                          <li class="header-search">
                            <a href="#">
                              <i class="flaticon-search"></i>
                            </a>
                          </li>

                          <li class="offCanvas-btn d-none d-xl-block">
                            <a href="#" class="navSidebar-button">
                              <i class="flaticon-layout"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>

                  <div class="mobile-menu">
                    <nav class="menu-box">
                      <div class="close-btn">
                        <i class="fas fa-times"></i>
                      </div>
                      <div class="nav-logo">
                        <a href="/">
                          <img
                            src="wp-content/uploads/2022/09/logo.png"
                            alt="Logo"
                          />
                        </a>
                      </div>

                      <div class="menu-outer">
                        <ul id="menu-main-menu-1" class="navigation">
                          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-65 current_page_item menu-item-105">
                            <a href="/" aria-current="page">
                              Home
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-106">
                            <a href="/" aria-current="page">
                              Features
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-107">
                            <a href="/" aria-current="page">
                              Product
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-108">
                            <a href="/" aria-current="page">
                              Ingredient
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-109">
                            <a href="/" aria-current="page">
                              Pricing
                            </a>
                          </li>
                          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-children menu-item-110">
                            <a href="#">Shop</a>
                            <ul class="sub-menu">
                              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-112">
                                <a href="/">Our Shop</a>
                              </li>
                              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-111">
                                <a href="/">Shop Details</a>
                              </li>
                            </ul>
                          </li>
                          <li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children has-children menu-item-114">
                            <a href="/" aria-current="page">
                              Blog
                            </a>
                            <ul class="sub-menu">
                              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115">
                                <a href="/">Our Blog</a>
                              </li>
                              <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-116">
                                <a href="/">Blog Details</a>
                              </li>
                            </ul>
                          </li>
                          <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-113">
                            <a href="/">Contacts</a>
                          </li>
                        </ul>{" "}
                      </div>

                      <div class="social-links">
                        <ul class="clearfix">
                          <li class="facebook">
                            <a href="#">
                              <i class="fab fa-facebook-f"></i>
                            </a>
                          </li>

                          <li class="twitter">
                            <a href="#">
                              <i class="fab fa-twitter"></i>
                            </a>
                          </li>

                          <li class="instagram">
                            <a href="#">
                              <i class="fab fa-instagram"></i>
                            </a>
                          </li>

                          <li class="linkedin">
                            <a href="#">
                              <i class="fab fa-linkedin-in"></i>
                            </a>
                          </li>

                          <li class="youtube">
                            <a href="#">
                              <i class="fab fa-youtube"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div class="menu-backdrop"></div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="search-popup-wrap"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div class="search-wrap text-center">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div class="search-form">
                      <form
                        method="get"
                        action="https://themegenix.net/wp/suxnix/"
                      >
                        <input
                          type="text"
                          name="s"
                          value=""
                          placeholder="Enter your keyword..."
                        />
                        <button class="search-btn">
                          <i class="flaticon-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="search-backdrop"></div>
        </header>
      </body>
    </>
  );
};

export default Navbar;
