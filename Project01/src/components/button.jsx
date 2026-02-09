import React from "react";


function Button({name, myFun}) {
  return (
    <button type="button" className="btn rounded-sm p-1" style={{backgroundColor: name}} onClick={() => myFun(name)}>{name}</button>
  );
}

export default Button;