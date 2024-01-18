import { useState } from "react";

export default function Login() {
  const [enteredInput, setEnteredInput] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });
  
// Email Validation check here... 
  const emailIsInvalid = didEdit.email && !enteredInput.email.includes("@");



  function handleChangeInput(identifier, event) {
    setEnteredInput(prevValue => ({
      ...prevValue,
      [identifier]: event.target.value
    }))

    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }))
  }

  function handleReset(e) {
    e.preventDefault(),
    setEnteredInput({
      email: '',
      password: ''
    })
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log( enteredInput );
    setEnteredInput({
      email: '',
      password: ''
    })
  }

  return (
    <form  onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            value={enteredInput.email}
            onChange={(event) => handleChangeInput("email", event)}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a correct Email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredInput.password}
            onChange={(event) => handleChangeInput("password", event)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button onClick={handleReset} className="button button-flat" >Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
