# Feedreader Test Suite Overview

The feedreader is a web application left to us by a former employees that reads RSS feeds. The feeds are specified in the 'js/app.js' in the 'allFeeds' variable. Tests are specified in 'jasmine/spec/feedreader.js' but are incomplete due to the early departure of the former employee.

# Tests Completions

After examining the existing code the following tests were added:
* A test that checks all elements of 'allFeeds' for defined & non-empty URL
* A test that checks all elements of 'allFeeds' for defined & non-empty name
* A test to ensure that the menu is hidden by default
* A test to ensure that the visibility of the menu changes when the menu icon is clicked
* A test to ensure that there is at least one entry after the 'loadFeed' is called
* A test to ensure that the content changes when 'loadFeed' is called

# How to Run

* Download or clone the repository
* Open the main folder and open 'index.html' in a web browser
    * The test result should appear at the bottom of the page

## Notes

* 'jasmine/spec/feedreader.js' can be modified to add more tests
* 'js/app.js' can be modified to exercise the tests