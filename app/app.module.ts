import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppCreaturesComponent } from './creatures/creatures.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppArtifactsComponent } from './artifacts/artifacts.component';
import { RouterModule, Routes } from '@angular/router';
import { AppErrorComponent } from './error/error.component';
import { AppMainComponent } from './main/main.component';
import { AppAsignComponent } from './asign/asign.component';

const appRoutes: Routes = [

  {
    path: 'main',
    component: AppMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'artifacts',
    component: AppArtifactsComponent,
    data: { title: 'ARTIFACTS' }
  },
  {
    path: 'asignation',
    component: AppAsignComponent,
    data: { title: 'ASIGNATION' }
  },
  {
    path: 'creatures',
    component: AppCreaturesComponent,
    data: { title: 'CREATURES' }
  },
  {
    path: '**',
    component: AppErrorComponent
  },
  {
    path: '',
    component: AppMainComponent
  },

];
@NgModule({
  declarations: [
    AppComponent,
    AppCreaturesComponent,
    AppArtifactsComponent,
    AppErrorComponent,
    AppMainComponent,
    AppAsignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
