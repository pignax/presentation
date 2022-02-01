import React, { useState } from "react";
import '../../style/index.css';

function Button({setIsOpen}) {

  return <button className="App-button custom" onClick={() => setIsOpen(true)}>scopri altro..</button>;
}

export default Button;
