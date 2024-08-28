[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpScreenshotResultInfo

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

main.ts:24881

## Properties

### items?

> `optional` **items**: [`ScreenshotItem`](ScreenshotItem.md)[]

items array

#### Implementation of

[`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md).[`items`](../interfaces/ISerpScreenshotResultInfo.md#items)

#### Defined in

main.ts:24877

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md).[`items_count`](../interfaces/ISerpScreenshotResultInfo.md#items_count)

#### Defined in

main.ts:24875

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:24890

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:24912

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

#### Defined in

main.ts:24905
