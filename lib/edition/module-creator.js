import form from '../components/form.js';
import input from '../components/input.js';

export default function moduleCreator(defaultClasses) {
  const Form = form(defaultClasses.form);
  const Input = input(defaultClasses.input);

  return {
    Form,
    Input,
  };
}
