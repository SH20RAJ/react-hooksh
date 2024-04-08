import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemeButton() {
  const theme = useContext(ThemeContext); // 🎨 Grabbing the theme!

  return <button style={{ background: theme }}>Themed Button</button>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeButton />
    </ThemeContext.Provider>
  );
}