import { ReactNode } from 'react'
import './DataTable.css'

interface Column<T> {
  key: string
  label: string
  render?: (row: T) => ReactNode
  align?: 'left' | 'right' | 'center'
}

interface Props<T> {
  columns: Column<T>[]
  data: T[]
  keyField: keyof T
  emptyText?: string
}

export default function DataTable<T extends object>({ columns, data, keyField, emptyText = 'Ma’lumot yo‘q' }: Props<T>) {
  if (data.length === 0) {
    return <div className="dt-empty">{emptyText}</div>
  }

  return (
    <div className="dt-wrap">
      <table className="dt">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} style={{ textAlign: c.align || 'left' }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={String(row[keyField])}>
              {columns.map((c) => (
                <td key={c.key} style={{ textAlign: c.align || 'left' }}>
                  {c.render ? c.render(row) : String((row as Record<string, unknown>)[c.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
