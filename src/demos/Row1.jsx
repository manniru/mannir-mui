import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const p1 = {padding: 10, margin: 5, width: 300, height: 150, backgroundColor: '#9933CC' }
const p2 = {padding: 10, margin: 5, width: 300, height: 150, backgroundColor: '#0d47a1' }
const p3 = {padding: 10, margin: 5, width: 300, height: 150, backgroundColor: '#c51162' }


export default class Row1 extends React.Component {
render() {

  return (
    <div>
      <Paper style={p1} elevation={3}>
        <Typography variant="h6" component="h4" style={{ color: 'white' }}>
          Number of Attendances
        </Typography>

        <Typography variant="h1" component="h1" style={{ color: 'white' }}>88888</Typography>

        <Typography component="p">
          Number of Registered Users
        </Typography>
      </Paper>

      <Paper style={p2} elevation={3}>
        <Typography variant="h6" component="h4" style={{ color: 'white' }}>
          Number of Attendances
        </Typography>
        <Typography variant="h2" component="h2" style={{ color: 'white' }}>36782</Typography>
        <Typography component="p" style={{ color: 'white' }}>
          Number of Registered Users
        </Typography>
      </Paper>


      <Paper style={p3} elevation={3}>
        <Typography variant="h6" component="h4" style={{ color: 'white' }}>
          Number of Attendances
        </Typography>
        <Typography variant="h2" component="h2" style={{ color: 'white' }}>99999</Typography>
        <Typography component="p" style={{ color: 'white' }}>
          Number of Registered Users
        </Typography>
      </Paper>

      
    </div>
);
  }
}