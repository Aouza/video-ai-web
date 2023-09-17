import { Header } from "./components/Header";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="bg-orange-500 flex flex-1">
        <div className="bg-blue-500 flex-1"></div>
        <aside className="bg-pink-500 p-6">asidee</aside>
      </main>
    </div>
  );
};

export default App;
