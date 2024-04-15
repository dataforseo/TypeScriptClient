**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IPageTiming

# Interface: IPageTiming

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### connection\_time?

> **`optional`** **connection\_time**: `number`

time to connect to a server
the time it takes until the connection with a server is established (in milliseconds)

#### Source

main.ts:150137

***

### dom\_complete?

> **`optional`** **dom\_complete**: `number`

time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds)

#### Source

main.ts:150128

***

### download\_time?

> **`optional`** **download\_time**: `number`

time it takes for a browser to receive a response (in milliseconds)

#### Source

main.ts:150147

***

### duration\_time?

> **`optional`** **duration\_time**: `number`

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Source

main.ts:150149

***

### fetch\_end?

> **`optional`** **fetch\_end**: `number`

time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page

#### Source

main.ts:150155

***

### fetch\_start?

> **`optional`** **fetch\_start**: `number`

time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page

#### Source

main.ts:150152

***

### first\_input\_delay?

> **`optional`** **first\_input\_delay**: `number`

Core Web Vitals metric indicating the responsiveness of a page
The time (in milliseconds) from when a user first interacts with your page to the time when the browser responds to that interaction. Learn more.

#### Source

main.ts:150134

***

### largest\_contentful\_paint?

> **`optional`** **largest\_contentful\_paint**: `number`

Core Web Vitals metric measuring how fast the largest above-the-fold content element is displayed
The amount of time (in milliseconds) to render the largest content element visible in the viewport, from when the user requests the URL. Learn more.

#### Source

main.ts:150131

***

### request\_sent\_time?

> **`optional`** **request\_sent\_time**: `number`

time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds)

#### Source

main.ts:150143

***

### time\_to\_interactive?

> **`optional`** **time\_to\_interactive**: `number`

Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds)

#### Source

main.ts:150125

***

### time\_to\_secure\_connection?

> **`optional`** **time\_to\_secure\_connection**: `number`

time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds)

#### Source

main.ts:150140

***

### waiting\_time?

> **`optional`** **waiting\_time**: `number`

time to first byte (TTFB) in milliseconds

#### Source

main.ts:150145
