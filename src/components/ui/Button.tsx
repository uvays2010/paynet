import { ButtonHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'
import './Button.css'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, fullWidth, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'btn',
          `btn--${variant}`,
          `btn--${size}`,
          fullWidth && 'btn--full',
          loading && 'btn--loading',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <span className="btn__spinner" />}
        <span className={loading ? 'btn__content--hidden' : ''}>{children}</span>
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
