export default function App() {
  const isLogged = true;

  const menu = [
    "Clientes",
    "Pipeline",
    "Presupuestos",
    "Facturas",
    "Cobros",
    "Agenda",
    "WhatsApp",
    "Dashboard"
  ];

  const clients = [
    ["Construcciones BCN", "Activo"],
    ["Reformas Delta", "Seguimiento"],
    ["Grupo Nova", "Presupuesto"]
  ];

  const stats = [
    ["Facturado", "€48.500"],
    ["Cobrado", "€32.900"],
    ["Pendiente", "€15.600"],
    ["Margen", "28%"]
  ];

  if (!isLogged) return <div>Login...</div>;

  return (
    <div style={{fontFamily:"Arial",padding:"20px",background:"#eef2f7",minHeight:"100vh"}}>

      <h1>CRM EMPRESA TOP</h1>
      <p>Usuario: admin@dmconsulting.es</p>

      {/* MENU */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",
        gap:"12px",
        marginBottom:"20px"
      }}>
        {menu.map(item => (
          <div key={item} style={{
            background:"#fff",
            padding:"14px",
            borderRadius:"12px",
            fontWeight:"700"
          }}>
            {item}
          </div>
        ))}
      </div>

      {/* KPIS */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",
        gap:"12px",
        marginBottom:"20px"
      }}>
        {stats.map(s => (
          <div key={s[0]} style={{
            background:"#fff",
            padding:"16px",
            borderRadius:"12px"
          }}>
            <div>{s[0]}</div>
            <strong style={{fontSize:"24px"}}>{s[1]}</strong>
          </div>
        ))}
      </div>

      {/* CLIENTES */}
      <div style={{
        background:"#fff",
        padding:"20px",
        borderRadius:"14px"
      }}>
        <h3>Clientes</h3>
        {clients.map(c => (
          <p key={c[0]}><strong>{c[0]}</strong> - {c[1]}</p>
        ))}
      </div>

    </div>
  );
}
