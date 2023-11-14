//Importando meus estilos para criar o componente
import { SectionImagem3,DivImg4,TituloImagem,ButtonLink,LinkC}  from "../Styles/styles";


//Função para armazenar meus estilos e criar meu componente
function Encerramento(){
    return(
        <>
            <SectionImagem3>
                <DivImg4><p></p></DivImg4>
                <TituloImagem>Informações coletadas com sucesso. Modal a Caminho</TituloImagem>
                <ButtonLink><LinkC href="/">Voltar para Home</LinkC></ButtonLink>
            </SectionImagem3>
        </>
    )
}

export default Encerramento