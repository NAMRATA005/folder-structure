import React from "react";
import { OnChange_Value } from "../ActionCreator/SignUpAction";
import { connect } from "react-redux";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorFlag: false,
    };
  }

  handleChange = (e) => {
    if (e.target.name === "phoneNumber") {
      if (!e.target.value.match(/^[0-9\b]*$/)) {
        return false;
      }
    }

    this.props.value_change({ name: e.target.name, value: e.target.value });
    this.setState({
      errorFlag: false,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      !this.props.firstName ||
      !this.props.lastName ||
      !this.props.Email ||
      !this.props.phoneNumber
    ) {
      this.setState({
        errorFlag: true,
      });
    }
    if (
      this.props.firstName &&
      this.props.lastName &&
      this.props.Email &&
      this.props.phoneNumber
    ) {
      sessionStorage.setItem("User_name", this.props.Email);
      this.props.history.push("/credential");
      console.log("submitted");
    }
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="3">
            <h6>
              {this.state.errorFlag && (
                <span>please fill up all the fields</span>
              )}
            </h6>
            <h3>Sign Up step-1</h3>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  maxLength="20"
                  type="text"
                  value={this.props.firstName}
                  name="firstName"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  maxLength="20"
                  type="text"
                  value={this.props.lastName}
                  name="lastName"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  maxLength="50"
                  type="email"
                  value={this.props.Email}
                  name="Email"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control
                  minLength="10"
                  maxLength="10"
                  type="text"
                  value={this.props.phoneNumber}
                  name="phoneNumber"
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
// export default connect(SignUp);
// connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SignUp)

const mapStateToProps = (state, ownProps) => ({
  firstName: state.SignUpReducer.firstName,
  lastName: state.SignUpReducer.lastName,
  Email: state.SignUpReducer.Email,
  phoneNumber: state.SignUpReducer.phoneNumber,
  // ... computed data from state and optionally ownProps
});

const mapDispatchToProps = {
  value_change: OnChange_Value,
};
// `connect` returns a new function that accepts the component to wrap
const connectToStore = connect(mapStateToProps, mapDispatchToProps);
export default connectToStore(SignUp);
