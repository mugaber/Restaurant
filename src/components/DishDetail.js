import React, { Component } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import {
  Row,
  Button,
  Label,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

const minLength = len => val => val && val.length >= len;
const maxLength = len => val => !val || val.length <= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    return (
      <>
        <Button onClick={this.toggleModal}>Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <div className="col-12 col-md-9">
              <LocalForm>
                <Row className="form-group">
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select
                    className="form-control"
                    model=".rating"
                    name="rating"
                    id="rating"
                  >
                    <option>1</option>
                    <option>2</option>
                  </Control.select>
                </Row>
                <Row className="form-group">
                  <Label>
                    Your Name
                    <Control.text
                      className="form-control"
                      model=".author"
                      name="author"
                      id="author"
                      validators={{
                        maxLength: maxLength(15),
                        minLength: minLength(3)
                      }}
                    />
                  </Label>
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      maxLength: "must be 15 char or less",
                      minLength: "Must be at least 2 char"
                    }}
                  />
                </Row>
                <Row className="form-group">
                  <Label>
                    Comment
                    <Control.textarea
                      rows="6"
                      className="form-control"
                      model=".comment"
                      name="comment"
                      id="comment"
                    />
                  </Label>
                </Row>
                <Button type="submit" value="submit" color="primary">
                  Submit
                </Button>
              </LocalForm>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComment(comments) {
    return comments.map(comment => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(Date.parse(comment.date)))}
          </p>
        </li>
      );
    });
  }

  renderComments(comments) {
    if (comments) {
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">{this.renderComment(comments)}</ul>
          <CommentForm />
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    if (this.props.dish) {
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{this.props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(this.props.comments)}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default DishDetail;
