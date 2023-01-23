import Component from '../../core/Component';
import { MONTH } from '../../constants/date';
import RightIcon from '../../assets/icons/icon-chevron-right.svg';
import LeftIcon from '../../assets/icons/icon-chevron-left.svg';

interface MonthControllerState {
  year: number;
  month: number;
}

export default class MonthController extends Component {
  state: MonthControllerState;

  constructor({ $parent, initState }) {
    super({ tag: 'div', $parent, initState });
    this.$target.classList.add('calendar__month-controller__container');
  }

  template() {
    return `
      <button class="calendar__month-controller__btn calendar__controller__btn--left">
        <img src=${LeftIcon} />
      </button>
      <span>${MONTH[this.state.month]} ${this.state.year}</span>
      <button class="calendar__month-controller__btn calendar__controller__btn--right">
        <img src=${RightIcon} />
      </button>
    `;
  }
}
