// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [
    
    provideAnimations(),
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(
      MatDialogModule,
      MatTableModule
    ),
    
    ...appConfig.providers
  ]
  
}).catch(err => console.error(err));