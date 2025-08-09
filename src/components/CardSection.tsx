import React from 'react';
import Card from './Card';

const CardSection: React.FC = () => {
  const articlesData = [
    { title: 'Guía de Estrategias de Ataque', description: 'Descubre las mejores composiciones de tropas y tácticas para arrasar con cualquier aldea. Desde Dragones Eléctricos hasta Montapuercos.' },
    { title: 'Defensas Imbatibles', description: 'Aprende a proteger tu aldea de los ataques enemigos. Te enseñamos a colocar trampas, a defender con la Artillería Águila y a usar tu Reina de Hielo.' },
    { title: 'Subir de Nivel Rápido', description: 'Consejos clave para acelerar el progreso de tu aldea y de tus héroes. Optimiza tus recursos y domina los desafíos del juego.' },
  ];

  return (
    <section id="articulos" className="cards-section">
      {articlesData.map((article, index) => (
        <Card key={index} title={article.title} description={article.description} />
      ))}
    </section>
  );
};

export default CardSection;