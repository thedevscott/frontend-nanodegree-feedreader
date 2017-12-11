/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page? The spec fails with message "RSS Feeds are defined"
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has URLs defined & URLs are not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed['url']).toBeDefined();
                expect(feed['url'].length).not.toBe(0);
            });
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has name defined & name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed['name']).toBeDefined();
                expect(feed['name'].length).not.toBe(0);
            });
        });
    });

    // Menu test suite
    describe("The Menu", function() {

        /* A test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it("is hidden by default", function() {
           let hiddenMenu = document.getElementsByClassName('menu-hidden');
           expect(hiddenMenu.length).not.toBe(0);
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it("changes visibility when menu icon clicked", function() {
            // Acquire the menu icon via JQuery and click it
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();

            // Get the 'menu-hidden' class and ensure that it si 0 (doesn't exist)
            var menuHidden = document.getElementsByClassName('menu-hidden');
            expect(menuHidden.length).toBe(0);

            // Click it again, recheck for the 'menu-hidden' class
            menuIcon.click();
            menuHidden = document.getElementsByClassName('menu-hidden');

            // Ensure that it is not 0
            expect(menuHidden.length).not.toBe(0);
          });
    });

    // Initial Entries test suite
    describe("Initial Entries", function() {

        beforeEach(function(done) {
            loadFeed(0,done);
        });

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it("has at least 1 entry", function(done) {
            expect($('.feed a article').hasClass('entry')).toBe(true);
            done();
        });
    });

    // New Feed Selection test suite
    describe("New Feed Selection", function() {

        // holds a snapshot of the page as it loads
        var snapshot = [];

        beforeEach(function(done) {
            // load the first two feeds and take snapshots
            loadFeed(0, function() {
                snapshot.push($('.feed').text());
            });

            loadFeed(1, function() {
                snapshot.push($('.feed').text());
                done();
            });
        });

        /* A test that ensures that when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it("has a new feed loaded", function(done) {
            expect(snapshot[0]).not.toBe(snapshot[1]);
            done();
        });
    });
}());
