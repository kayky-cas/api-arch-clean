import {
  RequestFunction,
  RequestObject as RequestObjectType,
  RequestType,
} from '../@types/http';
class HttpRequest implements RequestObjectType {
  path: string;
  exec: RequestFunction;
  type: RequestType;

  constructor(request: RequestObjectType) {
    const { path, exec, type } = request;

    this.path = path;
    this.exec = exec;
    this.type = type;
  }
}
export default HttpRequest;
