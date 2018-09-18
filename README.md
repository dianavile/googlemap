# googlemap

This will be the Project README.
Untill ready, I will use it as a checklist for Project Requirements

## Install Create React App 
- [X] Install Create React App 

## Documentation
- [] README file included. It details all the steps required to successfully run the application.
- [X] Comments are available.
- [X] Comments effectively explain longer code procedures

## Single Page Application 
- [X] Handle navigation in-page
- [X] Load page only once
- [] Manage all links and form submission through AJAX requests in the background
- [] Changes to the page, URL address updates are handled by JavaScript.
 
## Application Architecture
- [] Proper Use of React: React code follows a reasonable component structure
- [] State control is managed appropriately: event handlers are passed as props to child components.
- [] The state is managed by parent component functions when appropriate
- [X] 5 locations: There are at least 5 locations in the modal
- [] These 5 locations in modal are hard-coded or retrieved from a data API.
 
## Components-App Functionality
### Location filter
- [X] Include a text input field or drop-down menu
- [] This filters the map markers to location matching the text input or selection.
- [] This filter the list items to location matching the text input or selection.
- [] Filter function runs error free

### List View
- [] A listview of location names is provided.
- [] The list view displays all locations by default
- [] The list view displays a filtered subset of locations if the filter is applied.
- [] Click a location on the list displays unique info about location.
- [] Click location animates associated map marker (ex: bouncing, colour change)
- [] List functionality is responsive
- [] List function runs error free

### Map & Markers
- [] The map displays all location markers by default
- [] The map displays filtered subset location markers if a filter is applied
- [] Click marker displays unique info about the location on the page (modal, separate div, inside info window).
- [] All (additional) custom functionality provided in-app functions run error-free
 
## Asynchronous Data Usage
### Asynchronous API requests: App utilize Google Maps API or another mapping system 
- [] The app utilizes at least one non-Google third-party API. 
- [] The app utilizes the Refer to this documentation
- [] All data requests are retrieved in an asynchronous manner using Fetch API or XML HttpRequest.

## Error Handling
- [] Failing Data request is handled gracefully with common fallback techniques (AJAX error or fail methods)
“Gratefully” means the user is not left wondering why a component is not working.
- [] If an API  does not load, a visible indication is available on the page, showing that it did not load. 

## Location Details functionality
### Additional Location Data
- [] Functionality provides additional data about location, sourced from a 3rd party API.
- [] Information is a provider in the marker´s info window, or in an HTML element in the DOM(sidebar, list view, modal.)
- [X] Provide attribution for the source of additional data. Ex. if foursquare (indicate in User Interface(UI)&README Foursquare data.

## Error Free
- [X]The app runs without console errors

## Usability
- [] Functionality is presented in a usable and responsive manner.

## Interface Design
### Responsiveness: All application components render on-screen in a responsive manner.
- [] mobile
- [] tablet
- [] desktop

### Usability: All application components are usable across modern desktop, tablet and phone browsers.
- [] Mobile A11y 
- [] Tablet A11y
- [] Desktop A11y

## Accessibility
### Focus
- [] The focus is appropriately managed, allowing users to noticeable tab through each of the important page elements.
- [] Modal or intersitial windows appropriately lock focus
### Semantic site elements 
- [] Page elements use the appropriated semantic elements. 
- [] For elements, in which semantic elements are not available, appropriate ARIA roles are defined.
### Images accessible 
- [] All content related images include appropriate alternate text that clearly describes the content of the image.

## Offline Use
### Service Worker
- [X] When available in the browser, the site uses a service worker to cache responses to requests for site assets.
- [] Visited pages are rendered when there is no network access.
