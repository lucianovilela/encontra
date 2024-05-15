'use strict'
const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');
const util = require('util');

const pump = util.promisify(pipeline);
module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
    const data = await request.file();
        const filePath = path.join(__dirname, '../../uploads', data.filename);
        const writeStream = fs.createWriteStream(filePath);

        pipeline(data.file, writeStream, (err) => {console.log(err)});

        reply.send({ status: 'ok', savedAs: filePath });
  })
}
