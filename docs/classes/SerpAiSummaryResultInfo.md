[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpAiSummaryResultInfo

# Class: SerpAiSummaryResultInfo

Defined in: main.ts:26593

## Implements

- [`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpAiSummaryResultInfo()

> **new SerpAiSummaryResultInfo**(`data`?): [`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)

Defined in: main.ts:26601

#### Parameters

##### data?

[`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md)

#### Returns

[`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)

## Properties

### items?

> `optional` **items**: [`SerpAiSummaryItem`](SerpAiSummaryItem.md)[]

Defined in: main.ts:26597

items array

#### Implementation of

[`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md).[`items`](../interfaces/ISerpAiSummaryResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:26595

number of items in the results array

#### Implementation of

[`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md).[`items_count`](../interfaces/ISerpAiSummaryResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:26610

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:26632

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)

Defined in: main.ts:26625

#### Parameters

##### data

`any`

#### Returns

[`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)
