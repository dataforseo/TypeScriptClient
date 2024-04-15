**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / RankInfo

# Class: RankInfo

## Implements

- [`IRankInfo`](../interfaces/IRankInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RankInfo(data)

> **new RankInfo**(`data`?): [`RankInfo`](RankInfo.md)

#### Parameters

• **data?**: [`IRankInfo`](../interfaces/IRankInfo.md)

#### Returns

[`RankInfo`](RankInfo.md)

#### Source

main.ts:88849

## Properties

### main\_domain\_rank?

> **`optional`** **main\_domain\_rank**: `number`

main domain rank
main_domain_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IRankInfo`](../interfaces/IRankInfo.md).[`main_domain_rank`](../interfaces/IRankInfo.md#main_domain_rank)

#### Source

main.ts:88845

***

### page\_rank?

> **`optional`** **page\_rank**: `number`

page rank
page_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm;
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IRankInfo`](../interfaces/IRankInfo.md).[`page_rank`](../interfaces/IRankInfo.md#page_rank)

#### Source

main.ts:88841

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:88858

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:88876

***

### fromJS()

> **`static`** **fromJS**(`data`): [`RankInfo`](RankInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`RankInfo`](RankInfo.md)

#### Source

main.ts:88869
