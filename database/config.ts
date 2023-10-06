import mongoose from 'mongoose';

export const conectarDB = async (): Promise<void> => {
  try {
    const DBURL = process.env.DB_URL;
    if(!DBURL){
      throw new Error('No se encontró la URL de los .env');
    }
    await mongoose.connect(DBURL);
    console.log('Base de datos online');
  } catch (error) {
    console.error(error);
    throw new Error('Error a la hora de iniciar la base de datos');
  }
};
