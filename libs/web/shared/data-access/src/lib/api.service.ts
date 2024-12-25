import { Observable } from "rxjs";

export abstract class ApiService {


  abstract getAll(): Observable<Record<string, string>[]>;


}
