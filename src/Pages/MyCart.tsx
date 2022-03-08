import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Header from './../Layout/Header';
import { store } from './../Services/Store';

const MyCart = () => {

    const customPCData : any = store.getState()["Reducer"];

    const displayMotherBoard = () => {
        let motherboard = customPCData["motherboard"];
        return (<div>
        <b>MotherBoard :</b>
        <Card>
        <Card.Body>
          <Card.Title>{motherboard[0]["title"]}</Card.Title>
          <Card.Text>
            <Container>
                <Row>
                    <Col><b>Brand :</b> {motherboard[0]["brand"]}</Col>
                    <Col><b>Model :</b> {motherboard[0]["model"]}</Col>
                </Row>
                <Row>
                    <Col><b>Chipset :</b> {motherboard[0]["chipset"]}</Col>
                    <Col><b>Form Factor :</b> {motherboard[0]["formFactor"]}</Col>
                    <Col><b>Socket Type :</b> {motherboard[0]["socketType"]}</Col>
                </Row>
            </Container>
          </Card.Text> 
        </Card.Body>
      </Card>
      </div>);
    }

    const displayRAM = () => {
      let ram = customPCData["ram"];
      return (<div>
      <b>RAM :</b>
      <Card>
      <Card.Body>
        <Card.Title>{ram[0]["title"]}</Card.Title>
        <Card.Text>
          <Container>
              <Row>
                  <Col><b>Brand :</b> {ram[0]["brand"]}</Col>
                  <Col><b>Model :</b> {ram[0]["model"]}</Col> 
              </Row>
              <Row>
                  <Col><b>Ram Size :</b> {ram[0]["ramSize"]}</Col>
                  <Col><b>Quantity :</b> {ram[0]["quantity"]}</Col>
                  <Col><b>Ram Type :</b> {ram[0]["ramType"]}</Col>
              </Row>
            </Container>
          </Card.Text> 
        </Card.Body>
      </Card>
      </div>);
    }

    const displayCPU = () => {
      let cpu = customPCData["cpu"];
      return (<div>
      <b>CPU :</b>
      <Card>
      <Card.Body>
        <Card.Title>{cpu[0]["title"]}</Card.Title>
        <Card.Text>
          <Container>
              <Row>
                  <Col><b>Brand :</b> {cpu[0]["brand"]}</Col>
                  <Col><b>Model :</b> {cpu[0]["model"]}</Col>
                  <Col><b>Socket Type :</b> {cpu[0]["socketType"]}</Col>   
              </Row>
              <Row>
                  <Col><b>Cores :</b> {cpu[0]["cores"]}</Col>
                  <Col><b>Base Speed :</b> {cpu[0]["baseSpeed"]}</Col>
                  <Col><b>Threads :</b> {cpu[0]["threads"]}</Col>
              </Row>
            </Container>
          </Card.Text> 
        </Card.Body>
      </Card>
    </div>);
}

    return <div><Header/>
    <div className="mtop25p">
      <h4>My Cart Details</h4>
      <div className="mtop15p">
        <Container>
          {customPCData["motherboard"].length>0 && (
            <Row><Col>{displayMotherBoard()}</Col></Row>
          )}
          {customPCData["ram"].length>0 && (
            <Row><Col>{displayRAM()}</Col></Row>
          )}
          {customPCData["cpu"].length>0 && (
            <Row><Col>{displayCPU()}</Col></Row>
          )}
        </Container>
      </div>
    </div>
     
    </div>
};

 
export default MyCart;