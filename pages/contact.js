import { useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {

  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Name: ${form.name}
Company: ${form.company}
Phone: ${form.phone}
Email: ${form.email}
Project: ${form.project}
Budget: ${form.budget}
Message: ${form.message}`;

    const url = `https://wa.me/918951743843?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <Header />
      <main style={{padding: "50px"}}>

        <h1>Contact Us</h1>

        <form onSubmit={handleSubmit}>
          <input placeholder="Name" required onChange={e => setForm({...form, name: e.target.value})} /><br/><br/>
          <input placeholder="Company Name" onChange={e => setForm({...form, company: e.target.value})} /><br/><br/>
          <input placeholder="Phone" required onChange={e => setForm({...form, phone: e.target.value})} /><br/><br/>
          <input placeholder="Email" required onChange={e => setForm({...form, email: e.target.value})} /><br/><br/>
          <input placeholder="Project Name" onChange={e => setForm({...form, project: e.target.value})} /><br/><br/>

          <select onChange={e => setForm({...form, budget: e.target.value})}>
            <option>Budget Range</option>
            <option>1-2 Crore</option>
            <option>2-5 Crore</option>
          </select><br/><br/>

          <textarea placeholder="Message" onChange={e => setForm({...form, message: e.target.value})}></textarea><br/><br/>

          <button className="btn-primary">Send via WhatsApp</button>
        </form>

      </main>
      <Footer />
    </>
  );
}