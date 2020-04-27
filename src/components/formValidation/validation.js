export const validate = values => {
	const errors = {};
	if (!values.query) {
		errors.query = 'Required';
	} else if (values.query.length > 15) {
		errors.query = 'Must be less than 15 characters long';
	}

	return errors;
};
