import { Component } from '@angular/core';
import { MdListModule} from '@angular2-material/list';
import { SecurityService } from './security/security.service';
import { ROUTER_DIRECTIVES, Router, NavigationStart} from '@angular/router';
import { SideNavComponent } from './layout/sideNav.component'
@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, SideNavComponent],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    constructor(private _security: SecurityService, private _router: Router) { }
 }
