import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchNPipe implements PipeTransform {

  transform(t:any, term: string ) :any {

   if( term == "" || term == undefined ) {
        return t
   }
   else{
    return t.filter(function(c:any){
      return c.title.toLowerCase().includes(term.toLowerCase())
    })
   }
  }

}
