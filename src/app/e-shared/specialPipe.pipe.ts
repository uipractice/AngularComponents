import {Pipe,PipeTransform} from "@angular/core"
@Pipe({
    name:'specialPipe'
})
export class specialPipe implements PipeTransform{
transform(value:string){
    let newVal = value.replace(/[^a-zA-Z]/g, " ")
     return newVal;
}
}

