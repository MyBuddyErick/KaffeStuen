document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const openButton = document.getElementById('open-sidebar');
    const closeButton = document.getElementById('close-sidebar');

    // Function to open the sidebar
    openButton.addEventListener('click', function () {
        sidebar.style.left = '0';
    });

    // Function to close the sidebar
    closeButton.addEventListener('click', function () {
        sidebar.style.left = '-200px';
    });
});