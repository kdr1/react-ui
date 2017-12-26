import { Form, Input } from './edition/basic';
import { Form as BForm, Input as BInput } from './edition/bootstrap';

const bootstrap = {
	Form: BForm,
	Input: BInput
};

const basic = {
	Form,
	Input
};

export {
	Form,
	Input,
	basic,
	bootstrap,
};