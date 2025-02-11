[**Documentation**](../README.md)

***

[Documentation](../README.md) / PageTiming

# Class: PageTiming

Defined in: main.ts:166588

## Implements

- [`IPageTiming`](../interfaces/IPageTiming.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PageTiming()

> **new PageTiming**(`data`?): [`PageTiming`](PageTiming.md)

Defined in: main.ts:166625

#### Parameters

##### data?

[`IPageTiming`](../interfaces/IPageTiming.md)

#### Returns

[`PageTiming`](PageTiming.md)

## Properties

### connection\_time?

> `optional` **connection\_time**: `number`

Defined in: main.ts:166603

time to connect to a server
the time it takes until the connection with a server is established (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`connection_time`](../interfaces/IPageTiming.md#connection_time)

***

### dom\_complete?

> `optional` **dom\_complete**: `number`

Defined in: main.ts:166594

time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`dom_complete`](../interfaces/IPageTiming.md#dom_complete)

***

### download\_time?

> `optional` **download\_time**: `number`

Defined in: main.ts:166613

time it takes for a browser to receive a response (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`download_time`](../interfaces/IPageTiming.md#download_time)

***

### duration\_time?

> `optional` **duration\_time**: `number`

Defined in: main.ts:166615

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`duration_time`](../interfaces/IPageTiming.md#duration_time)

***

### fetch\_end?

> `optional` **fetch\_end**: `number`

Defined in: main.ts:166621

time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`fetch_end`](../interfaces/IPageTiming.md#fetch_end)

***

### fetch\_start?

> `optional` **fetch\_start**: `number`

Defined in: main.ts:166618

time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`fetch_start`](../interfaces/IPageTiming.md#fetch_start)

***

### first\_input\_delay?

> `optional` **first\_input\_delay**: `number`

Defined in: main.ts:166600

Core Web Vitals metric indicating the responsiveness of a page
The time (in milliseconds) from when a user first interacts with your page to the time when the browser responds to that interaction. Learn more.

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`first_input_delay`](../interfaces/IPageTiming.md#first_input_delay)

***

### largest\_contentful\_paint?

> `optional` **largest\_contentful\_paint**: `number`

Defined in: main.ts:166597

Core Web Vitals metric measuring how fast the largest above-the-fold content element is displayed
The amount of time (in milliseconds) to render the largest content element visible in the viewport, from when the user requests the URL. Learn more.

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`largest_contentful_paint`](../interfaces/IPageTiming.md#largest_contentful_paint)

***

### request\_sent\_time?

> `optional` **request\_sent\_time**: `number`

Defined in: main.ts:166609

time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`request_sent_time`](../interfaces/IPageTiming.md#request_sent_time)

***

### time\_to\_interactive?

> `optional` **time\_to\_interactive**: `number`

Defined in: main.ts:166591

Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`time_to_interactive`](../interfaces/IPageTiming.md#time_to_interactive)

***

### time\_to\_secure\_connection?

> `optional` **time\_to\_secure\_connection**: `number`

Defined in: main.ts:166606

time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`time_to_secure_connection`](../interfaces/IPageTiming.md#time_to_secure_connection)

***

### waiting\_time?

> `optional` **waiting\_time**: `number`

Defined in: main.ts:166611

time to first byte (TTFB) in milliseconds

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`waiting_time`](../interfaces/IPageTiming.md#waiting_time)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:166634

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:166662

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`PageTiming`](PageTiming.md)

Defined in: main.ts:166655

#### Parameters

##### data

`any`

#### Returns

[`PageTiming`](PageTiming.md)
