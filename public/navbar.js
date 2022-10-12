function NavBar(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

  function PullMsg(props){
    return(<>
      {status}
      <button type="submit" 
        className="celtics" 
        onClick={() => {
          props.setShow(true);
          props.setStatus('');
        }}>
          back
      </button>
    </>);
  }


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
      <User
    status={status}
    body={show?
    <PullForm setStatus={setStatus} setShow={setShow}/>:<PullMsg setStatus={setStatus} setShow={setShow}/>}
    />
    </nav>
   
    

  );
}




function PullForm(props){
  const[email, setEmail] = React.useState('');

  function ask(){

    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus('Hello ' + JSON.stringify(data.name));
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('User Name: ')
            console.log('Request not making it to server: ' , text);
        }
    });
  }
 



return(
  <>
 <input type="input" 
      className="boston" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/>

  <button type="submit" 
  id="celtics"
  className="btn btn-light"  
  onClick={ask}>
    Go
</button>
</>
);
}