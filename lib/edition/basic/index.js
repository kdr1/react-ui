import moduleCreator from '../module-creator.js';
import { ruiClasses } from '../../config/index.js';

const edition = moduleCreator(ruiClasses);
const Form = edition.Form;
const Input = edition.Input;
const Label = edition.Label;

export {
  Form,
  Input,
  Label,
};
