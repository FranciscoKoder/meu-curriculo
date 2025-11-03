import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import '../css/PageOne.css';
<script src="https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js"></script>

function PageOne() {
    return (
        <Container fluid className="min-vh-100 ">
            <Row>
                {/* Coluna da esquerda */}
                <Col md={4} className="bg-dark1 text-white d-flex flex-column align-items-center py-4">
                    <img
                        src="/meu-curriculo/img/dev.jpg"
                        alt="Perfil"
                        className="rounded-circle mb-3"
                        style={{ width: 120, height: 120, objectFit: 'cover', border: '4px solid #fff' }}
                    />
                    <h3 className="fw-bold text-center">VITOR<br />FRANCISCO F.<br />SOUZA</h3>
                    <hr className="w-75 border-4 linha1" />
                    <div className="w-75">
                        <h6 className="fw-bold mt-4">PERFIL PESSOAL</h6>
                        <p style={{ fontSize: '0.95rem' }}>
                            Como um estudante apaixonado por
                            tecnologia e inovação, estou buscando
                            ativamente uma oportunidade de
                            Trabalho na área de computação para
                            aprimorar meus conhecimentos teóricos
                            e aplicá-los em um ambiente prático.
                            Sou motivado, ávido por aprender e
                            comprometido em me desenvolver
                            como um profissional de destaque
                            nesse campo em constante evolução.
                            Cumpri estágio no núcleo de saúde e
                            tecnologia NUTES que pertence a UEPB
                            com inovações de dispositivos e
                            softwares para a área da Saúde,.

                        </p>
                        <h6 className="fw-bold mt-4">HABILIDADES E COMPETÊNCIAS</h6>
                        <ul className="mb-2" style={{ fontSize: '0.95rem', paddingLeft: '1.2rem' }}>
                            <li>Resiliência e adaptabilidade</li>
                            <li>Trabalho em equipe e comunicação clara</li>
                            <li>Conhecimentos em UI/UX (layout, hierarquia visual e padronização)</li>
                            <li>Inglês intermediário</li>
                            <li>Ferramentas de Design e Produção Visual (Illustrator, Photoshop, After Effects)</li>
                            <li>Edição e finalização de vídeo (Vegas Pro)</li>
                            <li>Desenvolvimento Frontend (React, Vue.js, Quasar)</li>
                            <li>Estruturação de interfaces com foco em usabilidade e padronização visual</li>
                            <li>Desenvolvimento Backend com PHP e MySQL</li>
                            <li>Integração e sincronização entre APIs e sistemas internos</li>
                            <li>Automação e monitoramento com ESP32 e dispositivos IoT</li>
                            <li>Versionamento e colaboração com Git e GitHub</li>
                            <li>Ferramentas de design e produção visual (Illustrator, Photoshop, After Effects)</li>
                            <li>Edição e finalização de vídeo (Vegas Pro)</li>
                            <li>Inglês intermediário</li>
                        </ul>


                        <h6 className="fw-bold mt-4">CONTATO</h6>
                        <div style={{ fontSize: '0.95rem' }}>
                            <div>Telefone: (83) 98868-2997</div>
                            <div>Email: vitorfariasdev@gmail.com</div>
                            <div>
                                <a
                                    href="https://github.com/FranciscoKoder"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="fw-bold text-white"
                                >
                                    GitHub
                                </a>
                            </div>
                            <div>
                                <a
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
                                    <strong>Universidade Estadual da Paraíba (UEPB)</strong><br />
                                    Bacharelando em Ciência da Computação — 7° Período.<br />
                                    <span style={{ fontSize: '0.95rem' }}>
                                        Desenvolvimento Web (React, Vue.js, Quasar), Estruturas de Dados, Arquitetura de Software,
                                        Programação em Java, C e Python, Banco de Dados MySQL, Controle de Versão com Git e GitHub.
                                    </span>
                                </div>

                                <div className="mt-3">
                                    <strong>Escola Cidadã Integral Técnica — ECIT Bráulio Maia Júnior</strong><br />
                                    Conclusão do Ensino Médio — 2021.
                                </div>
                            </div>
                            <div className=" p-3 rounded">
                                <h6 className="fw-bold bg-warning bg-opacity-50 mb-2 py-2 px-3">SOBRE MIM</h6>

                                <p style={{ fontSize: '0.97rem' }}>
                                    Sou desenvolvedor júnior e bacharelando em Ciência da Computação na UEPB, com foco na criação de soluções
                                    que integram software, automação e dispositivos embarcados. Atuo no desenvolvimento Frontend utilizando
                                    React, Vue.js e Quasar, sempre priorizando organização, experiência do usuário, padronização visual e
                                    componentes claros e reutilizáveis.
                                </p>

                                <p style={{ fontSize: '0.97rem' }}>
                                    Minha experiência também está fortemente ligada à automação de processos e comunicação entre sistemas.
                                    Desenvolvo fluxos de atualização e sincronização de dados entre APIs, integrações em tempo real, sistemas
                                    internos de monitoramento e rotinas que evitam retrabalho manual. No Backend, trabalho com PHP e MySQL
                                    estruturando endpoints, camadas de negócio e rotinas seguras para manipulação de dados.
                                </p>

                                <p style={{ fontSize: '0.97rem' }}>
                                    Em sistemas embarcados, foco principalmente em ESP32, integrando sensores, módulos de comunicação e
                                    conectividade com plataformas web. Já desenvolvi soluções de automação residencial, monitoramento remoto,
                                    controle de dispositivos e estruturas capazes de operar mesmo em ambientes com conexão limitada,
                                    utilizando lógica offline-first e cache local.
                                </p>

                                <p style={{ fontSize: '0.97rem' }}>
                                    Minha abordagem combina raciocínio lógico, clareza no desenvolvimento, documentação e preocupação com
                                    evolução contínua. Busco sempre construir soluções funcionais, estáveis e escaláveis — onde código,
                                    interface e experiência conversem entre si. Gosto de resolver problemas reais, otimizar o que pode ser
                                    automatizado e transformar complexidade em simplicidade utilizável.
                                </p>
                            </div>
                            <div className="p-3 rounded mb-3 ">
                                <div className="fw-bold bg-warning bg-opacity-50 mb-2 py-2 px-3" style={{ width: "100%" }}>
                                    CERTIFICADOS
                                </div>

                                <div className="d-flex justify-content-center flex-wrap gap-5 mt-5">
                                    <a
                                        href="${process.env.PUBLIC_URL}/img/UC-d7e84d52-06b9-4633-9c47-9f81f90dc109.pdf"
                                        download="Certificado_JAVA.pdf"
                                        className="btn btn-warning text-dark"
                                    >
                                        Baixar Certificado JAVA
                                    </a>
                                    <a
                                        href="${process.env.PUBLIC_URL}/img/Gerenciamento de Risco.pdf"
                                        download="Gerenciamento_de_Risco.pdf"
                                        className="btn btn-warning"
                                    >
                                        Baixar Certificado Gerenciamento de Risco
                                    </a>
                                    <a
                                        href="${process.env.PUBLIC_URL}/img/BancodeDados.pdf"
                                        download="Certificado_BD.pdf"
                                        className="btn btn-warning"
                                    >
                                        Baixar Certificado Banco de Dados
                                    </a>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
}

export default PageOne;