import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class InfobarService {

    private isVisibleInfobar = new Subject<boolean>();
    readStatusInfobar = this.isVisibleInfobar.asObservable();

    constructor() { }

    public isVisible(visible: boolean) {
        this.isVisibleInfobar.next(visible);
    }

}
