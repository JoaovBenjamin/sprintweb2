//Importando as estilizações que vou utilizar para criar meu componente
import { Divimg,TituloImagem,Section,SectionImagem } from "../Styles/styles"

//Criando a function que vai armazenar as minhas estilizaçõees
function HeaderHome(){

    return(
        <>
        <Section>
            <SectionImagem>
                <Divimg>
                    <TituloImagem>Seja bem-vindo ao novo atendimento Porto Guinchos</TituloImagem>
                </Divimg>  
            </SectionImagem>
        </Section> 
        </>
    )
}

//Exportando minha function para ser utilizada na "PaginaInicial.jsx"
export default HeaderHome