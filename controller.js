import KafkaConfig from "./config.js";

const sendMessageToKafka = async (req, res) => {
  try {

    const aver = JSON.stringify(req.body);
    console.log(req.body);
    console.log("MISFITS" + aver);
    const { message } = req.body;
    

    const kafkaConfig = new KafkaConfig();
    const messages = [{ key: "key1", value: message }];
    kafkaConfig.produce("my-topic", messages);

    res.status(200).json({
      status: "Ok!",
      message: "Mensaje Enviado A Kafka",
    });
  } catch (error) {
    console.log(error);
  }
};

const constrollers = { sendMessageToKafka };

export default constrollers;