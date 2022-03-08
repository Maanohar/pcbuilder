import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRAM } from '../../Services/Actions/Actions';

const RAM = ({selOpt, setRAM}: any) => {

 const [ramCartInfo, setRAMCartInfo ] = useState([]);

 const [addToCart, setAddToCart ] = useState(false);

 const selOptionMenu = () => {
    return (<Form.Group className="mb-3">
    <Form.Label>Choose Your RAM</Form.Label>
    <Form.Select onChange={(event)=>{ setDisplayInfo(event); }}>
      <option>Select a RAM</option>
      {selOpt.map((data: any)=>{
          return <option value={data.id}>{data.title}</option>
      })}
    </Form.Select>
    <Form.Text className="text-muted">
      On Select, you can view the Details of RAM
    </Form.Text>
  </Form.Group>);
 }

 const setDisplayInfo = (event : any) => {
    let ramInfo = selOpt.filter((data: any)=>{
        return data.id == event?.target.value;
    });
    setRAMCartInfo(ramInfo);
    console.log(ramInfo);
 };

 const addRAMToCart = () => {
    setAddToCart(true);
    /* Add it to Redux Store */
    setRAM(ramCartInfo);
 };

 const displayInfo = () => {
    return (<Card>
    <Card.Body>
      <Card.Title>{ramCartInfo[0]["title"]}</Card.Title>
      <Card.Text>
        <Container>
              <Row>
                  <Col><b>Brand :</b> {ramCartInfo[0]["brand"]}</Col>
                  <Col><b>Model :</b> {ramCartInfo[0]["model"]}</Col> 
              </Row>
              <Row>
                  <Col><b>Ram Size :</b> {ramCartInfo[0]["ramSize"]}</Col>
                  <Col><b>Quantity :</b> {ramCartInfo[0]["quantity"]}</Col>
                  <Col><b>Ram Type :</b> {ramCartInfo[0]["ramType"]}</Col>
              </Row>
            <Row>
                <Col className="font-green">
                {(addToCart) && (<div>
                    <i className="fa mtop25p fa-check-circle"></i> <b>Added to Cart</b>
                </div>)}
                </Col> 
                <Col></Col>
                <Col><Button variant="primary" className="mtop15p" 
                onClick={()=>addRAMToCart()}>Add to Cart</Button></Col>
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
                <Col>{(ramCartInfo.length>0) && displayInfo()}</Col>
            </Row>
        </Container>
        </div>)
}

const mapStateToProps = ( state : any ) => ({
    ram: state.ram
  })

  const mapDispatchToProps = (dispatch : any )=> {
    return ({
        setRAM : (items : any) => {
            dispatch(setRAM(items))
        }
    })
  }

export default connect(mapStateToProps, mapDispatchToProps)(RAM);
