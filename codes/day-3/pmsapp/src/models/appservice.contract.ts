export interface IAppService<T> {
    fethAll(): T[] | undefined | null;
    fetchById(id: number): T | undefined | null;
    add(obj: T): boolean;
    update(obj: T): boolean;
    delete(id: number): boolean;
}