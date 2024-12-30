import { handlers as userHandlers } from './users'
import { handlers as contestHandlers } from './contests'
import { handlers as groupHandlers } from './groups'
import { handlers as projectHandlers } from './projects'

export const handlers = [
  ...userHandlers,
  ...contestHandlers,
  ...groupHandlers,
  ...projectHandlers
]
