import { Form, Input } from './edition/standard';
import { Form as BForm, Input as BInput } from './edition/bootstrap';

const ReactAdaptiveUi = {
	Form,
	Input
};

ReactAdaptiveUi.bootstrap = {
	Form: BForm,
	Input: BInput
};

export default ReactAdaptiveUi;