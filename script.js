function inicio(){

    // Esconde a seção "Sobre Mim" e volta para o topo da página
    const containerSobremim = document.querySelector('.container_sobremim');
    containerSobremim.style.right = '2000px';
     window.scrollTo({ top: 0, behavior: 'smooth' });

     //Esconde a seção "Projetos"

     const containerProjetos = document.querySelector('.conteiner-projetos');
     containerProjetos.style.marginTop = '-2000px';

     // Esconde a seção "Conhecimentos"

     const containerConhecimentos = document.querySelector('.container_conhecimentos');
     containerConhecimentos.style.marginTop = '-2000px';
}

function sobreMim(){

    const containerProjetos = document.querySelector('.conteiner-projetos');
     containerProjetos.style.marginTop = '-2000px';

    const containerSobremim = document.querySelector('.container_sobremim');
    containerSobremim.scrollIntoView({ behavior: 'smooth' });
    containerSobremim.style.right = '0px';

    // Esconde a seção "Conhecimentos"

     const containerConhecimentos = document.querySelector('.container_conhecimentos');
     containerConhecimentos.style.marginTop = '-2000px';
}

function projetos(){ 
    
    const containerSobremim = document.querySelector('.container_sobremim');
    containerSobremim.style.right = '2000px';
     window.scrollTo({ top: 0, behavior: 'smooth' });

    const body = document.querySelector('body');
    body.style.overflowY = 'visible';

    const containerProjetos = document.querySelector('.conteiner-projetos');
    containerProjetos.style.marginTop = '0px';
    containerProjetos.scrollIntoView({ behavior: 'smooth' });

    // Esconde a seção "Conhecimentos"

     const containerConhecimentos = document.querySelector('.container_conhecimentos');
     containerConhecimentos.style.marginTop = '-2000px';

}


function conhecimentos(){
    const containerConhecimentos = document.querySelector('.container_conhecimentos');
    containerConhecimentos.scrollIntoView({ behavior: 'smooth' });
    const containerProjetos = document.querySelector('.conteiner-projetos');
    containerConhecimentos.style.marginTop = '0px';
}