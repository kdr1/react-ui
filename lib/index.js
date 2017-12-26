import {
  Form,
  FormGroup,
  Input,
  Label
} from './edition/basic';

import {
  Form as BForm,
  FormGroup as BFormGroup,
  Input as BInput,
  Label as BLabel,
} from './edition/bootstrap';

const bootstrap = {
  Form: BForm,
  FormGroup: BFormGroup,
  Input: BInput,
  Label: BLabel,
};

const basic = {
  Form,
  FormGroup,
  Input,
  Label,
};

export {
  Form,
  FormGroup,
  Input,
  Label,
  basic,
  bootstrap,
};
