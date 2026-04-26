import React, { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import type { Product, Category } from '../contexts/AdminContext';
import { FiEdit2, FiTrash2, FiPlus, FiX, FiChevronDown, FiChevronUp, FiDownload } from 'react-icons/fi';

// Seed data - all categories and products
type CategoryWithImage = Omit<Category, 'id'> & { image?: string };
const SEED_CATEGORIES: CategoryWithImage[] = [
  { name: 'ZIPPER PACKS',          description: 'Premium zipper-sealed incense packs',          image: '/product1.png' },
  { name: 'DHOOP STICKS',          description: 'Traditional thick dhoop sticks',               image: '/lavender.png' },
  { name: 'INCENSE STICKS JARS',   description: 'Luxury glass jars with incense sticks',        image: '/product2.png' },
  { name: 'LOOSE INCENSE STICKS',  description: 'Wholesale loose incense sticks',               image: '/rose.png'     },
];

interface SeedProduct {
  name: string;
  description: string;
  categoryName: string;
  price: number;
  image: string;
  featured: boolean;
}

const SEED_PRODUCTS: SeedProduct[] = [
  { name: 'Sandalwood',               description: 'Fragrance of Real Sandal',                                categoryName: 'ZIPPER PACKS', price: 80,  image: '/product1.png', featured: true  },
  { name: 'Exotica Heaven',           description: 'Perfumed Incense Sticks',                                 categoryName: 'ZIPPER PACKS', price: 80,  image: '/product2.png', featured: false },
  { name: 'Keshar Essence',           description: 'Fragrance of Real Saffron Threads',                       categoryName: 'ZIPPER PACKS', price: 80,  image: '/rose.png',     featured: false },
  { name: 'Flower Bucket (4 in 1)',   description: 'Rose • Lavender • Mogra • Ratrani',                       categoryName: 'ZIPPER PACKS', price: 80,  image: '/hero.png',     featured: true  },
  { name: 'Imperial Collection (4 in 1)', description: 'Heritage • Magnet • Velvet Touch • Fantasia',         categoryName: 'ZIPPER PACKS', price: 80,  image: '/product1.png', featured: false },
  { name: 'Perfume Harmony (5 in 1)', description: 'Magic World • Blue Sea • Coolant • Celebration • Feelings', categoryName: 'ZIPPER PACKS', price: 80, image: '/product2.png', featured: false },
  { name: 'Prathna',                  description: 'A Perfumed Devotional Fragrance',                         categoryName: 'ZIPPER PACKS', price: 80,  image: '/rose.png',     featured: false },
  { name: 'Gugal',                    description: 'A Scented Fragrance of Gugal',                            categoryName: 'ZIPPER PACKS', price: 80,  image: '/hero.png',     featured: false },
  { name: 'Exotica Heaven',           description: 'Premium Dhoop Stick',                                     categoryName: 'DHOOP STICKS', price: 80,  image: '/lavender.png', featured: false },
  { name: 'Kesar Chandan',            description: 'Traditional Wood Scent',                                  categoryName: 'DHOOP STICKS', price: 80,  image: '/product1.png', featured: false },
  { name: 'Guggal',                   description: 'Natural Purification',                                    categoryName: 'DHOOP STICKS', price: 80,  image: '/product2.png', featured: false },
  { name: 'Sandal Wood',              description: 'Pure Sandal Extract',                                     categoryName: 'DHOOP STICKS', price: 80,  image: '/rose.png',     featured: false },
  { name: 'Kasturi',                  description: 'Exotic Musk Aroma',                                      categoryName: 'DHOOP STICKS', price: 80,  image: '/hero.png',     featured: false },
  { name: 'Rose',                     description: 'Classic Floral Calm',                                    categoryName: 'DHOOP STICKS', price: 80,  image: '/lavender.png', featured: false },
  { name: 'Incense Sticks Jars',      description: 'Bulk Luxury Jar',                                         categoryName: 'INCENSE STICKS JARS', price: 140, image: '/product1.png', featured: false },
  { name: 'Loose Incense Sticks',     description: 'Wholesale Packs Available',                               categoryName: 'LOOSE INCENSE STICKS', price: 0,   image: '/hero.png',     featured: false },
];

type TabType = 'products' | 'categories';

interface EditingState {
  type: TabType | null;
  id: string | null;
}

const AdminInventory: React.FC = () => {
  const { 
    products, 
    categories, 
    addProduct, 
    updateProduct, 
    deleteProduct,
    addCategory,
    updateCategory,
    deleteCategory
  } = useAdmin();

  const [activeTab, setActiveTab] = useState<TabType>('products');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingState, setEditingState] = useState<EditingState>({ type: null, id: null });
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  // Product form state
  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: '',
    categoryId: '',
    image: '',
    featured: false,
  });

  // Category form state
  const [categoryForm, setCategoryForm] = useState({
    name: '',
    description: '',
    image: '',
  });

  const resetProductForm = () => {
    setProductForm({
      name: '',
      description: '',
      price: '',
      categoryId: '',
      image: '',
      featured: false,
    });
  };

  const resetCategoryForm = () => {
    setCategoryForm({
      name: '',
      description: '',
      image: '',
    });
  };

  const openProductModal = (product?: Product) => {
    if (product) {
      setProductForm({
        name: product.name,
        description: product.description,
        price: product.price.toString(),
        categoryId: product.categoryId,
        image: product.image,
        featured: product.featured || false,
      });
      setEditingState({ type: 'products', id: product.id });
    } else {
      resetProductForm();
      setEditingState({ type: 'products', id: null });
    }
    setIsModalOpen(true);
  };

  const openCategoryModal = (category?: Category) => {
    if (category) {
      setCategoryForm({
        name: category.name,
        description: category.description,
        image: category.image || '',
      });
      setEditingState({ type: 'categories', id: category.id });
    } else {
      resetCategoryForm();
      setEditingState({ type: 'categories', id: null });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingState({ type: null, id: null });
    resetProductForm();
    resetCategoryForm();
  };

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.name || !productForm.price || !productForm.categoryId || !productForm.image) {
      alert('Please fill all required fields');
      return;
    }

    const productData = {
      name: productForm.name,
      description: productForm.description,
      price: parseFloat(productForm.price),
      categoryId: productForm.categoryId,
      image: productForm.image,
      featured: productForm.featured,
    };

    if (editingState.id) {
      updateProduct(editingState.id, productData);
    } else {
      addProduct(productData);
    }

    closeModal();
  };

  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryForm.name || !categoryForm.description || !categoryForm.image) {
      alert('Please fill all fields');
      return;
    }

    if (editingState.id) {
      updateCategory(editingState.id, categoryForm);
    } else {
      addCategory(categoryForm);
    }

    closeModal();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, isProduct: boolean) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isProduct) {
          setProductForm({ ...productForm, image: reader.result as string });
        } else {
          setCategoryForm({ ...categoryForm, image: reader.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const getCategoryName = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.name || 'Unknown';
  };

  const toggleRowExpand = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const handlePopulateSampleData = () => {
    if (window.confirm('This will add all sample categories and products. Continue?')) {
      // Add all categories
      const categoryMap: Record<string, string> = {};
      SEED_CATEGORIES.forEach((cat) => {
        addCategory(cat);
        // Store the mapping for products
        const now = Date.now();
        categoryMap[cat.name] = `${now}-${Math.random()}`;
      });

      // Wait a bit for categories to be added, then add products
      setTimeout(() => {
        SEED_PRODUCTS.forEach((prod) => {
          // Find the category ID by name
          const category = categories.find(c => c.name === prod.categoryName);
          if (category) {
            addProduct({
              name: prod.name,
              description: prod.description,
              price: prod.price,
              categoryId: category.id,
              image: prod.image,
              featured: prod.featured,
            });
          }
        });
      }, 500);

      alert('Sample data added successfully!');
    }
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-4 border-b-2 border-gray-300 justify-between items-end">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-3 font-bold text-lg transition-all border-b-4 ${
              activeTab === 'products'
                ? 'text-pink-600 border-pink-600'
                : 'text-gray-600 border-transparent hover:text-pink-600'
            }`}
          >
            Products ({products.length})
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`px-6 py-3 font-bold text-lg transition-all border-b-4 ${
              activeTab === 'categories'
                ? 'text-pink-600 border-pink-600'
                : 'text-gray-600 border-transparent hover:text-pink-600'
            }`}
          >
            Categories ({categories.length})
          </button>
        </div>
        {products.length === 0 && categories.length === 0 && (
          <button
            onClick={handlePopulateSampleData}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors mb-2"
          >
            <FiDownload size={20} /> Load Sample Data
          </button>
        )}
      </div>

      {/* Products Tab */}
      {activeTab === 'products' && (
        <div className="space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-800">All Products</h2>
            <button
              onClick={() => openProductModal()}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              <FiPlus size={20} /> Add Product
            </button>
          </div>

          {/* Products List */}
          {products.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg space-y-4">
              <p className="text-gray-600">No products yet. Create one to get started!</p>
              <button
                onClick={handlePopulateSampleData}
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                <FiDownload size={20} /> Populate Sample Data
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md">
                  {/* Row Header */}
                  <div
                    onClick={() => toggleRowExpand(product.id)}
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <button className="text-gray-500">
                        {expandedRows.has(product.id) ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                      </button>
                      <img src={product.image} alt={product.name} className="h-12 w-12 object-cover rounded" />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{product.name}</p>
                        <p className="text-sm text-gray-600">{getCategoryName(product.categoryId)}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-800">₹{product.price}</p>
                        <span className={`text-xs px-2 py-1 rounded ${product.featured ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'}`}>
                          {product.featured ? 'Featured' : 'Regular'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedRows.has(product.id) && (
                    <div className="border-t px-4 py-4 bg-gray-50">
                      <p className="text-gray-700 mb-4"><strong>Description:</strong> {product.description}</p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => openProductModal(product)}
                          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <FiEdit2 size={18} /> Edit
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm('Delete this product?')) {
                              deleteProduct(product.id);
                            }
                          }}
                          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <FiTrash2 size={18} /> Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Categories Tab */}
      {activeTab === 'categories' && (
        <div className="space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-800">All Categories</h2>
            <button
              onClick={() => openCategoryModal()}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              <FiPlus size={20} /> Add Category
            </button>
          </div>

          {/* Categories List */}
          {categories.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No categories yet. Create one to get started!</p>
            </div>
          ) : (
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="bg-white rounded-lg shadow-md">
                  {/* Row Header */}
                  <div
                    onClick={() => toggleRowExpand(category.id)}
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <button className="text-gray-500">
                        {expandedRows.has(category.id) ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                      </button>
                      <img src={category.image} alt={category.name} className="h-12 w-12 object-cover rounded" />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">{category.name}</p>
                        <p className="text-sm text-gray-600">{products.filter(p => p.categoryId === category.id).length} products</p>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedRows.has(category.id) && (
                    <div className="border-t px-4 py-4 bg-gray-50">
                      <p className="text-gray-700 mb-4"><strong>Description:</strong> {category.description}</p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => openCategoryModal(category)}
                          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <FiEdit2 size={18} /> Edit
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm('Delete this category? This will also delete all products in this category.')) {
                              deleteCategory(category.id);
                            }
                          }}
                          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <FiTrash2 size={18} /> Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
              <h3 className="text-2xl font-bold text-gray-800">
                {editingState.type === 'products'
                  ? editingState.id
                    ? 'Edit Product'
                    : 'Add Product'
                  : editingState.id
                  ? 'Edit Category'
                  : 'Add Category'}
              </h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <FiX size={24} />
              </button>
            </div>

            {/* Modal Body */}
            {editingState.type === 'products' ? (
              <form onSubmit={handleProductSubmit} className="p-6 space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name *</label>
                  <input
                    type="text"
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    placeholder="e.g., Jasmine Agarbatti"
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-400"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    value={productForm.description}
                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                    placeholder="Product description"
                    rows={3}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-400"
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Price *</label>
                  <input
                    type="number"
                    step="0.01"
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                    placeholder="0.00"
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-400"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                  <select
                    value={productForm.categoryId}
                    onChange={(e) => setProductForm({ ...productForm, categoryId: e.target.value })}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-400"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Featured */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={productForm.featured}
                    onChange={(e) => setProductForm({ ...productForm, featured: e.target.checked })}
                    className="w-4 h-4 border-2 border-gray-200 rounded"
                  />
                  <label htmlFor="featured" className="text-sm font-semibold text-gray-700">
                    Featured Product
                  </label>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Product Image *</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, true)}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-400"
                  />
                  {productForm.image && (
                    <div className="mt-3 relative">
                      <img
                        src={productForm.image}
                        alt="preview"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-colors"
                >
                  {editingState.id ? 'Update Product' : 'Add Product'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleCategorySubmit} className="p-6 space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category Name *</label>
                  <input
                    type="text"
                    value={categoryForm.name}
                    onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                    placeholder="e.g., Premium Collection"
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-400"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={categoryForm.description}
                    onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })}
                    placeholder="Category description"
                    rows={3}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-400"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category Image *</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, false)}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-400"
                  />
                  {categoryForm.image && (
                    <div className="mt-3 relative">
                      <img
                        src={categoryForm.image}
                        alt="preview"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-colors"
                >
                  {editingState.id ? 'Update Category' : 'Add Category'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminInventory;
