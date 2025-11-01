// Sample product data with multiple local images
const products = [
    {
        id: 1,
        name: "Modern Lounge Chair",
        description: "Elegant design with premium fabric upholstery and solid wood frame. Perfect for any contemporary living space.",
        price: 299.99,
        category: "chair",
        images: [
            "./images/1.jpg",
            "./images/2.jpg",
            "./images/3.jpg",
            "./images/4.jpg",
            "./images/5.jpg",
            "./images/6.jpg"
        ],
        rating: 4.8,
        reviews: 124,
        material: "Fabric, Wood",
        dimensions: "32\"W x 36\"D x 34\"H"
    },
    {
        id: 2,
        name: "Minimalist Sofa",
        description: "Three-seater with wooden legs and soft cushions. Designed for comfort and style in modern homes.",
        price: 899.99,
        category: "sofa",
        images: [
            "./images/7.jpg",
            "./images/8.jpg",
            "./images/9.jpg",
            "./images/10.jpg",
            "./images/11.jpg",
            "./images/12.jpg"
        ],
        rating: 4.9,
        reviews: 89,
        material: "Fabric, Wood",
        dimensions: "84\"W x 36\"D x 32\"H"
    },
    {
        id: 3,
        name: "Wooden Dining Table",
        description: "Solid oak table with minimalist design. Seats up to 6 people comfortably with elegant tapered legs.",
        price: 599.99,
        category: "table",
        images: [
            "./images/13.jpg",
            "./images/14.jpg",
            "./images/15.jpg",
            "./images/16.jpg",
            "./images/17.jpg",
            "./images/18.jpg"
        ],
        rating: 4.7,
        reviews: 56,
        material: "Oak Wood",
        dimensions: "72\"L x 36\"W x 30\"H"
    },
    {
        id: 4,
        name: "Queen Size Bed",
        description: "Upholstered bed frame with wooden legs. Features a tufted headboard for added comfort and elegance.",
        price: 799.99,
        category: "bed",
        images: [
            "./images/19.jpg",
            "./images/20.jpg",
            "./images/21.jpg",
            "./images/22.jpg",
            "./images/23.jpg",
            "./images/24.jpg"
        ],
        rating: 4.6,
        reviews: 78,
        material: "Fabric, Wood",
        dimensions: "65\"W x 85\"L x 45\"H"
    },
    {
        id: 5,
        name: "Office Chair",
        description: "Ergonomic design with adjustable height and lumbar support. Perfect for long work hours with premium materials.",
        price: 199.99,
        category: "chair",
        images: [
            "./images/25.jpg",
            "./images/26.jpg",
            "./images/27.jpg",
            "./images/28.jpg",
            "./images/29.jpg",
            "./images/30.jpg"
        ],
        rating: 4.5,
        reviews: 92,
        material: "Mesh, Metal",
        dimensions: "26\"W x 26\"D x 42\"H"
    },
    {
        id: 6,
        name: "Sectional Sofa",
        description: "L-shaped sofa with chaise lounge. Modular design allows for multiple configurations to fit your space.",
        price: 1299.99,
        category: "sofa",
        images: [
            "./images/31.jpg",
            "./images/32.jpg",
            "./images/33.jpg",
            "./images/34.jpg",
            "./images/35.jpg",
            "./images/36.jpg"
        ],
        rating: 4.8,
        reviews: 65,
        material: "Fabric, Wood",
        dimensions: "120\"W x 84\"D x 34\"H"
    },
    {
        id: 7,
        name: "Bedside Lamp",
        description: "Modern ceramic base with fabric shade. Provides warm ambient lighting for your bedroom or living space.",
        price: 89.99,
        category: "lamp",
        images: [
            "./images/37.jpg",
            "./images/38.jpg",
            "./images/39.jpg",
            "./images/40.jpg",
            "./images/41.jpg",
            "./images/42.jpg"
        ],
        rating: 4.4,
        reviews: 43,
        material: "Ceramic, Fabric",
        dimensions: "12\"W x 12\"D x 24\"H"
    },
    {
        id: 8,
        name: "Desk Lamp",
        description: "Adjustable arm with LED bulb. Perfect for reading or working with focused task lighting.",
        price: 69.99,
        category: "lamp",
        images: [
            "./images/43.jpg",
            "./images/44.jpg",
            "./images/46.jpg",
            "./images/47.jpg",
            "./images/48.jpg",
            "./images/49.jpg"
        ],
        rating: 4.3,
        reviews: 37,
        material: "Metal, Plastic",
        dimensions: "8\"W x 8\"D x 20\"H"
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const catalogGrid = document.getElementById('catalog-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const productModal = document.getElementById('product-modal');
const comparisonModal = document.getElementById('comparison-modal');
const closeModalButtons = document.querySelectorAll('.close-modal');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const cartCount = document.querySelector('.cart-count');
const scrollTopBtn = document.getElementById('scroll-top');
const loadingScreen = document.querySelector('.loading-screen');
const contactForm = document.getElementById('contact-form');

// Cart array
let cart = [];
let wishlist = [];
let comparisonList = [];

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen after delay
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
    }, 2000);
    
    // Render products
    renderProducts(products);
    
    // Set up event listeners
    setupEventListeners();
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
    
    // Load wishlist from localStorage
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
    }
    
    // Load comparison list from localStorage
    const savedComparison = localStorage.getItem('comparison');
    if (savedComparison) {
        comparisonList = JSON.parse(savedComparison);
    }
    
    // Initialize parallax effect
    initParallax();
});

// Set up event listeners
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter products
            const filter = button.dataset.filter;
            filterProducts(filter);
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', searchProducts);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
    
    // Cart functionality
    cartIcon.addEventListener('click', openCart);
    
    // Close modals
    closeModalButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCartModal();
        }
        if (e.target === productModal) {
            closeProductModal();
        }
        if (e.target === comparisonModal) {
            closeComparisonModal();
        }
    });
    
    // Scroll to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
        
        // Header scroll effect
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Message sent successfully!');
        contactForm.reset();
    });
}

// Render products to the catalog
function renderProducts(productsArray) {
    catalogGrid.innerHTML = '';
    
    if (productsArray.length === 0) {
        catalogGrid.innerHTML = '<p class="no-products">No products found. Try a different search.</p>';
        return;
    }
    
    productsArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}">
                <div class="product-badge">
                    <span>New</span>
                </div>
                <div class="quick-actions">
                    <button class="wishlist-icon" data-id="${product.id}">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="compare-icon" data-id="${product.id}">
                        <i class="fas fa-columns"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-meta">
                    <span class="product-category">${product.category}</span>
                    <div class="product-rating">
                        ${generateStars(Math.round(product.rating))}
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                </div>
                <h3>${product.name}</h3>
                <p>${product.description.substring(0, 80)}${product.description.length > 80 ? '...' : ''}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="view-details" data-id="${product.id}">View Details</button>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        catalogGrid.appendChild(productCard);
    });
    
    // Add event listeners to "View Details" buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            openProductModal(productId);
        });
    });
    
    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        });
    });
    
    // Add event listeners to wishlist icons
    document.querySelectorAll('.wishlist-icon').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(button.dataset.id);
            const icon = e.target.tagName === 'I' ? e.target : e.target.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                button.classList.add('active');
                addToWishlist(productId);
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                button.classList.remove('active');
                addToWishlist(productId);
            }
        });
    });
    
    // Add event listeners to compare icons
    document.querySelectorAll('.compare-icon').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(button.dataset.id);
            addToComparison(productId);
        });
    });
}

// Filter products by category
function filterProducts(category) {
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }
}

// Search products by name
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        renderProducts(products);
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    renderProducts(filteredProducts);
}

// Toggle dark/light theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update UI
    updateCartUI();
    
    // Show notification
    showNotification(`${product.name} added to cart!`);
}

// Add to wishlist
function addToWishlist(productId) {
    const productIndex = wishlist.indexOf(productId);
    if (productIndex === -1) {
        wishlist.push(productId);
        showNotification('Product added to wishlist!');
    } else {
        wishlist.splice(productIndex, 1);
        showNotification('Product removed from wishlist!');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Add to comparison
function addToComparison(productId) {
    const productIndex = comparisonList.indexOf(productId);
    if (productIndex === -1) {
        if (comparisonList.length >= 4) {
            showNotification('You can only compare up to 4 products!');
            return;
        }
        comparisonList.push(productId);
        showNotification('Product added to comparison!');
    } else {
        comparisonList.splice(productIndex, 1);
        showNotification('Product removed from comparison!');
    }
    localStorage.setItem('comparison', JSON.stringify(comparisonList));
    updateComparisonUI();
}

// Update comparison UI
function updateComparisonUI() {
    // This function would update any comparison UI elements
    // For now, we're just showing notifications
}

// Open comparison modal
function openComparisonModal() {
    if (comparisonList.length === 0) {
        showNotification('No products to compare!');
        return;
    }
    
    const comparisonTable = document.getElementById('comparison-table');
    const comparisonProducts = products.filter(product => comparisonList.includes(product.id));
    
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Features</th>
                    ${comparisonProducts.map(product => `
                        <th>
                            <div class="product-header">
                                <div class="product-image">
                                    <img src="${product.images[0]}" alt="${product.name}">
                                </div>
                                <span>${product.name}</span>
                                <button class="remove-btn" data-id="${product.id}">&times;</button>
                            </div>
                        </th>
                    `).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Price</td>
                    ${comparisonProducts.map(product => `
                        <td class="price">$${product.price.toFixed(2)}</td>
                    `).join('')}
                </tr>
                <tr>
                    <td>Rating</td>
                    ${comparisonProducts.map(product => `
                        <td>${generateStars(Math.round(product.rating))} (${product.reviews})</td>
                    `).join('')}
                </tr>
                <tr>
                    <td>Material</td>
                    ${comparisonProducts.map(product => `
                        <td>${product.material}</td>
                    `).join('')}
                </tr>
                <tr>
                    <td>Dimensions</td>
                    ${comparisonProducts.map(product => `
                        <td>${product.dimensions}</td>
                    `).join('')}
                </tr>
                <tr>
                    <td>Action</td>
                    ${comparisonProducts.map(product => `
                        <td>
                            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                        </td>
                    `).join('')}
                </tr>
            </tbody>
        </table>
    `;
    
    comparisonTable.innerHTML = tableHTML;
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToComparison(productId);
            openComparisonModal(); // Refresh the modal
        });
    });
    
    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.comparison-content .add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
            showNotification('Product added to cart!');
        });
    });
    
    comparisonModal.classList.add('active');
    comparisonModal.style.display = 'flex';
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart modal
    renderCartItems();
}

// Render cart items
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        totalPrice.textContent = '0.00';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Quantity: ${item.quantity} | $${item.price.toFixed(2)} each</p>
            </div>
            <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
            <button class="remove-item" data-id="${item.id}">&times;</button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    totalPrice.textContent = total.toFixed(2);
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            removeFromCart(productId);
        });
    });
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    
    const product = products.find(p => p.id === productId);
    if (product) {
        showNotification(`${product.name} removed from cart`);
    }
}

// Open cart modal
function openCart(e) {
    e.preventDefault();
    cartModal.classList.add('active');
    cartModal.style.display = 'flex';
    renderCartItems();
}

// Close cart modal
function closeCartModal() {
    cartModal.classList.remove('active');
    setTimeout(() => {
        cartModal.style.display = 'none';
    }, 300);
}

// Open product modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const productDetail = document.getElementById('product-detail');
    productDetail.innerHTML = `
        <div class="product-detail-slider">
            <div class="slider-container">
                <div class="main-image">
                    <img src="${product.images[0]}" alt="${product.name}" id="main-image">
                </div>
                <div class="thumbnail-slider">
                    ${product.images.map((img, index) => `
                        <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                            <img src="${img}" alt="${product.name} ${index + 1}">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="product-detail-info">
            <h3>${product.name}</h3>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(Math.round(product.rating))}
                </div>
                <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <p>${product.description}</p>
            <div class="product-specs">
                <div class="spec">
                    <span class="spec-label">Material:</span>
                    <span class="spec-value">${product.material}</span>
                </div>
                <div class="spec">
                    <span class="spec-label">Dimensions:</span>
                    <span class="spec-value">${product.dimensions}</span>
                </div>
            </div>
            <div class="product-detail-price">$${product.price.toFixed(2)}</div>
            <div class="product-detail-actions">
                <button class="add-to-cart-detail" data-id="${product.id}">Add to Cart</button>
                <button class="wishlist-btn" data-id="${product.id}">
                    <i class="far fa-heart"></i> Wishlist
                </button>
            </div>
        </div>
    `;
    
    productModal.classList.add('active');
    productModal.style.display = 'flex';
    
    // Add event listeners for image slider
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');
            // Update main image
            const index = thumbnail.dataset.index;
            mainImage.src = product.images[index];
        });
    });
    
    // Add event listener to "Add to Cart" button in modal
    document.querySelector('.add-to-cart-detail').addEventListener('click', (e) => {
        addToCart(productId);
        closeProductModal();
        showNotification(`${product.name} added to cart!`);
    });
    
    // Add event listener to Wishlist button
    document.querySelector('.wishlist-btn').addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        const icon = e.target.querySelector('i');
        if (e.target.classList.contains('active')) {
            icon.className = 'fas fa-heart';
            showNotification(`${product.name} added to wishlist!`);
        } else {
            icon.className = 'far fa-heart';
            showNotification(`${product.name} removed from wishlist!`);
        }
    });
}

// Helper function to generate star rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Close product modal
function closeProductModal() {
    productModal.classList.remove('active');
    setTimeout(() => {
        productModal.style.display = 'none';
    }, 300);
}

// Close any modal
function closeModal(e) {
    const modal = e.target.closest('.modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Close comparison modal
function closeComparisonModal() {
    comparisonModal.classList.remove('active');
    setTimeout(() => {
        comparisonModal.style.display = 'none';
    }, 300);
}

// Show notification
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize parallax effect
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });
}