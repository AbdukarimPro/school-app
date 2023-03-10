import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./footer.css"

function Footer() {
  return (
    <footer>
        <Row>
          <Col>
            <div
              className="text-center p-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
              © 2023 Copyright: 
              <a className="text-reset fw-bold" href="https://links-abdukarim.netlify.app/">
                Abdukarim Karshiev
              </a>
            </div>
          </Col>
        </Row>
    </footer>
  );
}

export default Footer;
