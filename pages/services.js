import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <>
      <Header />
      <main style={{padding: "50px"}}>

        <h1>Our Services</h1>

        <h2>Meta & Google Lead Campaigns</h2>
        <ul>
          <li>Targeted audiences</li>
          <li>Budget optimization</li>
        </ul>

        <h2>Landing Pages & Funnels</h2>
        <ul>
          <li>A/B testing</li>
          <li>Form integration</li>
        </ul>

        <h2>CRM & Automation</h2>
        <ul>
          <li>WhatsApp workflows</li>
          <li>Lead scoring</li>
        </ul>

        <h2>Content & Branding</h2>
        <ul>
          <li>Social media content</li>
          <li>Video marketing</li>
        </ul>

      </main>
      <Footer />
    </>
  );
}