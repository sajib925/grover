import { Outlet } from "react-router-dom";
import '../src/styles/global.scss'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App
