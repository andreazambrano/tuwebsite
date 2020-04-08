import {RouterModule,Routes} from '@angular/router';
import {
	TestappComponent,
	ActioncallComponent,
	FooterComponent,
	InfooverlayComponent,
	PricesComponent,
	ProcessComponent,
	QuoteComponent,
	ServicesComponent,
	SliderComponent,
	TopbarComponent,
	InformativasComponent,
	AdministrablesComponent,
	MedidaComponent,
	ContactComponent
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:TestappComponent},
	{path:'actioncall',component:ActioncallComponent},
	{path:'footer',component:FooterComponent},
	{path:'infooverlay',component:InfooverlayComponent},
	{path:'prices',component:PricesComponent},
	{path:'process',component:ProcessComponent},
	{path:'quote',component:QuoteComponent},
	{path:'services',component:ServicesComponent},
	{path:'slider',component:SliderComponent},
	{path:'topbar',component:TopbarComponent},
	{path:'informativas',component:InformativasComponent},
	{path:'administrables',component:AdministrablesComponent},
	{path:'medida',component:MedidaComponent},
	{path:'contact',component:ContactComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

