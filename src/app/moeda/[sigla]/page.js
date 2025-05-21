'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function MoedaPage() {
  const params = useParams();
  const sigla = params.sigla;
  
  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      <h1>Página da moeda: {sigla}</h1>
      
      <Link href="/" style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        marginTop: '20px'
      }}>
        Voltar para Home
      </Link>
    </div>
  );
}