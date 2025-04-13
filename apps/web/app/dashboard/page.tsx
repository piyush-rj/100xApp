import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/options'
import Dashboard from '../src/components/Dashboard'
import { SessionProvider } from 'next-auth/react'

async function Page() {
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <div className='min-h-screen bg-black'>
        <SessionProvider>

            <Dashboard/>
        </SessionProvider>
    </div>
  )
  
}

export default Page
