import React from 'react';

export const Footer: React.FC = () => (
  <footer>
    <div className="footer-list">
      <div className="footer-logo">
        <img src="/tslogo.png" alt="Typescript Logo" />
        <span>
          <a href="https://www.typescriptlang.org/">Learn TS</a>
        </span>
      </div>
      <div className="footer-copyright">
        <span>
          Created By
          <a href="https://github.com/artem-galas">Artem Halas</a>
        </span>
        <span>Code licensed under an MIT-style License.</span>
      </div>
    </div>
  </footer>
);
