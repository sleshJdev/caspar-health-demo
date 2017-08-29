import {Entity} from "./entiy";

export class Patient extends Entity {

    name: string;

    constructor(id: number, name: string) {
        super(id);
        this.name = name;
    }

}