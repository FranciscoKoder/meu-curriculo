import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import '../css/PageOne.css';
function PageOne() {
    return (
        <Container fluid className="min-vh-100 ">
            <Row>
                {/* Coluna da esquerda */}
                <Col md={4} className="bg-dark1 text-white d-flex flex-column align-items-center py-4">
                    <img
                        src="../meucurriculo/img/dev.jpg"
                        alt="Perfil"
                        className="rounded-circle mb-3"
                        style={{ width: 120, height: 120, objectFit: 'cover', border: '4px solid #fff' }}
                    />
                    <h3 className="fw-bold text-center">VITOR<br />FRANCISCO F.<br />SOUZA</h3>
                    <hr className="w-75 border-4 linha1" />
                    <div className="w-75">
                        <h6 className="fw-bold mt-4">PERFIL PESSOAL</h6>
                        <p style={{ fontSize: '0.95rem' }}>
                            Como um estudante aplicado por natureza, estou em busca de novas
                            experiências e oportunidades de trabalho para consolidar meus conhecimentos.
                            <br /><br />
                            Sou motivado, pró-ativo e sempre em busca de aprendizado. Atualmente curso Ciência da Computação na UEPB e estou aberto a novos desafios.
                        </p>
                        <h6 className="fw-bold mt-4">HABILIDADES E COMPETÊNCIAS</h6>
                        <ul className="mb-2" style={{ fontSize: '0.95rem', paddingLeft: '1.2rem' }}>
                            <li>Resiliência</li>
                            <li>Trabalho em equipe</li>
                            <li>Design Técnico</li>
                            <li>Inglês Intermediário</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe After Effect</li>
                            <li>Adobe Photoshop</li>
                            <li>Vegas Pro</li>
                        </ul>
                        <h6 className="fw-bold mt-4">CONTATO</h6>
                        <div style={{ fontSize: '0.95rem' }}>
                            <div>Telefone: (83) 98708-1143</div>
                            <div>Email: vitorfariasdev@gmail.com</div>
                            <div>
                                <a
                                    href="https://github.com/dvlpchico-s?tab=repositories"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="fw-bold text-white"
                                >
                                    GitHub
                                </a>
                            </div>
                            <div>                                <a
                                href="https://www.linkedin.com/in/vitor-fariasprogram/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="fw-bold text-white"
                            >
                                LinkedIn
                            </a>
                            </div>
                        </div>
                    </div>
                </Col>

                {/* Coluna da direita */}
                <Col md={8} className="bg-white py-4 px-5">
                    <Card className="mb-4 border-0">
                        <Card.Body>
                            <div className="p-3 rounded mb-3">
                                <h6 className="fw-bold bg-warning bg-opacity-50 mb-2 py-2 px-3">HISTÓRICO EDUCACIONAL</h6>
                                <div>
                                    <strong>Universidade Estadual da Paraíba-UEPB</strong><br />
                                    Bacharelando em Ciências da Computação 5° Período.<br />
                                    <span style={{ fontSize: '0.95rem' }}>
                                        JAVA, HTML, CSS, PYTHON, C, MYSQL, VueJS, REACT, GIT E GITHUB.
                                    </span>
                                </div>
                                <div className="mt-3">
                                    <strong>Escola de Ensino Médio ECIT Braulio Maia Jr</strong><br />
                                    Formado em 2021
                                </div>
                            </div>
                            <div className=" p-3 rounded">
                                <h6 className="fw-bold bg-warning bg-opacity-50 mb-2 py-2 px-3">SOBRE MIM</h6>
                                <p style={{ fontSize: '0.97rem' }}>
                                    Sou desenvolvedor de software com experiência em diversas linguagens de programação, como Java, Python e C, aplicando boas práticas, refatoração de código e princípios de arquitetura limpa. No Frontend, atuo no desenvolvimento de interfaces dinâmicas e responsivas utilizando Vue.js e React, criando componentes reutilizáveis, gerenciando estados com Vuex e Redux, e integrando APIs RESTful e GraphQL. Também trabalho com Node.js para construir aplicações full-stack, desenvolvendo APIs eficientes com Express.js e Socket.io para funcionalidades em tempo real.

                                    No Backend, tenho experiência com PHP e MySQL, desenvolvendo sistemas robustos com arquitetura MVC, queries otimizadas e stored procedures. Utilizo Laravel e Symfony para construção de APIs seguras e escaláveis, além de trabalhar com bancos de dados relacionais para manipulação de grandes volumes de dados, incluindo migrações, backups e otimização de consultas.

                                    Minha atuação em IoT e sistemas embarcados inclui o desenvolvimento de soluções com ESP32, ESP8266 e módulos GSM (SIM800L), integrando hardware e software por meio de bibliotecas como Firebase Arduino Client e Adafruit MQTT para comunicação em nuvem e monitoramento remoto. Além disso, possuo conhecimento em redes e protocolos de comunicação, como HL7, MQTT e HTTP, utilizando ferramentas como Wireshark e Netcat para análise de tráfego e troubleshooting.

                                    Sou adepto da modelagem de software com UML, aplicando diagramas de classe, sequência e casos de uso para melhorar a clareza e a manutenibilidade dos projetos. Minha abordagem combina raciocínio lógico, resolução de problemas complexos e proatividade, sempre buscando integrar novas tecnologias, como computação em nuvem e microsserviços, para criar soluções inovadoras.

                                    Estou constantemente me atualizando e buscando desafios que unam Frontend, Backend e sistemas embarcados, com foco em desempenho, segurança e experiência do usuário.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PageOne;