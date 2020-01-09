import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  BreadcrumbItem,
  Breadcrumb,
  FormFeedback,
  FormGroup,
  Form,
  Button,
  Label,
  Input,
  Col
} from "reactstrap";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      telnum: "",
      contactType: "Tel.",
      agree: false,
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  validate(firstname, lastname, telnum, email) {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: ""
    };

    if (this.state.touched.firstname && firstname.length < 3) {
      errors.firstname = "first name must be more than 3 char";
    }

    if (this.state.touched.lastname && lastname.length < 3) {
      errors.lastname = "last name must be more than 3 char";
    }

    if (this.state.touched.telnum && !/^\d+$/.test(telnum)) {
      errors.telnum = "tel must be digits";
    }

    if (
      this.state.touched.email &&
      email.split("").filter(c => c === "@").length !== 1
    ) {
      errors.email = "email should contain @";
    }

    return errors;
  }

  handleBlur = field => evt => {
    // to update the touched state
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    console.log("Current state is " + JSON.stringify(this.state));
    alert(JSON.stringify(this.state));
    e.preventDefault();
  }

  render() {
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email
    );

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info" href="tel:+85212345678">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>

        <div className="row content">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
          </div>

          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    valid={errors.firstname === ""}
                    invalid={errors.firstname !== ""}
                    // to make the form data controlled
                    value={this.state.firstname}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("firstname")}
                  />
                  <FormFeedback>{errors.firstname}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    valid={errors.lastname === ""}
                    invalid={errors.lastname !== ""}
                    onBlur={this.handleBlur("lastname")}
                    value={this.state.lastname}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="telnum" md={2}>
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Input
                    id="telnum"
                    type="tel"
                    name="telnum"
                    placeholder="Tel."
                    value={this.state.telnum}
                    onChange={this.handleInputChange}
                    valid={errors.telnum === ""}
                    invalid={errors.telnum !== ""}
                    onBlur={this.handleBlur("telnum")}
                  />
                  <FormFeedback>{errors.telnum}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    valid={errors.email === ""}
                    invalid={errors.email !== ""}
                    onBlur={this.handleBlur("email")}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />{" "}
                      <strong>May we contact you</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    name="contactType"
                    type="select"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="feedback" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    id="message"
                    rows="12"
                    type="textarea"
                    name="message"
                    placeholder="Send us your Feedback"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 12, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
