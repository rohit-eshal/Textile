import { createEshalProxy } from '@eshal-bot/server'

const proxy = await createEshalProxy({
  secretKey:   process.env.ESHAL_SECRET_KEY,
  eshalApiUrl: process.env.ESHAL_API_URL,
})

export default proxy.vercel()
