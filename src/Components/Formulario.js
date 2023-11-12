
//Importando os estilos para montar o meu componente
import { Section,TituloD,Paragrafo, InputUser,FormularioSection, BtnAtendimento } from "../Styles/styles"


//Criando a função que vai receber meus estilos para o formulario

function Formulario(){
    return(
        <>
            <Section>
                <TituloD>Confirme sua identidade</TituloD>
                <FormularioSection>
                <Paragrafo>Digite o seu CPF: </Paragrafo>
                <InputUser placeholder="Digite seu CPF"></InputUser>
                <BtnAtendimento>Enviar</BtnAtendimento>
                </FormularioSection>
                
            </Section>
        </>
    )
}

//Exportando meu formulario para ser usado na pagina "ConfirmaçãoIdentidade.jsx"
export default Formulario