import React from 'react';
import { Link } from 'react-router-dom';

function SecretPage() {
  return (
    <pre>
      welcome, voyager...
      <Link to="/"> ← go back</Link>
    </pre>
  );
}

export default SecretPage;
