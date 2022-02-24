import Header from 'src/components/Header';
import Form from 'src/components/Form';
import Info from 'src/components/Info';

import './style.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <main className='app-content'>
        <Form />
        <Info />
      </main>
    </div>
  );
}

// == Export
export default App;
