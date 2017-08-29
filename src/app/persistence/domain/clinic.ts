import {Therapist} from "./therapist";
import {Entity} from "./entiy";

export class Clinic extends Entity {

    name: string;
    therapists: Array<Therapist>;

    constructor(id: number, name: string, therapists: Array<Therapist> = []) {
        super(id);
        this.name = name;
        this.therapists = therapists;
    }

}