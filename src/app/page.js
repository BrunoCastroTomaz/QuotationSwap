import Card from './components/Card';
import './styles.css';
import './components/Card.module.css'

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
        <Card sigla="CNY" valor="0,00"></Card>
        <Card sigla="BTC" valor="0,00"></Card>
        <Card sigla="USD" valor="0,00"></Card>
        <Card sigla="ETH" valor="0,00"></Card>
      </div>
      <footer>grupo © 2025</footer>
    </div>
  );
}


