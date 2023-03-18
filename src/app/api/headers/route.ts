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
