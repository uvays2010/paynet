import { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import './Card.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({ children, className, hover, padding = 'md', ...props }: CardProps) {
  return (
    <div
      className={clsx('card', hover && 'card--hover', `card--p-${padding}`, className)}
      {...props}
    >
      {children}
    </div>
  )
}
