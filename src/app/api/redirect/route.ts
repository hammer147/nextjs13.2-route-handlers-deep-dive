import { redirect } from 'next/navigation'

const urls = [
  'https://tweakers.net',
  'https://google.com',
  'https://github.com',
  'https://www.youtube.com',
  'https://www.reddit.com',
  'https://www.facebook.com',
  'https://www.instagram.com',
  'https://www.netflix.com'
]

export async function GET(request: Request) {
  const randomURL = urls[Math.floor(Math.random() * urls.length)]
  return redirect(randomURL)
}
