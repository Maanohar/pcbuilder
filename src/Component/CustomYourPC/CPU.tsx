import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setCPU } from '../../Services/Actions/Actions';

const CPU = ({selOpt, setCPU}: any) => {

 const [cpuCartInfo, setCPUCartInfo ] = useState([]);

 const [addToCart, setAddToCart ] = useState(false);

 const selOptionMenu = () => {
    return (<Form.Group className="mb-3">
    <Form.Label>Choose Your CPU</Form.Label>
    <Form.Select onChange={(event)=>{ setDisplayInfo(event); }}>
      <option>Select a CPU</option>
      {selOpt.map((data: any)=>{
          return <option value={data.id}>{data.title}</option>
      })}
    </Form.Select>
    <Form.Text className="text-muted">
      On Select, you can view the Details of CPU
    </Form.Text>
  </Form.Group>);
 }

 const setDisplayInfo = (event : any) => {
    let cpuInfo = selOpt.filter((data: any)=>{
        return data.id == event?.target.value;
    });
    setCPUCartInfo(cpuInfo);
    console.log(cpuInfo);
 };

 const addCPUToCart = () => {
    setAddToCart(true);
    /* Add it to Redux Store */
    setCPU(cpuCartInfo);
 };

 const displayInfo = () => {
    return (<Card>
    <Card.Body>
      <Card.Title>{cpuCartInfo[0]["title"]}</Card.Title>
      <Card.Text>
        <Container>
              <Row>
                  <Col><b>Brand :</b> {cpuCartInfo[0]["brand"]}</Col>
                  <Col><b>Model :</b> {cpuCartInfo[0]["model"]}</Col>
                  <Col><b>Socket Type :</b> {cpuCartInfo[0]["socketType"]}</Col>   
              </Row>
              <Row>
                  <Col><b>Cores :</b> {cpuCartInfo[0]["cores"]}</Col>
                  <Col><b>Base Speed :</b> {cpuCartInfo[0]["baseSpeed"]}</Col>
                  <Col><b>Threads :</b> {cpuCartInfo[0]["threads"]}</Col>
              </Row>
            <Row>
                <Col className="font-green">
                {(addToCart) && (<div>
                    <i className="fa mtop25p fa-check-circle"></i> <b>Added to Cart</b>
                </div>)}
                </Col> 
                <Col></Col>
                <Col><Button variant="primary" className="mtop15p" 
                onClick={()=>addCPUToCart()}>Add to Cart</Button></Col>
            </Row>
        </Container>
      </Card.Text>
     
    </Card.Body>
  </Card>);
 }


    return (<div>
        <Container>
            <Row>
                <Col>{selOptionMenu()}</Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>{(cpuCartInfo.length>0) && displayInfo()}</Col>
            </Row>
        </Container>
        </div>)
}

const mapStateToProps = ( state : any ) => ({
    cpu: state.cpu
  })

  const mapDispatchToProps = (dispatch : any )=> {
    return ({
        setCPU : (items : any) => {
            dispatch(setCPU(items))
        }
    })
  }

export default connect(mapStateToProps, mapDispatchToProps)(CPU);
