
import { datetime } from "./navigation.js";
import { DateTime } from "https://cdn.skypack.dev/luxon";

const dt = DateTime.now();

function displaydatetime() {
  datetime.innerHTML = `
    <p class="date-p">${dt.toLocaleString(DateTime.DATETIME_MED)}</p>
  `;
}

displaydatetime();
