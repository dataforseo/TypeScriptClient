**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpScreenshotResultInfo

# Class: SerpScreenshotResultInfo

## Implements

- [`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpScreenshotResultInfo(data)

> **new SerpScreenshotResultInfo**(`data`?): [`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

#### Parameters

• **data?**: [`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md)

#### Returns

[`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

#### Source

main.ts:24699

## Properties

### items?

> **`optional`** **items**: [`ScreenshotItem`](ScreenshotItem.md)[]

items array

#### Implementation of

[`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md).[`items`](../interfaces/ISerpScreenshotResultInfo.md#items)

#### Source

main.ts:24695

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md).[`items_count`](../interfaces/ISerpScreenshotResultInfo.md#items_count)

#### Source

main.ts:24693

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:24708

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:24730

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

#### Source

main.ts:24723
