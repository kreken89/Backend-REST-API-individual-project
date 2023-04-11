const Product = require('../schemas/productSchema');

exports.createNewProduct = async (req, res) => {

    const { name, description, price, imgURL } = req.body;

    if( !name || !description || !price || !imgURL ) {
        return res.status(400).json({ message: 'You need to enter all the fields' })
    }

    const product = await Product.create({ name, description, price, imgURL });

    if(!product) {
        return res.status(500).json({ message: 'Something went wrong when creating the product' })
    }

    res.status(201).json(product)
}

exports.getProducts = async (req, res) => {

    try {
        const products = await Product.find()
        res.status(200).json(products)     
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong when fetching the products' })
    }

}

exports.getProductsById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong when fetching the products' })
  }
}

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!product) {
    return res.status(404).json({ message: 'Could not find that product' });
  }
  res.status(200).json(product);
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Could not find that product' });
  }
  res.status(200).json(product);
};



