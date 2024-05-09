window.onload = function () {
    const portfolioContainer = document.querySelector('.portfolio-container');
    let allItems = [];
    const itemsPerPage = 5; // Number of items per page
    let currentPage = 1;
    let totalPages = 0;
    let filteredItems = [];

    function fetchItems() {
        var filePath = 'news.yml' // Note hardcoded file path here
        fetch(filePath) 
            .then(response => response.text())
            .then(yaml => jsyaml.load(yaml))
            .then(data => {
                createItems(data.items);
                allItems = Array.from(portfolioContainer.querySelectorAll('.portfolio-item'));
                filteredItems = allItems.slice(); // Initially all items are shown
                updatePagination();
            })
            .catch(error => console.error('Failed to load YAML file:', error));
    }

    function createItems(items) {
        // Generate div for each update item
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = `col-lg-4 col-md-6 portfolio-item filter-${item.category.trim().toLowerCase()}`;
            div.innerHTML = `<h4>${item.title}</h4><p style="font-size:11pt; color:#808080;">${item.date}</p><p>${item.desc} <a href="${item.url}">[Read More]</a></p>`;
            portfolioContainer.appendChild(div);
        });
    }

    function updatePagination() {
        totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        document.getElementById('updates-page-info').textContent = `${currentPage} of ${totalPages}`;
        showCurrentItems();
    }

    function showCurrentItems() {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        allItems.forEach(item => item.style.display = 'none');
        filteredItems.slice(start, end).forEach(item => item.style.display = 'block');

        document.getElementById('updates-prev-page').disabled = currentPage === 1;
        document.getElementById('updates-next-page').disabled = currentPage === totalPages;
    }

    function updateFilter(filterValue) {
        filteredItems = filterValue === 'all'
            ? allItems.slice()
            : allItems.filter(item => item.classList.contains(`filter-${filterValue}`));
        currentPage = 1;
        updatePagination();
    }

    function setupEventListeners() {
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function () {
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const filterValue = this.id.replace('filter-', '');
                updateFilter(filterValue);
            });
        });

        document.getElementById('updates-next-page').addEventListener('click', function () {
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
            }
        });

        document.getElementById('updates-prev-page').addEventListener('click', function () {
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
            }
        });
    }

    fetchItems();
    setupEventListeners();
};
