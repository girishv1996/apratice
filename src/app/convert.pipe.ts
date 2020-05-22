import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any) {
if (value>75)
{
return 'good';
}
else
  {
  return 'poor';
 }

}
}
