import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PipeViewComponent } from './pipe-view/pipe-view.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'pipe'
            },
            {
                path: 'pipe',
                component: PipeViewComponent
            },
            {
                path: 'form',
                loadChildren: () => import('./forms-view/forms.module').then(m => m.FormsViewModule)
            },
            {
                path: 'learning-english',
                loadChildren: () => import('./learning-english/learning-english.module').then(m => m.LearningEnglishModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
