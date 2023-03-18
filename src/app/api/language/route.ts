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
