import {Entity} from "./entiy";
import {Therapist} from "./therapist";
import {Clinic} from "./clinic";

export class Patient extends Entity {

    static readonly KEY: string = 'patient';

    firstName: string;
    lastName: string;
    therapist;

    constructor(id: number = null,
                firstName: string = '', lastName: string = '',
                therapist: Therapist = new Therapist()) {
        super(id);
        this.firstName = firstName;
        this.lastName = lastName;
        this.therapist = therapist;
    }

    get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

}