import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ContextualAreaService {

    private isVisibleContextualArea = new Subject<boolean>();
    readStatusContextualArea = this.isVisibleContextualArea.asObservable();

    constructor() { }

    public isVisible(visible: boolean) {
        this.isVisibleContextualArea.next(visible);
    }

}
