import mongoose from 'mongoose'
import { cleanDb, loadFakeData } from "./fake-db"

export const setupDb = async (url: string) => {
  try {
    const m = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connect mongoose ver.' + m.version)

    await cleanDb()
    await loadFakeData()

  } catch (e) {
    console.log(e)
  }
}
