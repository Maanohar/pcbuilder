import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setMotherBoard } from '../../Services/Actions/Actions';

const MotherBoard = ({selOpt, setMotherboard}: any) => {

 const [motherBoardCartInfo, setMotherBoardCartInfo ] = useState([]);

 const [addToCart, setAddToCart ] = useState(false);

 const selOptionMenu = () => {
    return (<Form.Group className="mb-3">
    <Form.Label>Choose Your MotherBoard</Form.Label>
    <Form.Select onChange={(event)=>{ setDisplayInfo(event); }}>
      <option>Select a MotherBoard</option>
      {selOpt.map((data: any)=>{
          return <option value={data.id}>{data.title}</option>
      })}
    </Form.Select>
    <Form.Text className="text-muted">
      On Select, you can view the Details of MotherBoard
    </Form.Text>
  </Form.Group>);
 }

 const setDisplayInfo = (event : any) => {
    let motherBoardInfo = selOpt.filter((data: any)=>{
        return data.id == event?.target.value;
    });
    setMotherBoardCartInfo(motherBoardInfo);
    console.log(motherBoardInfo);
 };

 const addMotherBoardToCart = () => {
    setAddToCart(true);
    /* Add it to Redux Store */
    setMotherboard(motherBoardCartInfo);
 };

 const displayInfo = () => {
    return (<Card>
    <Card.Body>
      <Card.Title>{motherBoardCartInfo[0]["title"]}</Card.Title>
      <Card.Text>
        <Container>
            <Row>
                <Col><b>Brand :</b> {motherBoardCartInfo[0]["brand"]}</Col>
                <Col><b>Model :</b> {motherBoardCartInfo[0]["model"]}</Col>
            </Row>
            <Row>
                <Col><b>Chipset :</b> {motherBoardCartInfo[0]["chipset"]}</Col>
                <Col><b>Form Factor :</b> {motherBoardCartInfo[0]["formFactor"]}</Col>
                <Col><b>Socket Type :</b> {motherBoardCartInfo[0]["socketType"]}</Col>
            </Row>
            <Row>
                <Col className="font-green">
                {(addToCart) && (<div>
                    <i className="fa mtop25p fa-check-circle"></i> <b>Added to Cart</b>
                </div>)}
                </Col> 
                <Col></Col>
                <Col><Button variant="primary" className="mtop15p" 
                onClick={()=>addMotherBoardToCart()}>Add to Cart</Button></Col>
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
                <Col>{(motherBoardCartInfo.length>0) && displayInfo()}</Col>
            </Row>
        </Container>
        </div>)
}

const mapStateToProps = ( state : any ) => ({
    motherboard: state.motherboard
  })

  const mapDispatchToProps = (dispatch : any )=> {
    return ({
        setMotherboard : (items : any) => {
            dispatch(setMotherBoard(items))
        }
    })
  }

export default connect(mapStateToProps, mapDispatchToProps)(MotherBoard);
