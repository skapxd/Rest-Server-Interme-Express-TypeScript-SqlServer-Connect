import { Request, Response } from 'express';

export const getRoot = async ( req: Request, res: Response) : Promise<Response> => {
 
    return res.send('Hola')
}

export const postForm = async ( req: Request, res: Response ) : Promise<Response> => {
        
    const body = req.body;

    return res.json({ 
        body
    })
}