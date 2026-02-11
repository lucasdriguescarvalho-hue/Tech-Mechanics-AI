
import { supabase } from '../lib/supabaseClient'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Tech Mechanics AI</h1>
      <Link href="/upload" className="bg-orange-600 px-4 py-2 rounded">
        Enviar Manual
      </Link>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Equipamentos</h2>
      </div>
    </div>
  )
}
