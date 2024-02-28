import { Field } from './field.model';

export class DateField extends Field<string> {
  controlType = 'date';
  min?: string; // Minimum allowed date
  max?: string; // Maximum allowed date

  constructor(options: {} = {}) {
    super(options);
    this.min = options['min'];
    this.max = options['max'];
  }
}
