import { NextResponse } from 'next/server';
import type { MiddlewareConfig, NextRequest } from 'next/server';
import { Resource } from 'sst';

export function middleware(request: NextRequest) {
  const s = Resource.MyBucket.name;
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-hello-from-middleware1', 'hello');

  // You can also set request headers in NextResponse.next
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-hello-from-middleware2', 'hello');
  return response;
}

export const config: MiddlewareConfig = {
  unstable_allowDynamic: [
    // allows a single file
    // use a glob to allow anything in the function-bind 3rd party module
    '**/node_modules/sst/**',
  ],
};
