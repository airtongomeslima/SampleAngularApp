import { GeoModel } from './GeoModel';

export class AddressModel {
    constructor() {
        this.geo = new GeoModel();
    }
    street: string = "";
    suite: string = "";
    city: string = "";
    zipcode: string = "";
    geo: GeoModel;
}