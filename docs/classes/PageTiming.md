[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / PageTiming

# Class: PageTiming

## Implements

- [`IPageTiming`](../interfaces/IPageTiming.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PageTiming()

> **new PageTiming**(`data`?): [`PageTiming`](PageTiming.md)

#### Parameters

• **data?**: [`IPageTiming`](../interfaces/IPageTiming.md)

#### Returns

[`PageTiming`](PageTiming.md)

#### Defined in

main.ts:157867

## Properties

### connection\_time?

> `optional` **connection\_time**: `number`

time to connect to a server
the time it takes until the connection with a server is established (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`connection_time`](../interfaces/IPageTiming.md#connection_time)

#### Defined in

main.ts:157845

***

### dom\_complete?

> `optional` **dom\_complete**: `number`

time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`dom_complete`](../interfaces/IPageTiming.md#dom_complete)

#### Defined in

main.ts:157836

***

### download\_time?

> `optional` **download\_time**: `number`

time it takes for a browser to receive a response (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`download_time`](../interfaces/IPageTiming.md#download_time)

#### Defined in

main.ts:157855

***

### duration\_time?

> `optional` **duration\_time**: `number`

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`duration_time`](../interfaces/IPageTiming.md#duration_time)

#### Defined in

main.ts:157857

***

### fetch\_end?

> `optional` **fetch\_end**: `number`

time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`fetch_end`](../interfaces/IPageTiming.md#fetch_end)

#### Defined in

main.ts:157863

***

### fetch\_start?

> `optional` **fetch\_start**: `number`

time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`fetch_start`](../interfaces/IPageTiming.md#fetch_start)

#### Defined in

main.ts:157860

***

### first\_input\_delay?

> `optional` **first\_input\_delay**: `number`

Core Web Vitals metric indicating the responsiveness of a page
The time (in milliseconds) from when a user first interacts with your page to the time when the browser responds to that interaction. Learn more.

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`first_input_delay`](../interfaces/IPageTiming.md#first_input_delay)

#### Defined in

main.ts:157842

***

### largest\_contentful\_paint?

> `optional` **largest\_contentful\_paint**: `number`

Core Web Vitals metric measuring how fast the largest above-the-fold content element is displayed
The amount of time (in milliseconds) to render the largest content element visible in the viewport, from when the user requests the URL. Learn more.

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`largest_contentful_paint`](../interfaces/IPageTiming.md#largest_contentful_paint)

#### Defined in

main.ts:157839

***

### request\_sent\_time?

> `optional` **request\_sent\_time**: `number`

time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`request_sent_time`](../interfaces/IPageTiming.md#request_sent_time)

#### Defined in

main.ts:157851

***

### time\_to\_interactive?

> `optional` **time\_to\_interactive**: `number`

Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`time_to_interactive`](../interfaces/IPageTiming.md#time_to_interactive)

#### Defined in

main.ts:157833

***

### time\_to\_secure\_connection?

> `optional` **time\_to\_secure\_connection**: `number`

time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds)

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`time_to_secure_connection`](../interfaces/IPageTiming.md#time_to_secure_connection)

#### Defined in

main.ts:157848

***

### waiting\_time?

> `optional` **waiting\_time**: `number`

time to first byte (TTFB) in milliseconds

#### Implementation of

[`IPageTiming`](../interfaces/IPageTiming.md).[`waiting_time`](../interfaces/IPageTiming.md#waiting_time)

#### Defined in

main.ts:157853

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:157876

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:157904

***

### fromJS()

> `static` **fromJS**(`data`): [`PageTiming`](PageTiming.md)

#### Parameters

• **data**: `any`

#### Returns

[`PageTiming`](PageTiming.md)

#### Defined in

main.ts:157897
