import './styles.css'; 

export default function Home() {
  // export permite que o componente seja utilizado em outros arquivos
  return (
    // tudo dentro do return é o que será exibido na tela
    <div className="container">
      {/* outer div que envolve todo o conteúdo Em jsx se usa classname ao invés de class */}
      <h1>MOEDINHAS</h1> 
      {/* título */}
      <input className="input-display" type="number" placeholder="0,00 BRL"/> 
      {/*input insere o valor em reais*/}
      <p className="label">Converter para</p>
      <div className="grid">
        {/* div onde ficam as moedas, cada uma em um card com o valor e o nome */}
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


