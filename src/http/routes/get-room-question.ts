import { reset } from 'drizzle-seed';
import { db } from '../../db/connection.ts';
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { schema } from '../../db/schema/index.ts';
import z from 'zod/v4';
import {eq, desc} from 'drizzle-orm'
import { id } from 'zod/v4/locales';
export const getRoomsQuestion:FastifyPluginAsyncZod = async (app) =>{

    app.get('/rooms/:roomId/questions', {
       schema:{
        params:z.object({
                roomId:z.string()
        })
       }
    }
    , async (request, reply) => {
        const { roomId } = request.params;
        const results = await db.select({
            id: schema.questions.id,
            question: schema.questions.question,
            answer: schema.questions.answer,
            createdAt: schema.questions.createdAt

        }).from(schema.questions).where(
           eq(schema.questions.roomId, roomId)).orderBy(desc(schema.questions.createdAt));
        
        return reply.status(200).send(results);
    });

}
