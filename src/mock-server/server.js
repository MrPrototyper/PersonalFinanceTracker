import { setupServer } from 'msw/node';
import { handlers as authHandlers} from './features/auth.mock.js';
try {
    const server = setupServer(...authHandlers);
    server.listen()
    console.log('Mock Server running on http://example.com')
    // async function app() {
    //   const response = await fetch('http://localhost:4000/api/user')
    //   const user = await response.json()
    //   console.log(user)
    // }

    // app();    

} catch (err) {
  console.error('[FATAL] Exception during startup:', err);
}
