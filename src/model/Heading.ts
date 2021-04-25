import { Document, model, Model, Schema, SchemaDefinition } from "mongoose"

export interface IHeading extends Document{
  title: string
  subTitle: string
}

export const HeadingSchemaDefinition: SchemaDefinition<IHeading> = {
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: false
  }
}

const HeadingSchema: Schema<IHeading> = new Schema(HeadingSchemaDefinition)

export const Heading: Model<IHeading> = model('Heading', HeadingSchema)
