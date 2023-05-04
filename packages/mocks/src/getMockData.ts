import { PathParams } from 'msw';

import * as providers from './data/provider.json';

/**
 * A mapping of API paths to their corresponding mock data.
 */
const mockData: Record<string, object> = {
  '/api/proxy/plugin/forklift-console-plugin/forklift-inventory/providers': providers,
};

/**
 * Get a mock response for a given request and path parameters.
 *
 * @param {Object} param0 - The object containing the request parameters
 * @param {string} param0.pathname - The incoming request pathname to match against the mock handlers
 * @param {string} [param0.method] - An optional string, the incoming request method to match against the mock handlers
 * @param {PathParams} [param0.params] - An optional object containing the path parameters of the request
 * @returns {MockResponse | null} A mock response or null if no mock handler is found
 */
export const getMockData = ({ pathname }: MockDataRequestParameters): MockResponse | null => {
  // Dynamic handlers, using custom logic.

  // Add your mock handlers here, e.g.:
  // if (method === 'GET' && pathname === '/api/some-resource' && params['details'] === '1') {
  //   return mockResponse;
  // }

  // Static handlers, using mockData.
  const data = mockData[pathname];
  if (data) {
    return {
      statusCode: 200,
      body: data,
    };
  }

  return null;
};

/**
 * Interface representing a mock response.
 *
 * @property statusCode - The HTTP status code of the mock response
 * @property body - The response body as object
 */
export interface MockResponse {
  statusCode: number;
  body: object | null;
}

/**
 * Interface for the parameters of the getMockData function.
 *
 * @property {string} pathname - The pathname of the incoming request to match against the mock handlers
 * @property {string} [method] - An optional method of the incoming request to match against the mock handlers
 * @property {PathParams} [params] - An optional object containing the path parameters of the request
 */
export interface MockDataRequestParameters {
  pathname: string;
  method?: string;
  params?: PathParams;
}