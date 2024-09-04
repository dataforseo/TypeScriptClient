[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPagePageScreenshotResultInfo

# Class: OnPagePageScreenshotResultInfo

## Implements

- [`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPagePageScreenshotResultInfo()

> **new OnPagePageScreenshotResultInfo**(`data`?): [`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)

#### Parameters

• **data?**: [`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md)

#### Returns

[`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)

#### Defined in

main.ts:165027

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`crawl_progress`](../interfaces/IOnPagePageScreenshotResultInfo.md#crawl_progress)

#### Defined in

main.ts:165015

***

### error\_message?

> `optional` **error\_message**: `string`

error message
if the url you indicated returns a 404 status code or is not a valid URL, you will obtain "error_message":"Screenshot is empty"
if no error is encountered, the value will be null

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`error_message`](../interfaces/IOnPagePageScreenshotResultInfo.md#error_message)

#### Defined in

main.ts:165019

***

### items?

> `optional` **items**: [`ScreenshotItem`](ScreenshotItem.md)[]

items array

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`items`](../interfaces/IOnPagePageScreenshotResultInfo.md#items)

#### Defined in

main.ts:165023

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`items_count`](../interfaces/IOnPagePageScreenshotResultInfo.md#items_count)

#### Defined in

main.ts:165021

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:165036

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:165060

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)

#### Defined in

main.ts:165053
