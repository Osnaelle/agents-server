import { fastifyMultipart } from '@fastify/multipart';
import fastifyCors from "@fastify/cors"
import fastify from "fastify"
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod"
import { env } from "./env.ts"
import { getRoomsRoute } from "./http/routes/get-rooms.ts"
import { createRoomsRoute } from "./http/routes/create-room.ts"
import { getRoomsQuestion } from "./http/routes/get-room-question.ts"
import { createQuestionRoute } from "./http/routes/create-question.ts"
import { uploadAudioRoute } from "./http/routes/upload-audio.ts"


const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {

    origin:'http://localhost:5173'
})


app.register(fastifyMultipart)
app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health',()=>{
    return { status: 'ok' }
    })

    app.register(getRoomsRoute)
    app.register(createRoomsRoute)
    app.register(getRoomsQuestion)
    app.register(createQuestionRoute)
    app.register(uploadAudioRoute)

app.listen({port:env.PORT}).then(() => {
    console.log("Server is running on http://localhost:3333")
})