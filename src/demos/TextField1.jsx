import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextField1 = () => 
<div>
    <TextField
        id="firstName"
        label="First Name"
        style={{width: 200}}
        // value={this.state.name}
        // onChange={this.handleChange('name')}
        margin="normal"
    />
</div>


export default TextField1;