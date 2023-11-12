//Importando o componente para minha pagina
import Cep from "../../Components/Cep";
import HeaderEndereco from "../../Components/HeaderEndereco";

function Endereco(){
    return(
        <>
            <HeaderEndereco></HeaderEndereco>
            <Cep></Cep>
        </>
    )
}

export default Endereco