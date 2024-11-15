//import React, { useEffect, useState } from 'react';
import React from "react";
import "./SecMain.css";
//import Form1 from "./Component/Form1";
//import GrandParent1 from "./Component/GrandParent1";
// import axios from 'axios';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

export default function SecMain() {

  //const [name, setName] = useState("Pramod")

  // const [infom, setInfom] = useState([])

  // const name = ["pramod", "pooja","prajyot"]

  // const address = {name1:"pramod123",address:"bhosari"}


  // useEffect(() => {
  //   getDetails()
  // }, [])

  // const getDetails = async () => {
  //   await axios.get("http://localhost:5500/getallproductslistuser").then((response) => {
  //     console.log(response.data.findDetails12);
  //     setInfom(response.data.findDetails12)

  //   }).catch((error) => { console.log(error.data.message) })
  // }

  // const HandleSUbmit = (e) => {
  //   e.preventDefault()
  //   Se
  // }


  return (
    <div className="Main2">
      <h1>HTML,CSS,Bootstrap,React</h1>
      <h2> Position</h2>
          <div className="maingdparent">
            <div className="mainparent">
              
                <div className="child2 relative">relative</div>
                <div className="child2 absolute">absolute</div>
                <div className="child2">fixed</div>
                <div className="child2">sticky</div>
                <div className="child2">absolute2</div>
              
            </div>

          </div>
      <h3>Flex,justify,align-itm</h3>
      <h4>margin,border,padding,contect,box-myworld,opacity</h4>
      <h5>How to search-in-input,match</h5>
      <h6>how to fit img into circle and add text,note</h6>

      <h1>JavaScript,React-Hooks,Context-API,Props,state</h1>
      {/* <button style={{ cursor: "pointer" }} onClick={() => { alert("You clicked me"); console.log("You clicked me") }}>Click</button> */}
      <h2>promise,async-await,axios-get,post,put,delete</h2>

            {/* <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">price</TableCell>
                    <TableCell align="right">quantity</TableCell>
                    <TableCell align="right">description</TableCell>
                    <TableCell align="right">category</TableCell>
                    <TableCell align="right">userId</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {infom.length ? infom.map((row) => (
                    <TableRow
                      key={row._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">{row.description}</TableCell>
                      <TableCell align="right">{row.category}</TableCell>
                      <TableCell align="right">{row.userId}</TableCell>
                    </TableRow>
                  ))  : null}
                </TableBody>
              </Table>
            </TableContainer> */}


      <h3>Button make 1line or 1page using function responsive</h3>
      {/* <Form1 /> */}
      <h4>How it works as array,object,function </h4>
       {/* <h5>{name[0]} and {address.name1}</h5> */}
      <h5>context-API =Done</h5>
      <h6>React-Hooks,props,state,class-lifecycle</h6>
        {/* <h5>Hello this is {name} </h5>
        <button onClick={()=>{setName("Pooja")}}>Submit</button>
        <GrandParent1 name={name} /> */}

    </div>
  )
}

