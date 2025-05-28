"use client"

import Input from "./components/Input/Input";
import CardMoeda from "./components/CardMoeda/CardMoeda";
import Grid from "./components/Grid/Grid";
import Label from "./components/Label/Label";
import { useState, useEffect } from "react";
import Container from "./components/Container/Container";

export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_EXCHANGERATE_API_KEY;
  const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/BRL`;


  const [valorBRL, setValor] = useState(0);
  const [exchangeRates, setExchangeRates] = useState(null);
  const [loading, setLoading] = useState(true); // Adiciona um estado de carregamento
  const [error, setError] = useState(null); // Adiciona um estado para erros

  
  async function buscarTaxasDeCambio() {
    setLoading(true); // Começa a carregar
    setError(null); // Limpa erros anteriores  
    if (!API_KEY) {
      console.error("Erro: A chave da API da ExchangeRate-API não foi configurada. Verifique seu arquivo .env.local.");
      setError("Erro de configuração da API.");
      setLoading(false);
      return;
    }

    try {
      const resp = await fetch(BASE_URL);
      const json = await resp.json();

      if (json.result === "success") {
        setExchangeRates(json.conversion_rates); 
        console.log(json);
      } else {
        console.error("Erro ao buscar taxas de câmbio:", json.result, json["error-type"]);
        setError(`Erro da API: ${json["error-type"]}`);
      }
    } catch (err) {
      console.error("Erro na requisição da API de Câmbio:", err);
      setError("Erro ao buscar dados. Verifique sua conexão.");
    } finally {
      setLoading(false); //termina de carregar, independente do resultado
    }
  }

  useEffect(() => {
    buscarTaxasDeCambio();
  }, []); // <--- CORRIGIDO: Adicione o array de dependências vazio
  //renderização condicional
  if (loading) {
    return (
      <Container>
        <p>Carregando taxas de câmbio...</p>
      </Container>
      );
  }
  if (error) {
      return (
        <Container>
          <p>Ocorreu um erro: {error}</p>
          <button onClick={buscarTaxasDeCambio}>Tentar Novamente</button>
        </Container>
      );
  }
  
  // Se chegou até aqui, exchangeRates não é null e os dados foram carregados

  const cotacaoEUR = exchangeRates.EUR;
  const cotacaoVES = exchangeRates.VES;
  const cotacaoUSD = exchangeRates.USD;
  const cotacaoARS = exchangeRates.ARS;


  //calculo inicial
  const eurRaw = valorBRL * cotacaoEUR;
  const vesRaw = valorBRL * cotacaoVES;
  const usdRaw = valorBRL * cotacaoUSD;
  const arsRaw = valorBRL * cotacaoARS;


  //arredondamento para duas casas decimais
  const eur = parseFloat(eurRaw.toFixed(2));
  const ves = parseFloat(vesRaw.toFixed(2));
  const usd = parseFloat(usdRaw.toFixed(2));
  const ars = parseFloat(arsRaw.toFixed(2));

  //console.log("Valor atual:", valorBRL);

  return (
    <Container>
      <Input onValorChange={(novoValor) => setValor(novoValor)}/>
      <Label text={"Converter para"}></Label>
      <Grid>
        <CardMoeda nome={"EUR"} valorMoeda={eur} cotacao={cotacaoEUR}/>
        <CardMoeda nome={"VES"} valorMoeda={ves} cotacao={cotacaoVES}/>
        <CardMoeda nome={"USD"} valorMoeda={usd} cotacao={cotacaoUSD}/>
        <CardMoeda nome={"ARS"} valorMoeda={ars} cotacao={cotacaoARS}/>
      </Grid>
    </Container>
  );
}
