const addProduct = ({ make_products, productDB}) => {
    return async function post(info) {
      let data = await make_products(info); // entity
  
      data = {
        ProdDesc: data.getProdDesc(),
        Price: data.getPrice(),
        //SuppName: data.getSuppName()
      };
      
  //   const res1 = await productDB.selectOneSupplier({ data })
  //  const {id} = res1

  // console.log(`SUPPLIER ID : ${id}`)
  const res = await productDB.queryinsertProduct({data});

      let msg = `Error on inserting Product, please try again.`;
    
      if (res) {
    msg = `Product has been added successfully.`;
        return res;
      } else {
        throw new Error(msg);
      }
    };
  };
  
  module.exports = addProduct;
  