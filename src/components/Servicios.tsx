import React from 'react';

const Servicios: React.FC = () => {
  return (
    <section id="servicios" className="cards-section">
      <div className="card">
        <h3>Asesoría de Estrategias</h3>
        <p>Te ayudamos a planificar los ataques más efectivos y a diseñar defensas imbatibles. ¡Nuestros veteranos te guiarán para que seas un maestro en el campo de batalla!</p>
      </div>
      <div className="card">
        <h3>Guerra de Clanes Épicas</h3>
        <p>Participamos activamente en guerras de clanes con una alta tasa de victoria. Coordinamos nuestros ataques y celebraciones para que cada guerra sea una experiencia inolvidable.</p>
      </div>
      <div className="card">
        <h3>Donaciones de Tropas</h3>
        <p>Necesitas tropas de nivel alto para tus ataques? En Imperio Quetzal, siempre tendrás a tu disposición donaciones rápidas y de máximo nivel para asegurar el éxito en cada asalto.</p>
      </div>
    </section>
  );
};

export default Servicios;