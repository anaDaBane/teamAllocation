import { useState } from "react";
const GroupTeamMembers = ({selectedTeam, employees, setTeam}) => {
  const [GroupEmployees, setGroupData] = useState(GroupTeamMembers());

  function GroupTeamMembers() {
    let teams = [];
    
    let teamAMembers = employees.filter(e => e.teamName === 'TeamA');
    let teamA = {team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false: true}
    teams.push(teamA)
    
    let teamBMembers = employees.filter(e => e.teamName === 'TeamB');
    let teamB = {team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false: true}
    teams.push(teamB)

    let teamCMembers = employees.filter(e => e.teamName === 'TeamC');
    let teamC = {team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false: true}
    teams.push(teamC)

    let teamDMembers = employees.filter(e => e.teamName === 'TeamD')
    let teamD = {team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false: true}
    teams.push(teamD)

    return teams; 
  }

  function handleTeamClick(event) {
    let newGroupData = GroupEmployees.map(group => group.team === event.currentTarget.id ? {...group, collapsed: !group.collapsed}: group); 
    setGroupData(newGroupData);
    setTeam(event.currentTarget.id);
  }
  return (
    <main className="container">
      {
        GroupEmployees.map(item => {
          return (
            <div key={item.team} className='card mt-2' style={{cursor: 'pointer'}}>
              <h4 id={item.team} className='card-header text-secondary bg-white' onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse": ""}>
                <hr />
                {
                  item.members.map(m => {
                    return (
                       <div className="mt-2" key={m.id}>
                        <h5 className="card-title mt-2">
                          <span className="text-dark">Full Name: {m.fullName}</span>
                        </h5>
                        <p className="card-text">Designation: {m.designation }</p>
                       </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

export default GroupTeamMembers;