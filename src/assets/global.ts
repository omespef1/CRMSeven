export class Globals
        {
           static readonly CentralizationUrl: string = 'http://consultoria.digitalware.co/seven_crm/centralizacion/api/GnConex/GetConnections';
           static ClientUrl :string ;
           static tracks: Array<{name: string,isChecked:boolean,value:string}> =[{name:'Alta',isChecked:false, value:'A'},{name:'Media',isChecked:false,value:'M'},{name:'Baja',isChecked:false,value:''} ]
        };
