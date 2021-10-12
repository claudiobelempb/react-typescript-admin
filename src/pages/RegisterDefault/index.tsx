import { Component, SyntheticEvent } from "react";
import "./styles.css";

class RegisterDefault extends Component {
  first_name = "";
  last_name = "";
  email = "";
  password = "";
  password_confirm = "";

  submit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log({
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      password_confirm: this.password_confirm,
    });
  };

  render() {
    return (
      <div className={"container-sigin"}>
        <main className="form-signin">
          <form onSubmit={this.submit}>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                required
                onChange={(e) => (this.first_name = e.target.value)}
              />
              <label>First Name</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                required
                onChange={(e) => (this.last_name = e.target.value)}
              />
              <label>Last Name</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                required
                onChange={(e) => (this.email = e.target.value)}
              />
              <label>Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                onChange={(e) => (this.password = e.target.value)}
              />
              <label>Password</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Password Confirm"
                required
                onChange={(e) => (this.password_confirm = e.target.value)}
              />
              <label>Password Confirm</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Submit
            </button>
          </form>
        </main>
      </div>
    );
  }
}

export { RegisterDefault };
