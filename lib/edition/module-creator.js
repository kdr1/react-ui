import form from '../components/form.js';
import formGroup from '../components/form-group.js';
import input from '../components/input.js';
import label from '../components/label.js';

export default function moduleCreator(defaultClasses) {
  const Form = form(defaultClasses.form);
  const FormGroup = formGroup(defaultClasses.formGroup);
  const Input = input(defaultClasses.input);
  const Label = label(defaultClasses.label);

  return {
    Form,
    FormGroup,
    Input,
    Label,
  };
}
