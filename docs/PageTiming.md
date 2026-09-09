# PageTiming

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**time_to_interactive** | **number** | Time To Interactive (TTI) metricthe time it takes until the user can interact with a page (in milliseconds) |[optional]|
**dom_complete** | **number** | time to load resourcesthe time it takes until the page and all of its subresources are downloaded (in milliseconds) |[optional]|
**largest_contentful_paint** | **number** | Core Web Vitals metric measuring how fast the largest above-the-fold content element is displayedThe amount of time (in milliseconds) to render the largest content element visible in the viewport, from when the user requests the URL. Learn more. |[optional]|
**first_input_delay** | **number** | Core Web Vitals metric indicating the responsiveness of a pageThe time (in milliseconds) from when a user first interacts with your page to the time when the browser responds to that interaction. Learn more. |[optional]|
**connection_time** | **number** | time to connect to a serverthe time it takes until the connection with a server is established (in milliseconds) |[optional]|
**time_to_secure_connection** | **number** | time to establish a secure connectionthe time it takes until the secure connection with a server is established (in milliseconds) |[optional]|
**request_sent_time** | **number** | time to send a request to a serverthe time it takes until the request to a server is sent (in milliseconds) |[optional]|
**waiting_time** | **number** | time to first byte (TTFB) in milliseconds |[optional]|
**download_time** | **number** | time it takes for a browser to receive a response (in milliseconds) |[optional]|
**duration_time** | **number** | total time it takes until a browser receives a complete response from a server (in milliseconds) |[optional]|
**fetch_start** | **number** | time to start downloading the HTML resourcethe amount of time the browser needs to start downloading a page |[optional]|
**fetch_end** | **number** | time to complete downloading the HTML resourcethe amount of time the browser needs to complete downloading a page |[optional]|