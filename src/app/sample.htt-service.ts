import {Injectable} from '@angular/core';
import {Thread} from './model/thread.m';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class SampleHttpService {
  static threads: { [key: number]: Thread } = {
    1: {
      id: 1,
      name: 'Thread1'
    },
    2: {
      id: 2,
      name: 'Thread2'
    },
    3: {
      id: 2,
      name: 'Thread2'
    },
  };

  fetchAll(): Observable<Thread[]> {
    const values: Thread[] = _.values(SampleHttpService.threads);
    return Observable.of(values).timeout(1000);
  }

  fetch(id: number): Observable<Thread> {
    const thread = SampleHttpService.threads[id];
    return Observable.of(thread).timeout(1000);
  }

}
