[**Documentation**](../README.md)

***

[Documentation](../README.md) / IPageTiming

# Interface: IPageTiming

Defined in: main.ts:166684

## Indexable

\[`key`: `string`\]: `any`

## Properties

### connection\_time?

> `optional` **connection\_time**: `number`

Defined in: main.ts:166699

time to connect to a server
the time it takes until the connection with a server is established (in milliseconds)

***

### dom\_complete?

> `optional` **dom\_complete**: `number`

Defined in: main.ts:166690

time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds)

***

### download\_time?

> `optional` **download\_time**: `number`

Defined in: main.ts:166709

time it takes for a browser to receive a response (in milliseconds)

***

### duration\_time?

> `optional` **duration\_time**: `number`

Defined in: main.ts:166711

total time it takes until a browser receives a complete response from a server (in milliseconds)

***

### fetch\_end?

> `optional` **fetch\_end**: `number`

Defined in: main.ts:166717

time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page

***

### fetch\_start?

> `optional` **fetch\_start**: `number`

Defined in: main.ts:166714

time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page

***

### first\_input\_delay?

> `optional` **first\_input\_delay**: `number`

Defined in: main.ts:166696

Core Web Vitals metric indicating the responsiveness of a page
The time (in milliseconds) from when a user first interacts with your page to the time when the browser responds to that interaction. Learn more.

***

### largest\_contentful\_paint?

> `optional` **largest\_contentful\_paint**: `number`

Defined in: main.ts:166693

Core Web Vitals metric measuring how fast the largest above-the-fold content element is displayed
The amount of time (in milliseconds) to render the largest content element visible in the viewport, from when the user requests the URL. Learn more.

***

### request\_sent\_time?

> `optional` **request\_sent\_time**: `number`

Defined in: main.ts:166705

time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds)

***

### time\_to\_interactive?

> `optional` **time\_to\_interactive**: `number`

Defined in: main.ts:166687

Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds)

***

### time\_to\_secure\_connection?

> `optional` **time\_to\_secure\_connection**: `number`

Defined in: main.ts:166702

time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds)

***

### waiting\_time?

> `optional` **waiting\_time**: `number`

Defined in: main.ts:166707

time to first byte (TTFB) in milliseconds
