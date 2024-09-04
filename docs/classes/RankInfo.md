[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / RankInfo

# Class: RankInfo

## Implements

- [`IRankInfo`](../interfaces/IRankInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RankInfo()

> **new RankInfo**(`data`?): [`RankInfo`](RankInfo.md)

#### Parameters

• **data?**: [`IRankInfo`](../interfaces/IRankInfo.md)

#### Returns

[`RankInfo`](RankInfo.md)

#### Defined in

main.ts:91247

## Properties

### main\_domain\_rank?

> `optional` **main\_domain\_rank**: `number`

main domain rank
main_domain_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IRankInfo`](../interfaces/IRankInfo.md).[`main_domain_rank`](../interfaces/IRankInfo.md#main_domain_rank)

#### Defined in

main.ts:91243

***

### page\_rank?

> `optional` **page\_rank**: `number`

page rank
page_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm;
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IRankInfo`](../interfaces/IRankInfo.md).[`page_rank`](../interfaces/IRankInfo.md#page_rank)

#### Defined in

main.ts:91239

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:91256

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:91274

***

### fromJS()

> `static` **fromJS**(`data`): [`RankInfo`](RankInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`RankInfo`](RankInfo.md)

#### Defined in

main.ts:91267
