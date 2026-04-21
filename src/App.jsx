export default function App() {
  const cards = [
    "Clientes",
    "Pipeline Ventas",
    "Presupuestos PDF",
    "Facturas",
    "Cobros",
    "Agenda",
    "WhatsApp Directo",
    "Dashboard CEO"
  ];

  const leads = [
    ["Construcciones BCN", "Llamar mañana"],
    ["Reformas Delta", "Enviar presupuesto"],
    ["Obra Nova", "Visita jueves"]
  ];

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "#f4f6f8",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <h1 style={{marginBottom:"5px"}}>CRM PRO DM CONSULTING</h1>
      <p style={{color:"#666", marginBottom:"25px"}}>
        Gestión comercial profesional online
      </p>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",
        gap:"15px",
        marginBottom:"30px"
      }}>
        {cards.map((item) => (
          <div key={item} style={{
            background:"#fff",
            padding:"18px",
            borderRadius:"14px",
            boxShadow:"0 2px 8px rgba(0,0,0,.08)",
            fontWeight:"600"
          }}>
            {item}
          </div>
        ))}
      </div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
        gap:"15px"
      }}>
        <div style={{
          background:"#fff",
          padding:"18px",
          borderRadius:"14px",
          boxShadow:"0 2px 8px rgba(0,0,0,.08)"
        }}>
          <h3>Leads Activos</h3>
          {leads.map((lead) => (
            <div key={lead[0]} style={{marginTop:"12px"}}>
              <strong>{lead[0]}</strong><br />
              <span style={{color:"#666"}}>{lead[1]}</span>
            </div>
          ))}
        </div>

        <div style={{
          background:"#fff",
          padding:"18px",
          borderRadius:"14px",
          boxShadow:"0 2px 8px rgba(0,0,0,.08)"
        }}>
          <h3>KPIs Mes</h3>
          <p>Presupuestos: 12</p>
          <p>Cierres: 3</p>
          <p>Facturado: €18.500</p>
          <p>Cobrado: €12.200</p>
        </div>

        <div style={{
          background:"#fff",
          padding:"18px",
          borderRadius:"14px",
          boxShadow:"0 2px 8px rgba(0,0,0,.08)"
        }}>
          <h3>Agenda Hoy</h3>
          <p>09:30 Cliente Nou Barris</p>
          <p>12:00 Seguimiento llamadas</p>
          <p>17:00 Revisar cobros</p>
        </div>
      </div>
    </div>
  );
}
