module.exports = {
    run: async (client, query) => {
        const Cleverbot = require('cleverbot');
 
        let clev = new Cleverbot({
            key: client.config.cleverbotKey
        });
        
        
        clev.query(query)
        .then(function (response) {
          return response.output;
         
          clev.query(response.output, {
            cs: response.cs
          })
          .then(function (response2) {
            return response2.output;
          });
         
        });
    }
}