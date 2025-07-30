import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Gallery } from './pages/gallery/gallery';
import { About } from './pages/about/about';
import { Blog } from './pages/blog/blog';
import { BlogDetail } from './pages/blog-detail/blog-detail';
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
    path: 'blog-details/:id',
    component: BlogDetail,  
  },
];
