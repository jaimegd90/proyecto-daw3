// Dropdown.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Desplegable.css'; // Importa el archivo CSS

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Selecciona una comunidad');
  const navigate = useNavigate();

  const options = [
    { label: 'Andalucia', path: '/andalucia' },
    { label: 'Castilla La Mancha', path: '/castilla' },
    { label: 'Cataluña', path: '/cataluña' },
    { label: 'Com. Valenciana', path: '/valenciana' },
    { label: 'Madrid', path: '/madrid' },
    { label: 'Murcia', path: '/murcia' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    navigate(option.path);
  };

  return (
    <div style={{ position: 'relative', width: '200px' }}>
      <button onClick={toggleDropdown} style={{ padding: '15px', width: '150%', fontSize: '18px', cursor: 'pointer'}}>
        {selectedOption}
      </button>
      {isOpen && (
        <ul
          style={{
            border: '1px solid #ccc',
            position: 'absolute',
            width: '150%',
            backgroundColor: 'white',
            margin: 0,
            padding: 0,
            textAlign: 'center'
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="dropdown-option" // Aplicar clase CSS
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
