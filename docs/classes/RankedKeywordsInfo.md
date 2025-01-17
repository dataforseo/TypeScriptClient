[**Documentation**](../README.md)

***

[Documentation](../README.md) / RankedKeywordsInfo

# Class: RankedKeywordsInfo

Defined in: main.ts:151740

## Implements

- [`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RankedKeywordsInfo()

> **new RankedKeywordsInfo**(`data`?): [`RankedKeywordsInfo`](RankedKeywordsInfo.md)

Defined in: main.ts:151750

#### Parameters

##### data?

[`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md)

#### Returns

[`RankedKeywordsInfo`](RankedKeywordsInfo.md)

## Properties

### page\_from\_keywords\_count\_top\_10?

> `optional` **page\_from\_keywords\_count\_top\_10**: `number`

Defined in: main.ts:151744

number of keywords for which the page is ranked in top 10 search results

#### Implementation of

[`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md).[`page_from_keywords_count_top_10`](../interfaces/IRankedKeywordsInfo.md#page_from_keywords_count_top_10)

***

### page\_from\_keywords\_count\_top\_100?

> `optional` **page\_from\_keywords\_count\_top\_100**: `number`

Defined in: main.ts:151746

number of keywords for which the page is ranked in top 100 search results

#### Implementation of

[`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md).[`page_from_keywords_count_top_100`](../interfaces/IRankedKeywordsInfo.md#page_from_keywords_count_top_100)

***

### page\_from\_keywords\_count\_top\_3?

> `optional` **page\_from\_keywords\_count\_top\_3**: `number`

Defined in: main.ts:151742

number of keywords for which the page is ranked in top 3 search results

#### Implementation of

[`IRankedKeywordsInfo`](../interfaces/IRankedKeywordsInfo.md).[`page_from_keywords_count_top_3`](../interfaces/IRankedKeywordsInfo.md#page_from_keywords_count_top_3)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:151759

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:151778

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`RankedKeywordsInfo`](RankedKeywordsInfo.md)

Defined in: main.ts:151771

#### Parameters

##### data

`any`

#### Returns

[`RankedKeywordsInfo`](RankedKeywordsInfo.md)
