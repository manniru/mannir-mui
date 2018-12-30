import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// const p1 = { height: 150, width: 300, padding: 5, margin: 5, backgroundColor: 'green' }

const p1 = {
  padding: 10,
  margin: 5,
  width: 300,
  height: 150,
  backgroundColor: "#9933CC"
};
const p2 = {
  padding: 10,
  margin: 5,
  width: 300,
  height: 150,
  backgroundColor: "#0d47a1"
};
const p3 = {
  padding: 10,
  margin: 5,
  width: 300,
  height: 150,
  backgroundColor: "#c51162"
};

const Paper1 = () => (
  <Paper style={p1} elevation={3}>
    <Typography variant="h5" component="h3" style={{ fontSize: "1.2rem" }}>
      New User
    </Typography>
    <Typography variant="h4" style={{ color: "white" }}>
      1806
    </Typography>
    <Typography component="p" style={{ color: "white" }}>
      15% from yesterday
    </Typography>
  </Paper>
);

class Grid1 extends React.Component {
  state = {
    spacing: "16"
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    return (
      <Grid container spacing={12}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={16}>
            {/* {[0, 1, 2, 3].map(value => ( */}
            <Grid item>
              <Paper style={p1} elevation={3}>
                <Typography
                  variant="h6"
                  component="h4"
                  style={{ color: "white" }}
                >
                  Infomation Box 1
                </Typography>

                <Typography
                  variant="h2"
                  component="h2"
                  style={{ color: "white" }}
                >
                  88888
                </Typography>

                <Typography component="p">
                  Number of Registered Users
                </Typography>
              </Paper>
            </Grid>

            <Grid item>
              <Paper style={p2} elevation={3}>
                <Typography
                  variant="h6"
                  component="h4"
                  style={{ color: "white" }}
                >
                  Information Box 2
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  style={{ color: "white" }}
                >
                  36782
                </Typography>
                <Typography component="p" style={{ color: "white" }}>
                  Number of Registered Users
                </Typography>
              </Paper>
            </Grid>

            <Grid>
              <Paper style={p3} elevation={3}>
                <Typography
                  variant="h6"
                  component="h4"
                  style={{ color: "white" }}
                >
                  Information Box 3
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  style={{ color: "white" }}
                >
                  99999
                </Typography>
                <Typography component="p" style={{ color: "white" }}>
                  Number of Registered Users
                </Typography>
              </Paper>
            </Grid>

            <Grid>
              <Paper style={p3} elevation={3}>
                <Typography
                  variant="h6"
                  component="h4"
                  style={{ color: "white" }}
                >
                  Information Box 4
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  style={{ color: "white" }}
                >
                  99999
                </Typography>
                <Typography component="p" style={{ color: "white" }}>
                  Number of Registered Users
                </Typography>
              </Paper>
            </Grid>

            {/* ))} */}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Grid1;
