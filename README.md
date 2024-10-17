<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Advanced E-Commerce Frontend</title>
</head>
<body>

  <h1>Advanced E-Commerce Frontend</h1>
  <p>A scalable and feature-rich e-commerce frontend built using Angular. This application integrates with a backend API to provide a seamless online shopping experience, offering features like product browsing, cart management, user authentication, and more.</p>

  <h2>✨ Features</h2>

  <h3>User-Focused Features:</h3>
  <ul>
    <li><strong>User Authentication & Security</strong>: Secure registration, login, and password recovery, with JWT-based authentication via external API.</li>
    <li><strong>Product Browsing & Advanced Search</strong>: Explore products by category and subcategory with powerful search, filtering, and sorting options (price, rating, etc.).</li>
    <li><strong>Pagination Support</strong>: Paginated product lists for efficient browsing.</li>
    <li><strong>Shopping Cart & Wishlist</strong>: Add, update, and remove products from the cart with dynamic cost calculation. Manage your wishlist for favorite items.</li>
    <li><strong>Coupon Support</strong>: Apply discount coupons during checkout.</li>
    <li><strong>Order Processing</strong>: Review orders before finalizing and view order summaries.</li>
    <li><strong>User Profile Management</strong>: View and edit profile details such as name, phone number, and other personal information.</li>
  </ul>

  <h3>Admin Features:</h3>
  <ul>
    <li><strong>Category & Product Management</strong>: Full CRUD operations for categories, subcategories, and products (through the external API).</li>
    <li><strong>Order Management</strong>: Admin interface for viewing and managing customer orders (via external API).</li>
  </ul>

  <h2>🛠️ Technologies Used</h2>
  <ul>
    <li><strong>Angular</strong>: For building a dynamic, single-page application with reactive forms and components.</li>
    <li><strong>API Integration</strong>: Seamless connection to an external API for all back-end operations.</li>
    <li><strong>JWT Authentication</strong>: For secure user authentication and session handling with the external API.</li>
    <li><strong>TypeScript</strong>: For ensuring type safety and scalable code.</li>
  </ul>

  <h2>⚙️ Key Functionalities</h2>

  <h3>Authentication & Authorization:</h3>
  <ul>
    <li>Secure login and registration using JWT with API integration.</li>
    <li>Password reset functionality.</li>
  </ul>

  <h3>Product & Category Management:</h3>
  <ul>
    <li>Fetch and manage products and categories from the external API.</li>
    <li>Admin CRUD operations for categories and products.</li>
  </ul>

  <h3>Shopping Cart & Orders:</h3>
  <ul>
    <li>Dynamic cart management with total price calculations.</li>
    <li>Apply coupons and track discounts during checkout.</li>
    <li>Complete order placement and tracking through the external API.</li>
  </ul>

  <h3>Profile Management:</h3>
  <ul>
    <li><strong>Profile Page</strong>: Users can view and edit their personal information (name, phone, etc.) through a profile page.</li>
    <li>Data is fetched from the external API and can be updated, ensuring smooth user data management.</li>
  </ul>

  <h2>📦 Installation</h2>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/your-username/your-repository.git
cd your-repository
</code></pre></li>

    <li>Install the dependencies:
      <pre><code>npm install</code></pre>
    </li>

    <li>Set up environment variables:
      <p>Create a <code>.env</code> or set environment variables for the external API URL, JWT secret, and other settings.</p>
    </li>

    <li>Run the Angular application:
      <pre><code>ng serve</code></pre>
    </li>
  </ol>

  <h2>🛠️ Development</h2>
  <p><strong>Client</strong>: Angular application that interacts with an external backend API.</p>

  <h2>🚀 Deployment</h2>
  <p>To deploy the Angular application, follow these steps:</p>
  <ol>
    <li>Build the application for production:
      <pre><code>ng build --prod</code></pre>
    </li>

    <li>Deploy the build files to your server or cloud platform of choice (Netlify, Vercel, etc.).</li>
  </ol>

  <h2>📝 License</h2>
  <p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>

</body>
</html>
