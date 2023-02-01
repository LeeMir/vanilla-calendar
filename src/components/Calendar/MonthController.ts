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
      <button class="calendar__month-controller__btn calendar__month-controller__btn--left">
        <img src=${LeftIcon} />
      </button>
      <button class="calendar__month-controller__title">
        ${MONTH[this.state.month]} ${this.state.year}
      </button>
      <button class="calendar__month-controller__btn calendar__month-controller__btn--right">
        <img src=${RightIcon} />
      </button>
    `;
  }
}
