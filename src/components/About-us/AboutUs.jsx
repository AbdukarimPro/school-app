import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/33school.jpg";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container data-aos="fade-up" data-aos-duration="3000">
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>Maktab Haqida</h2>
              <p>
                Maktab 1973-yil tashkil topgan va maktab rahbari Toshboyeva
                Zulfiya bo'lgan.Yillar davomida maktab nomi ozgarib
                kelgan.1983-yildan boshlab zamonaviy tepdagi 960 o'ringa
                moljallangan maktab qurilib ishga topshirilgan.Zamonaviy tepdagi
                maktabni 1983-2004 yillargacha Xudoyqulov Ravshan
                boshqargan.2004-2008-yilgacha Ibraim Qoraxonov
                boshqargan.2008-2018-yillargacha Faxriddin Jumayev maktabga
                rahbar bo'lgan.2018-yildan hozirgacha Ergashev Eshmamat maktab
                direktori lavozimida ishlab kelmoqda.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={80} duration={2} suffix="Nafar" />
                    </span>

                    <p className="counter__title">Maktab o'qituvchi soni</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp
                        start={0}
                        end={1500}
                        duration={2}
                        suffix="Nafar"
                      />
                    </span>

                    <p className="counter__title">Maktab o'quvchilar soni</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={84} duration={2} suffix="Nafar" />
                    </span>

                    <p className="counter__title">
                      2021-2022 o'quv yillida <br />
                      bitirgan o'quvchilar soni
                    </p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={36} duration={2} suffix="Nafar" />
                    </span>

                    <p className="counter__title">
                      2021-2022 o'quv yillida <br />
                      oliy ta'lim muassasiga <br /> o'qishga kirgan oquvchilar soni
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
