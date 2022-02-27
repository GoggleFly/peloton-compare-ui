import './App.css';
import NavBar from './NavBar/NavBar';
import ClassList from './ClassList/ClassList';
import ClassStatistics from './ClassStatistics/ClassStatistics';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="columns is-mobile">
        <div className="column is-one-quarter">
          <ClassList />
        </div>
        <div className="column">
          <ClassStatistics />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
