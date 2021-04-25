import { IProduct, Product } from "../model/Product"


const products = [
  {
    id: 1,
    name: 'Product 1',
    coverImage: 'phone-cover.jpg',
    price: 123,
    description: 'Cum zeta studere, omnes pulchritudinees fallere regius, nobilis brabeutaes.',
    heading: [
      { title: 'Product Title 11', subTitle: 'Heu, audax orgia! Est gratis repressor, cesaris. Cur silva prarere?'},
      { title: 'Product Title 12', subTitle: 'A falsis, urbs teres turpis. Sensorem, humani generis, et nixus.'},
      { title: 'Product Title 13', subTitle: 'Cum nuclear vexatum iacere velum, omnes plasmatores vitare talis, regius sensoremes. Ubi est fortis turpis? Pol, salvus itineris tramitem!'},
    ]
  },
  {
    id: 2,
    name: 'Product 2',
    coverImage: 'phone-cover.jpg',
    price: 24.6,
    description: 'Cum torus favere, omnes nixes demitto altus, dexter rumores.',
    heading: [
      { title: 'Product Title 21', subTitle: 'Resistentias unda in fidelis palatium! A falsis, lactea varius racana.'},
      { title: 'Product Title 22', subTitle: 'Adiurator cadunts, tanquam fatalis glos. Magnum eposs ducunt ad fiscina.'},
      { title: 'Product Title 33', subTitle: 'Pol, a bene danista. Solems peregrinatione!'},
    ]
  },
  {
    id: 3,
    name: 'Product 3',
    coverImage: 'phone-cover.jpg',
    price: 56,
    description: 'A falsis, species fatalis consilium.',
    heading: [
      { title: 'Product Title 31', subTitle: 'Emeritis, peritus historias tandem fallere de regius, fidelis luna.'},
      { title: 'Product Title 32', subTitle: 'Domuss sunt adelphiss de superbus nix.'},
      { title: 'Product Title 33', subTitle: 'Neuter musa aliquando manifestums pars est. Nunquam visum zirbus.'},
    ]
  },
  {
    id: 4,
    name: 'Product 4',
    coverImage: 'phone-cover.jpg',
    price: 200,
    description: 'Cur era cadunt? Eheu, itineris tramitem!',
    heading: [
      { title: 'Product Title 41', subTitle: 'Barbatus burgus una imitaris scutum est.'},
      { title: 'Product Title 42', subTitle: 'Grandis assimilatio aegre captiss solitudo est.'},
      { title: 'Product Title 43', subTitle: 'Zeta de dexter species, attrahendam accola!'},
    ]
  },
]

export const cleanDb = async () => {
  await Product.deleteMany({})
}

export const loadFakeData = async () => {
  await Promise.all(products.map(async product => {
    const p = new Product(product)
    await p.save()
  }))
};
