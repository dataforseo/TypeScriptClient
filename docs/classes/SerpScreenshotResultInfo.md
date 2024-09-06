[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpScreenshotResultInfo

# Class: SerpScreenshotResultInfo

## Implements

- [`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpScreenshotResultInfo()

> **new SerpScreenshotResultInfo**(`data`?): [`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

#### Parameters

• **data?**: [`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md)

#### Returns

[`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

#### Defined in

main.ts:25202

## Properties

### items?

> `optional` **items**: [`ScreenshotItem`](ScreenshotItem.md)[]

items array

#### Implementation of

[`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md).[`items`](../interfaces/ISerpScreenshotResultInfo.md#items)

#### Defined in

main.ts:25198

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md).[`items_count`](../interfaces/ISerpScreenshotResultInfo.md#items_count)

#### Defined in

main.ts:25196

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:25211

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:25233

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

#### Defined in

main.ts:25226
