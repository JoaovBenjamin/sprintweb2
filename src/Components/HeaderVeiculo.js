//Importando meus estilos para criar meu componente 
import { Section,SectionImagem3,DivImg3,TituloImagem } from "../Styles/styles";

//Function que vai armazenar meus estilos e criar meu componente
function HeaderVeiculo(){
    return(
        <>
            <Section>
                <SectionImagem3>
                    <DivImg3><p></p></DivImg3>
                    <TituloImagem>PASSO</TituloImagem>
                </SectionImagem3>
            </Section>
        </>
    )
}

//exportando meu HeaderVeiculo
export default HeaderVeiculo;