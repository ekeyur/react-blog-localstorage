export const validate = (values) => {
  const errors = {};

  if(!values.title) {
    errors.title = "Enter a title!";
  }
  if(!values.categories) {
    errors.categories = "Enter some categories!";
  }
  if(!values.content) {
    errors.content = "Enter some content please!";
  }
  return errors;
}
