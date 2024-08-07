**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpAiSummaryResultInfo

# Class: SerpAiSummaryResultInfo

## Implements

- [`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpAiSummaryResultInfo(data)

> **new SerpAiSummaryResultInfo**(`data`?): [`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)

#### Parameters

• **data?**: [`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md)

#### Returns

[`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)

#### Source

main.ts:25033

## Properties

### items?

> **`optional`** **items**: [`SerpAiSummaryItem`](SerpAiSummaryItem.md)[]

items array

#### Implementation of

[`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md).[`items`](../interfaces/ISerpAiSummaryResultInfo.md#items)

#### Source

main.ts:25029

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the results array

#### Implementation of

[`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md).[`items_count`](../interfaces/ISerpAiSummaryResultInfo.md#items_count)

#### Source

main.ts:25027

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:25042

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:25064

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)

#### Source

main.ts:25057
