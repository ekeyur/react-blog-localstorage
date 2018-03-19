import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Input } from '../components/form_components';
import { validate } from '../components/validate';

class Title extends Component{
  render(){
    return (
      <Field
        label="Title"
        name="title"
        component={Input}
      />
    )
  }
}

export default connect()(
  reduxForm({
    form: 'PostsNewForm',
    validate,
  })(Title)
)
