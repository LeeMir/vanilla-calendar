import Page from '../core/Page';

export default class MainPage extends Page {
  constructor({ $root }) {
    super({ $root });
  }

  template(): string {
    return '<span>Calendar</span>';
  }
}
