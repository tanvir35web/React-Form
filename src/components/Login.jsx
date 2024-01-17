import { useState } from "react";

export default function Login() {
  const [enteredInput, setEnteredInput] = useState({
    email: '',
    password: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log( enteredInput );
  }

  function handleChangeInput(identifier, event) {
    setEnteredInput(prevValue => ({
      ...prevValue,
      [identifier]: event.target.value 
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
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
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
