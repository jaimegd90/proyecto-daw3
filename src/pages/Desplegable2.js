// Dropdown.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Desplegable2.css'; // Importa el archivo CSS

const Desplegable2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Selecciona una Comunidad');
  const navigate = useNavigate();

  const options2 = [
    { label: 'Andalucia', path: '/andalucia2' },
    { label: 'Castilla La Mancha', path: '/castilla2' },
    { label: 'Cataluña', path: '/cataluña2' },
    { label: 'Com. Valenciana', path: '/valenciana2' },
    { label: 'Madrid', path: '/madrid2' },
    { label: 'Murcia', path: '/murcia2' },
  ];

  const toggleDesplegable2 = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick2 = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    navigate(option.path);
  };

  return (
    <div style={{ position: 'relative', width: '200px' }}>
      <button onClick={toggleDesplegable2} style={{ padding: '15px', width: '150%', fontSize: '18px' }}>
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
          {options2.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick2(option)}
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

export default Desplegable2;
