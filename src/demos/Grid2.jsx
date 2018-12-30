import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import UserForm from '../demos/UserForm'
import Form1 from '../demos/Form1'
import UserList from '../components/UserList'
import ControlledExpansionPanels from '../demos/ControlledExpansionPanels'

import faker from 'faker';

const p2 = {
  padding: 10,
  margin: 5,
  width: 300,
  height: 120,
  backgroundColor: "purple" //0d47a1
};
const p3 = {
  padding: 10,
  margin: 5,
  width: 300,
  height: 120,
  backgroundColor: "blue"
};

const p4 = {
  padding: 10,
  margin: 5,
  height: 120,
  backgroundColor: "green"
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const InfoBox = props => {
  return (
    <div>
      <Paper
        style={{
          padding: 10,
          margin: 5,
          width: 300,
          height: 120,
          backgroundColor: props.color
        }}
        elevation={3}
      >
        <Typography variant="h6" style={{ color: "white" }}>
          Infomation Box 1
        </Typography>

        <Typography variant="h2" component="h2" style={{ color: "white" }}>
          { props.title }
        </Typography>

        <Typography component="p" style={{ color: "white" }}>
          Number of Registered Users
        </Typography>
      </Paper>
    </div>
  );
};

function Grid2(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6} sm={3}><InfoBox color="blue" title={faker.random.number({min:10000, max:99999})} /></Grid>
        <Grid item xs={6} sm={3}><InfoBox color="green" title={faker.random.number({min:10000, max:99999})} /></Grid>
        <Grid item xs={6} sm={3}><InfoBox color="red" title={faker.random.number({min:10000, max:99999})} /></Grid>
        <Grid item xs={6} sm={3}><InfoBox color="purple" title={faker.random.number({min:10000, max:99999})} /></Grid>
        
       

        <Grid item xs={12} sm={6}>
          <UserForm />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form1 />
        </Grid>

        <Grid item xs={12}>
          <UserList />
        </Grid>


        <Grid item xs={12} sm={6}>
          <ControlledExpansionPanels />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form1 />
        </Grid>


      </Grid>
    </div>
  );
}

Grid2.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Grid2);
