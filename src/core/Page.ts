import Component from './Component';

interface IPage {
  $root: Element;
}

export default class Page extends Component {
  constructor({ $root }: IPage) {
    super({ tag: 'div', $parent: $root });
    this.$target.id = 'wrap';
  }
}
