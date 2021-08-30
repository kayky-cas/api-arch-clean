import App from './app';
import { imports } from './app/imports';

class Main {
  static start() {
    const app = new App(imports);
    app.run();
  }
}

Main.start();
