import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const FooterComponent = () => {
  return (
    <div className="footer p-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Ngoding Aja</h3>
            <p className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur itaque, sit illo odio animi fugiat nam voluptatum nemo
              ea optio.
            </p>
            <div className="no mb-1 mt-4">
              <a
                href="https://api.whatsapp.com/send?phone=6281374582328"
                className="text-decoration-none"
              >
                <i className="fab fa-whatsapp"></i>
                <p className="m-0">+62 813-7458-2328</p>
              </a>
            </div>

            <div className="mail">
              <a
                href="mailto:acepiwwit@gmail.com"
                className="text-decoration-none"
              >
                <i className="far fa-envelope"></i>
                <p className="m-0">acepiwwit@gmail.com</p>
              </a>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="/">Home</Link>
            <Link to="/kelas">Kelas</Link>
            <Link to="/testimonial">Testimonial</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/syaratketen">Syarat & Ketentuan</Link>
          </Col>

          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
            <div className="subscribe">
              <input type="text" placeholder="subscribe..." />
              <button className="btn btn-danger rounded-end rounded-0">
                Subscribe
              </button>
            </div>
            <div className="social mt-3">
              <a
                href="https://www.instagram.com/zikrimuhammadmaulana_/"
                target="blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://github.com/zikr444" target="blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold"> Zikri Muhammad Maulana </span>, All
              Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent
