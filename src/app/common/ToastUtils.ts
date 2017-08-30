import {Injectable} from "@angular/core";
import {ToastOptions, ToastyService} from "ng2-toasty";

@Injectable()
export class ToastyUtils {

    constructor(private  toastyService: ToastyService) {
    }

    error(title, message) {
        this.toastyService.error(ToastyUtils.createOptions(title, message));
    }

    private static createOptions(title: string, message: string): ToastOptions {
        return {
            title: title,
            msg: message,
            showClose: true,
            timeout: 2000,
            theme: 'bootstrap'
        };
    }

}