'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import './moeda.css';

export default function MoedaPage() {
  const params = useParams();
  const sigla = params.sigla;
  
  return (
    <div className="moeda-container">
      <h1>MOEDINHAS</h1> 
      <p className='brlValue'>0,00 BRL</p>
      <input className="input-display" type="number" placeholder={`0,00 ${sigla}`}/> 

      <div className='currencyGeneralInfo'>
        <section className='currencyVariationInfo'>
          <p className='greenText'>0,00%</p>
          <p className='greenText'>+1.000,00 Hoje</p>
        </section>
        <p className='lastClosing'>Último fechamento: 530.128,76</p>
      </div>

      <div className="link-container">
        <Link href="/" className="back-button">
          <img src="/back.png"/>
        </Link>
      </div>

    </div>
  );
}


