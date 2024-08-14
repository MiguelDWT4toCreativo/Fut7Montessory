import React from "react";
import { Accordion, Row, Table, Col, Form, Nav, Breadcrumb } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Faq() {
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-faq p-4 p-lg-5">
       {/** <ol className="breadcrumb fs-sm mb-2">
          <Breadcrumb.Item>Pages</Breadcrumb.Item>
          <Breadcrumb.Item>Other Pages</Breadcrumb.Item>
          <Breadcrumb.Item active>FAQ</Breadcrumb.Item>
        </ol> */}
        <h2 className="main-title mb-3">Reglamentos</h2>

        <Row className="g-5">
          <Col xl>
            <p className="text-secondary mb-4"></p>

            {/**<div className="form-search py-2 mb-5">
              <i className="ri-search-line"></i>
              <Form.Control type="text" placeholder="Search" />
            </div> */}

            <Accordion defaultActiveKey="0" className="accordion-faq">

            <Accordion.Item eventKey="0">
                <Accordion.Header><i class="ri-reserved-line"></i> &nbsp; Política de Reservas</Accordion.Header>
                <Accordion.Body>
                  <p><strong>Límite de Personas:</strong> </p>                    
                    <p>Cada reserva o renta de cancha está limitada a un máximo de 14 personas por cancha.</p>
                    <p></p>  

                  <p><strong>Horarios y Tarifas:</strong></p>
                  <p>Los horarios oficiales para la reserva o renta de la cancha son los siguientes:</p>
                  <Table className="table-agent mb-5" responsive>
                    <thead>
                      <tr>                        
                        <th>Cantidad de horas</th>
                        <th>Precio</th>                                            
                      </tr>
                    </thead>
                    <tbody>
                    {[
                      {
                        "id": "1 hora",                       
                        "quota": '$500.00',//Monto                        
                      },{
                        "id": "1 hora y media",                       
                        "quota": '$750.00',//Monto                        
                      },{
                        "id": "2 horas",                       
                        "quota": '$800.00',//Monto                        
                      }, 
                    ].map((item, index) => (
                      <tr key={index}>                       
                        <td><span className="ff-numerals">{item.id}</span></td>                        
                        <td><span className="ff-numerals">{item.quota}</span></td>                                                                       
                      </tr>
                    ))}
                  </tbody>
                  </Table>

                                    
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><i class="ri-bank-card-line"></i> &nbsp; Política de Pagos</Accordion.Header>
                <Accordion.Body>
                  <p><strong>Opciones de Pago:</strong> </p>                    
                    <p>Al realizar una nueva reserva, el cliente podrá elegir entre dos métodos de pago...</p>
                    <ul>                     
                        <li>Oxxo</li>
                        <li>Tarjeta</li>                                             
                    </ul>
                  <p> <strong>Tiempo de Confirmación:</strong> </p>                    
                    <ul>
                      <li>El proceso de pago tendrá un tiempo de <strong>espera de 1 hora</strong> para reflejarse en el sistema. Durante este tiempo, la reserva se mantendrá <strong>
                      <a href="#">pendiente</a></strong> y el horario seleccionado será bloqueado para otros usuarios.</li>                      
                      <li>Si después del tiempo de espera de 1 hora no se ha confirmado el pago, la reserva de la cancha se eliminará, y el horario seleccionado será liberado como disponible para cualquier otro usuario.</li>
                      </ul>                     
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header><i class="ri-wallet-3-line"></i> &nbsp; Política de Devoluciones</Accordion.Header>
                <Accordion.Body>
                  <p><strong>Cancelación con más de 24 horas de antelación:</strong> </p>                    
                    <ul>
                      <li>Si el cliente desea cancelar su reserva y lo hace con al menos 24 horas de antelación al evento, se le reembolsará el 100% del monto pagado.</li>                      
                    </ul>
                  <p> <strong>Cancelación con menos de 24 horas de antelación:</strong> </p>                    
                    <ul>
                      <li>Si el cliente cancela su reserva con menos de 24 horas de antelación al evento, se le reembolsará solo el 50% del monto pagado.</li>                      
                    </ul>                          
                </Accordion.Body>
              </Accordion.Item>


              {/** <Accordion.Item eventKey="2">
                <Accordion.Header>How do I access my tax summary?</Accordion.Header>
                <Accordion.Body>
                  <p>Tax summaries are available electronically from your account settings, but we've made a slight change in how you access them to help protect your information.</p>
                  <p><strong>Please follow these steps to view your tax summary</strong></p>
                  <ol>
                    <li>123.</li>
                  </ol>
                  <p className="mb-0"><i><strong>Please note:</strong> You can opt-out of having your tax summary available digitally at any time, as well as disabling 2FA, however, we don't recommend this.</i></p>
                  <p><i>If required by law, we may deduct or withhold taxes (including withholding tax) in connection with your being an author. If so, we will give you relevant document that's required by law about the deduction or withholding (like documentation allowing you to access rebates or credits, or to manage your tax affairs).</i></p>
                  <ul>
                    <li>Some countries, such as Poland, require customers to submit certain tax information that includes information about where they have purchased from, and how much they paid.</li>
                    <li>Some companies, such as US companies, may have a code of business conduct that requires proper certification from you as to your tax residency status.</li>
                  </ul>
                  <p>It is Envato's policy to suspend access to and prohibit the removal of funds from author accounts that Envato determines are related to individuals located in or associated with restricted countries. Funds held in suspended accounts will be held by Envato until the user is permitted to receive them. If you believe your account has been suspended in error, please <a href="/">Contact Us</a> immediately.</p>
                </Accordion.Body>
              </Accordion.Item>     */}







                       
            </Accordion>
          </Col>
         {/** <Col md="6" lg="7" xl="4" xxl="3">
            <h5 className="section-title mb-4">NPM Installation</h5>

            <Nav className="nav-classic">
              <Nav.Link href=""><span>Common errors when intalling NPM</span></Nav.Link>
              <Nav.Link href=""><span>NPM for Windows</span></Nav.Link>
              <Nav.Link href=""><span>Cannot install npm in Mac</span></Nav.Link>
              <Nav.Link href=""><span>NPM does not recognize in local</span></Nav.Link>
              <Nav.Link href=""><span>NPM version not showing when doing command</span></Nav.Link>
            </Nav>

            <hr className="my-4 opacity-0" />

            <h5 className="section-title mb-4">Bootstrap Installation</h5>
            <Nav className="nav-classic">
              <Nav.Link href=""><span>Common errors when intalling Bootstrap</span></Nav.Link>
              <Nav.Link href=""><span>Migrating from Bootstrap 4</span></Nav.Link>
              <Nav.Link href=""><span>Bootstrap using Webpack</span></Nav.Link>
              <Nav.Link href=""><span>Bootstrap react components</span></Nav.Link>
              <Nav.Link href=""><span>Example of bootsrap page using navbar</span></Nav.Link>
            </Nav>

            <hr className="my-4 opacity-0" />

            <h5 className="section-title mb-4">SASS Customization</h5>
            <Nav className="nav-classic">
              <Nav.Link href=""><span>Minimize sass to css without bootstrap</span></Nav.Link>
              <Nav.Link href=""><span>Adding more utilities classes in sass</span></Nav.Link>
            </Nav>
          </Col> */}
        </Row>
      </div>

      <Footer />
    </React.Fragment>
  );
}