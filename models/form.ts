import { Model, Schema, model } from 'mongoose';

export interface IForm {
  nombre: string;
  email: string;
  telefono: number;
  mensaje: string;
}

const FormSchema = new Schema<IForm>({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio'],
  },
  telefono: {
    type: Number,
    required: [true, 'El telefono es obligatorio'],
  },
  mensaje: {
    type: String,
    required: [true, 'El mensaje es obligatorio'],
  },
});

const Form: Model<IForm> = model<IForm>('Form', FormSchema);
export default Form;
