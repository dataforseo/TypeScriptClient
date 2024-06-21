**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOnPageWaterfallItem

# Interface: IOnPageWaterfallItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### connection\_time?

> **`optional`** **connection\_time**: `number`

time to connect to a server
the time it takes until the connection with a server is established (in milliseconds)

#### Source

main.ts:158271

***

### dom\_complete?

> **`optional`** **dom\_complete**: `number`

time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds)

#### Source

main.ts:158268

***

### download\_time?

> **`optional`** **download\_time**: `number`

time it takes for a browser to receive a response (in milliseconds)

#### Source

main.ts:158281

***

### duration\_time?

> **`optional`** **duration\_time**: `number`

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Source

main.ts:158283

***

### fetch\_end?

> **`optional`** **fetch\_end**: `number`

time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page

#### Source

main.ts:158289

***

### fetch\_start?

> **`optional`** **fetch\_start**: `number`

time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page

#### Source

main.ts:158286

***

### page\_url?

> **`optional`** **page\_url**: `string`

URL of the page

#### Source

main.ts:158262

***

### request\_sent\_time?

> **`optional`** **request\_sent\_time**: `number`

time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds)

#### Source

main.ts:158277

***

### resources?

> **`optional`** **resources**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

resource-specific timing
contains separate arrays with timing for each resource found on the page

#### Source

main.ts:158292

***

### time\_to\_interactive?

> **`optional`** **time\_to\_interactive**: `number`

Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds)

#### Source

main.ts:158265

***

### time\_to\_secure\_connection?

> **`optional`** **time\_to\_secure\_connection**: `number`

time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds)

#### Source

main.ts:158274

***

### waiting\_time?

> **`optional`** **waiting\_time**: `number`

time to first byte (TTFB) in milliseconds

#### Source

main.ts:158279
