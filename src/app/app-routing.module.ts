import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'visitorform',
    loadChildren: () => import('./pages/visitorform/visitorform.module').then( m => m.VisitorformPageModule)
  },
  {
    path: 'visitorlog',
    loadChildren: () => import('./pages/visitorlog/visitorlog.module').then( m => m.VisitorlogPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'news-detail',
    loadChildren: () => import('./pages/news-detail/news-detail.module').then( m => m.NewsDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
