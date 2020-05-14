import React from "react";
import { connect } from "react-redux";
import { OnChange_Value } from "../ActionCreator/SignUpAction";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
class ConfirmUser extends React.Component {
  constructor() {
    super();
    this.state = {};
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
    if (!this.props.password || !this.props.confirmPassword) {
      console.log("got inside");
      this.setState({
        errorFlag: true,
      });
    }
    if (this.props.password !== this.props.confirmPassword) {
      this.setState({
        matchFlag: true,
      });
    }
    if (!this.props.password || !this.props.confirmPassword) {
      return false;
    }
    if (this.props.password === this.props.confirmPassword) {
      sessionStorage.setItem("password", this.props.confirmPassword);
      this.props.history.push("/login");
    }
  };
  render() {
    console.log(this.props, "ALL PROPS");
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="3">
            {this.state.errorFlag && <span>Please fill up all the fields</span>}
            {this.state.matchFlag && (
              <span>password and confirm password doesn't match</span>
            )}
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>User Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={this.props.Email}
                  name="firstName"
                  readOnly
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={this.props.password}
                  name="password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={this.props.confirmPassword}
                  name="confirmPassword"
                  onChange={this.handleChange}
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
  // ... computed data from state and optionally ownProps
});
const mapDispatchToProps = {
  value_change: OnChange_Value,
};
const connectToStore = connect(mapStateToProps, mapDispatchToProps);
export default connectToStore(ConfirmUser);
