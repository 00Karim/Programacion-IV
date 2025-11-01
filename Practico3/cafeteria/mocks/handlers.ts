import { http } from 'msw'

export const handlers = [
  http.get('/api/user', () => {
    return Response.json({ id: 1, name: 'John Doe' })
  }),

  http.post('/api/login', async ({ request }) => {
    const { username } = (await request.json()) as { username: string }
    return Response.json({ message: `Welcome, ${username}!` })
  }),
]