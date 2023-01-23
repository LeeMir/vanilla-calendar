import { firstDateOfMonth, getYYYYMMDD, isSameDate, lastDateOfMonth } from '../../utils/date';
import Component from '../../core/Component';

interface DayTableState {
  view: Date;
  select: Date;
}

export default class DayTable extends Component {
  state: DayTableState;

  constructor({ $parent, initState }) {
    super({ tag: 'table', $parent, initState });
    this.$target.classList.add('calendar__table__container');
  }

  template() {
    const firstDate = firstDateOfMonth(this.state.view);
    const lastDate = lastDateOfMonth(this.state.view);

    const dateCells = () => {
      let html = '';
      let flag = false;
      let datePtr = firstDateOfMonth(this.state.view);
      const today = new Date();
      for (let i = 0; i < 6; i++) {
        html += '<tr class="calendar__table__row">';
        for (let j = 0; j < 7; j++) {
          if (i === 0 && !flag && j === firstDate.getDay()) {
            flag = true;
          }

          if (datePtr.getDate() === lastDate.getDate()) {
            flag = false;
          }

          if (flag) {
            const YYYYMMDD = getYYYYMMDD(datePtr);
            let className = 'calendar__table__cell';

            if (isSameDate(datePtr, today)) {
              className += ' calendar__table__cell--today';
            }

            if (isSameDate(datePtr, this.state.select)) {
              className += ' calendar__table__cell--selected';
            }

            html += `<td class="${className}" data-date=${YYYYMMDD}>${datePtr.getDate()}</td>`;
          } else {
            html += '<td></td>';
          }

          if (flag) {
            datePtr.setDate(datePtr.getDate() + 1);
          }
        }
        html += '</tr>';
      }
      return html;
    };

    const header = `
      <thead>
        <tr>
          <th>S</th>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>T</th>
          <th>F</th>
          <th>S</th>
        </tr>
      </thead>`;

    const body = `
      <tbody>
        ${dateCells()}
      </tbody>
    `;

    return header + body;
  }
}
