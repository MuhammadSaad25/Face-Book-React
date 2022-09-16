import './App.css';
import Header from './components/header';
import LeftBar from './components/leftBar';
import Storybox from './components/storybox';
import RightBar from './components/rightBar';
import Content from './components/content';
// import Sidebar from './components/sidebar';
// import Menubar from './components/menubar';

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className='body'>
        <LeftBar />
        <div className='bsb-2p'>
          <div className='bsb-2'>
            <Storybox />
            <Content />
          </div>
        </div>
        <RightBar />
      </div>

    </div>
  );
}

export default App;