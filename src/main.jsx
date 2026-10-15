import { createRoot } from 'react-dom/client'
import dayjs from 'dayjs'
import { capitalize } from 'lodash'

createRoot(document.getElementById('root')).render(<h1>{capitalize('pols cache test')} {dayjs().year()}</h1>)
