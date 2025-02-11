[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPagePageScreenshotResultInfo

# Class: OnPagePageScreenshotResultInfo

Defined in: main.ts:172820

## Implements

- [`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPagePageScreenshotResultInfo()

> **new OnPagePageScreenshotResultInfo**(`data`?): [`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)

Defined in: main.ts:172835

#### Parameters

##### data?

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md)

#### Returns

[`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:172823

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`crawl_progress`](../interfaces/IOnPagePageScreenshotResultInfo.md#crawl_progress)

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:172827

error message
if the url you indicated returns a 404 status code or is not a valid URL, you will obtain "error_message":"Screenshot is empty"
if no error is encountered, the value will be null

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`error_message`](../interfaces/IOnPagePageScreenshotResultInfo.md#error_message)

***

### items?

> `optional` **items**: [`ScreenshotItem`](ScreenshotItem.md)[]

Defined in: main.ts:172831

items array

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`items`](../interfaces/IOnPagePageScreenshotResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:172829

number of items in the results array

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`items_count`](../interfaces/IOnPagePageScreenshotResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:172844

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:172868

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)

Defined in: main.ts:172861

#### Parameters

##### data

`any`

#### Returns

[`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)
