import { Observable } from "rxjs";
import { ApiResponse } from "./apiresponse.model";

export interface IAppService<T> {
    fethAll(): Observable<ApiResponse<T[]>> | undefined | null;
    fetchById(id: number): Observable<ApiResponse<T | null>> | undefined | null;
    add(obj: T): Observable<ApiResponse<T[]>> | undefined | null;
    update(obj: T): Observable<ApiResponse<T[]>> | undefined | null;
    delete(id: number): Observable<ApiResponse<T[]>> | undefined | null;
}