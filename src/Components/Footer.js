//Importando meus estilos para montar o meu componente
import { Rodape, LinkC } from "../Styles/styles"

//Criando a Function que vai armazenar os meus estilos e criar meu componente
function Footer(){
    return(
        <>
            <Rodape>
                <LinkC>Não tem cadastro ?</LinkC>
                <p>Direitos reservado</p>
            </Rodape>
        </>
    )
}


//Exportando meu footer para todas as paginas
export default Footer