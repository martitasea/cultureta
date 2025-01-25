export type options<RequestType> = {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  headers?: Record<string, string>,
  body?: RequestType
}

export type HttpError = {
  statusCode: number,
  // eslint-disable-next-line
  payload?: any
}

type Http = <ResponseType = undefined, RequestType = undefined> (url: string | URL, options?: options<RequestType>) => Promise<ResponseType>

export default Http;