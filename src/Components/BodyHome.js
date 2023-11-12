//Importando os estilos para montar meu componente
import { SectionCorpoHome, TituloD, BtnAtendimento, Section, Paragrafo, ImgHome, Sectionparagrafo, LinkButton, ContainerParagrafo } from "../Styles/styles";


//Criando uma função para armazenar meus estilos

function BodyHome(){
    return(
       <>
            <Section>
                <TituloD>Muito mais simples, muito mais Porto Seguro</TituloD>
                <SectionCorpoHome>
                <BtnAtendimento><LinkButton href="/Atendimento">Iniciar Atendimento</LinkButton></BtnAtendimento>
                    <Sectionparagrafo>
                        <ContainerParagrafo><Paragrafo>
                        Atendimento mais rápido e seguro, deixando seu dia muito mais pratico e simples para um pedido de socorro.<br></br>
                        Nosso novo sistema de atendimento revolucionou a experiência do usuário ao coletar informações de forma mais eficiente e precisa. Agora, ao solicitar um guincho, apenas as informações essenciais são requisitadas, agilizando o processo. Essa abordagem otimizada não só torna o serviço mais rápido, mas também mais preciso, garantindo uma assistência eficaz e personalizada em cada chamado.<br></br>
                        Com apenas uns cliques seu guincho vai até você, com muita mais agilidade.
                        </Paragrafo></ContainerParagrafo>
                        
                        <ImgHome>
                        <p></p>
                    </ImgHome>
                    </Sectionparagrafo>
                </SectionCorpoHome>
            </Section>
       </>
    )            
}


export default BodyHome