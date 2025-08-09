import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; Cesar Ulises González Cardona 2025. Todos los derechos reservados.</p>
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;