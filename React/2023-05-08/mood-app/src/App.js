import { useState } from 'react';

import MenuList from './components/MenuList/MenuList';
import DisplayMood from './components/DisplayMood/DisplayMood';

function App() {
  const [mood, setMood] = useState('');

  return (
    <div>
      <MenuList mood={mood} setMood={setMood} />
      <DisplayMood mood={mood} />
    </div>
  );
}
export default App;
