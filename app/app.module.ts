import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
 import { APP_ROUTER_PROVIDERS } from './app.routes';
 import { AppComponent }  from './app.component';
 import { HomeComponent } from './home/home.component';
 import { AdminComponent } from './admin/admin.component';
 import { AboutComponent } from './about/about.component';
 import { LogonComponent } from './security/logon.component';
 import { LogoutComponent } from './security/logout.component';
 import { SecurityGuard } from './security/security.guard'
import { SecurityService } from '../app/security/security.service';

//import { routing, appRoutingProviders } from './app.routing';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [AppComponent, HomeComponent, AdminComponent,
    AboutComponent, LogonComponent, LogoutComponent],
  providers: [APP_ROUTER_PROVIDERS, SecurityGuard, SecurityService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
