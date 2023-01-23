import Component from '../../core/Component';
import { DAY } from '../../constants/date';

export interface DayBoardState {
  select: Date;
}

export default class DayBoard extends Component {
  state: DayBoardState;
  constructor({ $parent, initState }) {
    super({ tag: 'div', $parent, initState });
    this.$target.classList.add('calendar__day-board__container');
  }

  template() {
    return `
      <span class="calendar__day-board__day-sign">${DAY[this.state.select.getDay()]}</span>
      <span class="calendar__day-board__date-sign">${this.state.select.getDate()}</span>
    `;
  }
}
