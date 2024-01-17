import { useState } from "react";

export default function Login() {
  const [enteredInput, setEnteredInput] = useState({
    email: '',
    password: ''
  });
  
// Email Validation check here... 
  const emailIsInvalid = enteredInput.email !== "" && !enteredInput.email.includes("@");

  function handleSubmit(e) {
    e.preventDefault();
    console.log( enteredInput );
    setEnteredInput({
      email: '',
      password: ''
    })
  }

  function handleChangeInput(identifier, event) {
    setEnteredInput(prevValue => ({
      ...prevValue,
      [identifier]: event.target.value

    }))
  }

  function handleReset(e) {
    e.preventDefault(),
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
