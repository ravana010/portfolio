import React from 'react'
 
const Progress_bar = (props) => {
    
    const Parentdiv = {
        height: props.height,
        width: '100%',
        backgroundColor: 'white',
        'border-radius': '40px',
      }
     
      const Childdiv = {
        height: '100%',
        width: `${props.progress}%`,
        backgroundColor: props.bgcolor,
        'border-top-left-radius': '40px',
        'border-bottom-left-radius': '40px',
        textAlign: 'right'
      }
     
      const progresstext = {
        padding: 20,
        color: 'black',
        fontWeight: 900
      }
       
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}></span>
      </div>
    </div>
    )
}
 
export default Progress_bar;