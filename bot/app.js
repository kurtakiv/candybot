// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
const telegraf = require('telegraf');
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
let bot = new telegraf(`811224433:AAHV4v_LHyaR5WGQ-V18xoSyrr5Hnc2Lcvs`,{
    webhookReply: true
});

bot.hears('hi', ctx => {
    console.warn('===============', "dd")
    ctx.reply('Hey there!')
});

bot.on('text', (ctx) =>{
    ctx.reply('Hello World')});

bot.command('sraka', (ctx) => {
    console.warn("+++++++++++++");
    ctx.reply('Hello1')
});


exports.lambdaHandler = async (event, context,callback) => {
    response = {
        'statusCode': 200,
        'body': JSON.stringify({
            message: 'hello world 1',
            // location: ret.data.trim()
        })
    };

    try {
       await bot.handleUpdate(JSON.parse(event.body)).then(
            function (r) {
                console.warn('====', 'REQUEST')
            }
        ).catch(function (e) {
            console.warn('-------', e)
        })
    } catch (err) {
        console.log(err);
        callback(err)
    }
     callback(null,response)
    return  response;
};
