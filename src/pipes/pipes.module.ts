import { NgModule } from '@angular/core';
import { FlowsPipe } from './flows/flows';
import { DigitalDatePipe } from './digital-date/digital-date';
@NgModule({
	declarations: [FlowsPipe,
    DigitalDatePipe],
	imports: [],
	exports: [FlowsPipe,
    DigitalDatePipe]
})
export class PipesModule {}
