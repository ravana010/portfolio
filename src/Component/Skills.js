import React from 'react'
import Progressbar from './Progress_bar'

function  Skills(props){
  return (
    <p className="whatiknow">
          <div>{props.name}</div>
          <Progressbar className="progress" bgcolor={props.color} progress={props.percent} height={props.height}
          />
    </p>
  )
}

export default Skills