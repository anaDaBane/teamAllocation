const Header = ({selectedTeam, totalCount}) => {
  return (
    <header className="container">
      <div className="row mt-3 mb-4 justify-content-center">
        <div className="col-8">
        <h1>
          Team Member Allocation
        </h1>
        <h3>{selectedTeam} has {totalCount} {totalCount > 1 ? "members": "member"}</h3>
        </div>
      </div>
      
    </header>
  )
}

export default Header;