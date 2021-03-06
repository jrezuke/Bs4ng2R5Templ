import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';


@Component({
	moduleId: module.id,
	selector: 'side-nav',
	templateUrl: 'sideNav.component.html',
	directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class SideNavComponent {
	isActive = false;
	showMenu: string = '';
	eventCalled() {
		this.isActive = !this.isActive;
    }

	addExpandClass(element: any) {
		if (element === this.showMenu) {
			this.showMenu = '0';
		} else {
			this.showMenu = element;
		}
	}
}