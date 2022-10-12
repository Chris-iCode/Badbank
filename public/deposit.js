function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function DepositMsg(props){
  return (<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
          props.setShow(true);
          props.setStatus('');
      }}>
        Deposit again
    </button>
  </>);
} 

function DepositForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');

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
    console.log(email, amount);
    firebase.auth().currentUser.getIdToken()
    .then(idToken => {
      fetch(`/account/update/${email}/${amount}`,{
        method: 'GET',
        headers: {
          'Authorization' : idToken
        }
      })
        .then(response => response.text())
        .then(text => {
            try {
                const data = JSON.parse(text);
                props.setStatus('');
                props.setShow(false);
                console.log('JSON:', data);
            } catch(err) {
                props.setStatus('Deposit failed')
                console.log('err:', text);
            }
      });
    })
   
  }
  

  return(<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
      
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Deposit</button>

  </>);
}
