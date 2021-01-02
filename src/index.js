import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

let times=new Date();
times=times.getHours();
let greeting="";
const cssStyle={};
if(times>=1&&times<12){
  greeting="Good Morning";
  cssStyle.color="green"

}else if(times>=12&&times<=19){
  greeting="Good Afternoon";
  cssStyle.color="Red";
}else{
  greeting="Good Night sweet dreams!!";
  cssStyle.color="yellow"
};
ReactDOM.render(
  <React.Fragment>
  <div>
  <h1>
  {" "}
  Hello User ,<span style={cssStyle}>{greeting}</span></h1>
  </div>
  </React.Fragment>,
  document.getElementById("root")
)