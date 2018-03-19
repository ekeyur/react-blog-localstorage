import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Input } from '../components/form_components';
import { validate } from '../components/validate';

class Categories extends Component{
  render(){
    return (
      <Field
        label="Categories"
        name="categories"
        component={Input}
      />
    )
  }
}

export default connect()(
  reduxForm({
    form: 'PostsNewForm',
    validate,
  })(Categories)
)
