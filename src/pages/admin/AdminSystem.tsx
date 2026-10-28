import './Admin.css'

const services = [
  { name: 'API Gateway', status: 'ok', latency: '42ms', uptime: '99.98%' },
  { name: 'PostgreSQL', status: 'ok', latency: '8ms', uptime: '99.99%' },
  { name: 'Redis Cache', status: 'ok', latency: '1ms', uptime: '100%' },
  { name: 'Payment Router', status: 'ok', latency: '65ms', uptime: '99.95%' },
  { name: 'SMS Provider', status: 'degraded', latency: '320ms', uptime: '98.2%' },
  { name: 'CDN / Media', status: 'ok', latency: '18ms', uptime: '99.9%' },
]

export default function AdminSystem() {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Tizim holati</h1>
        <p>Servislar monitoring · demo</p>
      </div>
      <div className="admin-stats">
        <div className="admin-stat-card">
          <div className="admin-stat-card__value" style={{ color: '#34D399' }}>5/6</div>
          <div className="admin-stat-card__label">Sog‘lom servislar</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-card__value">42ms</div>
          <div className="admin-stat-card__label">O‘rtacha latency</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-card__value">99.9%</div>
          <div className="admin-stat-card__label">Uptime (30 kun)</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-card__value">0</div>
          <div className="admin-stat-card__label">Critical alerts</div>
        </div>
      </div>
      <div className="admin-card" style={{ marginTop: 16 }}>
        <table className="dt">
          <thead>
            <tr>
              <th>Servis</th>
              <th>Holat</th>
              <th>Latency</th>
              <th>Uptime</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.name}>
                <td><strong>{s.name}</strong></td>
                <td>
                  <span className={`badge ${s.status === 'ok' ? 'badge--green' : 'badge--yellow'}`}>
                    {s.status}
                  </span>
                </td>
                <td>{s.latency}</td>
                <td>{s.uptime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
