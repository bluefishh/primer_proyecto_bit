// Se asegura que el contenido de la página se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    // Se inicializa el modal de Bootstrap
    const modalEl = document.getElementById('imagenModal');
    const bsModal = new bootstrap.Modal(modalEl);

    // Se agrega evento de clic a cada tarjeta
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
});