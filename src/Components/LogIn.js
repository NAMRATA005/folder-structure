import React from "react";
import { connect } from "react-redux";
import { OnChange_Value } from "../ActionCreator/SignUpAction";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorFlag: false,
      emailFlag: false,
      passWord: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      errorFlag: false,
      matchFlag: false,
    });
    this.props.value_change({ name: e.target.name, value: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let storageEmail = sessionStorage.getItem("User_name");
    let storagePassword = sessionStorage.getItem("password");
    if (!this.props.User_Name || !this.props.user_password) {
      this.setState(
        {
          errorFlag: true,
        },
        () => {
          console.log(this.state.errorFlag, "ppppp");
        }
      );
    }
    if (this.props.User_Name !== storageEmail) {
      this.setState({
        emailFlag: true,
      });
    }
    if (this.props.user_password !== storagePassword) {
      this.setState({
        passWord: true,
      });
    }
    this.props.history.push("/folder");
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="3">
            {this.state.errorFlag && <span>Please fill up all the fields</span>}
            {this.state.emailFlag && <span>enter a valid user</span>}
            {this.state.passWord && <h3>incorrect password</h3>}
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email id:</Form.Label>
                <Form.Control
                  maxLength="50"
                  type="email"
                  value={this.props.User_Name}
                  name="User_Name"
                  onChange={this.handleChange}
                  placeholder="Enter Email id"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  maxLength="50"
                  type="password"
                  value={this.props.user_password}
                  name="user_password"
                  onChange={this.handleChange}
                  placeholder="Enter password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  firstName: state.SignUpReducer.firstName,
  lastName: state.SignUpReducer.lastName,
  Email: state.SignUpReducer.Email,
  phoneNumber: state.SignUpReducer.phoneNumber,
  password: state.SignUpReducer.password,
  confirmPassword: state.SignUpReducer.confirmPassword,
  User_Name: state.SignUpReducer.User_Name,
  user_password: state.SignUpReducer.user_password,
  // ... computed data from state and optionally ownProps
});
const mapDispatchToProps = {
  value_change: OnChange_Value,
};
const connectToStore = connect(mapStateToProps, mapDispatchToProps);
export default connectToStore(LogIn);
