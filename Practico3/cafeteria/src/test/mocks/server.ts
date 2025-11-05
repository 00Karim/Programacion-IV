import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// Create the mock server with the request handlers
export const server = setupServer(...handlers)