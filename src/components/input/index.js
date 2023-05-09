import React from "react";
import * as C from "./styles";

const input = ({ type, placeholder, value, anChange }) => {
return <C.input
value={value}
anChange={anChange}
type={type}
placeholder={placeholder}
/>;
};

export default input;