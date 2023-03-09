import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./courses.css";

const CoursesData = [
  {
    number: "1",
    sub: "Ona tili va Adabiyot",
    teach: "Norqo'chqorova Dulfuza",
    date: "Dushanba-Chorshanba (13:15-14:00)",
  },
  {
    number: "2",
    sub: "Rus Tili",
    teach: "Boltayeva Laylo",
    date: "Dushanba-Payshanba (14:00-14:45)",
  },
  {
    number: "3",
    sub: "Ingliz Tili",
    teach: "Qilicheva Nargiza",
    date: "Seshanba-Juma (14:00-14:45)",
  },
  {
    number: "4",
    sub: "Matematika va Informatika",
    teach: "Jo'rayeva Sapartosh",
    date: "Seshanba-Shanba (14:00-14:45)",
  },
  {
    number: "5",
    sub: "Fizika",
    teach: "Kabilova Feruza",
    date: "Seshanba-Payshanba (14:00-14:45)",
  },
  {
    number: "6",
    sub: "Biologiya",
    teach: "Noraliyeva Nargiza",
    date: "Seshanba-Juma (14:00-14:45)",
  },
  {
    number: "7",
    sub: "Kimyo",
    teach: "Tojiyev Husan",
    date: "Corshanba-Juma (14:00-14:45)",
  },
  {
    number: "8",
    sub: "Geografiya",
    teach: "Esanova Gavhar",
    date: "Seshanba-Payshanba (14:00-14:45)",
  },
  {
    number: "9",
    sub: "IBA",
    teach: "Mamarajabov Chori",
    date: "Seshanba-Payshanba (14:00-14:45)",
  },
  {
    number: "10",
    sub: "Texnologiya",
    teach: "Mirzayev Otabek",
    date: "Dushanba-Juma (14:00-14:45)",
  },
  {
    number: "11",
    sub: "Rasm va Chizmachilik",
    teach: "Sattarova Dilfuza",
    date: "Dushanba-Juma (14:00-14:45)",
  },
  {
    number: "12",
    sub: "Musiqa",
    teach: "Sariyev Abduxoliq",
    date: "Seshanba-Payshanba (14:00-14:45)",
  },
  {
    number: "13",
    sub: "Tarix",
    teach: "Taylakov Elmurod",
    date: "Dushanba-Chorshanba (14:00-14:45)",
  },
];

const Courses = () => {
  return (
    <section className="courses">
      <Container data-aos="fade-up" data-aos-duration="3000">
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-100">
                <h2>To'garaklar</h2>
                <p>
                  33-maktab tomonidan tashkil etilgan to'garaklar haqida
                  ma'lumotlar.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">T/R</th>
              <th scope="col">Fan Nomi</th>
              <th scope="col">Fan O'qituvchisi</th>
              <th scope="col">Dars Vaqti</th>
            </tr>
          </thead>

          {CoursesData.map((item, index) => (
            <tbody>
              <tr>
                <th scope="row">{item.number}</th>
                <td>{item.sub}</td>
                <td>{item.teach}</td>
                <td>{item.date}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </Container>
    </section>
  );
};
export default Courses;
