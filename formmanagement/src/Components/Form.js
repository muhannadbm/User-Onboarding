import React from 'react'

export default function Form(props){
   const {errors, values, change,submit ,disabled} = props
   const {name,email,password,term} = values
    return(
        <div className="form">
        <form onSubmit={submit}>
            <label>Name:
            <input name="name" type="text" onChange={change} value={name}/> </label>
            <label>Email:
            <input name="email" type="email" onChange={change} value={email}/> </label>
            <label>Password
            <input name="password" type="password" onChange={change} value = {password}/></label>
            <label>Terms of Service:
            <input name="term" type="checkbox" onChange={change} checked={term}/> </label>
            <button id='submit' disabled={disabled}>Submit</button>
            
        </form>
        <div className="errors">
        <p>{errors.name}</p>
        <p>{errors.email}</p>
        <p>{errors.password}</p>
        <p>{errors.term}</p>
        </div>
        </div>
    )
}