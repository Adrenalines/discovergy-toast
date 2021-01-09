export interface Toast {
  heading: string;
  subheading?: string;
  message: string;
  type: ToastTypes;
  timeout?: number;
  position?: ToastPositions;
  max?: number;
}

export enum ToastPositions {
  TopLeft = 'top-left',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right'
}

export enum ToastTypes {
  Success = 'success',
  Warning = 'warning',
  Error = 'error'
}
