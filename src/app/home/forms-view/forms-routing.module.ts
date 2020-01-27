import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsView } from './forms-view/forms-view.component';


const routes: Routes = [
    {
        path: '',
        component: FormsView,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormsRoutingModule { }
