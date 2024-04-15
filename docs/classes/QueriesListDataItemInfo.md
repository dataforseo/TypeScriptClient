**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / QueriesListDataItemInfo

# Class: QueriesListDataItemInfo

## Implements

- [`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new QueriesListDataItemInfo(data)

> **new QueriesListDataItemInfo**(`data`?): [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)

#### Parameters

• **data?**: [`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md)

#### Returns

[`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)

#### Source

main.ts:123482

## Properties

### query?

> **`optional`** **query**: `string`

related query

#### Implementation of

[`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md).[`query`](../interfaces/IQueriesListDataItemInfo.md#query)

#### Source

main.ts:123475

***

### value?

> **`optional`** **value**: `string`

search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on.

#### Implementation of

[`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md).[`value`](../interfaces/IQueriesListDataItemInfo.md#value)

#### Source

main.ts:123478

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:123491

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:123509

***

### fromJS()

> **`static`** **fromJS**(`data`): [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)

#### Source

main.ts:123502
