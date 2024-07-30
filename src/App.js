import React, { useState ,useEffect} from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employee';
import Members from './members';
import Nav from './nav';
import Notfound from './notfound';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  const[team,setteam] =useState(JSON.parse(localStorage.getItem('team'))||"A");
  const [employee,setemployee] = useState(JSON.parse(localStorage.getItem('employee'))||[{
      id:1,
      Name:"pankaj",
      Post:"Devloper",
      gender:"male",
      team:"A"
  },
  {
      id:2,
      Name:"siri",
      Post:"Devloper",
      gender:"female",
      team:"A"
  },
  {
      id:3,
      Name:"pankaj",
      Post:"Devloper",
      gender:"male",
      team:"A"
  },
  {
      id:4,
      Name:"alexa",
      Post:"Devloper",
      gender:"female",
      team:"B"
  },
  {
      id:5,
      Name:"alexa",
      Post:"Devloper",
      gender:"male",
      team:"B"
  },
  {
      id:6,
      Name:"alexa",
      Post:"Devloper",
      gender:"female",
      team:"C"
  },
  {
      id:7,
      Name:"alexa",
      Post:"Devloper",
      gender:"male",
      team:"D"
  },
  {
      id:8,
      Name:"alexa",
      Post:"Devloper",
      gender:"male",
      team:"C"
  },
  {
      id:9,
      Name:"alexa",
      Post:"Devloper",
      gender:"female",
      team:"D"
  }]);
  useEffect(()=>{
    localStorage.setItem('team',JSON.stringify(team));
},[team]);


useEffect(()=>{
    localStorage.setItem('employee',JSON.stringify(employee));
},[employee]);

  function changeTeam (event){
      console.log(event.target.value);
      setteam(event.target.value);
  }
  function editTeam(event){
      const newe = employee.map((em)=>em.id === parseInt(event.currentTarget.id)?(em.team === team)?{...em,team : "" }:{...em,team : team}:em);
      setemployee(newe);
      console.log(parseInt(event.currentTarget.id));
  }
  return (
    <div className="App">
        <Router>
        <Nav/>
            <Header team={team} member = {employee.filter((em)=> em.team === team ).length}/>
            <Routes>
                <Route path='/' element={<Employee employee={employee} team={team} changeTeam= {changeTeam} editTeam={editTeam}/>}></Route>
                <Route path='/members' element={<Members employee={employee} team={team} changeTeam={changeTeam} />}></Route>
                <Route path='*' element={<Notfound/>}></Route>
            </Routes>
            <Footer/>
      </Router>
    </div>
  );
}

export default App;
