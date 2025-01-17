[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseGoogleTrendsItem

# Class: BaseGoogleTrendsItem

Defined in: main.ts:22695

## Extended by

- [`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)
- [`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)
- [`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)
- [`GoogleTrendsTopicsListElementItem`](GoogleTrendsTopicsListElementItem.md)

## Implements

- [`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md)

## Constructors

### new BaseGoogleTrendsItem()

> **new BaseGoogleTrendsItem**(`data`?): [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

Defined in: main.ts:22709

#### Parameters

##### data?

[`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md)

#### Returns

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22707

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:22705

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md).[`keywords`](../interfaces/IBaseGoogleTrendsItem.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:22700

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md).[`position`](../interfaces/IBaseGoogleTrendsItem.md#position)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:22702

title of the element in Google Trends

#### Implementation of

[`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md).[`title`](../interfaces/IBaseGoogleTrendsItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22697

type of element

#### Implementation of

[`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md).[`type`](../interfaces/IBaseGoogleTrendsItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:22719

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:22759

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

Defined in: main.ts:22732

#### Parameters

##### data

`any`

#### Returns

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)
