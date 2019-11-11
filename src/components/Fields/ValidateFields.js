export const validateEmail = (value) => {
	console.log(value);
	let errors;

	if (!value) {
		errors = 'Required!';
	} else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
		errors = 'Invalid email address!';
	}

	return errors;
};

export const isRequired = (value) => (!value ? 'Required!' : '');

export const validatePassword = (value) => {
	let errors;
     if (!value) {
		errors = 'Password is Required!';
	} else if (value.length <= 3) {
		errors = 'Password too short!';
	} else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(value)) {
		errors = 'Password seems quite weak!';
  }
  return errors;
};

export const validateName = value => {
	let errors;

	return errors;
}
