import { Application, request } from 'express';
import { HttpHandleInterface, RequestObject } from '../@types/http';

class HttpHandle implements HttpHandleInterface {
  constructor(private app: Application) {}

  handleMultipleRequests = (requests: RequestObject[]) => {
    requests.map(request => this.handleRequest(request));

    return this.app;
  };

  private handleRequest = (requestObject: RequestObject) => {
    const formatedObject = this.formatRequestObject(requestObject);

    const { path, type, exec } = formatedObject;

    this.app[type](path, exec);
  };

  private formatRequestObject = (requestObject: RequestObject) => {
    requestObject.path = requestObject.path.toLocaleLowerCase();

    return requestObject;
  };
}

export default HttpHandle;
