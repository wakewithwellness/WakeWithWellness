import React from 'react'
import Table from 'react-bootstrap/Table';


const data = [
  { state: "Andra Pradesh", no: "78930-78930; 98499-03870; 100", name: "" },
  { state: "Arunachal Pradesh", no: "1090", name: "" },
  { state: "Assam", no: "104", name: "Sarathi 104" },
  { state: "Bihar", no: "104", name: "" },
  { state: "Chattisgarh", no: "104", name: "" },
  { state: "Chandigarh", no: "1722735436; 1722735446", name: "" },
  { state: "Delhi", no: "8376804102; 011 23389090", name: "" },
  { state: "Goa", no: "8322252525; 9822562522", name: "" },
  { state: "Gujarat", no: "7926305544; 7926300222; 1800233 3330", name: "" },
  { state: "Haryana", no: "104", name: "" },
  { state: "Himachal Pradesh", no: "0177-2633601", name: "" },
  { state: "Jammu & Kashmir", no: "1800-1807159; 9697-606060", name: "" },
  { state: "Jharkhand", no: "6576453841; 104", name: "" },
  { state: "Karnataka", no: "104; 8023655557", name: "Arogya Sahayavani; Arpita foundation" },
  { state: "Manipur", no: "8787457035; 9402751364 ", name: "" },
  { state: "Mizoram", no: "102", name: "" },
  { state: "Nagaland", no: "102", name: "" },
  { state: "Rajashthan", no: "0744 2333666; +0744 2414141", name: "" },
  { state: "Sikkim", no: "221152; 18003453225", name: "" },
  { state: "Tripura", no: "104", name: "" },
  { state: "Tamil Nadu", no: "044-246400 50/60; 104; 04426564444", name: "Sneha India Foundation; Medical Helpline; Jeevan Suicide Prevention Hotline" },
  { state: "Uttarakhand", no: "104", name: "" },
  { state: "West Bengal", no: "3324637401; 3324637432", name: "" },
  

 
]



function Shelpline() {
  return (
    <>
    <div className="container" style={{marginTop: '15vh'}}>
      <div className="container">
        <h5 style={{textAlign: 'center', fontWeight: 'bold'}}>Suicidal Helpline numbers</h5>
      </div>
      <Table  striped bordered hover variant="light">
        <tr style={{backgroundColor: '#2e2e2e', color: '#FFFFFF'}}>
     
          <th>States</th>
          <th>Helpline</th>
          <th></th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr style={{fontSize: '13px'}} key={key}>
  
              <td>{val.state}</td>
              <td style={{fontWeight: '500'}}>{val.no}</td>
              <td>{val.name}</td>
            </tr>
          )
        })}
      </Table>
    </div>
    </>
  )
}

export default Shelpline
