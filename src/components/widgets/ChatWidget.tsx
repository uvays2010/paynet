import { useState } from 'react'
import { MessageCircle, X, Send, ExternalLink, Smartphone, Menu } from 'lucide-react'
import './ChatWidget.css'

const DEMO_URL = 'https://paynet-uvays.vercel.app/'

const replies = [
  'Salom! Paynet yordamchisiman. Qanday yordam bera olaman?',
  'Demo ilova: paynet-uvays.vercel.app',
  'To‘lovlar odatda bir necha soniyada o‘tadi (demo).',
  'Agent bo‘lish uchun /become-agent sahifasiga o‘ting.',
  'Yaqin terminalni xaritadan topishingiz mumkin.',
  'Qo‘shimcha savol: 71 202-07-07',
]

type Panel = 'menu' | 'chat' | null

export default function ChatWidget() {
  const [panel, setPanel] = useState<Panel>(null)
  const [text, setText] = useState('')
  const [msgs, setMsgs] = useState<{ from: 'bot' | 'me'; text: string }[]>([
    { from: 'bot', text: 'Salom! Demo chat — savolingizni yozing 👋' },
  ])

  const open = panel !== null

  const send = () => {
    const t = text.trim()
    if (!t) return
    setMsgs((m) => [...m, { from: 'me', text: t }])
    setText('')
    window.setTimeout(() => {
      const reply = replies[Math.floor(Math.random() * replies.length)]
      setMsgs((m) => [...m, { from: 'bot', text: reply }])
    }, 700)
  }

  return (
    <div className="chat-widget">
      {panel === 'menu' && (
        <div className="chat-menu" role="menu">
          <button
            type="button"
            className="chat-menu__item"
            role="menuitem"
            onClick={() => setPanel('chat')}
          >
            <span className="chat-menu__icon">
              <MessageCircle size={20} />
            </span>
            <span className="chat-menu__text">
              <strong>Chat</strong>
              <small>Yordam va savollar</small>
            </span>
          </button>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="chat-menu__item"
            role="menuitem"
          >
            <span className="chat-menu__icon chat-menu__icon--app">
              <Smartphone size={20} />
            </span>
            <span className="chat-menu__text">
              <strong>Ilova / Demo</strong>
              <small>paynet-uvays.vercel.app</small>
            </span>
            <ExternalLink size={16} className="chat-menu__ext" />
          </a>
        </div>
      )}

      {panel === 'chat' && (
        <div className="chat-panel" role="dialog" aria-label="Paynet chat">
          <div className="chat-panel__head">
            <button type="button" className="chat-panel__back" onClick={() => setPanel('menu')} aria-label="Menyu">
              ←
            </button>
            <span>Paynet yordam</span>
            <button type="button" onClick={() => setPanel(null)} aria-label="Yopish">
              <X size={18} />
            </button>
          </div>
          <div className="chat-panel__body">
            {msgs.map((m, i) => (
              <div key={i} className={`chat-bubble chat-bubble--${m.from}`}>
                {m.text}
              </div>
            ))}
          </div>
          <form
            className="chat-panel__form"
            onSubmit={(e) => {
              e.preventDefault()
              send()
            }}
          >
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Xabar yozing..."
              autoComplete="off"
            />
            <button type="submit" aria-label="Yuborish">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="chat-fab"
        onClick={() => setPanel((p) => (p ? null : 'menu'))}
        aria-label={open ? 'Yopish' : 'Menyu'}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  )
}
