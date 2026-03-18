import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';

// Load 3D only on client (prevents errors)
const Hero3D = dynamic(() => import('../components/Hero3D'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Vael Growth Labs | Premium Real Estate Marketing</title>
        <meta name="description" content="Generate qualified real estate leads in Karnataka with Vael Growth Labs." />
      </Head>

      <Header />

      {/* HERO SECTION */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10%",
        background: "radial-gradient(circle at top, #0a0f2c, #000)"
      }}>

        {/* LEFT CONTENT */}
        <div style={{maxWidth: "600px", color: "white"}}>
          <h1 style={{
            fontSize: "58px",
            lineHeight: "1.1",
            marginBottom: "20px"
          }}>
            Transform Your <span style={{color:"#C79F1F"}}>Real Estate</span> Marketing
          </h1>

          <p style={{
            fontSize: "18px",
            marginBottom: "30px",
            color:"#ccc"
          }}>
            Generate serious buyer leads for your projects using data-driven systems & automation.
          </p>

          <a href="https://wa.me/918951743843?text=Hello%20Vael,%20I%20am%20interested%20in%20your%20services">
            <button className="btn-primary">
              Get Free Growth Audit
            </button>
          </a>
        </div>

        {/* RIGHT 3D */}
        <div style={{
          width: "420px",
          height: "420px",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 0 60px rgba(199,159,31,0.25)"
        }}>
          <Hero3D />
        </div>

      </section>

      {/* TRUST BAR */}
      <section style={{
        background:"#000",
        color:"#888",
        padding:"40px",
        textAlign:"center",
        fontSize:"14px",
        letterSpacing:"1px"
      }}>
        TRUSTED BY REAL ESTATE DEVELOPERS ACROSS KARNATAKA
      </section>

      {/* VALUE SECTION */}
      <section style={{
        padding:"100px 10%",
        background:"#050505",
        color:"white"
      }}>
        <h2 style={{
          textAlign:"center",
          marginBottom:"60px"
        }}>
          Why Vael Growth Labs
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(250px,1fr))",
          gap:"30px"
        }}>

          <div style={{padding:"30px", background:"#0d0d0d", borderRadius:"10px"}}>
            <h3>Qualified Buyer Leads</h3>
            <p style={{color:"#aaa"}}>We bring serious buyers, not just inquiries.</p>
          </div>

          <div style={{padding:"30px", background:"#0d0d0d", borderRadius:"10px"}}>
            <h3>Data-Driven Strategy</h3>
            <p style={{color:"#aaa"}}>Every decision backed by performance data.</p>
          </div>

          <div style={{padding:"30px", background:"#0d0d0d", borderRadius:"10px"}}>
            <h3>Automated Follow-Ups</h3>
            <p style={{color:"#aaa"}}>No lead is lost with smart automation.</p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section style={{
        padding:"100px 10%",
        background:"#000",
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
          {["Lead Generation", "Funnels", "CRM Automation", "Branding"].map((item, i) => (
            <div key={i} style={{
              padding:"30px",
              background:"#111",
              borderRadius:"12px",
              border:"1px solid rgba(255,255,255,0.05)"
            }}>
              <h3>{item}</h3>
              <p style={{color:"#aaa"}}>
                High-performance systems for real estate growth.
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
          Get your free real estate growth audit
        </p>

        <a href="https://wa.me/918951743843?text=Hello%20Vael,%20I%20want%20a%20growth%20audit">
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
          color:"white",
          fontSize:"20px",
          boxShadow:"0 0 10px rgba(0,0,0,0.3)"
        }}>
        💬
      </a>

      <Footer />
    </>
  );
}
