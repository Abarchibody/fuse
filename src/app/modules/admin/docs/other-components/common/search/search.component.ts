import { Component } from '@angular/core';
import { OtherComponentsComponent } from 'app/modules/admin/docs/other-components/other-components.component';

@Component({
    selector   : 'search',
    templateUrl: './search.component.html',
    styles     : ['']
})
export class SearchComponent
{
    /**
     * Constructor
     */
    constructor(private _otherComponentsComponent: OtherComponentsComponent)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the drawer
     */
    toggleDrawer(): void
    {
        // Toggle the drawer
        this._otherComponentsComponent.matDrawer.toggle();
    }
}
