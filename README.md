# 🛍️ Reto Desarrollador Fullstack

Reto para practicar las habilidades de un desarrollador fullstack moderno.

> Este repositorio es el punto de partida. Clona este proyecto y usa su contenido como base para desarrollar paso a paso.
> Trabaja con commits pequeños y claros desde aquí.

## <img src="https://flagcdn.com/w40/co.png" width="30"> Menú de contenido

### Instrucciones en Español
- <img src="https://flagcdn.com/w40/co.png" width="20"> [Enunciado](#enunciado)
- <img src="https://flagcdn.com/w40/co.png" width="20"> [Funcionalidades](#funcionalidades)
- <img src="https://flagcdn.com/w40/co.png" width="20"> [Tecnologías Requeridas](#tecnologías-requeridas)
- <img src="https://flagcdn.com/w40/co.png" width="20"> [Instrucciones de uso](#instrucciones-de-uso)
- <img src="https://flagcdn.com/w40/co.png" width="20"> [Instrucciones Paso a Paso](#instrucciones-paso-a-paso)
- <img src="https://flagcdn.com/w40/co.png" width="20"> [Tips Importantes](#tips-importantes)
- <img src="https://flagcdn.com/w40/co.png" width="20"> [Información de Interés](#información-de-interés)

### English Menu of Contents
- <img src="https://flagcdn.com/w40/us.png" width="20"> [Statement](#statement)
- <img src="https://flagcdn.com/w40/us.png" width="20"> [Features](#features)
- <img src="https://flagcdn.com/w40/us.png" width="20"> [Required Technologies](#required-technologies)
- <img src="https://flagcdn.com/w40/us.png" width="20"> [How to use](#how-to-use)
- <img src="https://flagcdn.com/w40/us.png" width="20"> [Step by Step Instructions](#step-by-step-instructions)
- <img src="https://flagcdn.com/w40/us.png" width="20"> [Important Tips](#important-tips)
- <img src="https://flagcdn.com/w40/us.png" width="20"> [Resources](#resources)

---

## <img src="https://flagcdn.com/w40/co.png" width="30"> Enunciado

Desarrollar una aplicación web fullstack para una tienda online que consuma una API REST. La aplicación debe incluir las siguientes funcionalidades:

- **Registro de usuarios y manejo de sesión**: Usar Firebase Authentication o localStorage (opcional para persistencia).
- **Galería de productos**: Poblada dinámicamente mediante peticiones a la API REST usando fetch o Axios.
- **Paginación de productos**: Implementar paginación eficiente en la galería.
- **Buscador de productos**: Funcionalidad de búsqueda en tiempo real.
- **Carrito de compras**: Gestión del carrito con estado local o en Firebase.
- **Previsualización de checkout**: Vista previa del proceso de compra.

El ejercicio debe tener un mínimo de 30 commits. Se evaluarán:

- Buenas prácticas de programación
- Limpieza y organización del código
- Diseño responsivo para dispositivos móviles y desktop
- Funcionamiento correcto
- Interfaz de usuario moderna y accesible
- Uso de componentes reutilizables y atomic design

Se permite reutilizar código de internet, citando las fuentes. El trabajo es individual.

---

## <img src="https://flagcdn.com/w40/co.png" width="30"> Funcionalidades
- ✅ Registro de usuarios y sesión persistente
- ✅ Galería dinámica de productos
- ✅ Búsqueda en tiempo real
- ✅ Paginación de productos
- ✅ Carrito de compras con cantidades y total
- ✅ Checkout con vista previa

---

## <img src="https://flagcdn.com/w40/co.png" width="30"> Tecnologías Requeridas

- **Frontend**: React con Tailwind CSS para estilos.
- **Gestión de estado y persistencia**: Zustand (recomendado) o Context API con localStorage.
- **API**: Usar https://fake-store-api-docs.vercel.app/ para datos de productos y usuarios (perfecta para ecommerce).
- **Backend (Bonus)**: Firebase (Authentication, Firestore) para estudiantes que quieran ir más allá.

---

## <img src="https://flagcdn.com/w40/co.png" width="30"> Instrucciones de uso
1. Clone el repositorio
  ```bash
  git clone https://github.com/xaca/reto_fullstack.git
  ```
2. Borra la carpeta .git para evitar confusiones con los commits
   ```bash
   rm -rf .git
   ```
3. Inicializa un nuevo repositorio git
   ```bash
   git init
   ```
4. Agrega todos los archivos y haz el commit inicial
   ```bash
   git add .
   git commit -m "Initial commit"
   ```
5. Crea un nuevo repositorio en GitHub y sube tu repositorio local a GitHub
   ```bash
    git remote add origin [url_de_tu_repositorio]
    git branch -M main
    git push -u origin main
    ```
6. Instala las dependencias:
   ```bash
   npm install
   ```
7. Ejecuta el proyecto:
   ```bash
   npm run dev
   ```

---

## <img src="https://flagcdn.com/w40/co.png" width="30"> Instrucciones Paso a Paso

### Paso 1: Selecciona una Plantilla de Referencia
- Visita https://themewagon.com/ y busca una plantilla de tienda online (ecommerce template).
- Descarga una plantilla que te guste (puede ser gratuita).
- Estudia su estructura HTML, estilos CSS y diseño responsivo.
- **Nota**: La plantilla es solo referencia. Construirás tu proyecto en React desde cero usando la plantilla como inspiración visual.
- Primer commit: "docs: template de referencia seleccionada"

### Paso 2: Configuración del Proyecto
- Usa este repositorio como base para tu proyecto. Revisa la estructura existente y confirma que la aplicación corre antes de cambiarla.
- Instala las dependencias necesarias:
  ```bash
  npm install tailwindcss zustand axios
  ```
- Configura Tailwind CSS si aún no está listo.
- Primer commit: "feat: proyecto inicial con React y Tailwind"

### Paso 3: Crear Datos Simulados (Mockdata)
- Crea una carpeta `src/mockdata/` con archivos para datos de ejemplo.
- Define mockdata para:
  - **Productos**: `products.js` (lista de productos con id, nombre, precio, descripción, imagen)
  - **Usuarios**: `users.js` (lista de usuarios de ejemplo)
  - **Categorías**: `categories.js` (lista de categorías de productos)
- Ejemplo estructura:
  ```javascript
  // src/mockdata/products.js
  export const mockProducts = [
    { id: 1, name: 'Producto 1', price: 29.99, description: '...', category: 'electronics' },
    // más productos...
  ];
  ```
- Commits: "feat: mockdata de productos", "feat: mockdata de usuarios"

### Paso 4: Estructura de Componentes (Atomic Design)
- Crea la estructura de carpetas siguiendo atomic design:
  ```
  src/
  ├── components/
  │   ├── atoms/       (botones, inputs, badges)
  │   ├── molecules/   (cards de producto, form de búsqueda)
  │   ├── organisms/   (header, footer, galería)
  │   └── templates/   (layouts de páginas)
  ├── mockdata/
  ├── store/           (Zustand stores)
  └── styles/
  ```
- Crea componentes básicos:
  - `atoms/Button.jsx`
  - `atoms/Input.jsx`
  - `molecules/ProductCard.jsx`
  - `organisms/Header.jsx`
  - `organisms/Footer.jsx`
- Commits: "feat: estructura de componentes atómicos", "feat: componentes molecules", "feat: componentes organisms"

### Paso 5: Gestión de Estado con Zustand
- Crea `src/store/productStore.js` para gestionar:
  - Lista de productos
  - Productos filtrados
  - Búsqueda activa
- Crea `src/store/cartStore.js` para gestionar:
  - Items del carrito
  - Total del carrito
  - Funciones para agregar/quitar productos
- Ejemplo estructura:
  ```javascript
  // src/store/productStore.js
  import { create } from 'zustand';
  
  export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    // más acciones...
  }));
  ```
- Implementa persistencia en localStorage usando `zustand` middleware.
- Commits: "feat: store de productos con Zustand", "feat: store del carrito con persistencia"

### Paso 6: Galería de Productos con Mockdata
- Crea el componente `organisms/ProductGallery.jsx`.
- Usa mockdata para llenar la galería inicialmente.
- Muestra productos en grid responsivos usando Tailwind (cards con imagen, nombre, precio).
- Agrega evento "Agregar al carrito" que actualice el store.
- Commits: "feat: galería de productos", "feat: integración con store de productos"

### Paso 7: Carrito de Compras
- Crea el componente `organisms/ShoppingCart.jsx`.
- Muestra items del carrito desde el store de Zustand.
- Implementa botones para aumentar/disminuir cantidad y eliminar productos.
- Calcula y muestra el total automáticamente.
- Commits: "feat: vista del carrito", "feat: funcionalidad de carrito completa"

### Paso 8: Implementar Búsqueda de Productos
- Agrega un input de búsqueda en el Header.
- Filtra productos en mockdata basado en término de búsqueda.
- Actualiza la galería en tiempo real mientras se escribe.
- Commits: "feat: búsqueda de productos", "feat: búsqueda en tiempo real"

### Paso 9: Paginación
- Divide la galería de productos en páginas (ej: 6-8 productos por página).
- Agrega componentes de navegación (botones anterior/siguiente, números de página).
- Commits: "feat: paginación de productos"

### Paso 10: Registro y Sesión de Usuarios
- Crea formulario de registro usando mockdata de usuarios.
- Implementa almacenamiento de sesión actual en el store (Zustand + localStorage).
- Muestra nombre del usuario logueado en el Header.
- Agrega opción de logout.
- Commits: "feat: registro de usuarios", "feat: sesión de usuario con persistencia"

### Paso 11: Previsualización de Checkout
- Crea una nueva página/vista pour review antes de compra.
- Muestra resumen del carrito, datos del usuario, total a pagar.
- Agrega botón para confirmar compra (limpia carrito al confirmar).
- Commits: "feat: previsualización de checkout"

### Paso 12: Diseño Responsivo Completo
- Verifica que toda la aplicación funcione en:
  - Desktop (1920px+)
  - Tablet (768px - 1024px)
  - Móvil (320px - 767px)
- Usa Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`.
- Commits: "fix: responsive design en móvil", "fix: responsive design en tablet"

### Paso 13: Conectar API Real (Opcional)
- Una vez que todo funciona con mockdata, reemplaza con la API real: https://fake-store-api-docs.vercel.app/
- Endpoints disponibles:
  - `GET /products` - Obtener todos los productos
  - `GET /products/{id}` - Obtener producto específico
  - `GET /products/category/{categoryName}` - Productos por categoría
  - `GET /products/categories` - Obtener lista de categorías
  - `GET /users` - Obtener usuarios (para simulación de registro/sesión)
  - `GET /carts` - Obtener carritos (opcional)
- Usa `axios` o `fetch` para peticiones HTTP.
- Reemplaza gradualmente las llamadas en tus stores (productStore.js, userStore.js).
- Commits: "feat: integración con FakeStore API", "refactor: reemplazar mockdata con endpoints reales"

### Paso 14: Firebase (BONUS)
- Si quieres ir más allá, integra Firebase:
  - Authentication para registro/login más robusto.
  - Firestore para persistencia en la nube.
  - Almacenar historial de compras del usuario.
- Commits: "feat: integración con Firebase Authentication", "feat: Firestore para persistencia"

### Paso 15: Pruebas y Deploy
- Prueba toda la funcionalidad en diferentes navegadores.
- Optimiza imágenes y bundle size.
- Deploy en Vercel o Netlify.
- Commits: "fix: optimización de rendimiento", "chore: deploy a producción"

---

## <img src="https://flagcdn.com/w40/co.png" width="30"> Tips Importantes

✅ **Comienza con mockdata**: Así estableces la estructura y lógica sin depender de la API.

✅ **Usa Zustand**: Simplifica la gestión de estado comparado con Context API.

✅ **Commits frecuentes**: Cada paso pequeño merecería su commit (mínimo 30 commits).

✅ **Testing visual**: Prueba en diferentes tamaños de pantalla mientras desarrollas.

✅ **Firebase es bonus**: Enfócate primero en que todo funcione con localStorage.

---

## <img src="https://flagcdn.com/w40/co.png" width="30"> Información de Interés

- **Documentación de React**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Zustand (State Management)**: https://zustand.docs.pmnd.rs/
- **Plantillas de Referencia**: https://themewagon.com/
- **FakeStore API**: https://fake-store-api-docs.vercel.app/ (API perfecta para ecommerce)
- **Firebase (Bonus)**: https://firebase.google.com/docs
- **Atomic Design**: https://bradfrost.com/blog/post/atomic-web-design/
- **Diseño Responsivo**: https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Responsive_Design
- **Axios (HTTP client)**: https://axios-http.com/
- **Vite (Build tool)**: https://vitejs.dev/

---


## <img src="https://flagcdn.com/w40/us.png" width="30"> Statement

Develop a fullstack web application for an online store that consumes a REST API. The application must include the following functionalities:

- **User registration and session management**: Use Firebase Authentication or localStorage (optional for persistence).
- **Product gallery**: Dynamically populated through requests to the REST API using fetch or Axios.
- **Product pagination**: Implement efficient pagination in the gallery.
- **Product search**: Real-time search functionality.
- **Shopping cart**: Cart management with local state or Firebase.
- **Checkout preview**: Preview of the purchase process.

The exercise must have a minimum of 30 commits. The following will be evaluated:

- Good programming practices
- Code cleanliness and organization
- Responsive design for mobile and desktop devices
- Correct operation
- Modern and accessible user interface
- Use of reusable components and atomic design

Reusing code from the internet is allowed, citing sources. The work is individual.

---

## <img src="https://flagcdn.com/w40/us.png" width="30"> Features
- ✅ User registration and persistent session
- ✅ Dynamic product gallery
- ✅ Real-time search
- ✅ Product pagination
- ✅ Shopping cart with quantities and total
- ✅ Checkout with preview

---

## <img src="https://flagcdn.com/w40/us.png" width="30"> Required Technologies

- **Frontend**: React with Tailwind CSS for styling.
- **State management and persistence**: Zustand (recommended) or Context API with localStorage.
- **API**: Use https://fake-store-api-docs.vercel.app/ for product and user data (perfect for ecommerce).
- **Backend (Bonus)**: Firebase (Authentication, Firestore) for students who want to go further.

---

## <img src="https://flagcdn.com/w40/us.png" width="30"> How to use
1. Clone the repository
  ```bash
  git clone https://github.com/xaca/reto_fullstack.git
   ```
3. Removes .git folder to avoid confusion with commits
   ```bash
   rm -rf .git
   ```
4. Initialize a new git repository
   ```bash
   git init
   ```
5. Add all files and make the initial commit
   ```bash
   git add .
   git commit -m "Initial commit"
   ```
6. Create a new repository on GitHub and push your local repository to GitHub
   ```bash
    git remote add origin [url_of_your_repository]
    git branch -M main
    git push -u origin main
    ```
7. Install dependencies:
   ```bash
   npm install
   ```
8. Run the project:
   ```bash
   npm run dev
   ```

- Product gallery loaded dynamically
- Product pagination
- Product search
- Shopping cart
- Checkout preview

---

## <img src="https://flagcdn.com/w40/us.png" width="30"> Step by Step Instructions

### Step 1: Select a Reference Template
- Visit https://themewagon.com/ and search for an online store template (ecommerce template).
- Download a template you like (can be free).
- Study its HTML structure, CSS styles, and responsive design.
- **Note**: The template is only a reference. You will build your project in React from scratch using the template as visual inspiration.
- First commit: "docs: reference template selected"

### Step 2: Project Setup
- Use this repository as the base for your project. Review the existing structure and make sure the app runs before you change it.
- Install necessary dependencies:
  ```bash
  npm install tailwindcss zustand axios
  ```
- Configure Tailwind CSS if it is not ready.
- First commit: "feat: initial project with React and Tailwind"

### Step 3: Create Mock Data
- Create a folder `src/mockdata/` with files for example data.
- Define mockdata for:
  - **Products**: `products.js` (list of products with id, name, price, description, image)
  - **Users**: `users.js` (list of example users)
  - **Categories**: `categories.js` (list of product categories)
- Example structure:
  ```javascript
  // src/mockdata/products.js
  export const mockProducts = [
    { id: 1, name: 'Product 1', price: 29.99, description: '...', category: 'electronics' },
    // more products...
  ];
  ```
- Commits: "feat: product mockdata", "feat: user mockdata"

### Step 4: Component Structure (Atomic Design)
- Create the folder structure following atomic design:
  ```
  src/
  ├── components/
  │   ├── atoms/       (buttons, inputs, badges)
  │   ├── molecules/   (product cards, search form)
  │   ├── organisms/   (header, footer, gallery)
  │   └── templates/   (page layouts)
  ├── mockdata/
  ├── store/           (Zustand stores)
  └── styles/
  ```
- Create basic components:
  - `atoms/Button.jsx`
  - `atoms/Input.jsx`
  - `molecules/ProductCard.jsx`
  - `organisms/Header.jsx`
  - `organisms/Footer.jsx`
- Commits: "feat: atomic component structure", "feat: molecule components", "feat: organism components"

### Step 5: State Management with Zustand
- Create `src/store/productStore.js` to manage:
  - Product list
  - Filtered products
  - Active search
- Create `src/store/cartStore.js` to manage:
  - Cart items
  - Cart total
  - Functions to add/remove products
- Example structure:
  ```javascript
  // src/store/productStore.js
  import { create } from 'zustand';
  
  export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    // more actions...
  }));
  ```
- Implement persistence in localStorage using `zustand` middleware.
- Commits: "feat: product store with Zustand", "feat: cart store with persistence"

### Step 6: Product Gallery with Mockdata
- Create the component `organisms/ProductGallery.jsx`.
- Use mockdata to fill the gallery initially.
- Display products in responsive grid using Tailwind (cards with image, name, price).
- Add "Add to cart" event that updates the store.
- Commits: "feat: product gallery", "feat: integration with product store"

### Step 7: Shopping Cart
- Create the component `organisms/ShoppingCart.jsx`.
- Display cart items from the Zustand store.
- Implement buttons to increase/decrease quantity and remove products.
- Calculate and display the total automatically.
- Commits: "feat: cart view", "feat: complete cart functionality"

### Step 8: Implement Product Search
- Add a search input in the Header.
- Filter products in mockdata based on search term.
- Update the gallery in real-time as you type.
- Commits: "feat: product search", "feat: real-time search"

### Step 9: Pagination
- Divide the product gallery into pages (e.g.: 6-8 products per page).
- Add navigation components (previous/next buttons, page numbers).
- Commits: "feat: product pagination"

### Step 10: User Registration and Session
- Create registration form using user mockdata.
- Implement storage of current session in the store (Zustand + localStorage).
- Display logged-in user name in the Header.
- Add logout option.
- Commits: "feat: user registration", "feat: user session with persistence"

### Step 11: Checkout Preview
- Create a new page/view for review before purchase.
- Show cart summary, user data, total to pay.
- Add button to confirm purchase (clears cart on confirm).
- Commits: "feat: checkout preview"

### Step 12: Complete Responsive Design
- Verify that the entire application works on:
  - Desktop (1920px+)
  - Tablet (768px - 1024px)
  - Mobile (320px - 767px)
- Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`.
- Commits: "fix: responsive design on mobile", "fix: responsive design on tablet"

### Step 13: Connect Real API (Optional)
- Once everything works with mockdata, replace with the real API: https://fake-store-api-docs.vercel.app/
- Available endpoints:
  - `GET /products` - Get all products
  - `GET /products/{id}` - Get specific product
  - `GET /products/category/{categoryName}` - Products by category
  - `GET /products/categories` - Get list of categories
  - `GET /users` - Get users (for registration/session simulation)
  - `GET /carts` - Get carts (optional)
- Use `axios` or `fetch` for HTTP requests.
- Gradually replace calls in your stores (productStore.js, userStore.js).
- Commits: "feat: integration with FakeStore API", "refactor: replace mockdata with real endpoints"

### Step 14: Firebase (BONUS)
- If you want to go further, integrate Firebase:
  - Authentication for more robust registration/login.
  - Firestore for cloud persistence.
  - Store user purchase history.
- Commits: "feat: integration with Firebase Authentication", "feat: Firestore for persistence"

### Step 15: Testing and Deploy
- Test all functionality in different browsers.
- Optimize images and bundle size.
- Deploy on Vercel or Netlify.
- Commits: "fix: performance optimization", "chore: deploy to production"

---

## <img src="https://flagcdn.com/w40/us.png" width="30"> Important Tips

✅ **Start with mockdata**: This way you establish the structure and logic without depending on the API.

✅ **Use Zustand**: Simplifies state management compared to Context API.

✅ **Frequent commits**: Each small step deserves its commit (minimum 30 commits).

✅ **Visual testing**: Test on different screen sizes while developing.

✅ **Firebase is bonus**: Focus first on everything working with localStorage.

---

## <img src="https://flagcdn.com/w40/us.png" width="30"> Resources

- **React Documentation**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Zustand (State Management)**: https://zustand.docs.pmnd.rs/
- **Reference Templates**: https://themewagon.com/
- **FakeStore API**: https://fake-store-api-docs.vercel.app/ (Perfect API for ecommerce)
- **Firebase (Bonus)**: https://firebase.google.com/docs
- **Atomic Design**: https://bradfrost.com/blog/post/atomic-web-design/
- **Responsive Design**: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
- **Axios (HTTP client)**: https://axios-http.com/
- **Vite (Build tool)**: https://vitejs.dev/