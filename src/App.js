import React from "react";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      patronymic: "",
      email: "",
      phone: null,
    };
  }

  nameHandleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  surnameHandleChange = (e) => {
    this.setState({
      surname: e.target.value,
    });
  };

  patronymicHandleChange = (e) => {
    this.setState({
      patronymic: e.target.value,
    });
  };

  emailHandleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  phoneHandleChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Name:" +
        this.state.name +
        ", " +
        "Surname:" +
        this.state.surname +
        ", " +
        "Patronymic:" +
        this.state.patronymic +
        ", " +
        "Email:" +
        this.state.email +
        ", " +
        "PhoneNumber:" +
        this.state.phone
    );
  };

  render() {
    return (
      <div className="container">
        <h1>SignUp</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Name"
            type="text"
            value={this.state.name}
            onChange={this.nameHandleChange}
          />

          <input
            placeholder="Surname"
            type="text"
            value={this.state.surname}
            onChange={this.surnameHandleChange}
          />

          <input
            placeholder="Patronymic"
            type="text"
            value={this.state.patronymic}
            onChange={this.patronymicHandleChange}
          />

          <input
            placeholder="Email"
            type="email"
            value={this.state.email}
            onChange={this.emailHandleChange}
          />

          <input
            placeholder="+996"
            type="text"
            value={this.state.phone}
            onChange={this.phoneHandleChange}
          />

          <input type="submit" />
        </form>
      </div>
    );
  }
}
