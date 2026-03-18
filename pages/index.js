import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vael Growth Labs | Premium Real Estate Marketing</title>
        <meta name="description" content="Premium real estate marketing agency helping developers generate qualified buyer leads in Karnataka." />
      </Head>

      <Header />

      {/* HERO SECTION */}
      <section style={{
        background: "linear-gradient(180deg, #000000, #002855)",
        color: "white",
        padding: "120px 20px",
        textAlign: "center"
      }}>
        <h1 style={{fontSize: "48px", marginBottom: "20px"}}>
          Transform Your Real Estate Marketing
        </h1>

        <p style={{fontSize: "20px", marginBottom: "30px"}}>
          Generate serious buyer leads for your projects
        </p>

        <a href="https://wa.me/918951743843?text=Hello%20Vael,%20I%20am%20interested%20in%20your%20services">
          <button className="btn-primary">Get Free Growth Audit</button>
        </a>
      </section>

      {/* VALUE PROPS */}
      <section style={{padding: "80px 20px", background: "#0a0a0a", color: "white"}}>
        <h2 style={{textAlign: "center", marginBottom: "50px"}}>Why Vael Growth Labs</h2>

        <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
          
          <div style={{maxWidth: "250px", margin: "20px"}}>
            <h3>Qualified Buyer Leads</h3>
            <p>We attract serious buyers ready to invest in your projects.</p>
          </div>

          <div style={{maxWidth: "250px", margin: "20px"}}>
            <h3>Data-Driven Strategy</h3>
            <p>Every campaign is optimized using real performance data.</p>
          </div>

          <div style={{maxWidth: "250px", margin: "20px"}}>
            <h3>Automated Follow-Up</h3>
            <p>We ensure no lead is lost with automation systems.</p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section style={{padding: "80px 20px", background: "#000", color: "white"}}>
        <h2 style={{textAlign: "center", marginBottom: "50px"}}>Our Services</h2>

        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>

          {["Lead Generation", "Landing Pages", "CRM Automation", "Content Marketing"].map((service, i) => (
            <div key={i} style={{
              background: "#111",
              padding: "30px",
              margin: "15px",
              borderRadius: "10px",
              width: "250px"
            }}>
              <h3>{service}</h3>
              <p>High-performance solutions designed for real estate growth.</p>
            </div>
          ))}

        </div>
      </section>

      {/* LEAD MAGNET */}
      <section style={{
        padding: "100px 20px",
        background: "linear-gradient(180deg, #002855, #000)",
        color: "white",
        textAlign: "center"
      }}>
        <h2>Ready for Better Leads?</h2>

        <p>Get your free Real Estate Growth Audit</p>

        <form style={{marginTop: "20px"}}>
          <input placeholder="Your Name" required style={{padding: "10px", margin: "10px"}} />
          <input placeholder="Email" required style={{padding: "10px", margin: "10px"}} />
          <br/>
          <button className="btn-primary">Download Audit</button>
        </form>
      </section>

      {/* WHATSAPP FLOAT */}
      <a href="https://wa.me/918951743843?text=Hello%20Vael,%20I%20am%20interested%20in%20your%20services"
         style={{
           position: "fixed",
           bottom: "20px",
           right: "20px",
           background: "#25D366",
           padding: "15px",
           borderRadius: "50%",
           color: "white",
           fontSize: "20px"
         }}>
         💬
      </a>

      <Footer />
    </>
  );
}
