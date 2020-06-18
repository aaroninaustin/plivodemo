const { Service } = require('feathers-nedb');
let plivo = require('plivo');
let client = new plivo.Client(process.env.PLIVO_ID, process.env.PLIVO_SECRET);
let plivoNumber = process.env.PLIVO_NUM;


exports.Messages = class Messages extends Service {

   async create (data, params){
        const phone = data.phone;
        const text = data.text;
        const time = data.createdAt;

        let smsdata = await client.messages.create(
            plivoNumber,
            phone,
            text
          ).then(function(message_created) {
            console.log(message_created);
            return message_created;
          });
          let messageData = {...smsdata, text, phone, time};

          return super.create(messageData, params);


      
      }
  
};
