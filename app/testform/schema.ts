import { VerticalLayout, ControlElement } from '@jsonforms/core';

export const defaultSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'integer' },
    email: { type: 'string' },
    address: { type: 'string' }
  }
};

export const defaultData = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  address: '123 Main St'
};

export const defaultUiSchema: VerticalLayout = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/email'
    } as ControlElement,
    {
      type: 'Control',
      scope: '#/properties/address'
    } as ControlElement,
    {
      type: 'Control',
      scope: '#/properties/name'
    } as ControlElement,
    {
      type: 'Control',
      scope: '#/properties/age'
    } as ControlElement
  ]
};
