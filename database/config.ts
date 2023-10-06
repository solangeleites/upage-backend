import mongoose from 'mongoose';

export const conectarDB = async (): Promise<void> => {
  try {
    await mongoose.connect(
      'mongodb+srv://upage:ms4V1BqyoED6YZor@upage.2qmfm1x.mongodb.net/'
    );
    console.log('Base de datos online');
  } catch (error) {
    console.error(error);
    throw new Error('Error a la hora de iniciar la base de datos');
  }
};
