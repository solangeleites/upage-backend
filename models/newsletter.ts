import {Model, Schema, model} from "mongoose";

export interface INewsletter {
    email: string;
}

const newsletterSchema = new Schema ({
    email:{
        type: String,
        required: [true, 'El email es obligatorio']
    }
})

const Newsletter: Model<INewsletter> = model<INewsletter>('Newsletter', newsletterSchema);

export default Newsletter;
