// Fungsi untuk menambahkan event listener ke tombol-tombol di keranjang
function addCartButtonListeners() {
    const quantityControls = document.querySelectorAll('.quantity-controls');

    quantityControls.forEach(controls => {
        const decrementButton = controls.querySelector('button:first-child');
        const incrementButton = controls.querySelector('button:last-child');
        const quantitySpan = controls.querySelector('span');

        decrementButton.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            if (quantity > 0) {
                quantity--;
                quantitySpan.textContent = quantity;
                updateCartSummary();
            }
        });

        incrementButton.addEventListener('click', () => {
            let quantity = parseInt(quantitySpan.textContent);
            quantity++;
            quantitySpan.textContent = quantity;
            updateCartSummary();
        });
    });
}

// Fungsi untuk mengupdate ringkasan keranjang (dummy data)
function updateCartSummary() {
    // Logika perhitungan total (dummy)
    const cartItems = document.querySelectorAll('.cart-item');
    let subtotal = 0;

    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector('.quantity-controls span').textContent);
        subtotal += price * quantity;
    });

    const discount = 5; // Dummy discount
    const taxRate = 0.06; // Dummy tax rate
    const tax = (subtotal - discount) * taxRate;
    const total = subtotal - discount + tax;

    // Update tampilan
    const subtotalEl = document.querySelector('.cart-summary tr:nth-child(1) td:nth-child(2)');
    const discountEl = document.querySelector('.cart-summary tr:nth-child(2) td:nth-child(2)');
    const taxEl = document.querySelector('.cart-summary tr:nth-child(3) td:nth-child(2)');
    const totalEl = document.querySelector('.cart-summary tr:nth-child(4) td:nth-child(2)');

    subtotalEl.textContent = '$' + subtotal.toFixed(2);
    discountEl.textContent = '-$' + discount.toFixed(2);
    taxEl.textContent = '$' + tax.toFixed(2);
    totalEl.textContent = '$' + total.toFixed(2);
}

// Fungsi untuk menangani klik tombol kategori
function addCategoryClickListeners() {
    const categoryButtons = document.querySelectorAll('.category-button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            // Hapus kelas 'active' dari semua tombol
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Tambahkan kelas 'active' ke tombol yang diklik
            button.classList.add('active');
            // Di sini Anda dapat menambahkan logika untuk memfilter produk berdasarkan kategori
        });
    });
}

// Jalankan fungsi-fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    addCartButtonListeners();
    updateCartSummary();
    addCategoryClickListeners();
});