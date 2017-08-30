import {Injectable} from "@angular/core";
import {LocalStorageService} from "angular-2-local-storage";
import {Entity} from "../domain/entity";
import {Observable} from "rxjs/Observable";

export abstract class CrudService<T extends Entity> {

    constructor(private storage: LocalStorageService) {
    }

    protected abstract getKey(): string;

    protected applyAction<R>(action: (dataSet: Map<number, T>) => R): Observable<R> {
        const dataSet = this.load();
        const result = action(dataSet);
        this.commit(dataSet);
        return Observable.of(result);
    }

    protected load(): Map<number, T> {
        const json: string = this.storage.get(this.getKey());
        return new Map<number, T>(JSON.parse(json));
    }

    protected commit(dataSet: Map<number, T>) {
        this.storage.set(this.getKey(), JSON.stringify(dataSet));
    }

    exists(id: number): Observable<boolean> {
        return this.applyAction(dataSet => {
            return dataSet.has(id);
        });
    }

    findOne(id: number): Observable<T> {
        return this.applyAction(dataSet => {
            return dataSet.get(id);
        });
    }

    saveOne(entity: T): Observable<T> {
        return this.applyAction(dataSet => {
            entity.id = entity.id || dataSet.size + 1;
            dataSet.set(entity.id, entity);
            return entity;
        })
    }

    getAll(): Observable<Array<T>> {
        return this.applyAction(dataSet => {
            return Array.from<T>(dataSet.values());
        });
    }

    remove(entity: T): Observable<T> {
        return this.applyAction(dataSet => {
            dataSet.delete(entity.id);
            return entity;
        })
    }

}