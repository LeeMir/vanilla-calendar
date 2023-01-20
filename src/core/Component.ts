interface IComponent {
  tag: string;
  $parent: Element;
  initState?: any;
}

export default class Component {
  $parent: Element;
  $target: Element;
  state: any;

  constructor({ tag, $parent, initState }: IComponent) {
    this.$target = document.createElement(tag);
    this.$parent = $parent;
    this.state = initState ?? '';
    $parent.appendChild(this.$target);
    this.init();
  }

  setState(nextState: any) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  /**
   * 생성 이후 최초 실행
   */
  init() {
    this.render();
    this.setup();
  }

  /**
   * child component 생성
   */
  setup() {}

  /**
   * 현재 컴포넌트의 innerHTML이 될 template literal 작성
   */
  template() {
    return '';
  }

  /**
   * template literal 연결
   */
  render() {
    this.$target.innerHTML = this.template();
  }
}
