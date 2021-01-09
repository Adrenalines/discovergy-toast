# Ng Simple Toast

Simple Angular Toast Notification Module

## Usage

1. Add `ng-simple-toast` folder to your project.

2. Import `NgSimpleToastModule`:
    ```typescript
    import { NgSimpleToastModule } from './ng-simple-toast/ng-simple-toast.module';
    
    @NgModule({
      imports: [
        NgSimpleToastModule
      ],
      ...
    })
    export class AppModule { }
    ```

3. Use via call `open()` method of `ToastService`:
    ```typescript
    import { ToastService } from './ng-simple-toast/services/toast.service';
    
    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss']
    })
    export class AppComponent {
    
      constructor(private toastService: ToastService) { }
    
      public showToast(): void {
        this.toastService.open({
          // toast options
        });
      }
    }
    ```

## Options
Passed to `open()` method of `ToastService`

| Option      | Type           | Required      | Description                                                                                                                                               |
| ----------- | -------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| heading     | string         | Required      | The heading of the toast notification                                                                                                                     |
| subheading  | string         | Not required  | The subheading of the toast notification                                                                                                                  |
| message     | string         | Required      | The message of the toast notification                                                                                                                     |
| type        | ToastTypes     | Required      | 3 types of notifications: 'success', 'warning' and 'error'. With different colors representing different Notification                                     |
| timeout     | number         | Not required  | The timeout for each notification. If not, a default of 5 seconds will be used                                                                            |
| position    | ToastPosition  | Not required  | The position for notifications. Positions can be 'top-left', 'top-right', 'bottom-left' or 'bottom-right'. If not set, default of top right will be used  |
| max         | number         | Not required  | The maximum number of notifications visible at a time, if not set, default will be 5                                                                      |

```
enum ToastTypes {
  Success = 'success',
  Warning = 'warning',
  Error = 'error'
}
```

```
enum ToastPositions {
  TopLeft = 'top-left',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right'
}
```

Example:
```typescript

this.toastService.open({
      heading: 'Heading 1',
      subheading: 'Subheading 1',
      message: 'Message 1',
      type: ToastTypes.Warning,
      timeout: 3000,
      position: ToastPositions.TopLeft,
      max: 3
    });
```

## Demo

**[Show demo](https://adrenalines.github.io/ng-simple-toast/)**
**[Show demo on Stackblitz](https://stackblitz.com/github/Adrenalines/ng-simple-toast)**


## Development of this module

### Development server

For run:
1. Clone this repo: `git clone git@github.com:Adrenalines/ng-simple-toast.git`
2. Install packages: `npm i`
3. Run angular dev server: `npm run start`.
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

