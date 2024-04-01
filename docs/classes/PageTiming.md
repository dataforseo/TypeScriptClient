[Documentation](../README.md) / [Exports](../modules.md) / PageTiming

# Class: PageTiming

## Implements

- [`IPageTiming`](../interfaces/IPageTiming.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PageTiming.md#constructor)

### Properties

- [connection\_time](PageTiming.md#connection_time)
- [dom\_complete](PageTiming.md#dom_complete)
- [download\_time](PageTiming.md#download_time)
- [duration\_time](PageTiming.md#duration_time)
- [fetch\_end](PageTiming.md#fetch_end)
- [fetch\_start](PageTiming.md#fetch_start)
- [first\_input\_delay](PageTiming.md#first_input_delay)
- [largest\_contentful\_paint](PageTiming.md#largest_contentful_paint)
- [request\_sent\_time](PageTiming.md#request_sent_time)
- [time\_to\_interactive](PageTiming.md#time_to_interactive)
- [time\_to\_secure\_connection](PageTiming.md#time_to_secure_connection)
- [waiting\_time](PageTiming.md#waiting_time)

### Methods

- [init](PageTiming.md#init)
- [toJSON](PageTiming.md#tojson)
- [fromJS](PageTiming.md#fromjs)

## Constructors

### constructor

• **new PageTiming**(`data?`): [`PageTiming`](PageTiming.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPageTiming`](../interfaces/IPageTiming.md) |

#### Returns

[`PageTiming`](PageTiming.md)

#### Defined in

main.ts:149905

## Properties

### connection\_time

• `Optional` **connection\_time**: `number`

time to connect to a server
the time it takes until the connection with a server is established (in milliseconds)

#### Implementation of

[IPageTiming](../interfaces/IPageTiming.md).[connection_time](../interfaces/IPageTiming.md#connection_time)

#### Defined in

main.ts:149883

___

### dom\_complete

• `Optional` **dom\_complete**: `number`

time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds)

#### Implementation of

[IPageTiming](../interfaces/IPageTiming.md).[dom_complete](../interfaces/IPageTiming.md#dom_complete)

#### Defined in

main.ts:149874

___

### download\_time

• `Optional` **download\_time**: `number`

time it takes for a browser to receive a response (in milliseconds)

#### Implementation of

[IPageTiming](../interfaces/IPageTiming.md).[download_time](../interfaces/IPageTiming.md#download_time)

#### Defined in

main.ts:149893

___

### duration\_time

• `Optional` **duration\_time**: `number`

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Implementation of

[IPageTiming](../interfaces/IPageTiming.md).[duration_time](../interfaces/IPageTiming.md#duration_time)

#### Defined in

main.ts:149895

___

### fetch\_end

• `Optional` **fetch\_end**: `number`

time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page

#### Implementation of

[IPageTiming](../interfaces/IPageTiming.md).[fetch_end](../interfaces/IPageTiming.md#fetch_end)

#### Defined in

main.ts:149901

___

### fetch\_start

• `Optional` **fetch\_start**: `number`

time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page

#### Implementation of

[IPageTiming](../interfaces/IPageTiming.md).[fetch_start](../interfaces/IPageTiming.md#fetch_start)

#### Defined in

main.ts:149898

___

### first\_input\_delay

• `Optional` **first\_input\_delay**: `number`

Core Web Vitals metric indicating the responsiveness of a page
The time (in milliseconds) from when a user first interacts with your page to the time when the browser responds to that interaction. Learn more.

#### Implementation of

[IPageTiming](../interfaces/IPageTiming.md).[first_input_delay](../interfaces/IPageTiming.md#first_input_delay)

#### Defined in

main.ts:149880

___

### largest\_contentful\_paint

• `Optional` **largest\_contentful\_paint**: `number`

Core Web Vitals metric measuring how fast the largest above-the-fold content element is displayed
The amount of time (in milliseconds) to render the largest content element visible in the viewport, from when the user requests the URL. Learn more.

#### Implementation of

[IPageTiming](../interfaces/IPageTiming.md).[largest_contentful_paint](../interfaces/IPageTiming.md#largest_contentful_paint)

#### Defined in

main.ts:149877

___

### request\_sent\_time

• `Optional` **request\_sent\_time**: `number`

time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds)

#### Implementation of

[IPageTiming](../interfaces/IPageTiming.md).[request_sent_time](../interfaces/IPageTiming.md#request_sent_time)

#### Defined in

main.ts:149889

___

### time\_to\_interactive

• `Optional` **time\_to\_interactive**: `number`

Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds)

#### Implementation of

[IPageTiming](../interfaces/IPageTiming.md).[time_to_interactive](../interfaces/IPageTiming.md#time_to_interactive)

#### Defined in

main.ts:149871

___

### time\_to\_secure\_connection

• `Optional` **time\_to\_secure\_connection**: `number`

time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds)

#### Implementation of

[IPageTiming](../interfaces/IPageTiming.md).[time_to_secure_connection](../interfaces/IPageTiming.md#time_to_secure_connection)

#### Defined in

main.ts:149886

___

### waiting\_time

• `Optional` **waiting\_time**: `number`

time to first byte (TTFB) in milliseconds

#### Implementation of

[IPageTiming](../interfaces/IPageTiming.md).[waiting_time](../interfaces/IPageTiming.md#waiting_time)

#### Defined in

main.ts:149891

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:149914

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:149942

___

### fromJS

▸ **fromJS**(`data`): [`PageTiming`](PageTiming.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PageTiming`](PageTiming.md)

#### Defined in

main.ts:149935
