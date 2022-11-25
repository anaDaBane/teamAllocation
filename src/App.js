import './App.css';
import Footer from './Footer';
import Header from './Header';
import { useState, useEffect } from 'react';
import Employees from './Employees.jsx';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import GroupTeamMembers from './GroupTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';

function App() {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam'))||'TeamA');
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList'))||[{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }])
  
  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees])

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  },[selectedTeam])
  function handleSelectedTeam(event) {
    setTeam(event.target.value)
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map(e=>(parseInt(event.currentTarget.id) === e.id)
    ? (selectedTeam === e.teamName) ? {...e, teamName: ''} : {...e, teamName: selectedTeam}
    : e)
    setEmployees(transformedEmployees);
  }
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Header
        selectedTeam = {selectedTeam}
        totalCount = {employees.filter(e => e.teamName === selectedTeam).length}
        />
        <Routes>
          <Route path='/' element={<Employees
            employees = {employees}
            selectedTeam = {selectedTeam}
            handleEmployeeCardClick = {handleEmployeeCardClick}
            handleSelectedTeam = {handleSelectedTeam}/>}>
          </Route>
          <Route path='GroupTeamMembers' element={<GroupTeamMembers
          employees = {employees}
          selectedTeam = {selectedTeam}
          setTeam = {setTeam}
          />}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
