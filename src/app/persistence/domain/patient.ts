import {Entity} from "./entiy";
import {Therapist} from "./therapist";
import {Clinic} from "./clinic";

export class Patient extends Entity {

    public readonly KEY: string = 'patient';

    firstName: string;
    lastName: string;
    therapist;
    clinic;

    constructor(id: number = null,
                firstName: string = '', lastName: string = '',
                clinic: Clinic = new Clinic(),
                therapist: Therapist = new Therapist()) {
        super(id);
        this.firstName = firstName;
        this.lastName = lastName;
        this.clinic = clinic;
        this.therapist = therapist;
    }

}