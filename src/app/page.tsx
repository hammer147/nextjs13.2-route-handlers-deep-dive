'use client'

import Link from 'next/link'

async function getHeaders() {
  const response = await fetch('/api/headers')
  const text = await response.text()
  alert(text)
}

async function setLanguage(lang: string) {
  const response = await fetch(`/api/language?lang=${lang}`)
  const text = await response.text()
  alert(text)
}

export default function Home() {
  return (
    <main className=''>
      <h1>set lang cookie</h1>
      <ul>
        <li>
          <button value='ned' onClick={e => setLanguage(e.currentTarget.value)}>
            Ned
          </button>
        </li>
        <li>
          <button value='fra' onClick={e => setLanguage(e.currentTarget.value)}>
            Fra
          </button>
        </li>
      </ul>
      <h1>get headers</h1>
      <button onClick={getHeaders}>Get headers</button>
      <h1>get redirected</h1>
      <Link href='/api/redirect'>Get redirected to a random url</Link>
    </main>
  )
}
