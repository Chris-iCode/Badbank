function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow}/>}
    />
  )
}

function CreateMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>Add another account</button>
  </>);
}

function CreateForm(props){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAunoJEAyN8xOZjSFlt_3iVwIFzTTAi3L0",
  authDomain: "badbank-be1e4.firebaseapp.com",
  projectId: "badbank-be1e4",
  storageBucket: "badbank-be1e4.appspot.com",
  messagingSenderId: "1073572267766",
  appId: "1:1073572267766:web:0fff8bfcc84be23276ced7"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


function handle(){
  console.log(name,email,password);
  const url = `/account/create/${name}/${email}/${password}`;
  (async () => {
      var res  = await fetch(url);
      var data = await res.json();
      const auth = firebase.auth();
      const promise = auth.createUserWithEmailAndPassword(email, password);
      promise.catch(({message}) => console.log(e.message))    
      console.log(data);        
  })();
  props.setShow(false);
}

  // function handle(){
  //   console.log(name,email,password);
  //   const url = `/account/create/${name}/${email}/${password}`;
  //   (async () => {
  //       var res  = await fetch(url);
  //       var data = await res.json();    
  //       console.log(data);        
  //   })();
  //   props.setShow(false);
  // }    

  return (<>

    Name<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/>

    Email address<br/>
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

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Create Account</button>

  </>);
}