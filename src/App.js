import { BrowserRouter } from 'react-router-dom';
import Navbar from './componets/navbar/navbar';
import logo from './logo.svg';
import Article_1 from './componets/body/1';
import Article_2 from './componets/body/2';
import Article_3 from './componets/body/3';
import Article_4 from './componets/body/4';
import Article_5 from './componets/body/5';
import Article_6 from './componets/body/6';
import Article_7 from './componets/body/7';
import Article_8 from './componets/body/8';
import Article_9 from './componets/body/9';
import Article_10 from './componets/body/10';
import Article_11 from './componets/body/11';
import Article_12 from './componets/body/12';
import Article_14 from './componets/body/14';
import Article_13 from './componets/body/13';
import Footer from './componets/footer/footer';

function App() {
  return (
    <div
    style={{
      backgroundImage:'url(./assesst/imgonline-com-ua-twotoone-oYXp83kbgj4.png)',
    }}
     className="App flex flex-col bg-slate-950 bg-fixed bg-cover gap-5 ">
      
      
      <div className='container mx-auto bg-transparent bg-contain'>
        
      <BrowserRouter >
        <Navbar />
        <Article_1 />
        <Article_2 />
        <Article_3 />
        <Article_4 />
        <Article_5 />
        <Article_6 />
        <Article_7 />
        <Article_8 />
        <Article_9 />
        <Article_10 />
        <Article_11 />
        <Article_12 />
        <Article_13 />
        <Article_14 />
        <Footer />
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
