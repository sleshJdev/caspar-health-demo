import {Entity} from "./entiy";
import {Clinic} from "./clinic";
import {first} from "rxjs/operator/first";

export class Therapist extends Entity {

    public readonly KEY: string = 'therapist';

    firstName: string;
    lastName: string;
    clinic: Clinic;

    constructor(id: number = null,
                firstName: string = '',
                lastName: string = '',
                clinic: Clinic = new Clinic()) {
        super(id);
        this.firstName = firstName;
        this.lastName = lastName;
        this.clinic = clinic;
    }

}