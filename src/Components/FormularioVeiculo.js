"use client"
import axios from "axios"
import { useState, useEffect } from "react"
//Importando os estilos para montar o meu componente
import { Section,TituloD,Paragrafo, InputUser,FormularioSection, BtnAtendimento, SectionCepForm,ButtonLink, LinkC} from "../Styles/styles"




//Criando a função que vai receber meus estilos para o formulario

function FormularioVeiculo(){
    const [veiculos, setVeiculos] = useState([]);
    const [placaPesquisa, setPlacaPesquisa] = useState('');
    const [veiculoEncontrado, setVeiculoEncontrado] = useState(null);
    const [placaInvalida, setPlacaInvalida] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/veiculo');
          setVeiculos(response.data);
        } catch (error) {
          console.error('Erro na requisição à API:', error.message);
        }
      };
  
      fetchData();
    }, []);
  
  
    const handlePesquisar = (event) => {
        event.preventDefault();
    
        // Realiza a pesquisa na lista de veiculos numero da placa
        const placaPesquisa1 = veiculos.find((veiculo) => veiculo.placa === placaPesquisa);
    
      if(placaPesquisa1){
        setVeiculoEncontrado(placaPesquisa1)
        setPlacaInvalida(false)
        console.log('VeiculoEncontrado:', placaPesquisa);
      }else{
        setVeiculoEncontrado(null)
        setPlacaInvalida(true)
        console.log("Placa Invalida")
      }
    }
  
    return (
      <Section>
        <TituloD>Confirmação do Veículo</TituloD>
  
        <FormularioSection>
          {/* Adiciona um campo de entrada e um botão para pesquisa */}
          <InputUser
            type="text"
            placeholder="Digite o número da Placa"
            value={placaPesquisa}
            onChange={(e) => setPlacaPesquisa(e.target.value)}
          />
          <BtnAtendimento onClick={handlePesquisar}>Pesquisar</BtnAtendimento>
        </FormularioSection>

        
        {veiculoEncontrado &&(
          <SectionCepForm>
            <Paragrafo>Placa: {veiculoEncontrado.placa}</Paragrafo>
            <Paragrafo>Ano: {veiculoEncontrado.ano}</Paragrafo>
            <Paragrafo>Renavam: {veiculoEncontrado.renavam}</Paragrafo>
            <ButtonLink><LinkC href="/Endereco">Continuar</LinkC></ButtonLink>
          </SectionCepForm>
          
        )};
       
        
        {placaInvalida &&(
          <SectionCepForm>
            <Paragrafo>Placa Invalida</Paragrafo>
          </SectionCepForm>
        )};
  
        
        
      </Section>
    );
}


//Exportando meu formulario 
export default FormularioVeiculo