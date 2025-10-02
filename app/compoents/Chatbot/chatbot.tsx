"use client"

import React from "react"

type Role = "user" | "assistant"
type Message = { role: Role; content: string }

const BACKEND_PATH = process.env.NEXT_PUBLIC_BACKEND_PATH ?? "http://127.0.0.1:8000/chat" ;

export default function Chatbot() {
  const [messages, setMessages] = React.useState<Message[]>([])
  const [input, setInput] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [isOpen, setIsOpen] = React.useState(false) // new: controls open/close

  const inputRef = React.useRef<HTMLInputElement>(null)
  const endRef = React.useRef<HTMLDivElement>(null)


  React.useEffect(() => {
      setMessages([
          {
              role: "assistant",
              content:"👋 Hi! I am Bashars Assistant. Ask me about his services, projects, or skills!"
          }
      ])
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])


  async function sendMessage(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg: Message = { role: "user", content: input.trim() }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(BACKEND_PATH, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content }),
      })

      if (!res.ok) {
        const t = await res.text()
        throw new Error(t || `Request failed with ${res.status}`)
      }

      const data: { reply: string } = await res.json()
      const botMsg: Message = { role: "assistant", content: data.reply || "" }
      setMessages((prev) => [...prev, botMsg])
    } catch (err){
      setError("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (

    // <>
    //   {/* Open launcher button */}
    //   {!isOpen && (
    //     <button
    //       type="button"
    //       onClick={() => setIsOpen(true)}
    //       aria-label="Open chat"
    //       className="fixed bottom-6 right-6 z-50 rounded-full bg-primary p-4 text-primary-foreground shadow-lg hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    //     >
    //       {/* chat bubble icon */}
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-6 w-6"
    //         viewBox="0 0 24 24"
    //         fill="currentColor"
    //         aria-hidden="true"
    //       >
    //         <path d="M20 2H4a2 2 0 0 0-2 2v13.5A2.5 2.5 0 0 0 4.5 20H18l4 4V4a2 2 0 0 0-2-2ZM6 7h12v2H6V7Zm0 4h12v2H6v-2Z" />
    //       </svg>
    //     </button>
    //   )}

    //   {/* Chat panel */}
    //   {isOpen && (
    //     <div
    //       className=" w-[min(92vw,380px)] overflow-hidden rounded-xl border border-primary/30 text-foreground 
    //        bg-card/60 backdrop-blur p-4 shadow-sm fixed bottom-5 right-5 z-50"
    //       role="dialog"
    //       aria-label="Chat with Assistant"
    //     >
    //       {/* Header */}
    //       <div className="flex items-center justify-between border-b bg-card/80 px-4 py-3">
    //         <div className="flex min-w-0 flex-col">
    //           <h2 className="truncate text-base font-semibold">Assistant</h2>
    //           <span className="text-xs text-muted-foreground"></span>
    //         </div>
    //         <button
    //           type="button"
    //           aria-label="Close chat"
    //           onClick={() => setIsOpen(false)}
    //           className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    //         >
    //           {/* close (X) icon */}
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4"
    //             viewBox="0 0 24 24"
    //             fill="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.7 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29 10.59 10.6l6.3-6.3 1.41 1.41Z" />
    //           </svg>
    //         </button>
    //       </div>

    //       {/* Messages */}
    //       <div className="h-[55vh] w-full overflow-y-auto bg-background/60 px-4 py-4">
    //         {messages.length === 0 ? (
    //           <p className="text-sm text-muted-foreground">Type a message below and press Send.</p>
    //         ) : (
    //           <ul className="space-y-3">
    //             {messages.map((m, i) => (
    //               <li
    //                 key={i}
    //                 className={`rounded-lg p-3 leading-relaxed ${
    //                   m.role === "user" ? "bg-secondary text-foreground" : "bg-primary/10 text-foreground"
    //                 }`}
    //               >
    //                 <span className="mb-1 block text-xs text-muted-foreground">
    //                   {m.role === "user" ? "You" : "Assistant"}
    //                 </span>
    //                 <p>{m.content}</p>
    //               </li>
    //             ))}
    //           </ul>
    //         )}
    //       </div>

    //       {/* Composer */}
    //       <form onSubmit={sendMessage} className="flex items-center gap-2 border-t bg-card/80 p-3">
    //         <input
    //           className="flex-1 rounded-full border bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
    //           placeholder="Ask anything..."
    //           value={input}
    //           onChange={(e) => setInput(e.target.value)}
    //           disabled={loading}
    //           aria-label="Message input"
    //         />
    //         <button
    //           type="submit"
    //           className="rounded-full bg-primary px-5 py-3 text-primary-foreground shadow hover:opacity-90 disabled:opacity-50"
    //           disabled={loading}
    //         >
    //           {loading ? "Sending..." : "Send"}
    //         </button>
    //       </form>

    //       {/* Error */}
    //       {error && (
    //         <p className="px-4 pb-3 text-sm text-destructive" role="alert">
    //           {error}
    //         </p>
    //       )}
    //     </div>
    //   )}
    // </>
    <>
      {/* Open launcher button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
          className="fixed bottom-6 right-6 z-50 rounded-full bg-primary p-4 text-primary-foreground shadow-2xl ring-1 ring-border transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {/* chat bubble icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20 2H4a2 2 0 0 0-2 2v13.5A2.5 2.5 0 0 0 4.5 20H18l4 4V4a2 2 0 0 0-2-2ZM6 7h12v2H6V7Zm0 4h12v2H6v-2Z" />
          </svg>
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 z-50 w-[min(92vw,380px)] h-[85vh] sm:h-[70vh] overflow-hidden rounded-2xl border border-border bg-card/95 text-foreground shadow-2xl ring-1 ring-border backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm transition-all"
          role="dialog"
          aria-label="Chat with Assistant"
          aria-modal="true"
        >
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm">
              <div className="min-w-0">
                <h2 className="truncate text-sm font-semibold tracking-tight">Assistant</h2>
                <span className="text-xs text-muted-foreground">Here to help</span>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {/* close (X) icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.7 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29 10.59 10.6l6.3-6.3 1.41 1.41Z" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 w-full overflow-y-auto bg-background/60 px-3 py-4" aria-live="polite" role="log">
              {messages.length === 0 ? (
                <p className="px-1 text-sm text-muted-foreground">Type a message below and press Send.</p>
              ) : (
                <ul className="space-y-4">
                  {messages.map((m, i) => {
                    const isUser = m.role === "user"
                    return (
                      <li key={i} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                            isUser ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                          }`}
                        >
                          <span className="mb-1 block text-[10px] uppercase tracking-wide text-muted-foreground">
                            {isUser ? "You" : "Assistant"}
                          </span>
                          <p className="whitespace-pre-wrap text-pretty">{m.content}</p>
                        </div>
                      </li>
                    )
                  })}
                  <div ref={endRef} />
                </ul>
              )}
            </div>

            {/* Composer */}
            <form onSubmit={sendMessage} className="border-t border-border bg-card/90 p-3">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  className="flex-1 rounded-full border border-border bg-background px-4 py-3 text-foreground shadow-sm outline-none ring-1 ring-transparent transition focus:ring-2 focus:ring-primary"
                  placeholder="Ask anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={loading}
                  aria-label="Message input"
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary px-5 py-3 text-primary-foreground shadow-md transition hover:opacity-90 disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>

              {/* Error */}
              {error && (
                <p
                  className="mt-2 rounded-md border border-destructive/25 bg-destructive/10 px-3 py-2 text-sm text-destructive"
                  role="alert"
                >
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>

  )
}

