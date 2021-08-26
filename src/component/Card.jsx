/* eslint-disable jsx-a11y/img-redundant-alt */
import styled from "styled-components";
import Data from '../api/Data.json'
const Div=styled.div` background-color: beige;
 /* display:flex ;
 flex-direction: row;
 justify-content: space-around;
 text-align: center; */
`
const card=()=>{
 return Data.map((value)=>{
   return (
     <Div >
     <div  style={{display:'flex',flexDirection:'row',justifyContent:'space-around', textAlign:'center'}}>
<div className="card">
  <h5>{value.name}</h5>
  <img className="card-img-top" src={value.image.medium} alt="Card image cap" />
  <div className="card-body">
    <p className="card-text">{value.summary}</p>
  </div>
</div>

</div></Div>
    )
  
})
  
}

export default card;