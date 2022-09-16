import React from 'react';
import Content from './component/Content';
import Foot from './component/Foot';
import Nav from './component/Nav';

function App() {
  return (
    <React.Fragment>
      <Nav 
        title='KEBUN BINATANG CERIA'
      />
      <Content 
        animals={
          [
            'Singa',
            'Kerbau',
            'Kambing',
            'Unta',
            'Macan',
            'Jerapah',
          ]
        }
      />
      <Foot 
        created='Wawan'
      />
    </React.Fragment>
  );
}

export default App;