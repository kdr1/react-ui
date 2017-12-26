import { Form, Input } from './edition/standard';
import { Form as BForm, Input as BInput } from './edition/bootstrap';

const bootstrap = {
	Form: BForm,
	Input: BInput
};

const standard = {
	Form,
	Input
};

export {
	Form,
	Input,
	bootstrap,
	standard
};