import { JSDOM } from 'jsdom';
import superagent from 'superagent';
import fs from 'fs';


const fetchDocumentByUrl = async (url: string) => {
  const html = (await superagent.get(url)).text;
  fs.writeFileSync('html.txt', html);
  const {
    window: { document },
  } = new JSDOM(html);

  return document;
};

export { fetchDocumentByUrl };
