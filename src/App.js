import './App.css';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { Nav } from './pages/nav';
import { Projects } from './pages/projects';
import { Services } from './pages/services';
import { Skills } from './pages/skills';

function App() {
  return (
    <div className="App text-start">
      <Nav/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/sujannani/reacttask1.git
// git push -u origin main