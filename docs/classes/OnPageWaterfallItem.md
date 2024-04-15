**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageWaterfallItem

# Class: OnPageWaterfallItem

## Implements

- [`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageWaterfallItem(data)

> **new OnPageWaterfallItem**(`data`?): [`OnPageWaterfallItem`](OnPageWaterfallItem.md)

#### Parameters

• **data?**: [`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md)

#### Returns

[`OnPageWaterfallItem`](OnPageWaterfallItem.md)

#### Source

main.ts:155332

## Properties

### connection\_time?

> **`optional`** **connection\_time**: `number`

time to connect to a server
the time it takes until the connection with a server is established (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`connection_time`](../interfaces/IOnPageWaterfallItem.md#connection_time)

#### Source

main.ts:155307

***

### dom\_complete?

> **`optional`** **dom\_complete**: `number`

time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`dom_complete`](../interfaces/IOnPageWaterfallItem.md#dom_complete)

#### Source

main.ts:155304

***

### download\_time?

> **`optional`** **download\_time**: `number`

time it takes for a browser to receive a response (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`download_time`](../interfaces/IOnPageWaterfallItem.md#download_time)

#### Source

main.ts:155317

***

### duration\_time?

> **`optional`** **duration\_time**: `number`

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`duration_time`](../interfaces/IOnPageWaterfallItem.md#duration_time)

#### Source

main.ts:155319

***

### fetch\_end?

> **`optional`** **fetch\_end**: `number`

time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`fetch_end`](../interfaces/IOnPageWaterfallItem.md#fetch_end)

#### Source

main.ts:155325

***

### fetch\_start?

> **`optional`** **fetch\_start**: `number`

time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`fetch_start`](../interfaces/IOnPageWaterfallItem.md#fetch_start)

#### Source

main.ts:155322

***

### page\_url?

> **`optional`** **page\_url**: `string`

URL of the page

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`page_url`](../interfaces/IOnPageWaterfallItem.md#page_url)

#### Source

main.ts:155298

***

### request\_sent\_time?

> **`optional`** **request\_sent\_time**: `number`

time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`request_sent_time`](../interfaces/IOnPageWaterfallItem.md#request_sent_time)

#### Source

main.ts:155313

***

### resources?

> **`optional`** **resources**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

resource-specific timing
contains separate arrays with timing for each resource found on the page

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`resources`](../interfaces/IOnPageWaterfallItem.md#resources)

#### Source

main.ts:155328

***

### time\_to\_interactive?

> **`optional`** **time\_to\_interactive**: `number`

Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`time_to_interactive`](../interfaces/IOnPageWaterfallItem.md#time_to_interactive)

#### Source

main.ts:155301

***

### time\_to\_secure\_connection?

> **`optional`** **time\_to\_secure\_connection**: `number`

time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds)

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`time_to_secure_connection`](../interfaces/IOnPageWaterfallItem.md#time_to_secure_connection)

#### Source

main.ts:155310

***

### waiting\_time?

> **`optional`** **waiting\_time**: `number`

time to first byte (TTFB) in milliseconds

#### Implementation of

[`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md).[`waiting_time`](../interfaces/IOnPageWaterfallItem.md#waiting_time)

#### Source

main.ts:155315

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:155341

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:155373

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageWaterfallItem`](OnPageWaterfallItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageWaterfallItem`](OnPageWaterfallItem.md)

#### Source

main.ts:155366
