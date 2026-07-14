import ProtectedRoute from '@/components/ProtectedRoute'
import { redirect } from 'next/navigation'

export default function Home() {
  return (
    <ProtectedRoute>
      {redirect('/admin')}
    </ProtectedRoute>
  )
}