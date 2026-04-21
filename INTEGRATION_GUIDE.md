# Integration Guide: Using Admin Data in Your Pages

This guide shows how to connect the admin-managed categories and products to your existing page components.

## 1. Update ProductList Component

**File**: `src/components/ProductList.tsx`

```typescript
import React from 'react';
import ProductCard from './ProductCard';
import { useAdmin } from '../contexts/AdminContext';

const ProductList: React.FC<{ featured?: boolean }> = ({ featured = false }) => {
  const { products, categories } = useAdmin();

  // Filter products based on featured flag
  const displayProducts = featured 
    ? products.filter(p => p.featured)
    : products;

  // Map to add category names
  const enrichedProducts = displayProducts.map(product => ({
    ...product,
    categoryName: categories.find(c => c.id === product.categoryId)?.name || 'Unknown'
  }));

  return (
    <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {enrichedProducts.map(product => (
        <ProductCard 
          key={product.id} 
          {...product}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
```

## 2. Update ProductCard Component

**File**: `src/components/ProductCard.tsx`

Make sure your ProductCard accepts the following props:

```typescript
interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryName?: string;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
  categoryName,
  featured
}) => {
  return (
    <div className="product-card">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg" />
        {featured && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
            Featured
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-600">{categoryName}</p>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-pink-600">₹{price}</span>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
```

## 3. Update ProductsPage

**File**: `src/pages/ProductsPage.tsx`

```typescript
import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import { useAdmin } from '../contexts/AdminContext';

const ProductsPage: React.FC = () => {
  const { categories } = useAdmin();
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of premium agarbatti fragrances
          </p>
        </div>

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === ''
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Products
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* Products */}
        <FilteredProductList categoryId={selectedCategory} />
      </div>
    </div>
  );
};

// Filtered Product List Component
const FilteredProductList: React.FC<{ categoryId: string }> = ({ categoryId }) => {
  const { products, categories } = useAdmin();

  const filtered = categoryId
    ? products.filter(p => p.categoryId === categoryId)
    : products;

  if (filtered.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No products in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {filtered.map(product => {
        const category = categories.find(c => c.id === product.categoryId);
        return (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-gray-200 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.featured && (
                <span className="absolute top-2 right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  Featured ⭐
                </span>
              )}
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 font-semibold">{category?.name}</p>
              <h3 className="font-bold text-lg mt-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-pink-600">₹{product.price}</span>
                <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors text-sm font-bold">
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsPage;
```

## 4. Update Home Page Featured Products

**File**: `src/pages/Home.tsx` or `src/components/TopSelling.tsx`

```typescript
import React from 'react';
import { useAdmin } from '../contexts/AdminContext';

const FeaturedProducts: React.FC = () => {
  const { products, categories } = useAdmin();
  
  // Get only featured products
  const featured = products.filter(p => p.featured).slice(0, 4);

  if (featured.length === 0) {
    return null; // Don't show section if no featured products
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-pink-600">
          Featured Products
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(product => {
            const category = categories.find(c => c.id === product.categoryId);
            return (
              <div key={product.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-pink-600 font-semibold">{category?.name}</p>
                  <h3 className="font-bold text-lg mt-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-2xl font-bold text-pink-600">₹{product.price}</span>
                    <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
```

## 5. Category Showcase Component

**File**: `src/components/CategoryShowcase.tsx` (new file)

```typescript
import React from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { Link } from 'react-router-dom';

const CategoryShowcase: React.FC = () => {
  const { categories } = useAdmin();

  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <Link
              key={category.id}
              to="/products"
              onClick={() => {
                // Scroll to products with this category filter
                localStorage.setItem('selectedCategory', category.id);
              }}
              className="group relative overflow-hidden rounded-lg no-underline"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                <p className="text-gray-100 text-sm mt-2">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
```

## 6. Update Footer with Dynamic Links

**File**: `src/components/Footer.tsx`

```typescript
import React from 'react';
import { useAdmin } from '../contexts/AdminContext';

const Footer: React.FC = () => {
  const { categories } = useAdmin();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Mangalmay Agarbatti</h3>
          <p className="text-gray-400">
            Premium quality agarbatti with natural fragrances.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/products" className="hover:text-white transition">Products</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              {categories.map(cat => (
                <li key={cat.id}>
                  <a href="/products" className="hover:text-white transition">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p className="text-gray-400">
            📧 info@mangalmay.com<br/>
            📞 +91 9904957696<br/>
            📍 Rajkot, Gujarat
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; 2026 Mangalmay Agarbatti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
```

## Best Practices

1. **Always import useAdmin from AdminContext** - Ensure correct path
2. **Filter before rendering** - Use .filter() to get relevant data
3. **Handle empty states** - Show message when no data exists
4. **Use product IDs** - For any data operations or links
5. **Lazy load images** - Consider using loading="lazy" on img tags
6. **Error boundaries** - Wrap components with error handling for production
7. **Memoize components** - Use React.memo() for performance optimization

## Example: Complete Product Integration

```typescript
import { useAdmin } from '../contexts/AdminContext';

export const ProductIntegration = () => {
  const { products, categories, addProduct, deleteProduct } = useAdmin();
  
  // Get products by category
  const getProductsByCategory = (categoryId: string) => {
    return products.filter(p => p.categoryId === categoryId);
  };
  
  // Get category details
  const getCategoryName = (categoryId: string) => {
    return categories.find(c => c.id === categoryId)?.name || 'Unknown';
  };
  
  // Calculate total products
  const totalProducts = products.length;
  const featuredProducts = products.filter(p => p.featured).length;
  
  return (
    <div>
      <h1>Total Products: {totalProducts}</h1>
      <h2>Featured: {featuredProducts}</h2>
      {/* Your UI here */}
    </div>
  );
};
```

---

This integration guide shows how to fully connect your admin panel with your product pages!
