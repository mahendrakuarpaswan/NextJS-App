import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const petName = request.query.petName as string;
    const ownerName = request.query.ownerName as string;
    if (!petName || !ownerName) throw new Error('Pet and owner names required');
    await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;

    // Fetch the inserted pet
    const insertedPet = await sql`SELECT * FROM Pets WHERE Name = ${petName} AND Owner = ${ownerName};`;

    // Log the inserted pet to the console
    console.log('Inserted pet:', insertedPet);

    // Return the inserted pet in the response
    return response.status(200).json({ pet: insertedPet });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
