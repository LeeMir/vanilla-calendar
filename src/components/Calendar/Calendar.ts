import Component from '../../core/Component';

import MonthController from './MonthController';
import DayTable from './DayTable';

export interface CalendarState {
  view: Date;
  select: Date;
}

export default class Calendar extends Component {
  $controller: Component;
  $table: Component;
  state: CalendarState;
  constructor({ $parent, initState }) {
    super({ tag: 'div', $parent, initState });
    this.$target.classList.add('calendar__container');
  }

  setup() {
    this.$controller = new MonthController({
      $parent: this.$target,
      initState: { year: this.state.view.getFullYear(), month: this.state.view.getMonth() },
    });
    this.$table = new DayTable({
      $parent: this.$target,
      initState: this.state,
    });
  }

  setState(nextState: CalendarState): void {
    this.state = nextState;
    this.$controller.setState({
      year: nextState.view.getFullYear(),
      month: nextState.view.getMonth(),
    });
    this.$table.setState(nextState);
  }
}
