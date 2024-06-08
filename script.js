// Get references to elements
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closeBtn = document.getElementById("close");

// Add event listener to toggle navigation menu when bar is clicked
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    }); 
}

// Add event listener to close navigation menu when close button is clicked
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Change main image when small image is clicked
let mainImg = document.getElementById('MainImg');
let smallImgs = document.querySelectorAll('.small-img');

smallImgs.forEach(smallImg => {
    smallImg.addEventListener('click', () => {
        mainImg.src = smallImg.src;
    });
});

// Remove item from cart when remove icon is clicked
document.addEventListener('DOMContentLoaded', function () {
    const removeIcons = document.querySelectorAll('#cart table td:nth-child(1) a');
  
    removeIcons.forEach(icon => {
        icon.addEventListener('click', function (event) {
            event.preventDefault(); 
            const row = icon.closest('tr');
            row.remove();
        });
    });
});

// Update subtotal when quantity input changes
document.addEventListener('DOMContentLoaded', function () {
    const quantityInputs = document.querySelectorAll('#cart table tbody tr td:nth-child(5) input');
    const subtotalCells = document.querySelectorAll('#cart table tbody tr td:nth-child(6)');
    const cartTotalCell = document.querySelector('#subtotal td:last-child');

    quantityInputs.forEach((input, index) => {
        input.addEventListener('input', function () {
            const row = input.closest('tr');
            const price = parseFloat(row.querySelector('td:nth-child(4)').textContent.replace('$', ''));
            const quantity = parseInt(input.value);
            const subtotal = price * quantity;
            subtotalCells[index].textContent = '$' + subtotal.toFixed(2);

            // Update total when quantity changes
            updateCartTotal();
        });
    });
  
    // Function to update the total in the cart
    function updateCartTotal() {
        let total = 0;
        subtotalCells.forEach(subtotalCell => {
            total += parseFloat(subtotalCell.textContent.replace('$', ''));
        });
        cartTotalCell.textContent = '$' + total.toFixed(2);
    }

    // Initial calculation of total
    updateCartTotal();
});

// When the 'Shop Now' button is clicked, the script will redirect the user to the shop.html page and make the "Shop" link active in the navigation bar.
document.addEventListener("DOMContentLoaded", () => {
    const shopNowBtn = document.getElementById("shopNowBtn");

    shopNowBtn.addEventListener("click", () => {
        window.location.href = "shop.html";
    });
});

