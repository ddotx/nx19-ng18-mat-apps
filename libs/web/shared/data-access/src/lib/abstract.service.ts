export abstract class AbstractService {
  constructor() {
    console.log('AbstractService.constructor');
  }

  list() {
    this.get()
  }

  abstract get(): void;





}
