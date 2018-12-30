import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const p1 = { margin: 10, padding: 10, width: 400, height: 150 }

export default class InfoBox extends React.Component {
    render() {
        return (
            <div>
                <Paper style={p1} elevation={1}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
            </div>
        );
    }
}
