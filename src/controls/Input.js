import React from 'react';
import { TextField } from '@mui/material';

export default function Input(props) {
    const { name, label, value, varient, onChange, error = null, ...other }
    = props;
    return (
        <TextField
        varient={varient || "outlined"}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...other}
        {...(error && { error: true, helperText: error })}
        />
    )
}