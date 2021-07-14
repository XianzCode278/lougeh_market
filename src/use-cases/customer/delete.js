const deleteCustomer = ({ customerDB }) => {
    return async function select(info) {
      const { id } = info;
  
      // delete query
      const res = await customerDB.querydeleteCustomer({ id });
      let msg = `ERROR ENCOUNTER DURING THE PROCESS PLS TRY AGAIN.`;
      if (res) {
         msg = `DELETED SUCCESSFULLY.`;
        return res;
      } else {
        throw new Error(msg);
      }
    };
  };
  
  module.exports = deleteCustomer;
  