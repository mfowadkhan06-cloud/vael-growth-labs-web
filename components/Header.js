export default function Header() {
  return (
    <header style={{padding: "20px", display: "flex", justifyContent: "space-between"}}>
      
      <img 
        src="https://i.ibb.co/21y5YHxd/logo.png" 
        alt="Vael Growth Labs Logo"
        style={{height: "50px"}}
      />

      <nav>
        <a href="/">Home</a> | 
        <a href="/about"> About</a> | 
        <a href="/services"> Services</a> | 
        <a href="/contact"> Contact</a>
      </nav>

    </header>
  );
}