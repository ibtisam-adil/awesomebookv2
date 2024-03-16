// eslint-disable-next-line no-unused-vars
import { DateTime } from 'https://cdn.skypack.dev/luxon';
import { datetime } from './navigation.js';

const dt = DateTime.now();

function displaydatetime() {
  datetime.innerHTML = `
    <p class="date-p">${dt.toLocaleString(DateTime.DATETIME_MED)}</p>
  `;
}

displaydatetime();
