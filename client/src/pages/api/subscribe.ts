import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url'

let cachedDb: Db = null

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const dbName = url.parse(uri).pathname.substr(1)

  const db = client.db(dbName)

  cachedDb = db

  return db
}

export default async (request: NowRequest, response: NowResponse) => {
  const { email } = request.body

  const db = await connectToDatabase(process.env.MONGODB_URI)
  const subscribersCollection = db.collection('subscribers')

  const subscribedUser = await subscribersCollection.findOne({
    email: email
  })

  if (!subscribedUser) {
    await subscribersCollection.insertOne({
      email,
      subscribedAt: new Date()
    })
  }

  return response.status(201).json({ message: 'User registered!' })
}
