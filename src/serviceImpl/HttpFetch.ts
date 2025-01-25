import Http, {HttpError, options} from '../domain/services/Http';


export const GET = <ResponseType, RequestType>(url: string) =>
  jsonFetchHttp<ResponseType, RequestType>(url, {method: 'GET'});
export const POST = <ResponseType, RequestType>(url: string, body: RequestType) =>
  jsonFetchHttp<ResponseType, RequestType>(url, {method: 'POST', body: body});

export const jsonFetchHttp: Http = async <ResponseType, RequestType>(url: string | URL, options?: options<RequestType>): Promise<ResponseType> => {

  const response = await fetch(url, {
    method: options?.method ?? 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options?.headers
    },
    body: options?.body ? JSON.stringify(options.body) : undefined
  });

  if (response.status === 204) {
    return undefined as ResponseType;
  } else if (response.status >= 200 && response.status < 300 && response.ok) {
    return response.json();
  } else {
    // WARNING this can't be expressed in Typescript, but: Statuses other than 2xx are rejected with an HttpError.
    const httpError: HttpError = {
      statusCode: response.status
    };
    try {
      httpError.payload = await response.json();
    } catch {
      // Fine, can't parse response as JSON, will assume plain text
      httpError.payload = await response.text();
    }
    throw httpError;
  }
};