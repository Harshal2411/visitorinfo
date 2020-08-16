import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
  children:
  [
    {
      path: 'visitorform',
      children:
        [
          {
            path: '',
            loadChildren: () => import('../visitorform/visitorform.module').then( m => m.VisitorformPageModule)
          }
        ]
    },
    {
      path: 'visitorlog',
      children:
        [
          {
            path: '',
            loadChildren: () => import('../visitorlog/visitorlog.module').then( m => m.VisitorlogPageModule)
          }
        ]
    },
    {
      path: 'news',
      children:
        [
          {
            path: '',
            loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
          }
        ]
    },
  ]
},
{
path: '',
redirectTo: 'tabs/visitorform',
pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
