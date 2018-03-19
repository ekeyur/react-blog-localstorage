import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost, fetchPost } from '../actions';
import Title from '../distributed_form_components/title';
import Categories from '../distributed_form_components/categories';
import Content from '../distributed_form_components/content';
import { validate } from './validate';

class PostsNew extends Component {

  componentDidMount() {
    if(this.props.params){
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onSubmit = values => {
    if(values.id) {
      console.log('there is id present', values);
    } else {
      this.props.createPost(values, () => {
        this.props.history.push('/')
        });
    }
  }

  render() {
    const { handleSubmit, invalid, submitting, pristine } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Title />
        <Categories />
        <Content />
        <button type="submit" disabled={ invalid || submitting || pristine } className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

const mapStateToProps = ( { posts }, ownProps ) => {
  return { initialValues: posts[ownProps.match.params.id] };
}

export default connect( mapStateToProps, { createPost, fetchPost } )(
  reduxForm({
    form: 'PostsNewForm',
    validate,
  })(PostsNew)
)
