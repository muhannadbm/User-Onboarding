import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import { useEffect, useState } from 'react';
import schema from './validation/formSchema'
import {reach} from 'yup'
import axios from 'axios'


const initialFormValues = {

  name: '',
  email: '',
  password: '',
  term: false,

}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  term: '',
}

function App() {
  const[errors, setErrors] = useState(initialFormErrors)
  const[formValues, setFormValues] = useState(initialFormValues)
  const[Disabled, setDisabled] = useState(true)
  const[users,setUsers] = useState([])

  const validate = (name, value) => {
    console.log('inside validate')
    reach(schema, name).validate(value).then(()=> setErrors({...errors, [name]: ''}),
    setFormValues({...formValues, [name]: value})
    ).catch(err=> {setErrors({...errors, [name]: err.errors[0]})})
  }
  function submit(e){
    e.preventDefault();
    axios.post('https://reqres.in/api/users', formValues).then(
      (res)=>setUsers([...users, res.data]),
    )
    setFormValues(initialFormValues)
    setErrors(initialFormErrors)
  }
  const inputchange = (e) =>{
  const{name, value,checked,type} = e.target
  let value2 = type === 'checkbox' ? checked:value
   validate(name,value2)
   setFormValues({...formValues,[name]: value2})
  }


  useEffect(()=>{
    schema.isValid(formValues).then(res => {
      setDisabled(!res)
    })
  },[formValues])


  return (
    <div className="App">
<Form errors ={errors} disabled = {Disabled} values = {formValues} change = {inputchange} submit={submit}/>
    {users.map(el => {
      return(
      <div className="container">
        <p>Name: {el.name}</p>
        <p>Email: {el.email}</p>
        <p>Accepted Terms ?: {String(el.term)}</p>
      </div>)

    })}
    </div>
  );
}

export default App;
