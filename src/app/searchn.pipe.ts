import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchn'
})
export class SearchnPipe implements PipeTransform {

  transform(t:any, num: string ) :any {

    if( num == "" || num == undefined ) {
         return t
    }
    else{
     return t.filter(function(c:any){
       return Math.floor(c.vote_average) == parseInt(num)
     })

}
  }
}
