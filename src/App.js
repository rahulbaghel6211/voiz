import './App.css';

import React from 'react';

import CustomSelect from './CustomSelect';

const styles={
  app:{
    backgroundColor:'black',
    justifyItems:'center',
    alignItems:'center',
    display:'grid',
    height:'100vh',
    fontFamily:'Arial',
    color:"green",
    fontSize:25,
   
  },
  select:{
    width:'100%',
    maxWidth:600,
   
  }
}

const options=[
  {label:'Red',value:'red'},
  {label:'Blue',value:'blue'},
  {label:'Green',value:'green'},
  {label:'Yellow',value:'yellow'},
  {label:'black',value:'black'},
  {label:'tail',value:'tail'},
  {label:'brown',value:'brown'},
  {label:'white',value:'white'},
]
function onChangeInput(value){
  console.log(value);
}
function App() {
  return (
    <div style={styles.app}>
      <CustomSelect isMulti={true} style={styles.select} defaultValue={[options[3]]} onChange={onChangeInput} options={options} label="Your Favourite Colour" />
    </div>
  
  ); 
}
export default App;
