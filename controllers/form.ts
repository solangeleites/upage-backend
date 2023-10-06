import { Request, Response } from 'express';

import Form, { IForm } from '../models/form';

export const getForm = async (req: Request, res: Response) => {
  const formData: IForm = req.body;
  const form = new Form(formData);

  await form.save();

  res.json({
    msj: 'Formulario guardado con exito',
    form,
  });
};
