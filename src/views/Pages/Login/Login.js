import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';
import {authenticationActions} from "../../../actions/Authentication";
import {connect} from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(authenticationActions.logout());

    this.state = {
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({submitted: true});
    const {email, password} = this.state;
    const {dispatch} = this.props;

    if (email && password) {
      dispatch(authenticationActions.login(email, password));
    }
  }

  render() {
    const {email, password, submitted} = this.state;
    const {loggingIn, loggingFailure} = this.props;

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input invalid={submitted && !email} type="email" placeholder="Email" autoComplete="email"
                               name="email" value={email} onChange={this.handleChange}/>
                        <FormFeedback invalid>Email is required</FormFeedback>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input invalid={submitted && !password} type="password" placeholder="Password"
                               autoComplete="current-password" name="password" value={password}
                               onChange={this.handleChange}/>
                        <FormFeedback invalid>Password is required</FormFeedback>
                      </InputGroup>
                      {loggingFailure &&
                      <p>
                        <small className="text-danger">Incorrect email or password.</small>
                      </p>
                      }
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login
                            {loggingIn &&
                            <i className="icon-refresh fa-spin ml-2"></i>
                            }
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {loggingIn, loggingFailure} = state.authenticationReducer;
  return {
    loggingIn,
    loggingFailure,
  };
}

export default connect(mapStateToProps)(Login);
