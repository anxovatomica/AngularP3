import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// Importem els components de les pagies per les que volem navegar
import { AppComponent } from './app.component';
import { AppCreaturesComponent } from './creatures/creatures.component';
import { AppArtifactsComponent } from './artifacts/artifacts.component';
// creem la constant appRoutes del tipus Routes amb totes les rutes de la App
const appRoutes: Routes = [
{path: '', component: AppCreaturesComponent }, // pagina inicial
{path: 'artifact', component: AppArtifactsComponent},
{path: 'app', component: AppComponent},
{ path: '**', component: AppCreaturesComponent } // ** indica el path quan en un error
];
// Creem un array buit que utilitzara Angular
export const appRoutingProviders: any[] = [];
// Exportem la variable routing del tipus ModuleWithProviders creada a partir de appRoutes
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
