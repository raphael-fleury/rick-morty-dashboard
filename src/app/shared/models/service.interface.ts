import { Observable } from "rxjs";
import { Page } from "./page.model";

export interface Service<T> {
    getAll(nameFilter: string, page:number): Observable<Page<T>>
    getById(id: number): Observable<T>
    getMultiple(ids: number[]): Observable<T[]>
}