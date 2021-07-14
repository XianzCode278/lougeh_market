const deleteUser = ({ userDB }) => {
    return async function select(info) {
      const { id } = info;
  
      // delete query
      const res = await userDB.querydeleteUser({ id });
      let msg = `ERROR ENCOUNTER DURING THE PROCESS PLS TRY AGAIN.`;
      if (res) {
      //  msg = `DELETED SUCCESSFULLY.`;
        return res;
      } else {
        throw new Error(msg);
      }
    };
  };
  
  module.exports = deleteUser;
  