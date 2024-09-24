import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductComponent } from './component/product/product.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'contacts', component:ContactComponent},
    {path:'products', component: ProductComponent}
];
