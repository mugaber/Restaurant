import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

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
            -- {comment.author}, {comment.date}
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
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.dish.comments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
