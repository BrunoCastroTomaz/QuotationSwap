import './styles.css';

export default function Home() {
  return (
    <div className="container">
      <h1>MOEDINHAS</h1>
      <input className="input-display" type="number" placeholder="0,00 BRL"/>
      <p className="label">Converter para</p>
      <div className="grid">
        <div className="card">
          <span>CNY</span>
          <p>0,00</p>
        </div>
        <div className="card">
          <span>BTC</span>
          <p>0,00</p>
        </div>
        <div className="card">
          <span>USD</span>
          <p>0,00</p>
        </div>
        <div className="card">
          <span>ETH</span>
          <p>0,00</p>
        </div>
      </div>
      <footer>grupo © 2025</footer>
    </div>
  );
}
