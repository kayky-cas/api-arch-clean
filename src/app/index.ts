import express, { Application } from 'express';
import HttpConfigure from '../http/configure';

class App {
  private app: Application;

  constructor(private Controllers: any[]) {
    this.app = express();
  }

  run() {
    const configure = new HttpConfigure(this.app);

    const runableApp = configure.addMultiplesControllers(this.Controllers);

    runableApp.listen(3000);
  }
}

export default App;
