import './App.css';

function App() {
  return (
    <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
      <h1 className="text-3xl font-bold underline">
        Hello Tailwind CSS!
      </h1>
      <p className="m-0 text-gray-400">Tailwind CSSです</p>
      <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">ボタン</button>
    </div>
  );
}

export default App;
