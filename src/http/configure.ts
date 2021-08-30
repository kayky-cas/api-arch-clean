import { Application } from 'express';
import HttpHandle from './handle';
import RequestObject from './request';

class HttpConfigure {
  constructor(private app: Application) {}

  private handle = new HttpHandle(this.app);

  addMultiplesControllers(controllers: any[]) {
    controllers.map(Controller => this.addController(Controller));

    return this.app;
  }

  private addController(Controller: any) {
    const controller = new Controller();

    const requests: RequestObject[] = [];

    for (const key in controller) {
      if (Object.prototype.hasOwnProperty.call(controller, key)) {
        if (typeof controller[key] === 'function') {
          const object: RequestObject = controller[key]();

          let intersection = '/';

          if (controller.path === '') {
            intersection = '';
          }
          object.path = '/' + controller.path + intersection + object.path;

          console.log(object.path);

          requests.push(object);
        }
      }
    }

    this.handle.handleMultipleRequests(requests);
  }
}

export default HttpConfigure;
