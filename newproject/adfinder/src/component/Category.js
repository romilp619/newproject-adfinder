// import React from "react";
// import Paper from '@material-ui/core/Paper';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormLabel from '@material-ui/core/FormLabel';
// import Button from '@material-ui/core/Button';

// const Category = () => {
//   const [value, setValue] = React.useState('female');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };
  
//   return (
//     <div>
//       <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center' }}>Please choose a category</h2>

//       <Paper elevation={5} style={{ padding: '16px', width: '400px', height: '500px', marginLeft: '560px' }}>
//       <FormControl component="fieldset">
//       <FormLabel component="legend">Gender</FormLabel>
//       <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
//         <FormControlLabel value="female" control={<Radio />} label="Female" />
//         <FormControlLabel value="male" control={<Radio />} label="Male" />
//         <FormControlLabel value="other" control={<Radio />} label="Other" />
//       </RadioGroup>
//     </FormControl>
//        </Paper>
//      </div>
//   );
//  };

//  export default Category;


import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import Accounting1 from '../assest/images/Accounting1.jpg';
import technical from '../assest/images/technical.png';
import healthcare from '../assest/images/healthcare.jpeg';
import education from '../assest/images/black.jpg';
import './Category.css';
const Category = () => {
 
  return (
    
    <div className='main'>  
    
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Card style={{marginTop:"220px",height:"340px",marginTop:"190px"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Accounting1}
              alt="Accounting"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Accounting/finance
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card style={{height:"340px",marginTop:"190px"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={technical}
              alt="technical"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Technical Support
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card style={{height:"340px",marginTop:"190px"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={healthcare}
              alt="healthcare"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Healthcare
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card style={{height:"340px",marginTop:"190px"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={education}
              alt="education"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Education/Teaching
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
    </div>
  );
};

export default Category;



