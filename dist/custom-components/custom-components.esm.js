import { p as patchBrowser, b as bootstrapLazy } from './index-4e3521db.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["date-picker",[[1,"date-picker",{"placeholder":[1],"startview":[1025],"value":[1032],"disable":[1028],"lock":[1028],"maxdatecurrent":[1028],"error":[1028],"selectedDate":[1028,"selected-date"],"nYearsVisible":[32],"currentYear":[32],"currentMonth":[32],"currentDay":[32],"arrayYears":[32],"arrayMonths":[32],"arrayDays":[32],"arrayDaysOfWeek":[32],"isDatepickerClosed":[32],"isPanelMultiYearClosed":[32],"isPanelYearClosed":[32],"isPanelMonthClosed":[32],"isPanelDaysClosed":[32],"selectMonth":[32],"selectYear":[32],"selectDay":[32],"widthComponent":[32]},[[0,"blur","handleBlur"],[0,"keydown","handleKeyDown"]]]]],["m-datepicker",[[0,"m-datepicker",{"label":[1],"placeholder":[1],"value":[1025],"disable":[1028],"lock":[1028],"error":[1028],"errortext":[1],"startview":[1025]}]]]], options);
});
