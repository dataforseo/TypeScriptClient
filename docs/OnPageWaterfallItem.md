# OnPageWaterfallItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**page_url** | **string** | URL of the page |[optional]|
**time_to_interactive** | **number** | Time To Interactive (TTI) metric. the time it takes until the user can interact with a page (in milliseconds) |[optional]|
**dom_complete** | **number** | time to load resources. the time it takes until the page and all of its subresources are downloaded (in milliseconds) |[optional]|
**connection_time** | **number** | time to connect to a server. the time it takes until the connection with a server is established (in milliseconds) |[optional]|
**time_to_secure_connection** | **number** | time to establish a secure connection. the time it takes until the secure connection with a server is established (in milliseconds) |[optional]|
**request_sent_time** | **number** | time to send a request to a server. the time it takes until the request to a server is sent (in milliseconds) |[optional]|
**waiting_time** | **number** | time to first byte (TTFB) in milliseconds |[optional]|
**download_time** | **number** | time it takes for a browser to receive a response (in milliseconds) |[optional]|
**duration_time** | **number** | total time it takes until a browser receives a complete response from a server (in milliseconds) |[optional]|
**fetch_start** | **number** | time to start downloading the HTML resource. the amount of time the browser needs to start downloading a page |[optional]|
**fetch_end** | **number** | time to complete downloading the HTML resource. the amount of time the browser needs to complete downloading a page |[optional]|
**resources** | **WaterfallResourceInfo[]** | resource-specific timing. contains separate arrays with timing for each resource found on the page |[optional]|