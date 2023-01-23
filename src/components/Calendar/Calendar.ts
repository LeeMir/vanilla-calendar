import Component from '../../core/Component';

import MonthController from './MonthController';
import DayTable from './DayTable';
import DayBoard from './DayBoard';

export interface CalendarState {
  view: Date;
  select: Date;
}

export default class Calendar extends Component {
  $controller: Component;
  $table: Component;
  $board: Component;

  state: CalendarState;
  constructor({ $parent, initState }) {
    super({ tag: 'div', $parent, initState });
    this.$target.classList.add('calendar__container');
  }

  setup() {
    this.$board = new DayBoard({
      $parent: this.$target,
      initState: { select: this.state.select },
    });

    const $main = document.createElement('div');
    $main.classList.add('calendar__main__container');

    this.$target.appendChild($main);

    this.$controller = new MonthController({
      $parent: $main,
      initState: { year: this.state.view.getFullYear(), month: this.state.view.getMonth() },
    });
    this.$table = new DayTable({
      $parent: $main,
      initState: this.state,
    });
  }

  setState(nextState: CalendarState): void {
    this.state = nextState;
    this.$board.setState({
      select: nextState.select,
    });
    this.$controller.setState({
      year: nextState.view.getFullYear(),
      month: nextState.view.getMonth(),
    });
    this.$table.setState(nextState);
  }
}
