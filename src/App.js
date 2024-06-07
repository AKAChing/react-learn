import React, { useState, useEffect, useRef } from "react";
import Arco from '@arco-design/mobile-react';
function App() {
  
  let form = {
    name: "111",
    radio1: 1,
    select1: 1,
    switch1: "checked",
  };
  const formRef = useRef();
  let [formData, setFormData] = useState(form);
  const onValuesChange = (changeValue, values) => {
    setFormData({ ...formData, ...values });
    // console.log('onValuesChange: ', changeValue, values);
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
