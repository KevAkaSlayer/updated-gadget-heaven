
GadgetHaven - E-commerce Platform
GadgetHaven is a modern e-commerce platform where users can explore, purchase, and manage their favorite gadgets, developed based on a detailed Figma design. The platform features a comprehensive navigation system, product categories, a shopping cart, wishlist functionality, and seamless product management. This documentation provides an overview of the project structure, features, and functionalities to ensure a smooth user experience.

🔗 Live Website Link
[Link to GadgetHaven](https://joyful-lamington-f5c4a9.netlify.app/)

📄 Requirement Document
[Link to Requirement Document](https://docs.google.com/document/d/12sa_umyDHpR1miD3jIku8_I2_De5B8iHSXJunRDG-I0/edit?usp=sharing)

🛠 Technologies and Concepts Used
React Fundamentals:

Component-Based Architecture
Props and State Management
React Router for Navigation
Hooks (useState, useEffect, useParams, useLoaderData, useNavigate)
Data Management:

Local Storage: Used to persist data for cart and wishlist, allowing items to remain saved even after reloading or returning to the page.
Context API (Not used in this implementation but could be applied for scalable state management in a larger project)
🌟 Project Features
1. Navigation and UI Design
A structured navigation bar with active route indicators.
Links to Home, Dashboard, Stats, and additional pages.
Responsive design for accessibility on multiple device sizes.
2. Home Page Components
Banner Section: Engaging banner as per Figma design with a call-to-action button linking to the Dashboard.
Categories Sidebar: Product categories (e.g., computers, phones, accessories) are displayed in a sidebar layout.
Gadget Cards: Each gadget displays an image, product name, and price, with a "Details" button linking to the item’s page.
Product Filter: Click on any category to filter items dynamically.
3. Product Details Page
Detailed view of selected gadgets, showing specifications, price, and rating.
Add to Cart and Add to Wishlist functionalities:
Items can be added to the cart, with cart items shown in the navigation badge.
Items can be added to the wishlist with a disabled button upon selection to prevent duplicates.
4. Dashboard - Cart and Wishlist Management
Cart and Wishlist Tabs: Users can view items in both tabs.
Sort by Price: Option to sort items in the cart by descending price.
Total Price Calculation: Shows the total price of all cart items dynamically.
Purchase Modal: Confirm purchase modal appears with a success message, emptying the cart and resetting the total.
5. Miscellaneous Features
404 Page: Custom error page for invalid routes.
Dynamic Titles: Each page has a dynamic title using Helmet.
Success Messages: Toast messages appear when adding items to the cart or wishlist with distinct notifications.
🎉 Advanced Features and Enhancements
1. Conditional Backgrounds
Home page has a unique background, distinct from other pages, using the useLocation() hook.
2. Purchase Confirmation and Redirect
Modal Confirmation: Clicking "Purchase" displays a modal thanking the user for their purchase.
Home Redirect: After closing the modal, the user is redirected to the home page without reloading, using the useNavigate() hook.
3. Favicon and Metadata
Custom favicon and metadata for improved branding and SEO.
🚀 Project Structure
Components:

Navigation: Navbar.js
Home Page: Home.js
Category Sidebar: CategorySidebar.js
Gadget Cards: GadgetCard.js
Details Page: GadgetDetail.js
Dashboard: Dashboard.js (includes Cart and Wishlist)
Pages:

Home: /
Dashboard: /dashboard
Statistics: /statistics
Product Details: /details/:product_id
Additional Routes: /contact, /reviews, etc.
📌 How to Use the Platform
Explore Products: Browse through the available gadgets by categories on the home page.
View Details: Click "Details" on any product card to see full specifications.
Add to Cart/Wishlist: Use the heart icon to add items to the wishlist and the cart icon for the shopping cart.
Dashboard Management: Navigate to the Dashboard to view cart and wishlist items, sort by price, and see the total cost.
Confirm Purchase: Click the Purchase button to see the confirmation modal and finalize your order.

Thank you for exploring GadgetHaven!