import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

class Form1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        name: "",
        age: "",
        surname: ""
      },
      disabled: true
    };
  }

  validate = () => {
    const { profile } = this.state;
    const isNameValid = profile.name.length > 0;
    const isAgeValid = profile.age.length > 0;
    const isSurnameValid = profile.surname.length > 0;
    const disabled = isNameValid && isAgeValid && isSurnameValid;

    this.setState({
      disabled: !disabled
    });
  };

  handle_value = val => {
    const { value, name } = val.target,
      { profile } = this.state;

    this.setState(
      {
        profile: {
          ...profile,
          [name]: value
        }
      },
      this.validate
    );
  };

  handle_send = () => {
    const { name, age, surname } = this.state.profile;

    alert(`
    
    firstname: ${name}
    surname: ${surname}
    age: ${age}

    `);
  };

  render() {
    return (
      <div>
          <Paper style={{margin: 10, padding: 10, width: 400}} elevation={3}>
          <Typography variant="h5" component="h3">
          User Form
        </Typography>
          <TextField
          label="Firstname"
          name="name"
          fullWidth
          value={this.state.profile.name}
          onChange={this.handle_value}
        />
        <TextField
          label="Surname"
          name="surname"
          fullWidth
          value={this.state.profile.surname}
          onChange={this.handle_value}
        />
        <TextField
          label="Age"
          name="age"
          fullWidth
          value={this.state.profile.age}
          onChange={this.handle_value}
        />

        <br />
        <br />
        <Button
          variant="raised"
          mini
          fullWidth
          onClick={this.handle_send}
        //   disabled={this.state.disabled}
          color="primary"
        >
          Submit
        </Button>
          </Paper>
        
      </div>
    );
  }
}

export default Form1;