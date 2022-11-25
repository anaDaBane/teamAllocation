const TeamMembers = ({selectedTeam, maleProfile, femaleProfile, handleEmployeeCardClick, employees}) => {
  return (
    employees.map (e => {
      return(
        <div className={(e.teamName === selectedTeam)? "card m-2 standout": "card m-2"} key={e.id} id={e.id} style={{cursor: 'pointer'}} onClick={handleEmployeeCardClick}>
        {e.gender === 'male' ? <img src={maleProfile} alt="profile" className="card-img-top"/>: <img src={femaleProfile} alt="profile" className="card-img-top"/>}
        <div className="card-body">
          <h4 className="card-title">{e.fullName}</h4>
          <p className="card-text">{e.designation}</p>
        </div>
      </div>    
    )
    })
  )

}

export default TeamMembers;