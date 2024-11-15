import React, { } from 'react';
import "./ThirdMain.css";
//import axios from 'axios';

// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
//import { IoIosSearch } from "react-icons/io";


export default function ThirdMain() {


    // const StyledTableCell = styled(TableCell)(({ theme }) => ({
    //     [`&.${tableCellClasses.head}`]: {
    //       backgroundColor: theme.palette.common.black,
    //       color: theme.palette.common.white,
    //     },
    //     [`&.${tableCellClasses.body}`]: {
    //       fontSize: 14,
    //     },
    //   }));

    //   const StyledTableRow = styled(TableRow)(({ theme }) => ({
    //     '&:nth-of-type(odd)': {
    //       backgroundColor: theme.palette.action.hover,
    //     },
    //     // hide last border
    //     '&:last-child td, &:last-child th': {
    //       border: 0,
    //     },
    //   }));



    // const [Add, setAdd] = useState(0);

    // const [Sub, setSub] = useState(100)

    // const Multiplication = useMemo(function Multi(){
    //     console.log("=====******=======");

    //     return( Add * 10)
    // },[Add]) 


    // function Multi(){
    //     console.log("=====******=======");      
    //     return( Add * 10)
    // }

    // const data = ["pramod1",1,"pooja",2];

    // const info = {name:"prajyot", id:1}


    //    const [details, setDetails] = useState([]);

    function HandleButton() {
        return (
            alert("You called me")
        )
    }

    // const [infod, setInfod] = useState([]);

    // useEffect(()=>{
    //     getDetails()
    // },[])

    // const getDetails = async() => {
    //     await axios.get("http://localhost:5500/getallproductslistuser")
    //     .then((response)=>{
    //         console.log(response.data.findDetails12);
    //         setInfod(response.data.findDetails12);
    //     }).catch((error)=>{console.log(error.data.message);
    //     })        

    // }

    return (
        <div className='gdMain'>

            <h1>HTML,CSS,Bootstrap,React</h1>
            <h2> Position</h2>
            {/* <div className='gdparent1'>
                    <div className='parent1'>
                        <div className='child1 relative'>relative</div>
                        <div className='child1 absolute'>absolute</div>
                        <div className='child1 fixed'>fixed</div>
                        <div className='child1 sticky'>sticky</div>
                        <div className='child1 absolute2'>absolute2</div>
                    </div>
                </div> */}

            <h3>Flex,justify,align-itm</h3>
            {/* <div className='gdparent1'>
                <div className='parent1'>
                    <div className='child1'>child1</div>
                    <div className='child1'>child1</div>
                    <div className='child1'>child1</div>
                    <div className='child1 moverigt'>child2</div>
                    <div className='child1 '>child3</div>



                    {/* <div className='child1 moverigt'>child1</div>
                    <div className='child1 moverigt'>child1</div> */}

                {/* </div> 

            </div> */}

            <h4>margin,border,padding,contect,box-myworld,opacity</h4>

                    {/* <div className='gdparent1'>
                        <div className='parent1'>
                            <div className='row'>
                                <div className='col-6 demo1'>1</div>
                                <div className='col-6 demo2'>2</div>
                            </div>
                        </div>
                    </div> */}

                        {/* <div className='crtst'>
                            <div className='row jfdkfk'>
                                <div className='col kjhd1'>1</div>
                                <div className='col kjhd2'>2</div>
                            </div>
                        </div> */}

            <h5>How to search-in-input,match</h5>

            {/* <div className='gdparent1'>
                <div className='parent1'>
                    <button className='seart'>
                        <span className='srchicon'><IoIosSearch /></span>
                        <input className='searchinput' type='text' placeholder='quick finding...' />
                    </button>
                </div>
            </div> */}

            <h6>how to fit img into circle and add text,note</h6>
                {/* <div className='gdparent1'>
                    <div className='parent1'>
                        <div className='boxedse'>
                            <div className='outerimg'>
                                <img className='imgdesign' src='./images/profile.webp' alt='not found' />
                            </div>
                            <div className='infode'>
                                <h5>Pramod Mukane</h5>
                                <p>@pramodmukane</p>
                            </div>
                        </div>
                    </div>
                </div> */}


            <h1>JavaScript,React-Hooks,Context-API,Props,state</h1>
            <h2>promise,async-await,axios-get,post,put,delete</h2>


            {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">UserId</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {infod.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">{row.userId}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}


            <h3>Button make 1line or 1page using function responsive</h3>

            <button onClick={() => {
                alert("You clicked here"); console.log("You clicked here");
            }}>Submit</button>

            <button onClick={() => HandleButton()}>Hit Me</button>


            <h4>How it works as array,object,function </h4>

            {/* {typeof data[1]}
            <br/>
            {typeof info.id}
            <br /> */}

            <h5>context-API - Done</h5>
            <h6>React-Hooks,props,state,class-lifecycle - Done</h6>
            {/* <p>useMemo Hook for make app faster</p> */}

            {/* <p>{Multi()}</p> */}
            {/* <p>{Multiplication}</p>
            <br/>
            <p>{Add}</p>
            <button onClick={()=>{setAdd(Add +1)}}>Addition</button>
            <br/>
            <p>{Sub}</p>
            <button onClick={()=>{setSub(Sub - 1)}}>Subtraction</button> */}

        </div>
    )
}
