//Importando os componentes que vou utilizar
import HeaderHome from "../Components/HeaderHome";
import Footer from "../Components/Footer";
import BodyHome from "../Components/BodyHome";

 
// Criando a function que vai retornar todos os componentes que criei
function Home(){
    return(
        <>
            <HeaderHome></HeaderHome>
            <BodyHome></BodyHome>
            <Footer></Footer>
        </>
    )
}

//Exportando minha function para ser utilizado no "App.jxs"
export default Home;