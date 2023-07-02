import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Message(props) {
  return (
    <Typography variant="h6" component="h6" gutterBottom>
      {props.text}
    </Typography>
  );
}
function Createpost(props) {
  return (
    <div style={{padding:"40px",marginTop:"5px"}}>
          {/* <Message text="Your text message goes here." /> */}
      <Paper elevation={5} style={{ padding: '16px',marginTop:'3px',width:'250px'}}>
        <Typography style={{marginLeft:"40px"}} variant="h5" component="h3" gutterBottom> 
          {props.title}
        </Typography>
        <Typography variant="body1">
          {props.description}
        </Typography>
        <Button  href="Category" variant="contained" color="primary" style={{marginTop:"30px",marginLeft:"50px"}} onClick={props.onClick}>Continue</Button>
            </Paper>
    </div>
  );
}

function App() {
  const handleContinue = () => {
    // handle continue button click here
    
  };

  return (
    <div style={{display:"flex", flexDirection:"row", justifyContent: "center",marginTop:"230px"}}>
      <Createpost  title="job offered"  description="" onClick={handleContinue} />
      <Createpost title="job Wanted" description="" onClick={handleContinue} />
      <Createpost title="housing offered" description="" onClick={handleContinue} />
      <Createpost title="housing wanted" description="" onClick={handleContinue} />
    </div>
  );
}

export default App;
