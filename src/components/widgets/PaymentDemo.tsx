import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { CreditCard, CheckCircle2, X } from 'lucide-react'
import { useToast } from './Toast'
import { appStore } from '@/store/appStore'
import { platform } from '@/store/platformStore'
import './PaymentDemo.css'

const services = ['Beeline', 'Ucell', 'Elektr', 'Gaz', 'Steam', 'Uztelecom']

export default function PaymentDemo() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [service, setService] = useState(services[0])
  const [amount, setAmount] = useState('50000')
  const [phone, setPhone] = useState('+998')
  const { push } = useToast()

  const reset = () => {
    setStep(1)
    setOpen(false)
  }

  const pay = () => {
    const amt = Number(amount) || 0
    appStore.addPayment({ service, account: phone, amount: amt, status: 'success' })
    platform.addTx({ service, account: phone, amount: amt, channel: 'web', userName: 'Mehmon' })
    appStore.addNotification('To‘lov qabul qilindi', `${service}: ${amt.toLocaleString()} so‘m (demo)`)
    setStep(3)
    push(`${service} — ${amt.toLocaleString()} so‘m to‘landi (demo)`, 'success')
  }

  // Body scroll lock
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const modal =
    open &&
    createPortal(
      <div className="pay-modal-overlay" onClick={reset} role="dialog" aria-modal="true">
        <div className="pay-modal-box" onClick={(e) => e.stopPropagation()}>
          <button type="button" className="pay-modal-box__close" onClick={reset} aria-label="Yopish">
            <X size={18} />
          </button>

          <h3 className="pay-modal-box__title">Demo to‘lov</h3>
          <p className="pay-modal-box__sub">Haqiqiy pul yechilmaydi</p>

          {step === 1 && (
            <div className="pay-modal-box__body">
              <label className="pay-modal-box__label" htmlFor="pay-service">
                Xizmat
              </label>
              <select
                id="pay-service"
                className="pay-modal-box__input"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              <label className="pay-modal-box__label" htmlFor="pay-phone">
                Telefon / hisob
              </label>
              <input
                id="pay-phone"
                className="pay-modal-box__input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label className="pay-modal-box__label" htmlFor="pay-amount">
                Summa (so‘m)
              </label>
              <input
                id="pay-amount"
                className="pay-modal-box__input"
                type="number"
                min={1000}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <button type="button" className="pay-modal-box__cta" onClick={() => setStep(2)}>
                Davom etish
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="pay-modal-box__body">
              <p className="pay-modal-box__text">
                <strong>{service}</strong>
              </p>
              <p className="pay-modal-box__muted">{phone}</p>
              <p className="pay-modal-box__sum">{Number(amount || 0).toLocaleString()} so‘m</p>
              <button type="button" className="pay-modal-box__cta" onClick={pay}>
                Tasdiqlash
              </button>
              <button type="button" className="pay-modal-box__back" onClick={() => setStep(1)}>
                Orqaga
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="pay-modal-box__body pay-modal-box__body--center">
              <CheckCircle2 size={56} color="#00A651" />
              <h4 className="pay-modal-box__ok">Muvaffaqiyatli!</h4>
              <p className="pay-modal-box__muted">Demo tranzaksiya yakunlandi</p>
              <button type="button" className="pay-modal-box__cta" onClick={reset}>
                Yopish
              </button>
            </div>
          )}
        </div>
      </div>,
      document.body
    )

  return (
    <>
      <button type="button" className="pay-demo-btn" onClick={() => setOpen(true)}>
        <CreditCard size={18} /> Tezkor to‘lov (demo)
      </button>
      {modal}
    </>
  )
}
