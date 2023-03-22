import fs from 'fs';
import path from 'path';
import webpackPaths from '../configs/webpack.paths';

const deleteStarJsMapFiles = (directory) => {
  const starJsMapRegex = /[.]js[.]map$/;
  fs.readdirSync(directory)
    .filter((f) => starJsMapRegex.test(f))
    .map((f) => fs.unlinkSync(path.join(directory, f)));
};

export default function deleteSourceMaps() {
  if (fs.existsSync(webpackPaths.distMainPath)) {
    deleteStarJsMapFiles(webpackPaths.distMainPath);
  }
  if (fs.existsSync(webpackPaths.distRendererPath)) {
    deleteStarJsMapFiles(webpackPaths.distRendererPath);
  }
}
