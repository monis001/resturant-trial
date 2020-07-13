import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'estimateTime'})
export class EstimateTimePipe implements PipeTransform {
    private dummyTime = ['25 min','35 min', '65 min','15 min', '55 min'] ;
    constructor() {
    }
    transform(value: string) {
        return this.dummyTime[Math.floor(Math.random() * (4 - 0 + 1)) + 0] ;
    }
}