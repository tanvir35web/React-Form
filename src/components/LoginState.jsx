import { useState } from "react";
import Input from "./Input";

export default function LoginState() {
  const [enteredInput, setEnteredInput] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  // Email Validation check here...
  const emailIsInvalid = didEdit.email && !enteredInput.email.includes("@");
  const passwordIsValid = didEdit.password && !enteredInput.password.trim().length < 6;

  function handleChangeInput(identifier, event) {
    setEnteredInput((prevValue) => ({
      ...prevValue,
      [identifier]: event.target.value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleReset(e) {
    e.preventDefault(),
      setEnteredInput({
        email: "",
        password: "",
      });
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(enteredInput);
    setEnteredInput({
      email: "",
      password: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={(event) => handleInputBlur("email")}
          value={enteredInput.email}
          onChange={(event) => handleChangeInput("email", event)}
          error={emailIsInvalid && "please enter a valid email! "}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={(event) => handleInputBlur("password")}
          value={enteredInput.password}
          onChange={(event) => handleChangeInput("password", event)}
          error={passwordIsValid && "please enter a valid password! "}

        />

        
      </div>

      <p className="form-actions">
        <button onClick={handleReset} className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
