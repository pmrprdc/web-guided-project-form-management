import React, {useState} from 'react'

import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

function SimpleForm() {
  const [pets, setPets] = useState(petsList)
  const [formValues, setFormValues] = useState({petName: "", petType: ""})
  
  
  
  const change =(evt) => {
    const {name, value} = evt.target;

    setFormValues({...formValues, [name]:value})
    console.log(formValues)
    
  }
  
  
  
  return <div className="container">
    <h1>Simple Form App</h1>
    {pets.map((pet,idx)=>{
      return (
        <div key={idx}>
          {pet.petName} is a {pet.petType}
        </div>
      )
    })}
    <form>
      <input
      name="petName"
      type="text"
      value = {formValues.petName}
      onChange={change}
       />
       <input
      name="petType"
      type="text"
      value = {formValues.petType}
      onChange={change}
       />
    </form>
    </div>
}

render(
  <>
    <SimpleForm />
    
    {/* <App /> */}
  </>
  , document.querySelector('#root')
)
