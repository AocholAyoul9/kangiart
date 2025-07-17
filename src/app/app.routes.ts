import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Gallery } from './pages/gallery/gallery';
import { About } from './pages/about/about';
import { Blog } from './pages/blog/blog';
import { BlogDetail } from './pages/blog-detail/blog-detail';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'gallery',
    component: Gallery,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'blog',
    component: Blog,
  },
  {
    path: 'blog-detail',
    component: BlogDetail,
  },
  { path: 'shop', component: ShopComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
];
