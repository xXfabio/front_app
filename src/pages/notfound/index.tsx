import  { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';

export function Notfound(){

    const history = useNavigate ();

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
          // Redirecione para a página desejada após 3 segundos
          history("/");
        }, 5000); // Tempo em milissegundos (3 segundos neste exemplo)
    
        // Certifique-se de limpar o timer ao desmontar o componente
        return () => {
          clearTimeout(redirectTimeout);
        };
      }, [history]);

    return(
        <div 
        style={{ width: "400px" }} 
        className="container  justify-content-center mt-4 text"
        >
            <img src="https://i.giphy.com/media/KEG5UtvXUD7WPIhhuy/giphy.webp"/>
            
            <p><h1>404</h1></p>
            <p><h4>Página não encontrada!</h4></p>
            <p>Você será redirecionado para a página inicial em breve...</p>
            
        </div>
    )
}