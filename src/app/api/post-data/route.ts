export async function POST(request: Request) {
  // to test this, send a POST request to /api/post-data with a JSON body 
  // like: { "name": "John Doe", "email": "j.Doe@test.com" }
  const { name, email } = await request.json()
  return new Response(`Hello ${name}! Your email is ${email}.`)
}
