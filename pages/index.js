import { QueryClient, QueryClientProvider } from 'react-query'
import { GoogleVoice } from '../components/GoogleVoice'
const client = new QueryClient()
export default function Home() {
  return (
    <QueryClientProvider client={client}>
      <GoogleVoice />
    </QueryClientProvider>
  )
}
