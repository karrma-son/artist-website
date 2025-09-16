🎨 Artist Website Full-Stack Checklist
✅ Frontend (React + TypeScript + Vite)

 Header (logo, navigation, dark mode toggle)

 Footer (social links, copyright)

 ArtScroller (horizontal scroll with clickable categories)

 ArtCardGrid (gallery layout of works)

 ArtCard (image, title, price, details button)

 CartModal (view selected items, checkout)

 BioPage (artist story, photo)

 ResumePage (downloadable PDF of CV)

 ContactForm (basic validation, email send/logging)

 VideoPlayer or HeroAnimation (intro animation/hero section)

UI Features

 Search bar (filter artworks by title/medium)

 Sort dropdown (by price, newest, oldest)

 Loading spinners (data fetching state)

 Lazy-loading images for performance

 Routing with React Router

🗄️ Backend / Data

 Database connection (MongoDB/Firebase)

 artworks collection: { id, title, category, description, price, imageURL, available }

 cart session data

 orders (checkout info)

 users (optional auth)

API Routes

 GET /artworks (fetch all)

 GET /artworks/:id (fetch single)

 POST /cart (add item to cart)

 POST /checkout (place order)

 POST /contact (submit form)

🔧 Debugging / Dev Tools

 Console log user navigation (e.g., "Navigated to Paintings")

 Console log data fetch success/errors

 Console log cart actions (add/remove)

 Error boundaries in React

 .env file for secrets (API keys, DB strings)

 .gitignore (node_modules/, .env)

🚀 Deployment

 Deploy frontend (Vercel/Netlify)

 Deploy backend (Render/Heroku/Firebase Functions)

 Add request/response logging (morgan or custom)

 Add analytics (Google Analytics / Plausible)

🧩 JavaScript / TypeScript Logic Practice

 Format price function with ternary ($0 → Free)

 Stock availability check with if

 Discount badge with && logic

 Image fallback with ||

 Array filter (artworks.filter(...))

 Array reduce to find most expensive piece

 Optional chaining + nullish coalescing (?. / ??)

 Cart length display with ternary (cart.length > 0 ? … : …)

 Currency conversion function (USD → EUR)

 Search filter (case-insensitive string matching)

 Random “art of the day” selection with Math.random()