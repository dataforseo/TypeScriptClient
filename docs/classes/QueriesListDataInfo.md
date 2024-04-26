**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / QueriesListDataInfo

# Class: QueriesListDataInfo

## Implements

- [`IQueriesListDataInfo`](../interfaces/IQueriesListDataInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new QueriesListDataInfo(data)

> **new QueriesListDataInfo**(`data`?): [`QueriesListDataInfo`](QueriesListDataInfo.md)

#### Parameters

• **data?**: [`IQueriesListDataInfo`](../interfaces/IQueriesListDataInfo.md)

#### Returns

[`QueriesListDataInfo`](QueriesListDataInfo.md)

#### Source

main.ts:123677

## Properties

### rising?

> **`optional`** **rising**: [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)[]

emerging related topics
represents the list of related topics with the biggest increase in search frequency since the last time period

#### Implementation of

[`IQueriesListDataInfo`](../interfaces/IQueriesListDataInfo.md).[`rising`](../interfaces/IQueriesListDataInfo.md#rising)

#### Source

main.ts:123673

***

### top?

> **`optional`** **top**: [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)[]

the most popular related topics
represents the list of the most popular related topics

#### Implementation of

[`IQueriesListDataInfo`](../interfaces/IQueriesListDataInfo.md).[`top`](../interfaces/IQueriesListDataInfo.md#top)

#### Source

main.ts:123670

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:123686

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:123712

***

### fromJS()

> **`static`** **fromJS**(`data`): [`QueriesListDataInfo`](QueriesListDataInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`QueriesListDataInfo`](QueriesListDataInfo.md)

#### Source

main.ts:123705
