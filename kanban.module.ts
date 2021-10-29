import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { KanbanComponent } from './kanban.component';

@NgModule({
	imports: [
		CoreModule
	],
	declarations: [
		KanbanComponent
	],
	providers: []

})

export class KanbanModule { }
