**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPagePageScreenshotResultInfo

# Class: OnPagePageScreenshotResultInfo

## Implements

- [`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPagePageScreenshotResultInfo(data)

> **new OnPagePageScreenshotResultInfo**(`data`?): [`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)

#### Parameters

• **data?**: [`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md)

#### Returns

[`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)

#### Source

main.ts:158998

## Properties

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`crawl_progress`](../interfaces/IOnPagePageScreenshotResultInfo.md#crawl_progress)

#### Source

main.ts:158986

***

### error\_message?

> **`optional`** **error\_message**: `string`

error message
if the url you indicated returns a 404 status code or is not a valid URL, you will obtain "error_message":"Screenshot is empty"
if no error is encountered, the value will be null

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`error_message`](../interfaces/IOnPagePageScreenshotResultInfo.md#error_message)

#### Source

main.ts:158990

***

### items?

> **`optional`** **items**: [`ScreenshotItem`](ScreenshotItem.md)[]

items array

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`items`](../interfaces/IOnPagePageScreenshotResultInfo.md#items)

#### Source

main.ts:158994

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`items_count`](../interfaces/IOnPagePageScreenshotResultInfo.md#items_count)

#### Source

main.ts:158992

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:159007

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:159031

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)

#### Source

main.ts:159024
