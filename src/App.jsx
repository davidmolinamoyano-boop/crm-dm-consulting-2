export default function App() {
  const menu = [
    "Dashboard",
    "Clientes",
    "Pipeline",
    "Presupuestos",
    "Facturas",
    "Cobros",
    "Agenda",
    "WhatsApp"
  ];

  const stats = [
    ["Facturado", "€48.500"],
    ["Cobrado", "€32.900"],
    ["Pendiente", "€15.600"],
    ["Margen", "28%"]
  ];

  const clients = [
    ["Construcciones BCN", "Activo", "€12.400"],
    ["Reformas Delta", "Seguimiento", "€7.800"],
    ["Grupo Nova", "Presupuesto", "€18.000"],
    ["Obras Urban", "Cobro pendiente", "€10.300"]
  ];

  const pipeline = [
    ["Lead Nuevo", 14],
    ["Contactado", 9],
    ["Reunión", 6],
    ["Presupuesto", 4],
    ["Cerrado", 3]
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
        <h2 style={{marginTop:0}}>DM CRM TOP</h2>
        <p style={{fontSize:"13px", color:"#aaa"}}>
          admin@dmconsulting.es
        </p>

        <div style={{marginTop:"25px"}}>
          {menu.map(item => (
            <div key={item} style={{
              padding:"12px",
              borderRadius:"10px",
              marginBottom:"8px",
              background:"#1f1f1f",
              cursor:"pointer"
            }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{flex:1, padding:"24px"}}>

        <h1 style={{marginTop:0}}>CRM EMPRESA TOP V2</h1>
        <p style={{color:"#666", marginBottom:"22px"}}>
          Gestión empresarial premium
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

        {/* GRID */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
          gap:"16px"
        }}>

          {/* CLIENTES */}
          <div style={{
            background:"#fff",
            padding:"18px",
            borderRadius:"14px",
            boxShadow:"0 3px 10px rgba(0,0,0,.08)"
          }}>
            <h3>Clientes VIP</h3>
            {clients.map(c => (
              <div key={c[0]} style={{
                padding:"12px 0",
                borderBottom:"1px solid #eee"
              }}>
                <strong>{c[0]}</strong><br />
                <span style={{color:"#666"}}>{c[1]}</span><br />
                <span>{c[2]}</span>
              </div>
            ))}
          </div>

          {/* PIPELINE */}
          <div style={{
            background:"#fff",
            padding:"18px",
            borderRadius:"14px",
            boxShadow:"0 3px 10px rgba(0,0,0,.08)"
          }}>
            <h3>Pipeline Comercial</h3>
            {pipeline.map(p => (
              <div key={p[0]} style={{
                display:"flex",
                justifyContent:"space-between",
                padding:"10px 0",
                borderBottom:"1px solid #eee"
              }}>
                <span>{p[0]}</span>
                <strong>{p[1]}</strong>
              </div>
            ))}
          </div>

          {/* AGENDA */}
          <div style={{
            background:"#fff",
            padding:"18px",
            borderRadius:"14px",
            boxShadow:"0 3px 10px rgba(0,0,0,.08)"
          }}>
            <h3>Agenda Hoy</h3>
            <p>09:30 Cliente Nou Barris</p>
            <p>12:00 Seguimiento leads</p>
            <p>16:00 Visita obra</p>
            <p>18:00 Revisar cobros</p>
          </div>

          {/* ACCIONES */}
          <div style={{
            background:"#fff",
            padding:"18px",
            borderRadius:"14px",
            boxShadow:"0 3px 10px rgba(0,0,0,.08)"
          }}>
            <h3>Acciones Rápidas</h3>
            <p>➕ Nuevo Cliente</p>
            <p>📄 Crear Presupuesto</p>
            <p>🧾 Emitir Factura</p>
            <p>💬 Abrir WhatsApp</p>
            <p>💶 Marcar Cobrado</p>
          </div>

        </div>
      </div>
    </div>
  );
}
