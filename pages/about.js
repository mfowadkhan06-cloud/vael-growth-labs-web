import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main style={{padding: "50px"}}>

        <h1>About Vael Growth Labs</h1>

        <p>
          Vael Growth Labs helps real estate developers generate qualified leads 
          using modern digital marketing systems.
        </p>

        <h2>Founder Message</h2>
        <p>M Fowad Khan – Welcome to Vael Growth Labs.</p>

        <h2>Why Choose Us</h2>
        <ul>
          <li>Real Estate Focus</li>
          <li>Data Driven Strategy</li>
          <li>ROI Oriented Campaigns</li>
        </ul>

      </main>
      <Footer />
    </>
  );
}