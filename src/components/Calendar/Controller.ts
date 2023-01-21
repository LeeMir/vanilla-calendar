import Component from '../../core/Component';
import { MONTH } from '../../constants/date';
import RightIcon from '../../assets/icons/icon-chevron-right.svg';
import LeftIcon from '../../assets/icons/icon-chevron-left.svg';

interface ControllerState {
  year: number;
  month: number;
}

export default class Controller extends Component {
  state: ControllerState;

  constructor({ $parent, initState }) {
    super({ tag: 'div', $parent, initState });
    this.$target.classList.add('calendar__controller__container');
  }

  template() {
    return `
      <button class="calendar__controller__btn calendar__controller__btn--left">
        <img src=${LeftIcon} />
      </button>
      <span>${MONTH[this.state.month]} ${this.state.year}</span>
      <button class="calendar__controller__btn calendar__controller__btn--right">
        <img src=${RightIcon} />
      </button>
    `;
  }
}
