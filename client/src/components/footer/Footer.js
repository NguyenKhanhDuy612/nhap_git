import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  return (
    <Fragment>
      <Container>
        <div bgColor="light" className="text-center text-lg-start text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <Link href="" className="me-4 text-reset">
                <i class="bi bi-facebook"></i>
              </Link>
              <Link href="" className="me-4 text-reset">
                <i class="bi bi-twitter"></i>
              </Link>
              <Link href="" className="me-4 text-reset">
                <i class="bi bi-google"></i>
              </Link>
              <Link href="" className="me-4 text-reset">
                <i class="bi bi-instagram"></i>
              </Link>
              <Link href="" className="me-4 text-reset">
                <i class="bi bi-linkedin"></i>
              </Link>
              <Link href="" className="me-4 text-reset">
                <i class="bi bi-github"></i>
              </Link>
            </div>
          </section>

          <section className="">
            <div className="text-center text-md-start mt-5">
              <div className="mt-3">
                <Row>
                  <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      <div icon="gem" className="me-3" />
                      <b>NHÓM 2 - SHOP</b>
                    </h6>
                    <p>Xin chào cảm ơn bạn đã đến với trang chúng mình...</p>
                  </Col>

                  <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Name
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Name
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Name
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Name
                      </a>
                    </p>
                  </Col>

                  <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Useful links
                    </h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Pricing
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Settings
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Orders
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Help
                      </a>
                    </p>
                  </Col>

                  <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p>
                      <div icon="home" className="me-2" />
                      CÔNG TY WINDOSOFT
                    </p>
                    <p>
                      <div icon="envelope" className="me-3" />
                      TẦNG 10 TÒA NHÀ VNPT
                    </p>
                    <p>
                      <div icon="phone" className="me-3" /> + 034 234 567 88
                    </p>
                    <p>
                      <div icon="print" className="me-3" /> + 034 234 567 89
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2022 Copyright:
            <Link className="text-reset fw-bold" href="#">
              nhóm 2
            </Link>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Footer;
