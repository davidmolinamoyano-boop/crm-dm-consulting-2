export default function App() {
  const isLogged = true; // cambiar luego por auth real

  if (!isLogged) {
    return (
      <div style={{
        minHeight:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"#eef2f7",
        fontFamily:"Arial"
      }}>
        <div style={{
          background:"#fff",
          padding:"35px",
          borderRadius:"18px",
          width:"360px",
          boxShadow:"0 6px 18px rgba(0,0,0,.08)"
        }}>
          <h1 style={{marginBottom:"8px"}}>DM CONSULTING CRM</h1>
          <p style={{color:"#666", marginBottom:"25px"}}>
            Acceso privado empresa
          </p>

          <input
            placeholder="Email"
            style={{
              width:"100%",
              padding:"12px",
              marginBottom:"12px",
              borderRadius:"10px",
              border:"1px solid #ddd"
            }}
          />

          <input
            type="password"
            placeholder="Contraseña"
            style={{
              width:"100%",
              padding:"12px",
              marginBottom:"18px",
              borderRadius:"10px",
              border:"1px solid #ddd"
            }}
          />

          <button style={{
            width:"100%",
            padding:"12px",
            border:"none",
            borderRadius:"10px",
            background:"#111",
            color:"#fff",
            fontWeight:"700",
            cursor:"pointer"
          }}>
            Entrar
          </button>
        </div>
      </div>
    );
  }

  const stats = [
    { title: "Facturado Mes", value: "€48.500" },
    { title: "Cobrado", value: "€32.900" },
    { title: "Pendiente", value: "€15.600" },
    { title: "Margen", value: "28%" }
  ];

  return (
    <div style={{
      fontFamily:"Arial",
      background:"#eef2f7",
      minHeight:"100vh",
      padding:"24px"
    }}>
      <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:"25px"
      }}>
        <div>
          <h1 style={{margin:"0"}}>CRM EMPRESA TOP</h1>
          <p style={{margin:"4px 0", color:"#666"}}>
            Usuario: admin@dmconsulting.es
          </p>
        </div>

        <button style={{
          padding:"10px 14px",
          border:"none",
          borderRadius:"10px",
          background:"#fff",
          cursor:"pointer"
        }}>
          Cerrar sesión
        </button>
      </div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
        gap:"15px"
      }}>
        {stats.map((item)=>(
          <div key={item.title} style={{
            background:"#fff",
            padding:"18px",
            borderRadius:"16px",
            boxShadow:"0 3px 10px rgba(0,0,0,.08)"
          }}>
            <div style={{color:"#666"}}>{item.title}</div>
            <div style={{
              fontSize:"28px",
              fontWeight:"700",
              marginTop:"8px"
            }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
