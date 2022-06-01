import './App.css';
import "./Components/Header/Header"
import Header from './Components/Header/Header';
import PersonalSkills from './Components/Skills/PersonalSkills';
import ProfessionalSkills from './Components/Skills/ProfessionalSkills';
import Hobbies from './Components/Skills/Hobbies';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='skillSection'>
      <PersonalSkills/>
      <ProfessionalSkills/>
      <Hobbies/>
      </div>
    </div>
  );
}

export default App;
