import express from "express"
import { Product } from "../model/Product"
import { StatusCodes } from "http-status-codes"


export const productRouter = express.Router()

productRouter
  .get("", async (req: express.Request, res: express.Response) => {

    const products = await Product.find({})
    res.json(products)
  })
  .get("/:productId", async (req: express.Request, res: express.Response) => {
    try {
      const productId = req.params['productId']
      const product = await Product.findById(productId)
      res.json(product)
    } catch (e) {
      res.status(StatusCodes.NOT_FOUND).send({
        errors: {
          title: 'Product error',
          detail: 'Product not found'
        }
      })
    }
  })
