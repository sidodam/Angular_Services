import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'censored'
})
export class CensoredPipe implements PipeTransform {
  badWordArr : string[] = []
  transform(value: string , badWord:string ) {
  
    this.badWordArr  = badWord.split(" ") 

    for (var i = 0; i < this.badWordArr.length; i++) {
  
      value = value.replace(this.badWordArr[i] , "*".repeat(this.badWordArr[i].length))
    }

      return value
  }

}
