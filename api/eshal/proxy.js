import { createEshalProxy } from '@eshal-bot/server'

let handler

export default async function (req, res) {
  if (!handler) {
    const proxy = await createEshalProxy({
      secretKey:   process.env.ESHAL_SECRET_KEY,
      eshalApiUrl: process.env.ESHAL_API_URL,
    })
    handler = proxy.vercel()
  }
  return handler(req, res)
}
