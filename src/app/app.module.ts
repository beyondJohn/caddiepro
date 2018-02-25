import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './home/home.component';
import { MeasureComponent } from './measure/measure.component';
import { SetlocationComponent } from './setlocation/setlocation.component';
import { SetLocationMeasurementComponent } from './set-location-measurement/set-location-measurement.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'measure',
    component: MeasureComponent,
    data: { title: 'Measure' }
  },
  {
    path: '',
    component: SetlocationComponent,
    data: { title: 'Set Location' }
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeasureComponent,
    SetlocationComponent,
    SetLocationMeasurementComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,
    {enableTracing: false}
  ),
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyBZCZBmFwJHDHCMleZw0m8yy92MAppsjoE'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
