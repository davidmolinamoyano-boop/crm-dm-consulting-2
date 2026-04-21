export default function App() {
  const menu = [
    "Dashboard",
    "Clientes",
    "Pipeline",
    "Agenda Pro",
    "Presupuestos",
    "Facturas",
    "Cobros",
    "WhatsApp"
  ];

  const events = [
    ["09:00", "Llamada Construcciones BCN"],
    ["11:30", "Visita cliente Hospitalet"],
    ["13:00", "Enviar presupuesto Grupo Nova"],
    ["16:30", "Reunión obra Badalona"],
    ["18:00", "Revisar cobros pendientes"]
  ];

  const stats = [
    ["Facturado", "€48.500"],
    ["Cobrado", "€32.900"],
    ["Pendiente", "€15.600"],
    ["Citas Hoy", "5"]
  ];

  return (
    <div style={{
      fontFamily:"Arial, sans-serif",
      minHeight:"100vh",
      background:"#eef2f7",
      display:"flex"
    }}>

      {/* SIDEBAR */}
      <div style={{
        width:"240px",
        background:"#111",
        color:"#fff",
        padding:"22px"
      }}>
        <h2 style={{marginTop:0}}>DM CRM PRO</h2>
        <p style={{fontSize:"13px", color:"#aaa"}}>
          Sincronizado con Google Calendar
        </p>

        <div style={{marginTop:"25px"}}>
          {menu.map(item => (
            <div key={item} style={{
              padding:"12px",
              borderRadius:"10px",
              marginBottom:"8px",
              background:"#1f1f1f"
            }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{flex:1, padding:"24px"}}>

        <h1 style={{marginTop:0}}>CRM + GOOGLE CALENDAR PRO</h1>
        <p style={{color:"#666", marginBottom:"22px"}}>
          Agenda profesional sincronizada
        </p>

        {/* KPIS */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:"14px",
          marginBottom:"24px"
        }}>
          {stats.map(item => (
            <div key={item[0]} style={{
              background:"#fff",
              padding:"18px",
              borderRadius:"14px",
              boxShadow:"0 3px 10px rgba(0,0,0,.08)"
            }}>
              <div style={{color:"#666"}}>{item[0]}</div>
              <div style={{
                fontSize:"28px",
                fontWeight:"700",
                marginTop:"8px"
              }}>
                {item[1]}
              </div>
            </div>
          ))}
        </div>

        {/* AGENDA */}
        <div style={{
          background:"#fff",
          padding:"22px",
          borderRadius:"16px",
          boxShadow:"0 3px 10px rgba(0,0,0,.08)",
          marginBottom:"20px"
        }}>
          <h2>Agenda de Hoy</h2>

          {events.map(ev => (
            <div key={ev[0]} style={{
              display:"flex",
              gap:"18px",
              padding:"12px 0",
              borderBottom:"1px solid #eee"
            }}>
              <strong style={{minWidth:"70px"}}>{ev[0]}</strong>
              <span>{ev[1]}</span>
            </div>
          ))}
        </div>

        {/* BOTONES */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:"14px"
        }}>
          {[
            "📅 Abrir Google Calendar",
            "➕ Nueva Cita",
            "📍 Ruta de Visitas",
            "🔔 Recordatorios",
            "👥 Compartir Agenda",
            "💬 Avisar por WhatsApp"
          ].map(btn => (
            <div key={btn} style={{
              background:"#fff",
              padding:"18px",
              borderRadius:"14px",
              boxShadow:"0 3px 10px rgba(0,0,0,.08)",
              fontWeight:"700"
            }}>
              {btn}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
