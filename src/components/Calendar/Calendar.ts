import Component from '../../core/Component';

import Controller from './Controller';

export interface CalendarState {
  view: Date;
  select: Date;
}

export default class Calendar extends Component {
  // state: { view: Date, select: Date }
  $controller: Component;
  state: CalendarState;
  constructor({ $parent, initState }) {
    super({ tag: 'div', $parent, initState });
    this.$target.classList.add('calendar__container');
  }

  setup() {
    this.$controller = new Controller({
      $parent: this.$target,
      initState: { year: this.state.view.getFullYear(), month: this.state.view.getMonth() },
    });
  }

  setState(nextState: CalendarState): void {
    this.state = nextState;
    this.$controller.setState({
      year: nextState.view.getFullYear(),
      month: nextState.view.getMonth(),
    });
  }
}
