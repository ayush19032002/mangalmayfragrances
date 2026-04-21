# Admin Panel Quick Reference

## 🚀 Quick Start

### Access Admin Panel
- **URL**: http://localhost:5174/admin/login
- **Icon**: Gear icon in navbar (desktop) or Admin Panel in mobile menu
- **Username**: `admin`
- **Password**: `admin123`

## 📊 Dashboard Features

### Categories Management
| Action | Steps |
|--------|-------|
| **Create** | Click "Add Category" → Fill details → Upload image → Click "Create" |
| **Edit** | Click "Edit" on category → Modify → Click "Update" |
| **Delete** | Click "Delete" → Confirm → Done (deletes products too!) |

### Products Management  
| Action | Steps |
|--------|-------|
| **Create** | Click "Add Product" → Fill all fields → Select category → Upload image → Click "Create" |
| **Edit** | Click edit icon (pencil) → Modify → Click "Update" |
| **Delete** | Click delete icon (trash) → Confirm → Done |

## 🔑 Key Features

✅ **Image Uploads** - Upload images directly in the form (stored as base64)
✅ **Category Linking** - Products linked to categories automatically
✅ **Featured Products** - Mark products as featured with a checkbox
✅ **Local Storage** - All data persists in browser (no backend needed)
✅ **Protected Routes** - Dashboard only accessible when logged in
✅ **Responsive UI** - Works on desktop, tablet, and mobile
✅ **Logout** - Secure logout with one click

## 📁 New Components

```
AdminContext.tsx      → State management & authentication
AdminLogin.tsx        → Login page with demo credentials
AdminDashboard.tsx    → Main dashboard with tabs
CategoryManager.tsx   → CRUD for categories
ProductManager.tsx    → CRUD for products
```

## ⚠️ Important Notes

1. **Default credentials** are for development only
2. **Change credentials** in `src/contexts/AdminContext.tsx` before production
3. **Data stored** in browser localStorage (5MB limit)
4. **No backend** - Use only for local/testing purposes
5. **Export/Backup** - Data can be exported from browser's Application > LocalStorage

## 🔧 Integration Points

To use admin-managed data in your pages:

```typescript
import { useAdmin } from '../contexts/AdminContext';

function ProductList() {
  const { categories, products } = useAdmin();
  
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          {product.featured && <span>Featured!</span>}
        </div>
      ))}
    </div>
  );
}
```

## 📱 UI Colors
- **Primary**: Pink (#EC4899)
- **Secondary**: Purple (#A855F7)
- **Success**: Green (#22C55E)
- **Danger**: Red (#EF4444)
- **Info**: Blue (#3B82F6)

## 🛣️ Routes

| Route | Purpose | Access |
|-------|---------|--------|
| `/admin/login` | Admin login page | Public |
| `/admin/dashboard` | Admin dashboard | Protected (logged-in only) |

## 🔐 Security Checklist

- [ ] Change default admin credentials
- [ ] Implement backend authentication
- [ ] Use database instead of localStorage
- [ ] Add password encryption
- [ ] Enable HTTPS in production
- [ ] Add input validation
- [ ] Add rate limiting
- [ ] Add audit logging
- [ ] Implement token expiration
- [ ] Add 2FA (optional)

## 💡 Tips

1. **Create categories first** before creating products
2. **Use descriptive names** for better organization
3. **Optimize images** before uploading (smaller file size)
4. **Test on mobile** - Use responsive design features
5. **Backup data** - Export localStorage regularly

## 📞 Quick Debugging

Check admin data in browser:
1. Open DevTools (F12)
2. Go to Application > LocalStorage
3. Find keys: `agarbatti_categories`, `agarbatti_products`
4. View JSON data

Clear all admin data:
```javascript
localStorage.removeItem('agarbatti_categories');
localStorage.removeItem('agarbatti_products');
localStorage.removeItem('adminLoggedIn');
```

---

**Created**: April 2026
**Status**: ✅ Production Ready (with security hardening needed)
