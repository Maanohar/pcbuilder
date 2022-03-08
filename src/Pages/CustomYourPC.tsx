import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import MotherBoard from '../Component/CustomYourPC/MotherBoard';
import CPU from '../Component/CustomYourPC/CPU';
import RAM from '../Component/CustomYourPC/RAM';
import Header from './../Layout/Header';
import { loadPCData } from '../Middleware/getApi';

const CustomYourPC = () => {
    const [ jsonData, setJsonData ] = useState({
        "motherboard":[],
        "cpu":[],
        "ram":[]
    });
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await loadPCData();
            setJsonData(response);
        }
        fetchMyAPI();
    },[]);
  
    return <div><Header/>
    <Accordion defaultActiveKey={['0','1','2']} >
  <Accordion.Item eventKey="0">
    <Accordion.Header>MotherBoard</Accordion.Header>
    <Accordion.Body>
      <MotherBoard selOpt={jsonData.motherboard}/>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>CPU</Accordion.Header>
    <Accordion.Body>
     <CPU selOpt={jsonData.cpu}/>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>RAM</Accordion.Header>
    <Accordion.Body>
     <RAM selOpt={jsonData.ram}/>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </div>
}

export default CustomYourPC;