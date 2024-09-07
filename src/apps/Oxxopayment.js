import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const OxxoPayment = ({ reserva }) => {
  const [reference, setReference] = useState('');
  const history = useHistory();

  const generateOxxoReference = () => {
    // Generar una referencia aleatoria de pago simulada
    const newReference = Math.random().toString(36).substring(2, 15).toUpperCase();
    setReference(newReference);
  };

  const handleConfirmPayment = () => {
    // Aquí podrías llamar a una API o manejar el estado de la reserva
    alert(`Tu pago está siendo procesado. Tu referencia OXXO es: ${reference}`);
    history.push('/confirmacion');
  };

  React.useEffect(() => {
    generateOxxoReference();
  }, []);

  return (
    <div>
      <h2>Paga con OXXO</h2>
      <p>Para completar tu reserva, realiza el pago en cualquier tienda OXXO utilizando la siguiente referencia:</p>
      <h3>Referencia: {reference}</h3>
      <h3>Monto: ${reserva.total} MXN</h3>
      <button onClick={handleConfirmPayment}>He realizado mi pago</button>
    </div>
  );
};

export default OxxoPayment;
