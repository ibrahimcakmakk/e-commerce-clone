import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import PageContainer from './container/PageContainer';
import Home from './pages/Home';
import Detail from './pages/Detail';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cart from './pages/Cart';

function App() {
  return (
    <div >
      <PageContainer />
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
        
      </Routes>
    </Router>
    <PageContainer />
    </div>
  );
}

export default App;
