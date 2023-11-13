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
    
        // Atualiza o estado com o cliente encontrado
        setVeiculoEncontrado(placaPesquisa1);
    }
  
    return (
      <Section>
        <TituloD>Confirmação Identidade</TituloD>
  
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
        )}
        
      </Section>
    );
}


//Exportando meu formulario para ser usado na pagina ""
export default FormularioVeiculo