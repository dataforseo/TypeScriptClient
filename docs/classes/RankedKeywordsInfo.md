**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / RankedKeywordsInfo

# Class: RankedKeywordsInfo

## Implements

- [`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RankedKeywordsInfo(data)

> **new RankedKeywordsInfo**(`data`?): [`RankedKeywordsInfo`](RankedKeywordsInfo.md)

#### Parameters

• **data?**: [`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md)

#### Returns

[`RankedKeywordsInfo`](RankedKeywordsInfo.md)

#### Source

main.ts:138933

## Properties

### page\_from\_keywords\_count\_top\_10?

> **`optional`** **page\_from\_keywords\_count\_top\_10**: `number`

number of keywords for which the page is ranked in top 10 search results

#### Implementation of

[`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md).[`page_from_keywords_count_top_10`](../interfaces/IRankedKeywordsInfo.md#page_from_keywords_count_top_10)

#### Source

main.ts:138927

***

### page\_from\_keywords\_count\_top\_100?

> **`optional`** **page\_from\_keywords\_count\_top\_100**: `number`

number of keywords for which the page is ranked in top 100 search results

#### Implementation of

[`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md).[`page_from_keywords_count_top_100`](../interfaces/IRankedKeywordsInfo.md#page_from_keywords_count_top_100)

#### Source

main.ts:138929

***

### page\_from\_keywords\_count\_top\_3?

> **`optional`** **page\_from\_keywords\_count\_top\_3**: `number`

number of keywords for which the page is ranked in top 3 search results

#### Implementation of

[`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md).[`page_from_keywords_count_top_3`](../interfaces/IRankedKeywordsInfo.md#page_from_keywords_count_top_3)

#### Source

main.ts:138925

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:138942

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:138961

***

### fromJS()

> **`static`** **fromJS**(`data`): [`RankedKeywordsInfo`](RankedKeywordsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`RankedKeywordsInfo`](RankedKeywordsInfo.md)

#### Source

main.ts:138954
