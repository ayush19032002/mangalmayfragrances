# Admin System Architecture

## System Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER BROWSER                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │           React Application (Vite)                        │  │
│  ├──────────────────────────────────────────────────────────┤  │
│  │                                                            │  │
│  │  ┌──────────────────────────────────────────────────┐   │  │
│  │  │          AdminProvider Context                   │   │  │
│  │  │  (Manages authentication & data state)           │   │  │
│  │  │                                                   │   │  │
│  │  │  ├─ isLoggedIn (boolean)                         │   │  │
│  │  │  ├─ categories (Category[])                      │   │  │
│  │  │  ├─ products (Product[])                         │   │  │
│  │  │  └─ CRUD functions                              │   │  │
│  │  └──────────────────────────────────────────────────┘   │  │
│  │                         ▲                                 │  │
│  │                         │                                 │  │
│  │        ┌────────────────┼────────────────┐               │  │
│  │        │                │                │               │  │
│  │        ▼                ▼                ▼               │  │
│  │   ┌────────────┐  ┌──────────────┐  ┌──────────────┐  │  │
│  │   │AdminLogin  │  │AdminDashboard│  │   Navbar     │  │  │
│  │   │  (Page)    │  │   (Page)     │  │(Component)   │  │  │
│  │   └────────────┘  └──────────────┘  └──────────────┘  │  │
│  │        │                │                    │          │  │
│  │        │      ┌─────────┼─────────┐         │          │  │
│  │        │      │         │         │         │          │  │
│  │        │      ▼         ▼         ▼         │          │  │
│  │        │  ┌────────┐ ┌───────┐ ┌──────┐   │          │  │
│  │        │  │Category│ │Product│ │Logout│   │          │  │
│  │        │  │Manager │ │Manager│ │Button│   │          │  │
│  │        │  └────────┘ └───────┘ └──────┘   │          │  │
│  │        │                                    │          │  │
│  │        └────────────────────────────────────┘          │  │
│  │                                                         │  │
│  │  Routes:                                               │  │
│  │  ├─ /admin/login       → AdminLogin                   │  │
│  │  └─ /admin/dashboard   → AdminDashboard (Protected)   │  │
│  │                                                         │  │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Browser LocalStorage (5MB Limit)             │   │
│  ├──────────────────────────────────────────────────────┤   │
│  │                                                       │   │
│  │  agarbatti_categories: [                             │   │
│  │    { id, name, description, image }                 │   │
│  │  ]                                                   │   │
│  │                                                       │   │
│  │  agarbatti_products: [                               │   │
│  │    { id, name, description, price, categoryId, ..}  │   │
│  │  ]                                                   │   │
│  │                                                       │   │
│  │  adminLoggedIn: true|false                           │   │
│  │                                                       │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
App
├── AdminProvider (Context)
│   └── Router
│       ├── Navbar
│       │   ├── Logo
│       │   ├── Nav Links
│       │   └── Admin Icon 🔗 /admin/login
│       │
│       ├── Routes
│       │   ├── /admin/login
│       │   │   └── AdminLogin
│       │   │       ├── Username Input
│       │   │       ├── Password Input
│       │   │       └── Login Button
│       │   │
│       │   ├── /admin/dashboard (Protected)
│       │   │   └── AdminDashboard
│       │   │       ├── Header (Logout, Home buttons)
│       │   │       ├── Tab Navigation
│       │   │       │   ├── Categories Tab
│       │   │       │   └── Products Tab
│       │   │       │
│       │   │       ├── Categories Content
│       │   │       │   ├── CategoryManager
│       │   │       │   ├── Category Grid
│       │   │       │   │   └── Category Card (Edit/Delete)
│       │   │       │   └── Add Category Modal
│       │   │       │       ├── Name Input
│       │   │       │       ├── Description Input
│       │   │       │       └── Image Upload
│       │   │       │
│       │   │       └── Products Content
│       │   │           ├── ProductManager
│       │   │           ├── Product Table
│       │   │           │   └── Product Rows (Edit/Delete)
│       │   │           └── Add Product Modal
│       │   │               ├── Name Input
│       │   │               ├── Price Input
│       │   │               ├── Category Select
│       │   │               ├── Featured Checkbox
│       │   │               ├── Description Input
│       │   │               └── Image Upload
│       │   │
│       │   └── ... (other routes: home, products, etc.)
│       │
│       └── Footer
│
└── (Other components unchanged)
```

## Data Flow Diagram

```
                    ┌─────────────────┐
                    │  User Actions   │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
    ┌─────────┐          ┌─────────┐         ┌──────────┐
    │ Create  │          │ Update  │         │ Delete   │
    │ Category│          │ Category│         │ Category │
    │ Product │          │ Product │         │ Product  │
    └────┬────┘          └────┬────┘         └────┬─────┘
         │                    │                   │
         └────────────────────┼───────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │ AdminContext     │
                    │ CRUD Functions   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ State Update     │
                    │ (setState)       │
                    └────────┬─────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
         ▼                   ▼                   ▼
    ┌─────────┐          ┌──────────┐       ┌──────────────┐
    │ Component│          │localStorage   │  │ Re-render    │
    │ Update   │          │ Persistence   │  │ Components   │
    └─────────┘          └──────────────┘  └──────────────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ UI Display       │
                    │ (Tables, Cards)  │
                    └──────────────────┘
```

## Authentication Flow

```
                    ┌──────────────────────┐
                    │ User visits /admin   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Redirect to /admin   │
                    │ /login (not logged)  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Display Login Form   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ User enters:         │
                    │ - Username           │
                    │ - Password           │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Validate Credentials │
                    └──────────┬───────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         │                     │                     │
         ▼                     ▼                     ▼
    ┌─────────┐           ┌────────┐         ┌──────────┐
    │ Correct │           │Invalid │         │  Error   │
    │ Creds   │           │ Creds  │         │ Display  │
    └────┬────┘           └────┬───┘         └──────────┘
         │                    │                     │
         ▼                    ▼                     ▼
    ┌──────────┐         ┌─────────────┐      ┌──────────┐
    │ Set      │         │ Show error  │      │ Retry    │
    │ isLogged │         │ message     │      │ Login    │
    │ In=true  │         └─────────────┘      └──────────┘
    └────┬─────┘
         │
         ▼
    ┌──────────────────────┐
    │ Save to localStorage │
    │ adminLoggedIn: true  │
    └────┬─────────────────┘
         │
         ▼
    ┌──────────────────────┐
    │ Redirect to          │
    │ /admin/dashboard     │
    └──────────────────────┘
```

## Database Schema (LocalStorage)

```
LocalStorage
│
├── agarbatti_categories: JSON Array
│   └── Category[]
│       ├── id: string (timestamp)
│       ├── name: string
│       ├── description: string
│       └── image: string (base64)
│
├── agarbatti_products: JSON Array
│   └── Product[]
│       ├── id: string (timestamp)
│       ├── name: string
│       ├── description: string
│       ├── price: number
│       ├── categoryId: string (FK to Category)
│       ├── image: string (base64)
│       └── featured: boolean (optional)
│
└── adminLoggedIn: string ("true" | "false")
```

## CRUD Operations Matrix

```
┌──────────────┬─────────┬──────────────────────────────────────────┐
│ Entity       │ Operation│ Implementation                            │
├──────────────┼─────────┼──────────────────────────────────────────┤
│ Category     │ CREATE  │ addCategory(name, desc, image)           │
│              │ READ    │ categories array                          │
│              │ UPDATE  │ updateCategory(id, name, desc, image)    │
│              │ DELETE  │ deleteCategory(id) [cascades products]   │
├──────────────┼─────────┼──────────────────────────────────────────┤
│ Product      │ CREATE  │ addProduct(name, desc, price, cat, img)  │
│              │ READ    │ products array                            │
│              │ UPDATE  │ updateProduct(id, ...same)               │
│              │ DELETE  │ deleteProduct(id)                         │
├──────────────┼─────────┼──────────────────────────────────────────┤
│ Admin        │ CREATE  │ N/A (hardcoded credentials)              │
│ Auth         │ READ    │ isLoggedIn flag                           │
│              │ UPDATE  │ login(username, password)                │
│              │ DELETE  │ logout()                                  │
└──────────────┴─────────┴──────────────────────────────────────────┘
```

## Integration Points with Frontend

```
Pages/Components that can use Admin Data:
│
├── ProductsPage
│   ├── Get categories: useAdmin().categories
│   ├── Get products: useAdmin().products
│   └── Filter by category
│
├── TopSelling Component
│   ├── Get featured products
│   └── Display in grid/carousel
│
├── CategoryShowcase Component
│   ├── Get all categories
│   └── Create category cards
│
├── ProductCard Component
│   ├── Receive product data
│   ├── Display image from admin upload
│   └── Show featured badge
│
└── Footer
    ├── Display category links
    └── Dynamic navigation
```

## Security Architecture

```
Public Routes:
├── /                    (Home)
├── /products           (Product listing)
├── /about              (About page)
├── /contact            (Contact page)
└── /admin/login        (Admin login)

Protected Routes:
└── /admin/dashboard    (Requires isLoggedIn = true)
                        ↓
                    ProtectedAdminRoute
                        ↓
                    Validates isLoggedIn
                        ↓
            ┌───────────┬───────────┐
            │           │           │
        (true)      (false)     (undefined)
            │           │           │
            ▼           ▼           ▼
       [Show]     [Redirect]  [Redirect]
       Dashboard  to /login    to /login
```

## Technology Stack Integration

```
React (UI Framework)
    ↓
React Router (Routing & Navigation)
    ↓
AdminContext (State Management)
    ↓
TailwindCSS (Styling)
    ↓
React Icons (Icons)
    ↓
FileReader API (Image Upload)
    ↓
LocalStorage API (Data Persistence)
    ↓
Browser (Client-side Rendering)
```

## Performance Considerations

```
Data Flow Optimization:
│
├── Categories (typically 5-20 items)
│   └── Small array, quick filter operations
│
├── Products (typically 50-500 items)
│   └── Table view with pagination recommended
│
└── Images (base64 encoded)
    └── Recommendation: Limit to 100-200 images in localStorage
        (Each ~100KB in base64 = significant storage usage)
```

---

This architecture provides a clean separation of concerns while maintaining functionality with client-side data management suitable for development and testing purposes.
