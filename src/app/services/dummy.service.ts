import { Injectable } from '@angular/core';
import * as fs from 'fs';

@Injectable()
export class DummyService {

  constructor() {
      this.listTemp();
  }

  listTemp() {
    const names = [];
//    window.require('fs').readdirSync('/tmp').forEach(file => {
    fs.readdirSync('/tmp').forEach(file => {
      names.push(file);
    });
    console.log('temp contents', names);
  }
}
