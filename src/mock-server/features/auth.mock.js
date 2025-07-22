import { http, HttpResponse } from 'msw';

const userResponse = { user: { id: '1', name: 'Test User', email: 'test@example.com' } }
export const handlers = [  
  http.post('http://localhost.com/api/login', async ({ request }) => {
    return HttpResponse.json(userResponse);
  }),

  http.get('http://localhost.com/api/user', () => {
    return HttpResponse.json(userResponse);
  }),
];
