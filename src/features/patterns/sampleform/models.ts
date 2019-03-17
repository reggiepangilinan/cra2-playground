import { NumberField } from '../../../common/components/FormNumberField';
import { FormSelectOption } from '../../../common/components/FormSelect';
export type SampleFormModel = {
  name: string;
  email: string;
  isAgreed: boolean;
  password: string;
  age: NumberField;
  temperature?: string;
  favoriteColor?: FormSelectOption;
  favoriteDishes: FormSelectOption[];
};
