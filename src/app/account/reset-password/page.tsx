import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import ResetPasswordForm from '@/app/components/auth/ResetPasswordForm'

export default async function ResetPasswordPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8">Reset Password</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  )
} 