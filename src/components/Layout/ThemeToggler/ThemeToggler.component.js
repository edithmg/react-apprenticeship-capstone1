import React from 'react';
//import Button from "./Button";
import { Button } from '../../../GlobalStyles';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggler = (props) => {
  const { themeToggler, selectedTheme } = props;
  const icon = selectedTheme === 'light' ? <FiMoon /> : <FiSun />;

  return (
    <Button primary onClick={themeToggler} title="Switch Theme">
      {icon}
    </Button>
  );
};

export default ThemeToggler;
