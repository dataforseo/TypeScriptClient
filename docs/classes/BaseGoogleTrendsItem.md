[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BaseGoogleTrendsItem

# Class: BaseGoogleTrendsItem

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

#### Parameters

• **data?**: [`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md)

#### Returns

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

#### Defined in

main.ts:21806

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:21804

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md).[`keywords`](../interfaces/IBaseGoogleTrendsItem.md#keywords)

#### Defined in

main.ts:21802

***

### position?

> `optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md).[`position`](../interfaces/IBaseGoogleTrendsItem.md#position)

#### Defined in

main.ts:21797

***

### title?

> `optional` **title**: `string`

title of the element in Google Trends

#### Implementation of

[`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md).[`title`](../interfaces/IBaseGoogleTrendsItem.md#title)

#### Defined in

main.ts:21799

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseGoogleTrendsItem`](../interfaces/IBaseGoogleTrendsItem.md).[`type`](../interfaces/IBaseGoogleTrendsItem.md#type)

#### Defined in

main.ts:21794

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:21816

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:21856

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

#### Defined in

main.ts:21829
