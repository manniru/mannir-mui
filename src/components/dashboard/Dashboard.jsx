import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import UserForm from '../../demos/UserForm'
import PersonForm from '../../demos/PersonForm'
import UserList from '../UserList'
import ControlledExpansionPanels from '../../demos/ControlledExpansionPanels'

import faker from 'faker'
import FormUser from "../../mannir/FormUser"
import TableUser from '../../demos/TableUser'

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
        //   padding: 10,
        paddingBottom: 15,
        // paddingLeft: 10,
          margin: 5,
          width: 300,
          height: 120,
          backgroundColor: props.color,
          textAlign: 'center'
        }}
        elevation={3}
      >
        <Typography variant="h6" style={{ color: "white" }}>
          {props.title}
        </Typography>

        <Typography variant="h2" component="h2" style={{ color: "white" }}>
          { props.number }
        </Typography>

        <Typography component="p" style={{ color: "white" }}>
          Number of Registered Users
        </Typography>
      </Paper>
    </div>
  );
};

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      
    }

  }

  render() {
// function Dashboard(props) {
  const { classes , online, noun, verb} = this.props;

  console.log(this.props.persons)
  return (
    <div className={{flexGrow: 1}}>
      <Grid container spacing={24}>
        <Grid item xs={6} sm={3}><InfoBox color="blue" number={faker.random.number({min:10000, max:99999})} title={`${online} ${noun} ${verb} online.`} /></Grid>
        <Grid item xs={6} sm={3}><InfoBox color="green" number={this.props.persons.length} title="Number of Records" /></Grid>
        <Grid item xs={6} sm={3}><InfoBox color="red" number={faker.random.number({min:10000, max:99999})} title="Information Box 3" /></Grid>
        <Grid item xs={6} sm={3}><InfoBox color="purple" number={faker.random.number({min:10000, max:99999})} title="Information Box 4" /></Grid>
        
       

        <Grid item xs={12} sm={6}>
          {/* <PersonForm 
          // userID={this.props.userID}
          onUserAdded={this.props.onUserAdded}
          onUserUpdated={this.props.onUserUpdated}
          server={this.props.server}
          socket={this.props.socket}
          /> */}
          {'FormUser'}
          <FormUser 
          server={this.props.server}
          socket={this.props.socket}
          onUserAdded={this.props.handleUserAdded}
          onPersonAdded={this.props.onPersonAdded}
          onUserUpdated={this.props.onUserUpdated}
          onPersonDeleted={this.props.onPersonDeleted}
          
          userID={this.props.userID}
          persons={this.props.persons}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {'<UserForm />'}
        </Grid>

        <Grid item xs={12}>
          <TableUser 
          onUserUpdated={this.props.handleUserUpdated}
          onUserDeleted={this.props.handleUserDeleted}
          users={this.props.users}
          persons={this.props.persons}
          server={this.props.server}
          socket={this.props.socket}
           />
        </Grid>

        <Grid item xs={12}>
          {'<UserList />'}
        </Grid>


        <Grid item xs={12} sm={6}>
          <ControlledExpansionPanels />
        </Grid>
        <Grid item xs={12} sm={6}>
          {'<PersonForm />'}
        </Grid>


      </Grid>
    </div>
  );
}
}


Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
