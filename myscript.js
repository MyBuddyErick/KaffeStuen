document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const openButton = document.getElementById('open-sidebar');
    const closeButton = document.getElementById('close-sidebar');
    const overlay = document.getElementById('overlay');

    // Function to open the sidebar
    openButton.addEventListener('click', function () {
        sidebar.style.left = '0';
        overlay.style.display = 'block'; // Show the overlay
    });

    // Function to close the sidebar
    closeButton.addEventListener('click', function () {
        sidebar.style.left = '-100%';
        overlay.style.display = 'none'; // Hide the overlay
    });

    // Function to close the sidebar when overlay is clicked
    overlay.addEventListener('click', function () {
        sidebar.style.left = '-100%';
        overlay.style.display = 'none'; // Hide the overlay
    });
});