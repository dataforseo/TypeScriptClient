**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PageTiming

# Class: PageTiming

## Implements

- [`IPageTiming`](../interfaces/IPageTiming.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PageTiming(data)

> **new PageTiming**(`data`?): [`PageTiming`](PageTiming.md)

#### Parameters

• **data?**: [`IPageTiming`](../interfaces/IPageTiming.md)

#### Returns

[`PageTiming`](PageTiming.md)

#### Source

main.ts:153172

## Properties

### connection\_time?

> **`optional`** **connection\_time**: `number`

time to connect to a server
the time it takes until the connection with a server is established (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`connection_time`](../interfaces/IPageTiming.md#connection_time)

#### Source

main.ts:153150

***

### dom\_complete?

> **`optional`** **dom\_complete**: `number`

time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`dom_complete`](../interfaces/IPageTiming.md#dom_complete)

#### Source

main.ts:153141

***

### download\_time?

> **`optional`** **download\_time**: `number`

time it takes for a browser to receive a response (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`download_time`](../interfaces/IPageTiming.md#download_time)

#### Source

main.ts:153160

***

### duration\_time?

> **`optional`** **duration\_time**: `number`

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`duration_time`](../interfaces/IPageTiming.md#duration_time)

#### Source

main.ts:153162

***

### fetch\_end?

> **`optional`** **fetch\_end**: `number`

time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`fetch_end`](../interfaces/IPageTiming.md#fetch_end)

#### Source

main.ts:153168

***

### fetch\_start?

> **`optional`** **fetch\_start**: `number`

time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`fetch_start`](../interfaces/IPageTiming.md#fetch_start)

#### Source

main.ts:153165

***

### first\_input\_delay?

> **`optional`** **first\_input\_delay**: `number`

Core Web Vitals metric indicating the responsiveness of a page
The time (in milliseconds) from when a user first interacts with your page to the time when the browser responds to that interaction. Learn more.

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`first_input_delay`](../interfaces/IPageTiming.md#first_input_delay)

#### Source

main.ts:153147

***

### largest\_contentful\_paint?

> **`optional`** **largest\_contentful\_paint**: `number`

Core Web Vitals metric measuring how fast the largest above-the-fold content element is displayed
The amount of time (in milliseconds) to render the largest content element visible in the viewport, from when the user requests the URL. Learn more.

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`largest_contentful_paint`](../interfaces/IPageTiming.md#largest_contentful_paint)

#### Source

main.ts:153144

***

### request\_sent\_time?

> **`optional`** **request\_sent\_time**: `number`

time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`request_sent_time`](../interfaces/IPageTiming.md#request_sent_time)

#### Source

main.ts:153156

***

### time\_to\_interactive?

> **`optional`** **time\_to\_interactive**: `number`

Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`time_to_interactive`](../interfaces/IPageTiming.md#time_to_interactive)

#### Source

main.ts:153138

***

### time\_to\_secure\_connection?

> **`optional`** **time\_to\_secure\_connection**: `number`

time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`time_to_secure_connection`](../interfaces/IPageTiming.md#time_to_secure_connection)

#### Source

main.ts:153153

***

### waiting\_time?

> **`optional`** **waiting\_time**: `number`

time to first byte (TTFB) in milliseconds

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`waiting_time`](../interfaces/IPageTiming.md#waiting_time)

#### Source

main.ts:153158

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:153181

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:153209

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PageTiming`](PageTiming.md)

#### Parameters

• **data**: `any`

#### Returns

[`PageTiming`](PageTiming.md)

#### Source

main.ts:153202
