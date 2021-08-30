import {
  Request as RequestExpress,
  Response as ResponseExpress,
  NextFunction as NextFunctionExpress,
  Application,
} from 'express';

export interface HttpHandleInterface {
  handleMultipleRequests: (requests: RequestObject[]) => Application;
}

export interface RequestObject {
  path: string;
  type: RequestType;
  exec: RequestFunction;
}

export type RequestType = 'post' | 'get' | 'patch' | 'delete' | 'put';

export type RequestFunction = (
  request: Request,
  response: Response,
  nextFuncion: NextFunction
) => Promise<void> | void;

export type Request = RequestExpress;

export type Response = ResponseExpress;

export type NextFunction = NextFunctionExpress;
