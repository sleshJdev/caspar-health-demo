import {Entity} from "./entiy";
import {Clinic} from "./clinic";

export class Therapist extends Entity {

    static readonly KEY: string = 'therapist';

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

    get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

}