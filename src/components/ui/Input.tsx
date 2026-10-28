import { InputHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'
import './Input.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className={clsx('input-group', error && 'input-group--error')}>
        {label && <label htmlFor={inputId} className="input-group__label">{label}</label>}
        <input
          ref={ref}
          id={inputId}
          className={clsx('input', className)}
          {...props}
        />
        {error && <span className="input-group__error">{error}</span>}
        {hint && !error && <span className="input-group__hint">{hint}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
