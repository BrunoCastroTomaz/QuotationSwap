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
      <h2>0,0 BRL</h2>
      <input className="input-display" type="number" placeholder={`0,00 ${sigla}`}/> 

      <div className="link-container">
        <Link href="/" className="back-button">
        ←
        </Link>
      </div>

    </div>
  );
}


