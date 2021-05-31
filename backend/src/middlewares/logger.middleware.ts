import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { enable as enableColors } from 'colors';
import measure from '@utils/measure';

enableColors();
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const clock = measure();
    const lastSend = res.send;
    let sendData: any = null;

    const data = new Date();
    const dataFormatada = `${data.getDate().toString().padStart(2, '0')}/${data
      .getMonth()
      .toString()
      .padStart(2, '0')}/${data
      .getFullYear()
      .toString()
      .padStart(2, '0')} ${data.getHours().toString().padStart(2, '0')}:${data
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${data.getSeconds().toString().padStart(2, '0')}`;
    console.log(`${dataFormatada.cyan} ${req.method.green} ${req.url.dim}`);
    console.log('>  ' + 'Logs:'.yellow);
    res.send = (body = undefined) => {
      sendData = body;
      res.send = lastSend;
      return res.send(body);
    };
    res.addListener('finish', () => {
      console.log(
        '>  ' + 'Request:'.yellow,
        `\n>    ${'query: '.yellow + JSON.stringify(req.query).dim}`,
        `\n>    ${'body:  '.yellow + JSON.stringify(req.body).dim}`,
      );
      console.log(
        '>  ' + 'Response:'.yellow,
        `\n>    ${'data: '.yellow + JSON.stringify(sendData).dim}`,
      );
      console.log(
        `>    ${res.statusCode.toString().yellow} - ${
          (res.statusMessage ?? 'OK').dim
        }`,
      );
      console.log(`Tempo de execução: ${(clock() + 'ms').toString().yellow}\n`);
    });
    next();
  }
}
