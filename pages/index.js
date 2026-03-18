import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vael Growth Labs | Real Estate Marketing Karnataka</title>
        <meta name="description" content="Generate qualified real estate leads in Karnataka with Vael Growth Labs." />
      </Head>

      <main>
        <section style={{padding: "100px 20px", textAlign: "center"}}>
          <h1>Transform Your Real Estate Marketing</h1>
          <p>Generate serious buyer leads for your projects</p>

          <a href="https://wa.me/918951743843?text=Hello%20Vael,%20I%20am%20interested%20in%20your%20services">
            <button className="btn-primary">Get Free Growth Audit</button>
          </a>
        </section>

        <section style={{padding: "50px"}}>
          <h2>Ready for Better Leads?</h2>
          <form>
            <input placeholder="Your Name" required /><br/><br/>
            <input placeholder="Email" required /><br/><br/>
            <button className="btn-primary">Download Audit</button>
          </form>
        </section>
      </main>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/918951743843?text=Hello%20Vael,%20I%20am%20interested%20in%20your%20services"
         style={{
           position: "fixed",
           bottom: "20px",
           right: "20px",
           background: "#25D366",
           color: "white",
           padding: "15px",
           borderRadius: "50%"
         }}>
         💬
      </a>
    </>
  );
}