[**Documentation**](../README.md)

***

[Documentation](../README.md) / QueriesListDataItemInfo

# Class: QueriesListDataItemInfo

Defined in: main.ts:134557

## Implements

- [`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new QueriesListDataItemInfo()

> **new QueriesListDataItemInfo**(`data`?): [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)

Defined in: main.ts:134566

#### Parameters

##### data?

[`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md)

#### Returns

[`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)

## Properties

### query?

> `optional` **query**: `string`

Defined in: main.ts:134559

related query

#### Implementation of

[`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md).[`query`](../interfaces/IQueriesListDataItemInfo.md#query)

***

### value?

> `optional` **value**: `string`

Defined in: main.ts:134562

search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on.

#### Implementation of

[`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md).[`value`](../interfaces/IQueriesListDataItemInfo.md#value)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:134575

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:134593

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)

Defined in: main.ts:134586

#### Parameters

##### data

`any`

#### Returns

[`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)
