import React,{useState} from 'react';

const App=()=>{

  const [Name,setName]=useState('vinod');
  const [fullName,setfullName]=useState();

const inputEvent=(event)=>{
  //console.log(event.target.value);
  setName(event.target.value);
}

const onSubmit=()=>{
   setfullName(Name);
}



return(
   <>
   <div>
    <h1>Hello {fullName}</h1>
    <input type="text" placeholder='Enter your name'
    onChange={inputEvent} value={Name}/>
    <button onClick={onSubmit}>Click Me</button>
   </div>
   </>

)

}
export default App;