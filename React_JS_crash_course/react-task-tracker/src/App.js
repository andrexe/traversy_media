import Header from './components/Header'

function App() {
  const name = 'Andrei'
  const x = false
  return (
    <div className="container mx-auto">
        {/* <h1 className="font-bold uppercase text-sky-700 text-4xl">Hello World</h1>
        <h2 className="font-bold text-3xl">Hello {name} {1 + 1}</h2>
        <p>{x ? 'Yes' : 'No'}</p> */}
        <Header/>
    </div>
  );
}

export default App;
