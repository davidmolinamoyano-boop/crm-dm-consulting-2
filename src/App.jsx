export default function App() {
  const stats = [
    { title: "Facturado Mes", value: "€48.500" },
    { title: "Cobrado", value: "€32.900" },
    { title: "Pendiente", value: "€15.600" },
    { title: "Margen", value: "28%" }
  ];

  const pipeline = [
    ["Lead Nuevo", 14],
    ["Contactado", 9],
    ["Reunión", 6],
    ["Presupuesto", 4],
    ["Cerrado", 3]
  ];

  const clients = [
    ["Construcciones BCN", "Activo", "€12.400"],
    ["Reformas Delta", "Seguimiento", "€7.800"],
    ["Grupo Nova", "Presupuesto", "€18.000"],
    ["Obras Urban", "Cobro pendiente", "€10.300"]
  ];

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "#eef2f7",
      minHeight: "100vh",
      padding: "24px"
    }}>
      <h1 style={{marginBottom:"5px", fontSize:"34px"}}>
        CRM EMPRESA TOP DM CONSULTING
      </h1>
      <p style={{color:"#555", marginBottom:"25px"}}>
        Dirección comercial · Control financiero · Gestión real
      </p>

      {/* KPIS */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
        gap:"16px",
        marginBottom:"28px"
      }}>
        {stats.map((item) => (
          <div key={item.title} style={{
            background:"#fff",
            borderRadius:"16px",
            padding:"20px",
            boxShadow:"0 3px 10px rgba(0,0,0,.08)"
          }}>
            <div style={{color:"#666", fontSize:"14px"}}>{item.title}</div>
            <div style={{fontSize:"28px", fontWeight:"700", marginTop:"8px"}}>
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* GRID CENTRAL */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
        gap:"18px"
      }}>

        {/* Pipeline */}
        <div style={{
          background:"#fff",
          borderRadius:"16px",
          padding:"20px",
          boxShadow:"0 3px 10px rgba(0,0,0,.08)"
        }}>
          <h3>Pipeline Comercial</h3>
          {pipeline.map((p) => (
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

        {/* Clientes */}
        <div style={{
          background:"#fff",
          borderRadius:"16px",
          padding:"20px",
          boxShadow:"0 3px 10px rgba(0,0,0,.08)"
        }}>
          <h3>Clientes Estratégicos</h3>
          {clients.map((c) => (
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

        {/* Agenda */}
        <div style={{
          background:"#fff",
          borderRadius:"16px",
          padding:"20px",
          boxShadow:"0 3px 10px rgba(0,0,0,.08)"
        }}>
          <h3>Agenda CEO</h3>
          <p>09:00 Seguimiento leads premium</p>
          <p>11:30 Reunión cliente Barcelona</p>
          <p>13:00 Envío presupuestos</p>
          <p>17:00 Control cobros</p>
          <p>18:30 Revisión KPI semanal</p>
        </div>

        {/* Acciones */}
        <div style={{
          background:"#fff",
          borderRadius:"16px",
          padding:"20px",
          boxShadow:"0 3px 10px rgba(0,0,0,.08)"
        }}>
          <h3>Acciones Rápidas</h3>
          <p>➕ Nuevo Cliente</p>
          <p>📄 Crear Presupuesto</p>
          <p>🧾 Emitir Factura</p>
          <p>💬 WhatsApp Directo</p>
          <p>💶 Marcar Cobrado</p>
        </div>

      </div>
    </div>
  );
}
