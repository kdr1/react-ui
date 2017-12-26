import {
  Form,
  Input,
  Label
} from './edition/basic';
import {
  Form as BForm,
  Input as BInput,
  Label as BLabel,
} from './edition/bootstrap';

const bootstrap = {
  Form: BForm,
  Input: BInput,
  Label: BLabel,
};

const basic = {
  Form,
  Input,
  Label,
};

export {
  Form,
  Input,
  Label,
  basic,
  bootstrap,
};
