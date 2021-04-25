import { Document, model, Model, Schema, SchemaDefinition } from "mongoose"
import { HeadingSchemaDefinition, IHeading } from "./Heading"


export interface IProduct extends Document {
  name: string
  coverImage: string
  price: number
  description: string
  heading: IHeading[]
}

const ProductSchemaDefinition: SchemaDefinition<IProduct> = {
  name: {
    type: String,
    required: true,
    max: [60, 'name is at most 60 characters.']
  },
  coverImage: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false,
  },
  heading: [typeof HeadingSchemaDefinition],
}

const ProductSchema: Schema<IProduct> = new Schema(ProductSchemaDefinition)

export const Product: Model<IProduct> = model('Product', ProductSchema)
