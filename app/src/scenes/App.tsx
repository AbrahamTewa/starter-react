// ============================================================
// Imports
import {
  Input,
  Title,
} from '@internal/components';

import { useCallback, useState } from 'react';

// ============================================================
// Scene
const defaultTitle = 'Starter react';

function App() {
  const [title, setTitle] = useState<string>(defaultTitle);

  const onClick = useCallback(
    () => {
      throw new Error('Fake error');
    },
    [],
  );

  return (
    <>
    <Title>
      {title}
    </Title>
    <div>
        Set title:
        {' '}
        <Input defaultValue={defaultTitle} onUpdate={setTitle} />
        <button onClick={onClick}>Break the world</button>
    </div>
    </>
  );
}

// ============================================================
// Exports
export default App;
