import React from "react";
import { Accordion, Row, Table, Col, Form, Nav, Breadcrumb } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function PrivacyPolicies() {
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-faq p-4 p-lg-5">
        <h2 className="main-title mb-3">Políticas de Privacidad</h2>

        <Row className="g-5">
          <Col xl>
            <p className="text-secondary mb-4"></p>

            <Accordion defaultActiveKey="0" className="accordion-faq">

              <Accordion.Item eventKey="0">
                <Accordion.Header><i class="ri-reserved-line"></i> &nbsp; Política de Privacidad</Accordion.Header>
                <Accordion.Body>
                  {/* <p><strong>Límite de Personas:</strong> </p> */}
                  <p>Como resultado del ingreso, consulta o utilización del portal https://teseodata.com/ (el “Portal) o de los servicios y Contenidos que en el Portal se brindan o muestran, Usted, como usuario del Portal (el “Usuario se somete y adhiere a, y acepta plenamente sin reserva alguna los términos además de estar obligado a cumplir con todos y cada uno de los términos, condiciones y demás disposiciones incluidas o referidas en (i) el Aviso Legal del Portal, (ii) el presente Aviso Legal de Política de Confidencialidad de Datos Personales del Portal (en lo sucesivo referida como la “Política de Confidencialidad), cualquier otro Aviso del Portal que se encuentre vigente en el momento mismo en que el Usuario acceda al Portal y (iii) cuando aplique, el Contrato de Prestación de Servicios con base en el cual Usted solicita el acceso a los contenidos del Portal de acceso está restringido sólo a usuarios autorizados por suscriptores que tengan celebrado un Contrato de Prestación de Servicios con TESEO DATA. Salvo que en este aviso se disponga otra cosa, los términos con inicial en mayúscula tienen el significado que se les da en el Aviso Legal para la Página de Internet https://teseodata.com/</p>
                  <p>En el momento en que el Usuario proporcione a TESEO DATA cualesquiera datos personales a través de los formularios disponibles en el Portal o de cualquier otra forma, el Usuario se somete y adhiere a, y acepta plenamente sin reserva alguna, el estar sujeto a los términos de la presente Política de Confidencialidad. Adicionalmente a lo dispuesto en los Avisos del Portal y el Contrato de Prestación de Servicios, el Usuario se obliga al cumplimiento de cualesquiera otros términos y condiciones particulares bajo las cuales se rijan los Servicios del Portal, por lo que el Usuario reconoce que, previamente a, y como condición para, la consulta o utilización de los Servicios del Portal, leerá y aceptará plenamente y sin reservas las condiciones particulares que rijan la utilización cualquiera de los Servicios del Portal.</p>
                  <p>La presente Política de Confidencialidad forma parte de los Avisos del Portal y complementa y forma parte del Aviso Legal del Portal y del Contrato de Prestación de Servicios antes referido. Sus datos personales serán recabados, usados, divulgados, almacenados, accedidos, manejados, aprovechados y, en su caso, transferidos (el Tratamiento) a la base de datos controlada y utilizada por TESEO DATA” y utilizados de conformidad con los términos y condiciones previstos en esta Política de Confidencialidad y en la Ley Federal de Protección Datos Personales en Posesión de los Particulares (la Ley) y su Reglamento (el Reglamento). Se le informa que TESEO DATA con oficinas ubicadas en Calle Puebla 603, Colonia Cubitos, Pachuca de Soto.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><i class="ri-bank-card-line"></i> &nbsp; Datos Personales</Accordion.Header>
                <Accordion.Body>
                  <p>TESEO DATA podrá recabar y obtener sus datos personales a través de:</p>

                  <p>1. Los formatos físicos o electrónicos que emita TESEO DATA, para que este último pueda evaluar (a) una posible relación comercial o de negocio con el Usuario y/o (b) el acceder a brindar al Usuario cualquiera de los Servicios del Portal;</p>

                  <p>2. Cualquier otro documento que contenga dichos datos que el Usuario proporcione a TESEO DATA para que este último evalúe (a) una posible relación comercial o de negocio con el Usuario y/o (b) el acceder a brindar cualquiera de los Servicios del Portal al Usuario.</p>

                  <p>3. Cualquier acuerdo celebrado entre el Usuario y TESEO DATA por escrito, por medios electrónicos u otra tecnología;</p>

                  <p>4. La interacción del Usuario con el Portal, los Contenidos o los Servicios del Portal, por ejemplo, a través de lo que se conoce como cookies o cualquier otro medio tecnológico que lo permita. El Usuario autoriza a TESEO DATA, ya sea por sí o a través de terceros con los que TESEO DATA mantenga relaciones comerciales, el uso de las herramientas tecnológicas disponibles que permitan identificar cuando el Usuario a ingresado al Portal a través de su navegador de Internet (ejemplo: las cookies) y proporcionan otros datos del Usuario. El Usuario tiene la posibilidad de configurar su navegador de Internet para ser avisado en pantalla de la recepción de cookies y para impedir la instalación de cookies en su disco duro.</p>

                  <p>Para efectos de la Ley, respecto de aquellos Usuarios personas físicas los datos personales que están o pudieran estar sujetos a Tratamiento por TESEO DATA son: Nombre; Fecha de Nacimiento, Domicilio, Nacionalidad y Correo Electrónico, así como cualquier otro dato personal y financiero o patrimonial que sea necesario para cumplir con las finalidades que se señalan más adelante y/o la relación comercial, de negocios o de servicios que exista entre las partes.</p>

                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header><i class="ri-wallet-3-line"></i> &nbsp; Finalidades del tratamiento de datos personales</Accordion.Header>
                <Accordion.Body>
                  <p>1. El Usuario reconoce y acepta que TESEO DATA podrá utilizar toda información que recabe del Usuario para efecto de las siguientes finalidades que son necesarias y dan origen a la relación que tiene con TESEO DATA:</p>
                  <p>Examinar una posible relación comercial entre el Usuario y TESEO DATA, y en caso de que se concrete o formalice dicha relación darle Tratamiento a sus datos personales para dar cumplimiento a las obligaciones asumidas por TESEO DATA; la comercialización de los productos y/o la prestación de servicios por parte de TESEO DATA; el desarrollo e implementación de programas de mejora de servicios o productos; divulgar o transferir los datos personales con sus licenciatarios y socios de negocio y demás terceros no relacionados con TESEO DATA que requieran del conocimiento de dichos datos personales paracumplir con las finalidades antes mencionados; y divulgar cualquier tipo de información del Usuario para cumplir con la legislación, reglamento o disposición aplicable o como resultado de requerimiento emitido por autoridad judicial o administrativa, así como para ejecutar y hacer valer ante cualquier tercero o autoridad gubernamental competente los derechos de TESEO DATA que deriven de los contratos, convenios, o acuerdos celebrados entre TESEO DATA y el Usuario, los términos y condiciones del Aviso Legal del Portal, la presente Política de Confidencialidad y cualquier otro término y condición establecido en el Portal o en los Avisos del Portal.</p>
                  <p>2. Adicionalmente, TESEO DATA podrá utilizar sus datos personal para: El desarrollo e implementación de estrategias comerciales o de mercadotecnia relacionadas con los productos y/o servicios ofrecidos por TESEO DATA; determinar las preferencias de consumo del Usuario y la creación de estadísticas; crear y enviar avisos noticiosos, correos electrónicos, u otras comunicaciones similares que contengan información relacionada con los productos y servicios que constituyen el giro de negocio de TESEO DATA o de terceros con los que este último tenga relaciones de negocio; utilizar direcciones IP (Internet Protocol) bajo las cuales el Usuario acceda al Portal para analizar tendencias, para administrar los sitios de Internet de TESEO DATA, para seguir patrones de tráfico y/o para recopilar la información demográfica de los Usuarios; compartir o divulgar este tipo de información con sus licenciatarios y socios de negocio y demás terceros no relacionados con TESEO DATA para cumplir con las finalidades mencionadas en los incisos anteriores.</p>

                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="3">
                <Accordion.Header><i class="ri-wallet-3-line"></i> &nbsp; Tratamiento de datos personales</Accordion.Header>
                <Accordion.Body>
                  <p>El Tratamiento de los datos personales estará sujeto estrictamente a las finalidades señaladas en el apartado Finalidades del Tratamiento de Datos Personales y, con excepción de los terceros autorizados conforme al presente, sólo será realizado por el personal de TESEO DATA que deba conocerlos a fin de cumplir con sus labores. Los datos personales no estarán sujetos a comercialización, no obstante ello el Tratamiento o transferencia podrá realizarse sin consentimiento del Usuario titular en aquellos casos permitidos por la Ley.</p>
                  <p>El Usuario reconoce que TESEO DATA ha establecido y mantiene medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento a dichos datos por terceros no autorizados, no menores a aquellas medidas que TESEO DATA mantiene para el manejo de su propia información. No obstante, TESEO DATA no garantiza en forma alguna que terceros no autorizados no podrán acceder a, y/o tener conocimiento sobre, (i) la clase, condiciones, características y circunstancias de uso del Portal y de los Servicios del Portal por parte del Usuario o (ii) la información personal de este último.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header><i class="ri-wallet-3-line"></i> &nbsp; Transferencia de datos personales</Accordion.Header>
                <Accordion.Body>
                  <p>El personal de TESEO DATA y los terceros que reciban datos personales para realizar el Tratamiento conforme a las finalidades de la presente Política de Confidencialidad recibirán, conjuntamente con los datos personales, la presente Política de Confidencialidad y, en consecuencia, estarán sometidos a su cumplimiento.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header><i class="ri-wallet-3-line"></i> &nbsp; Medidas de seguridad para protección de datos personales</Accordion.Header>
                <Accordion.Body>
                  <p>En atención a la responsabilidad que deriva del Tratamiento de datos personales, TESEO DATA ha dispuesto y continuará implementando medidas administrativas, técnicas y físicas conforme a estrictos estándares de seguridad que limitan el Tratamiento de los datos personales solamente a las finalidades aquí previstas, así como para protegerlos de, entre otros, pérdida, alteración, destrucción y Tratamiento no autorizados. Las medidas de seguridad, incluyen, el resguardo con sistemas de seguridad de expedientes electrónicos, el control de acceso o ingreso y de privilegios en las bases de datos que contengan datos personales para evitar la pérdida, acceso, uso, modificación, alteración, o tratamiento de los mismos en forma no autorizada o disconforme con las finalidades de la presente Política de Confidencialidad.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header><i class="ri-wallet-3-line"></i> &nbsp; Derechos del usuario titular de datos personales</Accordion.Header>
                <Accordion.Body>
                  <p>El Usuario titular de datos personales, tendrá derecho, en cualquier momento, a acceder, rectificar, cancelar u oponerse al Tratamiento de sus datos personales, conforme a los términos y sujetos a las excepciones establecidas en la Ley y cualquier otra disposición legal aplicable. Los derechos antes mencionados podrán ejercerse enviando a través de nuestra página de Internet https://teseodata.com/ el Formulario de Uso Múltiple para el Ejercicio de Derechos ARCO o para la Revocación de Consentimiento que ahí se encuentra, debidamente requisitado y firmado; indicando y/o adjuntando, según corresponda, la información y/o documentación que se señala en dicha solicitud.</p>
                  <p>Asimismo el titular podrá limitar en cualquier momento el Tratamiento de sus datos personales para los efectos de las finalidades descritas en el apartado 2 de las sección Finalidades del Tratamiento de Datos Personales, enviando una correo electrónico a la siguiente dirección electrónica  contactoteseodata@gmail.com.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                <Accordion.Header><i class="ri-wallet-3-line"></i> &nbsp; Modificaciones del aviso</Accordion.Header>
                <Accordion.Body>
                  <p>El presente Aviso podrá ser revisado y modificado periódicamente a discreción de TESEO DATA para adaptarlo a cambios en los procedimientos y prácticas internas de TESEO DATA así como para adaptarlo a las reformas legales que entren en vigor, sin que esto implique la modificación de las finalidades de la Política de Confidencialidad. Las modificaciones a la Política de Confidencialidad estarán a disposición del Usuario titular de los datos personales en nuestra página de Internet https://teseodata.com/ serán enviadas por correo electrónico al Usuario titular en caso de que lo requiera a TESEO DATA mediante solicitud enviada al correo electrónico contactoteseodata@gmail.com.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="8">
                <Accordion.Header><i class="ri-wallet-3-line"></i> &nbsp; Consentimiento del usuario titular de los datos personales</Accordion.Header>
                <Accordion.Body>
                  <p>La entrega a TESEO DATA de cualquier solicitud o documento que contenga datos personales para el ingreso, consulta o utilización del Portal o de los Servicios del Portal ya sea por el Usuario o un representante legal, será considerada como una constancia del consentimiento del Usuario para el Tratamiento de sus datos personales y para su transferencia a terceros conforme a las finalidades de la presente Política de Confidencialidad.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="9">
                <Accordion.Header><i class="ri-wallet-3-line"></i> &nbsp; Revocación del consentimineto del usuario titular de los datos personales</Accordion.Header>
                <Accordion.Body>
                  <p>El Usuario de los datos personales podrá revocar en cualquier momento su consentimiento para el Tratamiento de sus datos personales, sin que se le atribuyen efectos retroactivos, enviando a través de nuestra página de Internet https://teseodata.com/ el Formulario de Uso Múltiple para el Ejercicio de Derechos ARCO o para la Revocación de Consentimiento que ahí se encuentra, debidamente requisitado y firmado; indicando y/o adjuntando, según corresponda, la información y/o documentación que se señala en dicha solicitud.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="10">
                <Accordion.Header><i class="ri-wallet-3-line"></i> &nbsp; Limitaciòn al tratamiento de datos y revocación del consentimineto</Accordion.Header>
                <Accordion.Body>
                  <p>TESEO DATA se reserva el derecho de suspender el acceso del Usuario a cualquier Servicio del Portal cuando el ejercicio de los derechos del Usuario o la revocación del consentimiento del Usuario para el Tratamiento de sus datos personales impida o dificulte, a juicio de TESEO DATA, la prestación de los Servicios del Portal, en cuyo caso el Usuario permanecerá obligado a continuar pagando en tiempo la contraprestación por el correspondiente Servicio del Portal de que se trate hasta la conclusión de la vigencia del contrato respectivo (ej. Duración del Servicio) con independencia de que el Usuario esté impedido a utilizar el Servicio del Portal de que se trate por las causas previstas en este párrafo.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="11">
                <Accordion.Header><i class="ri-wallet-3-line"></i> &nbsp; Legislacion aplicable</Accordion.Header>
                <Accordion.Body>
                  <p>El presente Aviso Legal se rige por las disposiciones legales aplicables en la República Mexicana. Para el caso de cualquier disputa, controversia o reclamo que surja entre el Usuario y TESEO DATA, éstos se someten a la jurisdicción de los tribunales ubicados en la ciudad de Pachuca de Soto, Hidalgo renunciando ambos a cualquier otra jurisdicción que pudiera corresponderles por razón de su domicilio actual o futuro o por cualquier otra causa.</p>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </Col>

        </Row>
      </div>

      <Footer />
    </React.Fragment>
  );
}