
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)

  const handleUpload = async () => {
    if (!file) return
    const { data, error } = await supabase.storage
      .from('manuais')
      .upload(file.name, file)

    if (error) {
      alert(error.message)
    } else {
      alert('Upload realizado!')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Enviar Manual</h1>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-orange-600 px-4 py-2 rounded"
      >
        Enviar
      </button>
    </div>
  )
}
