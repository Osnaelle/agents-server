import { reset } from 'drizzle-seed';
import { db } from '../../db/connection.ts';
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { schema } from '../../db/schema/index.ts';
import z from 'zod/v4';
import { REPL_MODE_SLOPPY } from 'repl';

export const createRoomsRoute:FastifyPluginAsyncZod = async (app) =>{

    app.post('/rooms',{
        schema:{
            body:z.object({
                name:z.string().min(1),
                description:z.string().optional(),


            }),
        },

        }, async (request, reply) =>{
            const { name, description } = request.body
            const result = await db.insert(schema.rooms).values({
                name,
                description,
            }
    ).returning()

    const insertedRoom = result[0]
if(!insertedRoom){
    throw new Error('Failed to create room')
}
return reply.status(201).send({
    roomId:insertedRoom.id


})
        })}