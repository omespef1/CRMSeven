import { NgModule } from '@angular/core';
import { FlowsPipe } from './flows/flows';
import { DigitalDatePipe } from './digital-date/digital-date';
import { ImagePipe } from './image/image';
@NgModule({
	declarations: [FlowsPipe,
    DigitalDatePipe,
    ImagePipe],
	imports: [],
	exports: [FlowsPipe,
    DigitalDatePipe,
    ImagePipe]
})
export class PipesModule {}
