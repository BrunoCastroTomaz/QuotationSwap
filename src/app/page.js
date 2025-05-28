"use client"

import Input from "./components/Input/Input";
import CardMoeda from "./components/CardMoeda/CardMoeda";
import Grid from "./components/Grid/Grid";
import Label from "./components/Label/Label";
import { useState } from "react";
import Container from "./components/Container/Container";

export default function Home() {
  const [valorBRL, setValor] = useState(0);

  /* Substituir pelos valores da API */
  const cotacaoBTC = 4;
  const cotacaoETH = 3;
  const cotacaoUSD = 2;
  const cotacaoCNY = 1;

  const btc = valorBRL * cotacaoBTC;
  const eth = valorBRL * cotacaoETH;
  const usd = valorBRL * cotacaoUSD;
  const cny = valorBRL * cotacaoCNY;

  console.log("Valor atual:", valorBRL);

  return (
    <Container>
      <Input onValorChange={(novoValor) => setValor(novoValor)}/>
      <Label text={"Converter para"}></Label>
      <Grid>
        <CardMoeda nome={"BTC"} valorMoeda={btc} cotacao={cotacaoBTC}/>
        <CardMoeda nome={"CNY"} valorMoeda={cny} cotacao={cotacaoCNY}/>
        <CardMoeda nome={"USD"} valorMoeda={usd} cotacao={cotacaoUSD}/>
        <CardMoeda nome={"ETH"} valorMoeda={eth} cotacao={cotacaoETH}/>
      </Grid>
    </Container>
  );
}
