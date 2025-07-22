// Se asegura que el contenido de la página se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    // Se inicializa el modal de Bootstrap
    const modalEl = document.getElementById('imagenModal');
    const bsModal = new bootstrap.Modal(modalEl);

    // Se agrega evento de clic a cada tarjeta para poder ver la imagen en un modal con el título, autor y descripción
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            // Se obtienen los elementos necesarios de la tarjeta
            const img = card.querySelector('img');
            const title = card.querySelector('.card-title').textContent;
            const author = card.querySelector('.card-subtitle').textContent;
            const desc = card.dataset.description || '';

            // Se actualiza el título del modal
            document.getElementById('imagenModalLabel').textContent = title;

            // Se asegura que la imagen del modal tenga el mismo tamaño que la original
            const mImg = document.getElementById('modalImagen');
            mImg.src = img.src; mImg.alt = img.alt;

            // Se actualizan los detalles del modal
            document.getElementById('modalAutor').textContent = author;
            document.getElementById('modalDescripcion').textContent = desc;

            // Se muestra el modal
            bsModal.show();
        });
    });

    // Se agrega evento para la búsqueda de imágenes
    document.getElementById('inputBuscar').addEventListener('input', (event) => {
        // Se obtiene el criterio de búsqueda
        const buscarString = event.target.value.toLowerCase();
        
        // Se busca en todos los cards con imágenes
        document.querySelectorAll('.card').forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const author = card.querySelector('.card-subtitle').textContent.toLowerCase();

            // Se valida el criterio de búsqueda en el título y autor de la imagen
            if (title.includes(buscarString) || author.includes(buscarString)) {
                // En caso de coincidir se mantiene visible el card
                card.style.display = 'block';
            } else {
                // En caso de que no coincida oculta el card
                card.style.display = 'none';
            }
        });
    });
});