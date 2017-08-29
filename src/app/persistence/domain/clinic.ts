import {Entity} from "./entiy";

export class Clinic extends Entity {

    public static readonly KEY: string = 'clinic';

    title: string;

    constructor(id: number = null, title: string = '') {
        super(id);
        this.title = title;
    }

}