Tips for updating content files (schedule.json or html pages)

When adding a new session to schedule.json, add the "class-id" of new session to "active-classes” property at the top of the json. If id of a session is not set in this property we consider that session to be inactive and hence won’t show it on homepage.

When creating a class page for a new session, use the "class-id" of session for name of class page. For example if class-id is "hatha-at-yogaraum", then class page should be named "hatha-at-yogaraum.html".
