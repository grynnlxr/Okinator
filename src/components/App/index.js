import Header from 'src/components/Header';
import Form from 'src/components/Form';
import Info from 'src/components/Info';


// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Form />
        <Info />
      </main>
    </div>
  );
}

// == Export
export default App;
