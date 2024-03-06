[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageWaterfallItem

# Class: OnPageWaterfallItem

## Implements

- [`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageWaterfallItem.md#constructor)

### Properties

- [connection\_time](OnPageWaterfallItem.md#connection_time)
- [dom\_complete](OnPageWaterfallItem.md#dom_complete)
- [download\_time](OnPageWaterfallItem.md#download_time)
- [duration\_time](OnPageWaterfallItem.md#duration_time)
- [fetch\_end](OnPageWaterfallItem.md#fetch_end)
- [fetch\_start](OnPageWaterfallItem.md#fetch_start)
- [page\_url](OnPageWaterfallItem.md#page_url)
- [request\_sent\_time](OnPageWaterfallItem.md#request_sent_time)
- [resources](OnPageWaterfallItem.md#resources)
- [time\_to\_interactive](OnPageWaterfallItem.md#time_to_interactive)
- [time\_to\_secure\_connection](OnPageWaterfallItem.md#time_to_secure_connection)
- [waiting\_time](OnPageWaterfallItem.md#waiting_time)

### Methods

- [init](OnPageWaterfallItem.md#init)
- [toJSON](OnPageWaterfallItem.md#tojson)
- [fromJS](OnPageWaterfallItem.md#fromjs)

## Constructors

### constructor

• **new OnPageWaterfallItem**(`data?`): [`OnPageWaterfallItem`](OnPageWaterfallItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageWaterfallItem`](../interfaces/IOnPageWaterfallItem.md) |

#### Returns

[`OnPageWaterfallItem`](OnPageWaterfallItem.md)

#### Defined in

[main.ts:149747](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149747)

## Properties

### connection\_time

• `Optional` **connection\_time**: `number`

time to connect to a server
the time it takes until the connection with a server is established (in milliseconds)

#### Implementation of

[IOnPageWaterfallItem](../interfaces/IOnPageWaterfallItem.md).[connection_time](../interfaces/IOnPageWaterfallItem.md#connection_time)

#### Defined in

[main.ts:149722](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149722)

___


### dom\_complete

• `Optional` **dom\_complete**: `number`

time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds)

#### Implementation of

[IOnPageWaterfallItem](../interfaces/IOnPageWaterfallItem.md).[dom_complete](../interfaces/IOnPageWaterfallItem.md#dom_complete)

#### Defined in

[main.ts:149719](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149719)

___


### download\_time

• `Optional` **download\_time**: `number`

time it takes for a browser to receive a response (in milliseconds)

#### Implementation of

[IOnPageWaterfallItem](../interfaces/IOnPageWaterfallItem.md).[download_time](../interfaces/IOnPageWaterfallItem.md#download_time)

#### Defined in

[main.ts:149732](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149732)

___


### duration\_time

• `Optional` **duration\_time**: `number`

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Implementation of

[IOnPageWaterfallItem](../interfaces/IOnPageWaterfallItem.md).[duration_time](../interfaces/IOnPageWaterfallItem.md#duration_time)

#### Defined in

[main.ts:149734](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149734)

___


### fetch\_end

• `Optional` **fetch\_end**: `number`

time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page

#### Implementation of

[IOnPageWaterfallItem](../interfaces/IOnPageWaterfallItem.md).[fetch_end](../interfaces/IOnPageWaterfallItem.md#fetch_end)

#### Defined in

[main.ts:149740](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149740)

___


### fetch\_start

• `Optional` **fetch\_start**: `number`

time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page

#### Implementation of

[IOnPageWaterfallItem](../interfaces/IOnPageWaterfallItem.md).[fetch_start](../interfaces/IOnPageWaterfallItem.md#fetch_start)

#### Defined in

[main.ts:149737](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149737)

___


### page\_url

• `Optional` **page\_url**: `string`

URL of the page

#### Implementation of

[IOnPageWaterfallItem](../interfaces/IOnPageWaterfallItem.md).[page_url](../interfaces/IOnPageWaterfallItem.md#page_url)

#### Defined in

[main.ts:149713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149713)

___


### request\_sent\_time

• `Optional` **request\_sent\_time**: `number`

time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds)

#### Implementation of

[IOnPageWaterfallItem](../interfaces/IOnPageWaterfallItem.md).[request_sent_time](../interfaces/IOnPageWaterfallItem.md#request_sent_time)

#### Defined in

[main.ts:149728](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149728)

___


### resources

• `Optional` **resources**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

resource-specific timing
contains separate arrays with timing for each resource found on the page

#### Implementation of

[IOnPageWaterfallItem](../interfaces/IOnPageWaterfallItem.md).[resources](../interfaces/IOnPageWaterfallItem.md#resources)

#### Defined in

[main.ts:149743](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149743)

___


### time\_to\_interactive

• `Optional` **time\_to\_interactive**: `number`

Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds)

#### Implementation of

[IOnPageWaterfallItem](../interfaces/IOnPageWaterfallItem.md).[time_to_interactive](../interfaces/IOnPageWaterfallItem.md#time_to_interactive)

#### Defined in

[main.ts:149716](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149716)

___


### time\_to\_secure\_connection

• `Optional` **time\_to\_secure\_connection**: `number`

time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds)

#### Implementation of

[IOnPageWaterfallItem](../interfaces/IOnPageWaterfallItem.md).[time_to_secure_connection](../interfaces/IOnPageWaterfallItem.md#time_to_secure_connection)

#### Defined in

[main.ts:149725](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149725)

___


### waiting\_time

• `Optional` **waiting\_time**: `number`

time to first byte (TTFB) in milliseconds

#### Implementation of

[IOnPageWaterfallItem](../interfaces/IOnPageWaterfallItem.md).[waiting_time](../interfaces/IOnPageWaterfallItem.md#waiting_time)

#### Defined in

[main.ts:149730](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149730)

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

[main.ts:149756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149756)

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

[main.ts:149788](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149788)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageWaterfallItem`](OnPageWaterfallItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageWaterfallItem`](OnPageWaterfallItem.md)

#### Defined in

[main.ts:149781](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149781)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")