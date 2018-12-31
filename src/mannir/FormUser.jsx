import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import faker from "faker";
import axios from 'axios';
const b1 = { margin: 5 };

const genderOptions = [
  { key: 'm', text: 'Male', value: 'm' },
  { key: 'f', text: 'Female', value: 'f' },
  { key: 'o', text: 'Do Not Disclose', value: 'o' }
]

class FormUser extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      email: '',
      age: '',
      gender: '',
      formClassName: '',
      formSuccessMessage: '',
      formErrorMessage: '',

      person: {
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    // Fill in the form with the appropriate data if user id is provided
    if (this.props.userID) {
      axios.get(`${this.props.server}/api/users/${this.props.userID}`)
      .then((response) => {
        this.setState({
          name: response.data.name,
          email: response.data.email,
          age: (response.data.age === null) ? '' : response.data.age,
          gender: response.data.gender,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSelectChange(e, data) {
    this.setState({ gender: data.value });
  }

  handleClick = (e, id) => {
    switch (id) {
      case "demo":
        var person = {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: faker.helpers.replaceSymbolWithNumber("080########"),
          email: faker.internet.email()
        };
        this.setState({ person });
        break;

      case "submit":
        const person = this.state.person;

        console.log(person);
        break;

      default:
        break;
    }
  };

  handleSubmit(e) {
    // Prevent browser refresh
    e.preventDefault();

    const user = {
        firstName: this.state.person.firstName,
        lastName: this.state.person.lastName,
        phone: this.state.person.phone,
        email: this.state.person.email
    }

    // Acknowledge that if the user id is provided, we're updating via PUT
    // Otherwise, we're creating a new data via POST
    const method = this.props.userID ? 'put' : 'post';
    const params = this.props.userID ? this.props.userID : '';

    axios({
      method: method,
      responseType: 'json',
      url: `${this.props.server}/api/persons/${params}`,
      data: user
    })
    .then((response) => {
      this.setState({
        formClassName: 'success',
        formSuccessMessage: response.data.msg
      });

      if (!this.props.userID) {
        this.setState({
          name: '',
          email: '',
          age: '',
          gender: ''
        });
        // this.props.onUserAdded(response.data.result);
        this.props.onPersonAdded(response.data.result);
        console.log('onPersonAdded', response.data.result)
        this.props.socket.emit('add', response.data.result);
        console.log('emit', response.data.result)
      }
      else {
        this.props.onUserUpdated(response.data.result);
        this.props.socket.emit('update', response.data.result);
      }
      
    })
    .catch((err) => {
      if (err.response) {
        if (err.response.data) {
          this.setState({
            formClassName: 'warning',
            formErrorMessage: err.response.data.msg
          });
        }
      }
      else {
        this.setState({
          formClassName: 'warning',
          formErrorMessage: 'Something went wrong. ' + err
        });
      }
    });
  }

  render() {
    const formClassName = this.state.formClassName;
    const formSuccessMessage = this.state.formSuccessMessage;
    const formErrorMessage = this.state.formErrorMessage;

    return (
        <div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
        >
        <Paper style={{ margin: 10, padding: 20 }} elevation={3}>
          <Typography variant="h5" component="h3">
            Person Form
          </Typography>

          <TextField
            label="Firstname"
            name="firstName"
            // style={t1}
            fullWidth
            value={this.state.person.firstName}
            // onChange={this.handleChange}
            // onChange={this.handleChange.bind(this)}
            onChange={this.handleValue}
          />
          <TextField
            label="LastcName"
            name="lastName"
            // style={t1}
            fullWidth
            value={this.state.person.lastName}
            onChange={this.handleValue}
          />

          <TextField
            label="Phone"
            name="phone"
            fullWidth
            value={this.state.person.phone}
            onChange={this.handleValue}
          />

          <TextField
            label="Email"
            name="email"
            fullWidth
            value={this.state.person.email}
            onChange={this.handleValue}
          />

          <br />
          <br />

          <Button
            variant="raised"
            onClick={e => this.handleClick(e, "demo")}
            style={b1}
          >
            Demo
          </Button>

          <Button
            variant="raised"
            color="primary"
            style={b1}
            onClick={e => this.handleSubmit(e)}
          >
            Submit
          </Button>

          <Button
            variant="raised"
            onClick={e => this.handleClick(e, "reset")}
            color="secondary"
            style={b1}
          >
            Reset
          </Button>
        </Paper>
      </div>
    );
  }
}

export default FormUser;
