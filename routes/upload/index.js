'use strict'
const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');
const util = require('util');
const { PrismaClient } = require ('@prisma/client');


module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
        const db = new PrismaClient();

        const data = await request.file();
        const filePath = path.join(__dirname, '../../uploads', data.filename);
        const writeStream = fs.createWriteStream(filePath);

        pipeline(data.file, writeStream, (err) => {console.log(err)});

        const result = await db.fileUpdate.create({data:{path: filePath}})
        console.log("result" , result);
        reply.send({ status: 'ok', savedAs: filePath });
  })
}
