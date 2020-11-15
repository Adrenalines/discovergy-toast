import { Toast, ToastTypes } from './models';

export const toastsStub: Toast[] = [
  {
    heading: 'Heading 1',
    subheading: 'Subheading 1',
    message: 'Message 1',
    type: ToastTypes.Success
  }, {
    heading: 'Heading 2',
    subheading: 'Subheading 2',
    message: 'Message 2',
    type: ToastTypes.Warning
  }, {
    heading: 'Heading 3',
    subheading: 'Subheading 3',
    message: 'Message 3',
    type: ToastTypes.Danger
  }, {
    heading: 'Heading 4',
    subheading: 'Subheading 4',
    message: 'Message 4',
    type: ToastTypes.Success
  }, {
    heading: 'Heading 5',
    subheading: 'Subheading 5',
    message: 'Message 5',
    type: ToastTypes.Success
  }, {
    heading: 'Heading 6',
    subheading: 'Subheading 6',
    message: 'Message 6',
    type: ToastTypes.Success
  }, {
    heading: 'Heading 7',
    subheading: 'Subheading 7',
    message: 'Message 7',
    type: ToastTypes.Success
  }
];
