import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';
import Team from './Teams';
import TeamMembers from './TeamMembers';
const Employees = ({employees, handleEmployeeCardClick, handleSelectedTeam, selectedTeam}) => {
  
  return (
    <main className="container">
      <div className="row justify-content-center my-3">
        <div className="col-6">
          <Team selectedTeam={selectedTeam} handleSelectedTeam={handleSelectedTeam}/>
        </div>

      </div>
      <div className="row justify-content-center my-3">
      <div className="col-8">
        <div className="card-collection">
           <TeamMembers
           selectedTeam = {selectedTeam} 
           maleProfile = {maleProfile} 
           employees = {employees}
           femaleProfile = {femaleProfile}
           handleEmployeeCardClick = {handleEmployeeCardClick}
           />
        </div>
        
        </div>
      </div>
      
    </main>
  )
}

export default Employees;