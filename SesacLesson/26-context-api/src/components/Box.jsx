import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Box() {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
  return (
    <div>
      <h3>ThemeContext 사용하기</h3>
      Theme:{ThemeContext}
    </div>
  );
}
