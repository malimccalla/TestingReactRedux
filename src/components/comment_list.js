import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

  renderList() {
    return (
      this.props.comments.map(comment => {
        <li>{comment}</li>
      })
    );
  }

  render() {
    return (
      <ul className="comment-list">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList)
