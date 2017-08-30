import {Entity} from "./entity";

export class Clinic extends Entity {

    public static readonly KEY: string = 'clinic';

    title: string;

    constructor(id: number = null, title: string = '') {
        super(id);
        this.title = title;
    }

}