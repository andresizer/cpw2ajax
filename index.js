
    let carregando = false; // indica se uma requisição Ajax está em andamento

    // função para carregar mais imagens
        function loadImages() {
            if (carregando) {
                return;
            }
            carregando = true;
 
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'dados.json', true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    
                    for (const image of response.imagens) {
                        const img = document.createElement('img');
                        img.src = image.imgUrl;
                        imageContainer.appendChild(img);
                    }
                    carregando = false;
                }
            };

            xhr.send();
        }

        // Carrega imagens quando a página é carregada
        window.addEventListener('load', loadImages);

        // Carrega mais imagens quando o usuário rolar até o final da página
        window.addEventListener('scroll', () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                loadImages();
            }
        });