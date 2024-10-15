import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
//
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './shared/custom-material.module';
//NO LONGER SUPPORTED: import { FlexLayoutModule } from '@angular/flex-layout';
//

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
import { FormInputComponent } from './titres/form-input/form-input.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




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
    FormInputComponent,
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    MatInputModule ,
MatFormFieldModule,
MatSelectModule,
 MatIconModule,
 MatButtonModule,
 MatDialogModule,
 ReactiveFormsModule,
 HttpClientModule

  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/angular-material-nav'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
