import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import logo from "./oga1.png";

const Footer = () => {
  return (
    <>
      <footer class="footer-area not-show-instagram">
        <div class="footer-top-wrap" data-bg-color="" data-background="">
          <div class="container">
            <div class="footer-widgets-wrap">
              <div class="row">
                <div class="col-lg-4 col-md-7">
                  <div
                    id="suxnix_info_widget-2"
                    class="footer-widget column-1 widget_suxnix_info_widget"
                  >
                    <div class="footer-about">
                      <div class="footer-logo logo">
                        <a href="https://themegenix.net/wp/suxnix">
                          <img
                            src="wp-content/uploads/2022/09/realfoot.png"
                            alt="Suxnix"
                          />
                        </a>
                      </div>

                      <div class="footer-text">
                        <p>
                          Natural solution for wellness essentials Elevate your
                          well-being : the latest health news and trends
                        </p>
                      </div>

                      <div class="footer-social">
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>

                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>

                        <a href="#">
                          <i class="fab fa-instagram"></i>
                        </a>

                        <a href="#">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-5 col-sm-6">
                  <div
                    id="nav_menu-2"
                    class="footer-widget column-2 widget_nav_menu"
                  >
                    <h4 class="fw-title">About Us</h4>
                    <div class="menu-about-us-container">
                      <ul id="menu-about-us" class="menu">
                        <li
                          id="menu-item-92"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-92"
                        >
                          <a href="/">About</a>
                        </li>

                        <li
                          id="menu-item-96"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96"
                        >
                          <a href="/shop">Our Shop</a>
                        </li>
                        <li
                          id="menu-item-97"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-97"
                        >
                          <a href="/pricing">Pricing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-5 col-sm-6">
                  <div
                    id="nav_menu-3"
                    class="footer-widget column-3 widget_nav_menu"
                  >
                    <h4 class="fw-title">Support</h4>
                    <div class="menu-support-menu-container">
                      <ul id="menu-support-menu" class="menu">
                        <li
                          id="menu-item-103"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103"
                        >
                          <a href="/blog">Our Blog</a>
                        </li>

                        <li
                          id="menu-item-104"
                          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-104"
                        >
                          <a href="/">Faq</a>
                        </li>

                        <li
                          id="menu-item-101"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-101"
                        >
                          <a href="/contact">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-5">
                  <div
                    id="custom_html-2"
                    class="widget_text footer-widget column-4 widget_custom_html"
                  >
                    <h4 class="fw-title">CONTACT US</h4>
                    <div class="textwidget custom-html-widget">
                      <div class="footer-contact-wrap">
                        <ul class="list-wrap">
                          <li class="phone">
                            <i class="fas fa-phone"></i> +234 811 320 1322
                          </li>
                          <li class="mail">
                            <i class="fas fa-envelope"></i>{" "}
                            info@divinehealthcare.com
                          </li>
                          <li class="website">
                            <i class="fas fa-globe"></i>{" "}
                            www.divinehealthcare.com
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>

          <div class="footer-shape one">
            <img
              src="wp-content/themes/suxnix/assets/img/others/footer_shape01.png"
              alt="img"
              class="wow fadeInLeft"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            />
          </div>
          <div class="footer-shape two">
            <img
              src="wp-content/themes/suxnix/assets/img/others/footer_shape02.png"
              alt="img"
              class="wow fadeInRight"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            />
          </div>
        </div>

        <div class="copyright-wrap">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-7">
                <div class="copyright-text">
                  <p>Copyright © 2022 divinehealthcare All Rights Reserved.</p>
                </div>
              </div>
              <div class="col-md-5">
                <div class="payment-card text-center text-md-end">
                  <img
                    src="wp-content/uploads/2022/09/card_img.png"
                    alt="card"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
