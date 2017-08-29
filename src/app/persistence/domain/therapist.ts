import {Entity} from "./entiy";
import {Patient} from "./patient";

export class Therapist extends Entity {

    name: string;
    patients: Array<Patient>;

    constructor(id: number, name: string, patients: Array<Patient>) {
        super(id);
        this.name = name;
        this.patients = patients;
    }

}