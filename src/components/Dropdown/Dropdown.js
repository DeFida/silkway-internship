
import { useState } from 'react';
import './Dropdown.css';

import down_arrow from '../../images/down_arrow.svg';

function Dropdown() {

    const [isOpen, setOpen] = useState(false);




  return (
      <div className='dropdown'>
        <p className='dropdown__p'>Продукты</p>
        <button className='dropdown__button' style={{backgroundImage: `url(${down_arrow})`}} onClick={() => setOpen(!isOpen)}></button>
        {isOpen && 
        <div className='appear'>

            
        </div>}
      </div>
  );
}

export default Dropdown;
