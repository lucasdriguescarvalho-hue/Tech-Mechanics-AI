
import { useState } from 'react'

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: string, text: string }[]>([])
  const [input, setInput] = useState('')

  const sendMessage = async () => {
    if (!input) return
    setMessages([...messages, { role: 'user', text: input }])
    setInput('')
    // Aqui você vai chamar a API que busca no Supabase + embeddings
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((m, i) => (
          <div key={i} className={`my-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className="inline-block bg-gray-800 px-3 py-2 rounded">{m.text}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-1 px-3 py-2 rounded-l text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage} className="bg-orange-600 px-4 py-2 rounded-r">
          Enviar
        </button>
      </div>
    </div>
  )
}
