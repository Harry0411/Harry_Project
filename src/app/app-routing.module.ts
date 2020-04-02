import { NgModule } from "@angular/core";
import{Routes, RouterModule} from '@angular/router';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'customersearch', component: SearchcustomerComponent},
    { path: 'dashboard', component: CustomerDashboardComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }

export const routingComponents = [HomeComponent, SearchcustomerComponent, CustomerDashboardComponent]