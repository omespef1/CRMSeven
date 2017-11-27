import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FlowsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'flows',
})
export class FlowsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
   let color:string;
    switch (value){
      case "A":
      color= "FlowRed";
      break;
      case "M":
      color= "FlowBlue";
      break;
      case "B":
      color= "FlowGreen";
      break;
    }
    console.log(color);
    return color;
  }
}
