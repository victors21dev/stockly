import { PrismaClient } from '@prisma/client/extension'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

// 1. Cria a conexão física com o banco usando o driver do Node
const pool = new Pool({ connectionString: process.env.DATABASE_URL })

// 2. Cria o adaptador que faz a ponte entre o Prisma e o driver
const adapter = new PrismaPg(pool)

// 3. Passa o adaptador para o cliente
export const prisma = new PrismaClient({ adapter })
