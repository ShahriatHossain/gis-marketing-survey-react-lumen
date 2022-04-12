export interface Question {
  question_type: string;
  identifier: string;
  headline: string;
  description?: any;
  required: boolean;
  multiple?: string;
  multiline?: string;
  choices?: MultipleChoice[];
  jumps: Jump[];
}

export interface MultipleChoice {
  label: string;
  value: string;
  selected: boolean;
}

export interface Jump {
  conditions: Condition[];
  destination: Destination;
}

export interface Condition {
  field: string;
  value: string;
}

export interface Destination {
  id: string;
}
