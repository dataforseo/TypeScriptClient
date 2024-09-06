[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / RankedKeywordsInfo

# Class: RankedKeywordsInfo

## Implements

- [`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RankedKeywordsInfo()

> **new RankedKeywordsInfo**(`data`?): [`RankedKeywordsInfo`](RankedKeywordsInfo.md)

#### Parameters

• **data?**: [`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md)

#### Returns

[`RankedKeywordsInfo`](RankedKeywordsInfo.md)

#### Defined in

main.ts:140477

## Properties

### page\_from\_keywords\_count\_top\_10?

> `optional` **page\_from\_keywords\_count\_top\_10**: `number`

number of keywords for which the page is ranked in top 10 search results

#### Implementation of

[`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md).[`page_from_keywords_count_top_10`](../interfaces/IRankedKeywordsInfo.md#page_from_keywords_count_top_10)

#### Defined in

main.ts:140471

***

### page\_from\_keywords\_count\_top\_100?

> `optional` **page\_from\_keywords\_count\_top\_100**: `number`

number of keywords for which the page is ranked in top 100 search results

#### Implementation of

[`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md).[`page_from_keywords_count_top_100`](../interfaces/IRankedKeywordsInfo.md#page_from_keywords_count_top_100)

#### Defined in

main.ts:140473

***

### page\_from\_keywords\_count\_top\_3?

> `optional` **page\_from\_keywords\_count\_top\_3**: `number`

number of keywords for which the page is ranked in top 3 search results

#### Implementation of

[`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md).[`page_from_keywords_count_top_3`](../interfaces/IRankedKeywordsInfo.md#page_from_keywords_count_top_3)

#### Defined in

main.ts:140469

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:140486

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:140505

***

### fromJS()

> `static` **fromJS**(`data`): [`RankedKeywordsInfo`](RankedKeywordsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`RankedKeywordsInfo`](RankedKeywordsInfo.md)

#### Defined in

main.ts:140498
