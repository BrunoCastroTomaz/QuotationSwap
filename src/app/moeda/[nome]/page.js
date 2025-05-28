"use client"

import { BackButton } from "@/app/components/Button/page";
import {LargeCard} from "@/app/components/CardMoeda/CardMoeda";
import Container from "@/app/components/Container/Container";
import Grid from "@/app/components/Grid/Grid";
import Input from "@/app/components/Input/Input";
import { GreenLabel } from "@/app/components/Label/Label";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Moeda (){

    const [inputValor, setValor] = useState(0);

    const params = useParams();
    const nome = params.nome;
    const valorMoeda = useSearchParams().get('valorMoeda');
    const cotacao = useSearchParams().get('cotacao');
    
    /* Substituir os valores em parênteses pelos valores da API */
    const variacaoPercentual = (0.8).toLocaleString('pt-BR');
    const variacaoHoje = (4444.02).toLocaleString('pt-BR');
    const ultimoFechamento = (530128.76).toLocaleString('pt-BR');

    return (
        <Container>
            <Input valor={inputValor ? inputValor : valorMoeda / cotacao} onValorChange={(novoValor) => setValor(novoValor)}></Input>
            <LargeCard nome={nome} valorMoeda={inputValor ? inputValor * cotacao : valorMoeda}></LargeCard>
            <Grid>
                <GreenLabel text={`${variacaoPercentual}%`}></GreenLabel>
                <GreenLabel text={`${variacaoHoje} Hoje`}></GreenLabel>
            </Grid>
            <GreenLabel text={`Último fechamento ${ultimoFechamento}`}></GreenLabel>
            <BackButton text={"test"}></BackButton>
        </Container>
    );
}