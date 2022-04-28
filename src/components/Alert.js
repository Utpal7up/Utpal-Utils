import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        const tolower = word.toLowerCase();
        return tolower.charAt(0).toUpperCase() + tolower.slice(1);
    }
    return (
        <div style={{height:'35px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>}
        </div>
    )
}
