import {Request, Response} from 'express';
import Newsletter, { INewsletter } from '../models/newsletter';

export const getNewsletter = async  (req: Request, res: Response)=>{
    
    const newsletterData: INewsletter = req.body;

    const newsletter = new Newsletter(newsletterData);
  
    await newsletter.save();
  
    res.json({
      msj: 'Te suscribiste con éxito a nuestro newsletter!',
      newsletter,
    });

}