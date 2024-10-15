import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './shared/custom-material.module';
//NO LONGER SUPPORTED: import { FlexLayoutModule } from '@angular/flex-layout';
//
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
// routed components
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PictureGridComponent } from './picture-grid/picture-grid.component';
import { TradisComponent } from './tradis/tradis.component';
import { TscComponent } from './tsc/tsc.component';
import { TitresComponent } from './titres/titres.component';
import { ClientsComponent } from './clients/clients.component';
import { CdiComponent } from './cdi/cdi.component';
import { RdiComponent } from './rdi/rdi.component';
import { VeComponent } from './ve/ve.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ClientDialogComponent } from './clients/client-dialog/client-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    PictureGridComponent,
    TradisComponent,
    TscComponent,
    TitresComponent,
    ClientsComponent,
    CdiComponent,
    RdiComponent,
    VeComponent,
    ClientDialogComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,  
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    MatInputModule ,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/tradeFinance'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
