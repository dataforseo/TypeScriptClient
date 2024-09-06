[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpAiSummaryResultInfo

# Class: SerpAiSummaryResultInfo

## Implements

- [`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpAiSummaryResultInfo()

> **new SerpAiSummaryResultInfo**(`data`?): [`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)

#### Parameters

• **data?**: [`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md)

#### Returns

[`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)

#### Defined in

main.ts:25536

## Properties

### items?

> `optional` **items**: [`SerpAiSummaryItem`](SerpAiSummaryItem.md)[]

items array

#### Implementation of

[`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md).[`items`](../interfaces/ISerpAiSummaryResultInfo.md#items)

#### Defined in

main.ts:25532

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md).[`items_count`](../interfaces/ISerpAiSummaryResultInfo.md#items_count)

#### Defined in

main.ts:25530

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:25545

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:25567

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)

#### Defined in

main.ts:25560
