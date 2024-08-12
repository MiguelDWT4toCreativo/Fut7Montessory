import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Card, Col, Nav, Row } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";
import Avatar from "../components/Avatar";
import ReactApexChart from "react-apexcharts";
import { dp3 } from "../data/DashboardData";



import img1 from "../assets/img/img1.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import img9 from "../assets/img/img9.jpg";
import img10 from "../assets/img/img10.jpg";
import img11 from "../assets/img/img11.jpg";
import img12 from "../assets/img/img12.jpg";


const seriesSix = [{
  name: 'series1',
  data: dp3
}, {
  name: 'series2',
  data: dp3
}];
const optionSix = {
  chart: {
    parentHeightOffset: 0,
    toolbar: {
      show: false
    },
    stacked: true,
    sparkline: {
      enabled: true
    }
  },
  colors: ['#506fd9', '#85b6ff'],
  stroke: {
    curve: 'straight',
    width: [0, 0]
  },
  yaxis: {
    min: 0,
    max: 60,
    show: false
  },
  xaxis: {
    min: 20,
    max: 30
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.75,
      opacityTo: 0.25,
    }
  },
  legend: { show: false },
  tooltip: { enabled: false }
};




export default function Profile() {
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main p-4 p-lg-5">
        <Row className="g-5">
          <Col xl>
            <div className="media-profile mb-5">
              <div className="media-img mb-2 mb-sm-0">
                <img src={img1} className="img-fluid" alt="..." />
              </div>
              <div className="media-body">
                <Row>
                  <Col>
                    <h5 className="media-name">Usuario</h5>
                    <p className="d-flex gap-2 mb-4"><i className="ri-user-line"></i> Tipo de usuario</p>
                  </Col>

                  <Col className="d-flex">
                    {/**<Button variant="primary" className="px-5"><i className="ri-delete-bin-line"></i> Eliminar cuenta</Button> 
                      <Button variant="" className="btn-icon btn-primary ms-1"><i className="ri-edit-line"></i></Button>
                      <Button variant="" className="btn-icon btn-danger ms-1"><i className="ri-delete-bin-line"></i></Button>*/}
                  </Col>
                </Row>
                <ul className="list-contact-info">
                  {/*<h5 className="section-title mb-4">Contact Information</h5>
              <li><i className="ri-building-fill"></i><span>Bay Area, San Francisco, CA</span></li>
              <li><i className="ri-home-8-fill"></i><span>Westfield, Oakland, CA</span></li>*/}
                  <li><i className="ri-phone-fill"></i><span>(+52) 771 345 6789</span></li>
                  <li><i className="ri-mail-fill"></i><span>you@youremail.com</span></li>
                </ul>

                <hr className="my-4 opacity-0" />


                {/**<p className="mb-0">Redhead, Innovator, Saviour of Mankind, Hopeless Romantic, Attractive 20-something Yogurt Enthusiast. You can replace this with any content and adjust it as needed... <Link to="">Read more</Link></p> */}
              </div>
            </div>

            {/**<Row className="row-cols-sm-auto g-4 g-md-5 g-xl-4 g-xxl-5">
              {[
                {
                  "icon": "ri-medal-2-line",
                  "text": "5 Certificates",
                  "label": "Achievements"
                }, {
                  "icon": "ri-suitcase-line",
                  "text": "10+ Years",
                  "label": "Experience"
                }, {
                  "icon": "ri-team-line",
                  "text": "356",
                  "label": "Following"
                }, {
                  "icon": "ri-team-line",
                  "text": "1,056",
                  "label": "Followers"
                }
              ].map((profileItem, index) => (
                <Col key={index}>
                  <div className="profile-item">
                    <i className={profileItem.icon}></i>
                    <div className="profile-item-body">
                      <p>{profileItem.text}</p>
                      <span>{profileItem.label}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row> */}

            <Nav className="nav-line mt-5">
              <Nav.Link href="" className="active">Información personal</Nav.Link>
              {/**<Nav.Link href="">Personal Information</Nav.Link>
              <Nav.Link href="">Connections</Nav.Link>
              <Nav.Link href="">Profile Settings</Nav.Link> */}
            </Nav>

            {/**<div className="post-bar mt-4">
              <div className="post-bar-item gap-2">
                <i className="ri-edit-2-line"></i>
                <Link to="">Share an update</Link>
              </div>
              <div className="post-bar-item">
                <Link to=""><i className="ri-image-line"></i></Link>
              </div>
              <div className="post-bar-item">
                <Link to=""><i className="ri-vidicon-line"></i></Link>
              </div>
              <div className="post-bar-item">
                <Link to=""><i className="ri-article-line"></i></Link>
              </div>
            </div> */}


            {/**<Card className="card-post mt-4">
              <Card.Header>
                <Card.Title>Tarjeta</Card.Title>
                <Link to="" className="link-more"><i className="ri-more-2-fill"></i></Link>
              </Card.Header>
              <Card.Body>
                <div md="5" xl="5">
                  <Card className="card-one card-wallet">
                    <Card.Body>
                      <div className="finance-icon">
                        <i className="ri-mastercard-fill"></i>
                        <i className="ri-visa-line"></i>
                      </div>
                      <label className="card-title mb-1">Available Balance</label>
                      <h2 className="card-value mb-auto"><span>$</span>130,058.50</h2>

                      <label className="card-title mb-1">Account Number</label>
                      <div className="d-flex align-items-center gap-4 mb-3">
                        <div className="d-flex gap-1">
                          <span className="badge-dot"></span>
                          <span className="badge-dot"></span>
                          <span className="badge-dot"></span>
                          <span className="badge-dot"></span>
                        </div>
                        <div className="d-flex gap-1">
                          <span className="badge-dot"></span>
                          <span className="badge-dot"></span>
                          <span className="badge-dot"></span>
                          <span className="badge-dot"></span>
                        </div>
                        <div className="d-flex gap-1">
                          <span className="badge-dot"></span>
                          <span className="badge-dot"></span>
                          <span className="badge-dot"></span>
                          <span className="badge-dot"></span>
                        </div>
                        <h5 className="ff-numerals mb-0">5314</h5>
                      </div>

                      <label className="card-title mb-1">Account Name</label>
                      <h5 className="mb-0">Richard M. Christensen</h5>
                    </Card.Body>
                    <ReactApexChart series={seriesSix} options={optionSix} height={268} type="area" className="apex-chart-two" />
                  </Card>
                </div>
              </Card.Body>
            </Card>
 */}











            <Card className="card-post mt-4">
              <Card.Header>
                <Card.Title>Tarjeta</Card.Title>
                <Link to="" className="link-more"><i className="ri-more-2-fill"></i></Link>
              </Card.Header>
              <Card.Body>
                {/**<div className="post-header mb-3">
                  <Link to=""><Avatar initial="s" status="online" /></Link>
                  <div className="post-content">
                    <h6>Bethany Hartsfield</h6>
                    <span>Cigarette Butt Collector</span>
                  </div>
                  <span className="post-date">3 days ago</span>
                </div>
                <p className="post-text">Our team is expanding again. We are looking for a Product Manager and Software Engineer to drive our new aspects of our capital projects. If you're interested, please drop a comment here or simply message me. <Link to="">#softwareengineer</Link> <Link to="">#engineering</Link></p>
*/}
                <div className="post-preview">
                  <Row className="g-2">
                    <Col sm="5">
                      <div md="5" xl="5">
                        <Card className="card-one card-wallet">
                          <Card.Body>
                            <div className="finance-icon">
                              <i className="ri-mastercard-fill"></i>
                              <i className="ri-visa-line"></i>
                            </div>
                            <label className="card-title mb-1">Available Balance</label>
                            <h2 className="card-value mb-auto"><span>$</span>130,058.50</h2>

                            <label className="card-title mb-1">Account Number</label>
                            <div className="d-flex align-items-center gap-4 mb-3">
                              <div className="d-flex gap-1">
                                <span className="badge-dot"></span>
                                <span className="badge-dot"></span>
                                <span className="badge-dot"></span>
                                <span className="badge-dot"></span>
                              </div>
                              <div className="d-flex gap-1">
                                <span className="badge-dot"></span>
                                <span className="badge-dot"></span>
                                <span className="badge-dot"></span>
                                <span className="badge-dot"></span>
                              </div>
                              <div className="d-flex gap-1">
                                <span className="badge-dot"></span>
                                <span className="badge-dot"></span>
                                <span className="badge-dot"></span>
                                <span className="badge-dot"></span>
                              </div>
                              <h5 className="ff-numerals mb-0">5314</h5>
                            </div>

                            <label className="card-title mb-1">Account Name</label>
                            <h5 className="mb-0">Richard M. Christensen</h5>
                          </Card.Body>
                          <ReactApexChart series={seriesSix} options={optionSix} height={268} type="area" className="apex-chart-two" />
                        </Card>
                      </div>
                    </Col>
                    <Col sm>
                      <h5>Información bancaria: </h5>
                      {/**<p>Full-time, $60,000 - $80,000 annual</p>
                      <span>Bay Area, San Francisco, California</span> */}
                      <div className="mb-4">
                        <Row className="g-2 align-items-center mb-4">
                          <Col md="5">
                            <h6>Nombre: </h6>
                          </Col>
                          <Col md>
                            <Form.Control type="text" placeholder="Ingrese el nombre completo" />
                          </Col>
                        </Row>
                        <Row className="g-2 align-items-center mb-4">
                          <Col md="5">
                            <h6>Número de tarjeta: </h6>
                          </Col>
                          <Col md>
                            <Form.Control type="text" placeholder="Ingrese el número correctamente" />
                          </Col>
                        </Row>
                        <Row className="g-2 align-items-center mb-4">
                          <Col md="5">
                            <h6>Fecha válida: </h6>
                          </Col>
                          <Col md>
                            <Form.Control type="date" />
                          </Col>
                        </Row>
                        <Row className="g-2 align-items-center mb-4">
                          <Col md="5">
                            <h6>CVV: </h6>
                          </Col>
                          <Col md>
                            <Form.Control type="text" placeholder="Ingrese la clave correctamente" />
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
              <Card.Footer>
                {/** <Nav>
                  <Nav.Link href=""><i className="ri-thumb-up-line"></i> Like</Nav.Link>
                  <Nav.Link href=""><i className="ri-chat-1-line"></i> Comment</Nav.Link>
                  <Nav.Link href=""><i className="ri-share-forward-line"></i> Share</Nav.Link>
                </Nav> */}
              </Card.Footer>
            </Card>

            {/**<Card className="card-post mt-4">
              <Card.Header>
                <Card.Title>Work Experience</Card.Title>
                <Link to="" className="link-more"><i className="ri-more-2-fill"></i></Link>
              </Card.Header>
              <Card.Body>
                <div className="experience-item">
                  <div className="experience-icon"><i className="ri-suitcase-line"></i></div>
                  <div className="experience-body">
                    <h5>Front-End Developer</h5>
                    <p>Themepixels, Inc.</p>
                    <p>December 2020 - Present</p>
                    <ul className="mt-3">
                      <li>Leading on the architecture and approach on the ongoing and new Angular applications in the company;</li>
                      <li>Setting up expectations for the developers</li>
                      <li>Review other Angular developers' code in terms of following the standards, best practices, and expectations.</li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer>
                <Nav>
                  <Nav.Link href="">Show more experiences (4) <i className="ri-arrow-down-s-line"></i></Nav.Link>
                </Nav>
              </Card.Footer>
            </Card> */}

            {/**<Card className="card-post mt-4">
              <Card.Header>
                <Card.Title>Interests</Card.Title>
                <Link to="" className="link-more"><i className="ri-more-2-fill"></i></Link>
              </Card.Header>
              <Card.Body>
                <div className="interest-item">
                  <div className="interest-icon bg-dark"><i className="ri-github-fill"></i></div>
                  <div className="interest-body">
                    <h6>Github, Inc.</h6>
                    <p>A provider of Internet hosting for software development and version control using Git. <Link to="">Learn more</Link></p>
                  </div>
                </div>
                <div className="interest-item">
                  <div className="interest-icon bg-twitter"><i className="ri-twitter-fill"></i></div>
                  <div className="interest-body">
                    <h6>Twitter, Inc.</h6>
                    <p>An American communications company that operates the microblogging and social networking service. <Link to="">Learn more</Link></p>
                  </div>
                </div>
                <div className="interest-item">
                  <div className="interest-icon bg-amazon"><i className="ri-amazon-fill"></i></div>
                  <div className="interest-body">
                    <h6>Amazon.com, Inc.</h6>
                    <p>An American multinational technology company which focuses on e-commerce, artificial intelligence and more. <Link to="">Learn more</Link></p>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer>
                <Nav>
                  <Nav.Link href="">Show more interests (1) <i className="ri-arrow-down-s-line"></i></Nav.Link>
                </Nav>
              </Card.Footer>
            </Card> */}
          </Col>



          {/**<Col xl="4" xxl="3" className="d-none d-xl-block">
            <h5 className="section-title mb-4">Mutual Connections</h5>
            <div className="profile-mutual">
              <ul className="mutual-group mb-3">
                <li><Avatar img={img12} /></li>
                <li><Avatar img={img11} /></li>
                <li><Avatar img={img10} /></li>
                <li><Avatar img={img9} /></li>
                <li><Avatar img={img8} /></li>
              </ul>
              <h6>You have 18 mutual connection</h6>
              <p>You and Fen both know Archie Cantones, Socrates Itumay, and 17 others</p>
            </div>

            <hr className="my-4 opacity-0" />

            <h5 className="section-title mb-4">People You May Know</h5>
            <ul className="people-group">
              {[
                {
                  "avatar": img6,
                  "name": "Allan Rey Palban",
                  "position": "Senior Business Analyst"
                }, {
                  "avatar": img7,
                  "name": "Adrian Moniño",
                  "position": "Software Engineer"
                }, {
                  "avatar": img8,
                  "name": "Charlene Plateros",
                  "position": "Sales Representative"
                }, {
                  "avatar": img9,
                  "name": "Analyn Mercado",
                  "position": "Executive Assistant"
                }, {
                  "avatar": img10,
                  "name": "Rolando Paloso",
                  "position": "Senior Architect"
                }
              ].map((people, index) => (
                <li className="people-item" key={index}>
                  <Avatar img={people.avatar} />
                  <div className="people-body">
                    <h6><Link to="">{people.name}</Link></h6>
                    <span>{people.position}</span>
                  </div>
                </li>
              ))}
            </ul>

            <hr className="my-4 opacity-0" />

            <h5 className="section-title mb-4">People Also Viewed</h5>
            <ul className="people-group">
              {[
                {
                  "avatar": img11,
                  "name": "Maricel Villalon",
                  "position": "Engineering Manager"
                }, {
                  "avatar": img12,
                  "name": "Geraldine Cantones",
                  "position": "Software Architect"
                }, {
                  "avatar": img6,
                  "name": "Allan Rey Palban",
                  "position": "Senior Business Analyst"
                }, {
                  "avatar": img7,
                  "name": "Adrian Moniño",
                  "position": "Software Engineer"
                }, {
                  "avatar": img8,
                  "name": "Charlene Plateros",
                  "position": "Sales Representative"
                }
              ].map((people, index) => (
                <li className="people-item" key={index}>
                  <Avatar img={people.avatar} />
                  <div className="people-body">
                    <h6><Link to="">{people.name}</Link></h6>
                    <span>{people.position}</span>
                  </div>
                </li>
              ))}
            </ul> */}


          {/**
            <hr className="my-4 opacity-0" />

            <h5 className="section-title mb-4">Social Channel</h5>
            <ul className="list-contact-info">
              <li><i className="ri-twitter-fill"></i><span>@username</span></li>
              <li><i className="ri-instagram-fill"></i><span>@username</span></li>
              <li><i className="ri-messenger-fill"></i><span>@username</span></li>
            </ul> 
          </Col>*/}
        </Row>
        <Footer />
      </div>
    </React.Fragment>
  );
}