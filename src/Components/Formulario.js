"use client"
import axios from "axios"
import { useState, useEffect } from "react"
//Importando os estilos para montar o meu componente
import { Section,TituloD,Paragrafo, InputUser,FormularioSection, BtnAtendimento, SectionCepForm,ButtonLink, LinkC} from "../Styles/styles"




//Criando a função que vai receber meus estilos para o formulario

function Formulario(){
    const [clientes, setClientes] = useState([]);
    const [cpfPesquisa, setCpfPesquisa] = useState('');
    const [clienteEncontrado, setClienteEncontrado] = useState(null);
    const [cpfInvalido, setCpfInvalido] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/cliente');
          setClientes(response.data);
        } catch (error) {
          console.error('Erro na requisição à API:', error.message);
        }
      };
  
      fetchData();
    }, []);
  
  
    const handlePesquisar = (event) => {
        event.preventDefault();
    
        // Realiza a pesquisa na lista de clientes pelo CPF
        const clientePesquisado = clientes.find((cliente) => cliente.cpf === cpfPesquisa);
        if (clientePesquisado) {
          setClienteEncontrado(clientePesquisado);
          setCpfInvalido(false);
          console.log('Cliente encontrado:', clientePesquisado);
        } else {
          setClienteEncontrado(null);
          setCpfInvalido(true);
          console.log('CPF inválido');
        }
      };
    return (
      <Section>
        <TituloD>Confirmação Identidade</TituloD>
  
        <FormularioSection>
          {/* Adiciona um campo de entrada e um botão para pesquisa */}
          <InputUser
            type="text"
            placeholder="Digite o CPF"
            value={cpfPesquisa}
            onChange={(e) => setCpfPesquisa(e.target.value)}
          />
          <BtnAtendimento onClick={handlePesquisar}>Pesquisar</BtnAtendimento>
        </FormularioSection>

        
      {cpfInvalido && (
        <SectionCepForm>
          <Paragrafo>CPF inválido. Nenhum cliente encontrado.</Paragrafo>
        </SectionCepForm>
      )}
  
        {clienteEncontrado &&(
          <SectionCepForm>
            <Paragrafo>Nome: {clienteEncontrado.nomeCompleto}</Paragrafo>
            <Paragrafo>CPF: {clienteEncontrado.cpf}</Paragrafo>
            <Paragrafo>RG: {clienteEncontrado.rg}</Paragrafo>
            <ButtonLink><LinkC href="/Veiculo">Continuar</LinkC></ButtonLink>
          </SectionCepForm>
        )}
        
      </Section>
    );
}


//Exportando meu formulario para ser usado na pagina "ConfirmaçãoIdentidade.jsx"
export default Formulario