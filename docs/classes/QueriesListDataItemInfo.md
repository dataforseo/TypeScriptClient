[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / QueriesListDataItemInfo

# Class: QueriesListDataItemInfo

## Implements

- [`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new QueriesListDataItemInfo()

> **new QueriesListDataItemInfo**(`data`?): [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)

#### Parameters

• **data?**: [`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md)

#### Returns

[`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)

#### Defined in

main.ts:127078

## Properties

### query?

> `optional` **query**: `string`

related query

#### Implementation of

[`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md).[`query`](../interfaces/IQueriesListDataItemInfo.md#query)

#### Defined in

main.ts:127071

***

### value?

> `optional` **value**: `string`

search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on.

#### Implementation of

[`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md).[`value`](../interfaces/IQueriesListDataItemInfo.md#value)

#### Defined in

main.ts:127074

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:127087

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:127105

***

### fromJS()

> `static` **fromJS**(`data`): [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)

#### Defined in

main.ts:127098
