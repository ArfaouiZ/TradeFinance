import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { TradisComponent } from './tradis/tradis.component';
import { TscComponent } from './tsc/tsc.component';
import { TitresComponent } from './titres/titres.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PictureGridComponent } from './picture-grid/picture-grid.component';
import { ClientsComponent } from './clients/clients.component';
import { CdiComponent } from './cdi/cdi.component';
import { RdiComponent } from './rdi/rdi.component';
import { VeComponent } from './ve/ve.component';
import { ReglementsComponent } from './reglement/reglement.component';
import { ConsultingComponent } from './consulting/consulting.component';

const routes: Routes = [
  { path: 'clients', component: ClientsComponent, data: { label: 'Clients' } },
  { path: 'titres', component: TitresComponent, data: { label: 'titres' } },
  { path: 'reglement', component: ReglementsComponent, data: { label: 'reglement' } },
  { path: 'consulting', component: ConsultingComponent, data: { label: 'consulter les details' } },
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

const routeOptions: ExtraOptions = {
  enableTracing: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
