export interface Toast {
  heading: string;
  subheading: string;
  message: string;
}

export enum ToastPositions {
  TopLeft = 'top-left',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomRight = 'botttom-right'
}
