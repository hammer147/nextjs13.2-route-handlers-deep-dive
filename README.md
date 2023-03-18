# Next.js Route Handlers

Route Handlers are defined in a route.tsx file in the app directory.

## Cookies

[beta docs](https://beta.nextjs.org/docs/routing/route-handlers#cookies)

**read cookies**: use the cookies function from 'next/headers'  
**set cookies**: return a new Response with a Set-Cookie header

Example:

```ts
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  // Get the (new) language from the search params, e.g. /api/language?lang=ned
  const { searchParams } = new URL(request.url)
  const langSearchParam = searchParams.get('lang')

  // Get the (old) language from the cookie in the request, e.g. lang=ned
  const cookieStore = cookies()
  const langCookie = cookieStore.get('lang')

  // send a response with the new language set as a cookie
  return new Response(
    `Your preferred language was ${langCookie?.value}. We will now set it to ${langSearchParam}.`,
    {
      headers: { 'Set-Cookie': `lang=${langSearchParam}` },
      status: 200
    }
  )
}
```

## Headers

[beta docs](https://beta.nextjs.org/docs/routing/route-handlers#headers)

**read headers**: use the headers function from 'next/headers'  
**set headers**: return a new Response with the new headers

Example:

```ts
import { headers } from 'next/headers'

export async function GET(request: Request) {
  const headerList = headers()
  const host = headerList.get('host')
  const userAgent = headerList.get('user-agent')

  return new Response(`You made the request from ${host}. Your user agent is ${userAgent}.`, {
    headers: { 'content-type': 'text/plain', 'Set-Cookie': `looked-at-headers=true` },
    status: 200
  })
}
```

## Redirects

[beta docs](https://beta.nextjs.org/docs/routing/route-handlers#redirects)

Example:

```ts
import { headers } from 'next/headers'

export async function GET(request: Request) {
  const headerList = headers()
  const host = headerList.get('host')
  const userAgent = headerList.get('user-agent')

  return new Response(`You made the request from ${host}. Your user agent is ${userAgent}.`, {
    headers: { 'content-type': 'text/plain', 'Set-Cookie': `looked-at-headers=true` },
    status: 200
  })
}
```

## Dynamic Route Segments

[beta docs](https://beta.nextjs.org/docs/routing/route-handlers#dynamic-route-segments)

Example:

```ts
export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params
  return new Response(`The slug is: ${slug}`)
}
```

## Post request body

[docs](https://developer.mozilla.org/en-US/docs/Web/API/Request/json)

Example:

```ts
export async function POST(request: Request) {
  // to test this, send a POST request to /api/post-data with a JSON body 
  // like: { "name": "John Doe", "email": "j.Doe@test.com" }
  const { name, email } = await request.json()
  return new Response(`Hello ${name}! Your email is ${email}.`)
}
```
