# Admin Panel Setup Guide

## Overview
A complete admin management system has been added to your Agarbatti e-commerce application with the following features:

### Features Implemented:
✅ **Admin Authentication** - Secure login system
✅ **Category Management** - Create, Read, Update, Delete (CRUD) categories with images
✅ **Product Management** - Full CRUD operations for products with images
✅ **Admin Dashboard** - Intuitive interface for managing inventory
✅ **Header Admin Icon** - Quick access to admin panel from navbar
✅ **Local Storage** - Persistent data storage (no backend required)

---

## How to Use

### 1. Accessing Admin Panel

**Option A: From Navbar**
- Look for the **admin icon** (gear/settings icon) in the navigation bar on desktop
- Click it to go to login page
- On mobile, tap menu and select "Admin Panel"

**Option B: Direct URL**
- Navigate to `/admin/login` in your browser

### 2. Admin Login Credentials

```
Username: admin
Password: admin123
```

⚠️ **IMPORTANT**: Change these credentials in production!
Location: `src/contexts/AdminContext.tsx` (lines 37-38)

```typescript
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123'; // Change this!
```

### 3. Admin Dashboard

Once logged in, you'll see the dashboard with two tabs:

#### A. Categories Tab
**Create Category:**
- Click "Add Category" button
- Enter:
  - Category Name (e.g., "Floral", "Woody")
  - Description
  - Category Image (upload from your device)
- Click "Create"

**Edit Category:**
- Click the "Edit" button on any category card
- Modify the details
- Click "Update"

**Delete Category:**
- Click "Delete" on any category card
- Confirm deletion
- ⚠️ Note: Deleting a category also deletes all products in that category

#### B. Products Tab
**Create Product:**
- Click "Add Product" button
- Enter:
  - Product Name (e.g., "Jasmine Agarbatti")
  - Description
  - Price
  - Category (select from dropdown)
  - Product Image (upload from your device)
  - Featured (checkbox to mark as featured product)
- Click "Create"

**Edit Product:**
- Click the edit icon (pencil) in the products table
- Modify details
- Click "Update"

**Delete Product:**
- Click the delete icon (trash) in the products table
- Confirm deletion

---

## File Structure

New files created:

```
src/
├── contexts/
│   └── AdminContext.tsx          # Admin state management & authentication
├── pages/
│   ├── AdminLogin.tsx             # Login page
│   └── AdminDashboard.tsx          # Main dashboard with tabs
├── components/
│   ├── CategoryManager.tsx         # Category CRUD component
│   └── ProductManager.tsx          # Product CRUD component
```

Modified files:
- `src/App.tsx` - Added routes and AdminProvider
- `src/components/Navbar.tsx` - Added admin icon/button
- `src/components/Hero.tsx` - Fixed Swiper CSS imports

---

## Data Storage

All data is stored in **localStorage** with keys:
- `agarbatti_categories` - Stores all categories as JSON
- `agarbatti_products` - Stores all products as JSON
- `adminLoggedIn` - Tracks admin login status

### Data Structure:

**Category:**
```typescript
{
  id: string;
  name: string;
  description: string;
  image: string; // Base64 encoded image
}
```

**Product:**
```typescript
{
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  image: string; // Base64 encoded image
  featured?: boolean;
}
```

---

## Integration with Frontend

### Using Admin Data in Pages

To display categories and products managed by admin:

```typescript
import { useAdmin } from '../contexts/AdminContext';

function MyComponent() {
  const { categories, products } = useAdmin();
  
  return (
    <>
      {categories.map(cat => (
        <div key={cat.id}>{cat.name}</div>
      ))}
    </>
  );
}
```

---

## Security Considerations

### Current Implementation (Development):
- Login credentials stored in code
- No password encryption
- No backend validation

### For Production:
1. ✅ Change default credentials
2. ✅ Implement backend authentication
3. ✅ Use JWT or sessions for security
4. ✅ Hash passwords
5. ✅ Validate all inputs server-side
6. ✅ Use HTTPS only
7. ✅ Move to database instead of localStorage
8. ✅ Add role-based access control (RBAC)

---

## Customization

### Change Admin Credentials:
Edit `src/contexts/AdminContext.tsx`:
```typescript
const ADMIN_USERNAME = 'your_username';
const ADMIN_PASSWORD = 'your_password';
```

### Change Colors:
The admin UI uses TailwindCSS with pink/purple theme. Edit color classes in:
- `AdminLogin.tsx`
- `AdminDashboard.tsx`
- `CategoryManager.tsx`
- `ProductManager.tsx`

### Add More Fields:
1. Update types in `AdminContext.tsx`
2. Add input fields in `CategoryManager.tsx` or `ProductManager.tsx`
3. Update the CRUD functions

---

## Troubleshooting

**Q: Admin login not working?**
- Check that username/password are exactly "admin" / "admin123"
- Clear browser cache/localStorage
- Check browser console for errors

**Q: Images not saving?**
- Ensure file is a valid image format (JPG, PNG, GIF, WebP)
- Check browser console for size errors
- LocalStorage has ~5MB limit per domain

**Q: Data lost after refresh?**
- Check browser localStorage settings
- Ensure "Allow all cookies" or similar is enabled
- Check if in private/incognito mode (data cleared on close)

**Q: Can't see categories in products dropdown?**
- Create at least one category first
- Refresh the page
- Check AdminContext is providing data correctly

---

## Future Enhancements

Consider adding:
- [ ] Image gallery/multiple images per product
- [ ] Bulk import/export (CSV)
- [ ] Product filters and search
- [ ] Stock management
- [ ] Order management system
- [ ] Analytics dashboard
- [ ] User management
- [ ] Discount/coupon system
- [ ] Email notifications
- [ ] Backend API integration

---

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review the code comments
3. Check browser developer console for error messages
4. Verify all required packages are installed (`npm install`)

---

## Version Info
- React: 19.2.4
- React Router: 7.14.1
- TailwindCSS: 4.2.2
- React Icons: 5.6.0
- Created: April 2026
