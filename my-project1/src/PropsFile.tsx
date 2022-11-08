import React, { useState } from "react";

const PropsFile = (props: any) => {
  const [arr, setArr] = useState(props.value);
  return <div>{arr}</div>;
};

export default PropsFile;
