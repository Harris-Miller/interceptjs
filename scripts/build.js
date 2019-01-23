import path from 'path';
import fs from 'fs-extra';
import webpack from 'webpack';
import config from '../config/webpack';

const buildPath = '../dist';

function copyFolder(folder, filter = () => true) {
  fs.copySync(folder, buildPath, {
    dereference: true,
    filter
  });
}

function copySingleFile(pathname, file) {
  fs.copyFileSync(path.resolve(pathname, file), buildPath, {
    dereference: true
  });
}
