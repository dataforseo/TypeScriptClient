[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageWaterfallItem

# Class: OnPageWaterfallItem

## Implements

- [`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageWaterfallItem()

> **new OnPageWaterfallItem**(`data`?): [`OnPageWaterfallItem`](OnPageWaterfallItem.md)

#### Parameters

##### data?

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md)

#### Returns

[`OnPageWaterfallItem`](OnPageWaterfallItem.md)

#### Defined in

main.ts:170738

## Properties

### connection\_time?

> `optional` **connection\_time**: `number`

time to connect to a server
the time it takes until the connection with a server is established (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`connection_time`](../interfaces/IOnPageWaterfallItem.md#connection_time)

#### Defined in

main.ts:170713

***

### dom\_complete?

> `optional` **dom\_complete**: `number`

time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`dom_complete`](../interfaces/IOnPageWaterfallItem.md#dom_complete)

#### Defined in

main.ts:170710

***

### download\_time?

> `optional` **download\_time**: `number`

time it takes for a browser to receive a response (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`download_time`](../interfaces/IOnPageWaterfallItem.md#download_time)

#### Defined in

main.ts:170723

***

### duration\_time?

> `optional` **duration\_time**: `number`

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`duration_time`](../interfaces/IOnPageWaterfallItem.md#duration_time)

#### Defined in

main.ts:170725

***

### fetch\_end?

> `optional` **fetch\_end**: `number`

time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`fetch_end`](../interfaces/IOnPageWaterfallItem.md#fetch_end)

#### Defined in

main.ts:170731

***

### fetch\_start?

> `optional` **fetch\_start**: `number`

time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`fetch_start`](../interfaces/IOnPageWaterfallItem.md#fetch_start)

#### Defined in

main.ts:170728

***

### page\_url?

> `optional` **page\_url**: `string`

URL of the page

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`page_url`](../interfaces/IOnPageWaterfallItem.md#page_url)

#### Defined in

main.ts:170704

***

### request\_sent\_time?

> `optional` **request\_sent\_time**: `number`

time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`request_sent_time`](../interfaces/IOnPageWaterfallItem.md#request_sent_time)

#### Defined in

main.ts:170719

***

### resources?

> `optional` **resources**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

resource-specific timing
contains separate arrays with timing for each resource found on the page

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`resources`](../interfaces/IOnPageWaterfallItem.md#resources)

#### Defined in

main.ts:170734

***

### time\_to\_interactive?

> `optional` **time\_to\_interactive**: `number`

Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`time_to_interactive`](../interfaces/IOnPageWaterfallItem.md#time_to_interactive)

#### Defined in

main.ts:170707

***

### time\_to\_secure\_connection?

> `optional` **time\_to\_secure\_connection**: `number`

time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`time_to_secure_connection`](../interfaces/IOnPageWaterfallItem.md#time_to_secure_connection)

#### Defined in

main.ts:170716

***

### waiting\_time?

> `optional` **waiting\_time**: `number`

time to first byte (TTFB) in milliseconds

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`waiting_time`](../interfaces/IOnPageWaterfallItem.md#waiting_time)

#### Defined in

main.ts:170721

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:170747

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:170779

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageWaterfallItem`](OnPageWaterfallItem.md)

#### Parameters

##### data

`any`

#### Returns

[`OnPageWaterfallItem`](OnPageWaterfallItem.md)

#### Defined in

main.ts:170772
