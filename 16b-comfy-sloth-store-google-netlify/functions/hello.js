// exports.handler = async function (event, context) {
//   return {
//     statusCode: 200,
//     body: "Hello world",
//   };
// };

const handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "Hello world",
  };
};

module.exports = { handler };
