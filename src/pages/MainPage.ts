import { nextMonth, prevMonth } from '../utils/date';
import Page from '../core/Page';
import Component from '../core/Component';
import Calendar, { CalendarState } from '../components/Calendar/Calendar';

interface MainPageState {
  calendar: CalendarState;
}

export default class MainPage extends Page {
  $calendar: Component;
  state: MainPageState;

  constructor({ $root }) {
    super({ $root });
  }

  setup() {
    this.state = { calendar: { view: new Date(), select: new Date() } };
    this.$calendar = new Calendar({
      $parent: this.$target,
      initState: this.state.calendar,
    });
  }

  setState(nextState: MainPageState): void {
    this.state = nextState;
    this.$calendar.setState(nextState.calendar);
  }

  setEvent() {
    this.$target.addEventListener('click', (e) => {
      const clickedElement = e.target as HTMLElement;
      const targetElement =
        clickedElement.tagName.toLowerCase() === 'img'
          ? clickedElement.parentElement!
          : clickedElement;

      const tagName = targetElement.tagName;
      const classList = targetElement.classList;

      if (classList.contains('calendar__controller__btn--left')) {
        const nextCalendar = { ...this.state.calendar, view: prevMonth(this.state.calendar.view) };
        this.setState({ ...this.state, calendar: nextCalendar });
      }

      if (classList.contains('calendar__controller__btn--right')) {
        const nextCalendar = { ...this.state.calendar, view: nextMonth(this.state.calendar.view) };
        this.setState({ ...this.state, calendar: nextCalendar });
      }
    });
  }
}
