import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vael Growth Labs</title>
      </Head>

      <Header />

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10%",
        background: "radial-gradient(circle at top, #0a0f2c, #000)"
      }}>
        
        {/* LEFT */}
        <div style={{maxWidth: "600px", color: "white"}}>
          <h1 style={{
            fontSize: "60px",
            lineHeight: "1.1",
            marginBottom: "20px"
          }}>
            Transform Your <span style={{color:"#C79F1F"}}>Real Estate</span> Marketing
          </h1>

          <p style={{fontSize: "18px", marginBottom: "30px", color:"#ccc"}}>
            Generate serious buyer leads for your projects with data-driven systems.
          </p>

          <a href="https://wa.me/918951743843?text=Hello%20Vael,%20I%20am%20interested">
            <button className="btn-primary">Get Free Growth Audit</button>
          </a>
        </div>

        {/* RIGHT (3D SPACE PLACEHOLDER) */}
        <div style={{
          width: "400px",
          height: "400px",
          background: "linear-gradient(145deg,#111,#1a1a1a)",
          borderRadius: "20px",
          boxShadow: "0 0 40px rgba(199,159,31,0.2)"
        }}>
          <p style={{color:"white", textAlign:"center", paddingTop:"180px"}}>
            3D Scene Coming
          </p>
        </div>

      </section>

      {/* TRUST STRIP */}
      <section style={{
        background:"#000",
        color:"#aaa",
        padding:"40px",
        textAlign:"center"
      }}>
        Trusted by Real Estate Developers Across Karnataka
      </section>

      {/* SERVICES */}
      <section style={{
        padding:"100px 10%",
        background:"#050505",
        color:"white"
      }}>
        <h2 style={{textAlign:"center", marginBottom:"60px"}}>
          Our Expertise
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(250px,1fr))",
          gap:"30px"
        }}>

          {[
            "Lead Generation",
            "Conversion Funnels",
            "CRM Automation",
            "Brand Positioning"
          ].map((item, i) => (
            <div key={i} style={{
              padding:"30px",
              background:"#0d0d0d",
              borderRadius:"12px",
              border:"1px solid rgba(255,255,255,0.05)"
            }}>
              <h3>{item}</h3>
              <p style={{color:"#aaa"}}>
                High-performance systems designed to scale your projects.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding:"120px 20px",
        textAlign:"center",
        background:"linear-gradient(180deg,#000,#002855)",
        color:"white"
      }}>
        <h2 style={{fontSize:"36px"}}>
          Ready for Better Leads?
        </h2>

        <p style={{color:"#ccc"}}>
          Get your free real estate growth audit today
        </p>

        <a href="https://wa.me/918951743843?text=Hello%20Vael,%20I%20want%20audit">
          <button className="btn-primary" style={{marginTop:"20px"}}>
            Get Audit
          </button>
        </a>
      </section>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/918951743843?text=Hello"
        style={{
          position:"fixed",
          bottom:"20px",
          right:"20px",
          background:"#25D366",
          padding:"16px",
          borderRadius:"50%",
          color:"white"
        }}>
        💬
      </a>

      <Footer />
    </>
  );
}
