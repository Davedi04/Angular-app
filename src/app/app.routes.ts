import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: PageNotFoundComponent },
  { path: '**', redirectTo: '' } // Redirige vers l'accueil pour les pages inconnues
];
