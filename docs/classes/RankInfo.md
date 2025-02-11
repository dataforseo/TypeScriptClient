[**Documentation**](../README.md)

***

[Documentation](../README.md) / RankInfo

# Class: RankInfo

Defined in: main.ts:101074

## Implements

- [`IRankInfo`](../interfaces/IRankInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RankInfo()

> **new RankInfo**(`data`?): [`RankInfo`](RankInfo.md)

Defined in: main.ts:101086

#### Parameters

##### data?

[`IRankInfo`](../interfaces/IRankInfo.md)

#### Returns

[`RankInfo`](RankInfo.md)

## Properties

### main\_domain\_rank?

> `optional` **main\_domain\_rank**: `number`

Defined in: main.ts:101082

main domain rank
main_domain_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IRankInfo`](../interfaces/IRankInfo.md).[`main_domain_rank`](../interfaces/IRankInfo.md#main_domain_rank)

***

### page\_rank?

> `optional` **page\_rank**: `number`

Defined in: main.ts:101078

page rank
page_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm;
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IRankInfo`](../interfaces/IRankInfo.md).[`page_rank`](../interfaces/IRankInfo.md#page_rank)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:101095

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:101113

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`RankInfo`](RankInfo.md)

Defined in: main.ts:101106

#### Parameters

##### data

`any`

#### Returns

[`RankInfo`](RankInfo.md)
