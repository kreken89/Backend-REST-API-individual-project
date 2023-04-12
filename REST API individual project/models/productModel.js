const Product = require('../schemas/productSchema');

exports.createNewProduct = async (req, res) => {

    const { name, description, price, imgURL } = req.body;                                          // Extracting data from request body

    if( !name || !description || !price || !imgURL ) {                                              // Checking for missing fields in request body
        return res.status(400).json({ message: 'You need to enter all the fields' })
    }

    const product = await Product.create({ name, description, price, imgURL });                     // Creating a new product object

    if(!product) {                                                                                  // Handling errors during product creation
        return res.status(500).json({ message: 'Something went wrong when creating the product' })
    }

    res.status(201).json(product)                                                                   // Sending successful response with created product object
}

exports.getProducts = async (req, res) => {

    try {                                                                                           // Fetching all products from the database
        const products = await Product.find()
        res.status(200).json(products)                                                              // Sending successful response with fetched products  
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong when fetching the products' })        // Handling errors during product fetching
    }
}

exports.getProductsById = async (req, res) => {

  try {                                                                                             // Fetching a product by its ID from the database
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong when fetching the products' })
  }
}

exports.updateProduct = async (req, res) => {

  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, });         // Updating a product by its ID with data from request body
  if (!product) {                                                                                   // Handling case where product is not found
    return res.status(404).json({ message: 'Could not find that product' });
  }
  res.status(200).json(product);                                                                    // Sending successful response with updated product
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);                                   // Deleting a product by its ID from the database
  if (!product) {                                                                                   // Handling case where product is not found
    return res.status(404).json({ message: 'Could not find that product' });
  }
  res.status(200).json(product);                                                                    // Sending successful response with deleted product
};



