import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ConsumerDashboardComponent } from './_modules/consumer/consumer-dashboard.component/dashboarddemo.component';
import { SampleDemoComponent } from './demo/view/sampledemo.component';
import { FormsDemoComponent } from './demo/view/formsdemo.component';
import { DataDemoComponent } from './demo/view/datademo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MenusDemoComponent } from './demo/view/menusdemo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';
import { AppMainComponent } from './pages/app.main/app.main.component';
import { AppNotfoundComponent } from './pages/app.notfound/app.notfound.component';
import { AppErrorComponent } from './pages/app.error/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied/app.accessdenied.component';
import { AppLoginComponent } from './startup/app.login/app.login.component';
import { RegistrationComponent } from './startup/registration/registration.component';


export const routes: Routes = [
    { path: 'dashboard', component: ConsumerDashboardComponent,
        children: [
            //{ path: 'dashboard', component: DashboardDemoComponent },
            { path: 'components/sample', component: SampleDemoComponent },
            { path: 'components/forms', component: FormsDemoComponent },
            { path: 'components/data', component: DataDemoComponent },
            { path: 'components/panels', component: PanelsDemoComponent },
            { path: 'components/overlays', component: OverlaysDemoComponent },
            { path: 'components/menus', component: MenusDemoComponent },
            { path: 'components/messages', component: MessagesDemoComponent },
            { path: 'components/misc', component: MiscDemoComponent },
            { path: 'pages/empty', component: EmptyDemoComponent },
            { path: 'components/charts', component: ChartsDemoComponent },
            { path: 'components/file', component: FileDemoComponent },
            { path: 'documentation', component: DocumentationComponent }
        ]
    },
    //{path:'consumer-dashboard', loadChildren: './app/_modules/consumer/consumer.module#ConsumerModule'},
    {
        path: 'consumer-dashboard',
        loadChildren: () => import('./_modules/consumer/consumer.module').then(mod => mod.ConsumerModule),
    },
    
    //{path:'transport-dashboard', loadChildren: './app/_modules/transport/transport.module#TransportModule'},
    {
        path:'transport-dashboard',
        loadChildren: () => import('./_modules/transport/transport.module').then(mod => mod.TransportModule),
    },
    {
        path:"pharmacy-dashboard",
        loadChildren: () => import('./_modules/pharmacy/pharmacy.module').then(mod => mod.PharmacyModule)
    },
    
    {path: 'login', component: AppLoginComponent},
    {path: 'register',component:RegistrationComponent},
    {path: 'error', component: AppErrorComponent},
    {path: 'accessdenied', component: AppAccessdeniedComponent},
    {path: 'notfound', component: AppNotfoundComponent},
    {path: '**', redirectTo: '/login'},

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});