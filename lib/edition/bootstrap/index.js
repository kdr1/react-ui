import moduleCreator from '../module-creator.js';
import { bootstrapClasses } from '../../config/index.js';

const edition = moduleCreator(bootstrapClasses);
const Form = edition.Form;
const Input = edition.Input;
const Label = edition.Label;

export {
  Form,
  Input,
  Label,
};
