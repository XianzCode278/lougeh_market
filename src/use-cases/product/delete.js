const deleteProduct = ({ productDB }) => {
    return async function select(info) {
      const { id } = info;
  
      // delete query
      const res = await productDB.querydeleteProduct({ id });
      let msg = `CONNOT DELETE AN ERROR ENCOUNTER .`;
      if (res) {
      //  msg = `DELETED SUCCESSFULLY.`;
        return res;
      } else {
        throw new Error(msg);
      }
    };
  };
  
  module.exports = deleteProduct;
  