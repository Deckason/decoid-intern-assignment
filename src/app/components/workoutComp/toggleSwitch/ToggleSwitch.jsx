import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = val => {
    setChecked(val)
  }

  return (
    <div className="app" style={{textAlign: "center"}}>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
        onColor="#007bff" 
        offColor="#007bff" 
        handleDiameter={20} 
        uncheckedIcon={false} 
        checkedIcon={false} 
        height={20} 
        width={40} 
      />
    </div>
  );
}

export default ToggleSwitch;