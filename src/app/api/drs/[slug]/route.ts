export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params
  return new Response(`The slug is: ${slug}`)
}
