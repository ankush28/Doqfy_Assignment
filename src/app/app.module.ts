import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BalanceComponent } from './components/balance/balance.component';
import {MatBadgeModule} from '@angular/material/badge';
import { PendingActionsComponent } from './components/pending-actions/pending-actions.component';
import { FrequentlyUsedComponent } from './components/frequently-used/frequently-used.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    BalanceComponent,
    PendingActionsComponent,
    FrequentlyUsedComponent,
    OrderDetailsComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule, MatMenuModule, MatIconModule,MatBadgeModule,
    FormsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    NgApexchartsModule
  ],
  providers: [  
    MatDatepickerModule,  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
