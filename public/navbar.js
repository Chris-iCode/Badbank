function NavBar(){
  return(

    <nav  className="navbar navbar-expand-lg navbar-light bg-secondary">
      <a  className="navbar-brand" href="#"><img src="top_hat.png" className="logo-image"/>BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>

  );
}