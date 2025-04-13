import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/options'
import Dashboard from '../src/components/Dashboard'

async function Page() {
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <div className='max-h-screen '>
        <Dashboard/>
    </div>
  )
  
}

export default Page
