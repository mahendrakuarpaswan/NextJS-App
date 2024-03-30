import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const result =  await sql`CREATE TABLE Pads ( Owner varchar(255), Mahendra varchar(255) );`;
    console.log("result===",result);
    return response.status(200).json({ result });
  } catch (error) {
     
    console.log(error);

    return response.status(500).json({ error });
  }
}