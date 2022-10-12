function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState(''); 

  return (
   <Card
    bgcolor="secondary"
    header="Login"
    status={status}
    body={show ? 
      <LoginForm setShow={setShow} setStatus={setStatus}/> :
      <LoginMsg setShow={setShow} setStatus={setStatus}/>}
  />
  

   
    
  ) 



function LoginMsg(props){

  return(<>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Go To Login
    </button>
  </>);
}



function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');




  const firebaseConfig = {
    apiKey: "AIzaSyAunoJEAyN8xOZjSFlt_3iVwIFzTTAi3L0",
    authDomain: "badbank-be1e4.firebaseapp.com",
    projectId: "badbank-be1e4",
    storageBucket: "badbank-be1e4.appspot.com",
    messagingSenderId: "1073572267766",
    appId: "1:1073572267766:web:0fff8bfcc84be23276ced7"
  };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  function handle(){
  
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    console.log('you pressed the login button')
    props.setStatus('Successfully Logged In!');
    props.setShow(false);
    promise.catch(e => props.setStatus('Incorrect login information. Try again.'));


  }


  function fireExit(){
    firebase.auth().signOut();
    props.setStatus('You have signed out');
    props.setShow(false);
  }



   // login state
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log('User is logged in!')
		}
		else{
			console.log('User is not logged in');
		}
	});


 
  


  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
    <button id="logout" type="submit" className="btn btn-light" onClick={fireExit}>Logout</button>


   
  </>
  
  );
}


}



