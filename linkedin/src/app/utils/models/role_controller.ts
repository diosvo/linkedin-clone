/**
 * @returns role property in modal controller when dismissing
 */

enum EMethod {
  GET = 'get',
  PUT = 'put',
  POST = 'post',
  DELETE = 'delete',
}

declare type TMethod = Lowercase<`${EMethod}`>;

/**
 * @params body: the information that we need to send to server
 */

interface IRequest {
  body: unknown;
  createdAt: Date
}

function BasicRequestAPI(body: unknown, role: TMethod): { [role: string]: IRequest } {
  return {
    [role]: {
      body,
      createdAt: new Date()
    }
  };
}

export { EMethod, TMethod, BasicRequestAPI };

