[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / QueriesListDataInfo

# Class: QueriesListDataInfo

## Implements

- [`IQueriesListDataInfo`](../interfaces/IQueriesListDataInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new QueriesListDataInfo()

> **new QueriesListDataInfo**(`data`?): [`QueriesListDataInfo`](QueriesListDataInfo.md)

#### Parameters

• **data?**: [`IQueriesListDataInfo`](../interfaces/IQueriesListDataInfo.md)

#### Returns

[`QueriesListDataInfo`](QueriesListDataInfo.md)

#### Defined in

main.ts:127137

## Properties

### rising?

> `optional` **rising**: [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)[]

emerging related topics
represents the list of related topics with the biggest increase in search frequency since the last time period

#### Implementation of

[`IQueriesListDataInfo`](../interfaces/IQueriesListDataInfo.md).[`rising`](../interfaces/IQueriesListDataInfo.md#rising)

#### Defined in

main.ts:127133

***

### top?

> `optional` **top**: [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)[]

the most popular related topics
represents the list of the most popular related topics

#### Implementation of

[`IQueriesListDataInfo`](../interfaces/IQueriesListDataInfo.md).[`top`](../interfaces/IQueriesListDataInfo.md#top)

#### Defined in

main.ts:127130

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:127146

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:127172

***

### fromJS()

> `static` **fromJS**(`data`): [`QueriesListDataInfo`](QueriesListDataInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`QueriesListDataInfo`](QueriesListDataInfo.md)

#### Defined in

main.ts:127165
