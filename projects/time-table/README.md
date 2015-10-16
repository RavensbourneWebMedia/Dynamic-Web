
The [Rave Timetable feed](http://timetablefeed.rave.ac.uk/) produces `.ics` files (iCal format), which URLs look like this: `timetablefeed.rave.ac.uk/ical/GM1YUJRK414U/schedule.ics`

The issue is that such addresses don't seem to predictable (and therefore programmable). Ideally we'd have URLs that use our staff/student id, like `timetablefeed.rave.ac.uk/ical/mmenapace/schedule.ics` or `timetablefeed.rave.ac.uk/ical/95782112/schedule.ics`. That is, the unique bit in those URLs would be **mmenapace** (or my staff id **95782112**) instead of **GM1YUJRK414U**, which looks like a randomly generated code.

According to [Celcat](http://www.celcat.com/solutions/publication/web-publisher), their software can publish timetables both in PDF and HTML format. We want HTML, unless by HTML they mean a page that embeds a PDF document (eg [this](http://timetable.rave.ac.uk/g1359.html))

### Tools

* JS: [ical2json](https://www.npmjs.com/package/ical2json), a node package to convert ical to JSON
* JS: [ical.js](https://github.com/mozilla-comm/ical.js) from Mozilla!
* PHP: [CalFileParser](https://github.com/controlz/CalFileParser)
