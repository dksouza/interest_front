import React, {useState, useEffect} from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  Modal,
  ModalBody,
  Container,
  ModalHeader
} from "reactstrap";

import axios from "axios";
import _ from "lodash";

import api from "../api";

const Dashboard = (props) => {
  const [data, setData] = useState([]);
  const [dataSuggestions, setDataSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [textSuggestions, setTextSuggestions] = useState("");
  const [isModal, isSetModal] = useState(false);

  const getInterests = async () => {
    setLoading(true)
    const data = await api.get(`interests/${text}`);
    if(data.status === 200) {
      setData(_.orderBy(data.data.data, ["audience_size"], ["desc"]));
    }
    setLoading(false);
  }

  const getSuggestions = async (item) => {
    setLoading(true)
    setTextSuggestions(item.name)
    const data = await api.get(`suggestions/${item.name}`);
    if(data.status === 200) {
      setDataSuggestions(_.orderBy(data.data.data, ["audience_size"], ["desc"]));
      modalSuggestions()
    }
    setLoading(false);
  }

  const modalSuggestions = () => {
    isSetModal(!isModal);
  }

  return (
    <>
        <div className="content">
          <Row>
            <Col lg="12" md="12">
              <Row style={{marginBottom: 20}}>
                <Col md="6">
                  <Input
                    defaultValue=""
                    placeholder="Digite uma segmentação..."
                    type="text"
                    onChange={txt => setText(txt.target.value)}
                  />
                </Col>
                <Col md="6"><Button onClick={() => getInterests()} disabled={loading} color="primary" style={{height: 38, marginTop: 0}}>Vamos lá</Button></Col>
              </Row>
              <Card className="card-tasks">
                <CardHeader>
                  <h6 className="title d-inline">Interesses encontrados ({data.length})</h6>
                </CardHeader>
                <CardBody>
                  <div>
                    <Table>
                      <thead>
                        <tr>
                          <td></td>
                          <td>Nome</td>
                          <td>Tamanho audiência</td>
                          <td  className="td-actions text-right">Pesquisar palavra</td>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                        <p className="title" onClick={() => getSuggestions(item)} style={{cursor: "pointer"}}>
                          {item.name}
                        </p>
                            <p className="text-muted">
                              {item.topic}
                            </p>
                          </td>
                        <td>{item.audience_size}</td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id={`tooltip${index}`}
                              title=""
                              type="button"
                            >
                              Facebook
                            </Button>
                            <Button
                              color="link"
                              id={`tooltip${index}`}
                              title=""
                              type="button"
                            >
                              Google
                            </Button>
                          </td>
                        </tr>
                        ))}
                        
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          
        </div>
        <Modal isOpen={isModal} toggle={modalSuggestions} className={props.className} size="lg">
            <ModalBody>
                      <Table>
                        <thead>
                          <tr>
                            <td>Nome</td>
                            <td>Tamanho audiência</td>
                          </tr>
                        </thead>
                        <tbody>
                          {dataSuggestions.map(item => (
                          <tr>
                            <td>
                              {item.name}
                            </td>
                            <td>
                              {item.audience_size}
                            </td>
                          </tr>
                          ))}
                        </tbody>
                      </Table>
            </ModalBody>
          </Modal>
      </>
  )
}

export default Dashboard;