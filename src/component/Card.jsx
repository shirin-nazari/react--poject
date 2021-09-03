/* eslint-disable jsx-a11y/img-redundant-alt */
import styled from "styled-components";
import Data from '../api/Data.json'
const Div=styled.div` background-color:  #CEE5D0;
;
/* background-color: #E6DDC6; */


`
const card=()=>{
 return Data.map((value)=>{
   return (
     <Div key={value.id}>

 
   
 <div className="card" style={{width:'300px' , height:'90%' ,margin:'20px', padding:'10px',boxShadow:'5px 5px 10px 4px  #bebebe33'}}>
  <h5>{value.name}</h5>
  <img className="card-img-top" src={value.image.medium} alt="Card image cap" />
  <div className="card-body">
    <p className="card-text">{value.summary}</p>
  </div>
</div>

 
</Div> 
    )
  
})
  
}

export default card;