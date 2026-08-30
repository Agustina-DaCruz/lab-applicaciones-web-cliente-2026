export const renderNavbar = () => {
    const navbarContainer = document.getElementById('navbar-container');
    
    navbarContainer.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">E-Commerce G6</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <!-- Navegación de Categorías -->
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="category-menu">
                        <li class="nav-item"><a class="nav-link" href="#" data-category="electronics">Electrónica</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" data-category="jewelery">Joyería</a></li>
                    </ul>
                    
                    <!-- Buscador -->
                    <form class="d-flex" role="search" id="search-form">
                        <input class="form-control me-2" type="search" placeholder="Buscar productos..." id="search-input">
                        <button class="btn btn-outline-light" type="submit">Buscar</button>
                    </form>
                    
                    <!-- Botón del Carrito (Disparador para el sidebar de Grisel) -->
                    <button class="btn btn-warning ms-lg-3 mt-2 mt-lg-0" id="cart-toggle-btn">
                        🛒 Carrito <span class="badge bg-danger rounded-pill" id="cart-badge">0</span>
                    </button>
                </div>
            </div>
        </nav>
    `;

    // Espacio preparado para tu lógica de eventos
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = document.getElementById('search-input').value;
        console.log("Filtro de búsqueda ejecutado:", query);
    });
};