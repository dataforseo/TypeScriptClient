[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleTrendsQueriesListElementItem

# Class: GoogleTrendsQueriesListElementItem

Defined in: main.ts:134691

## Extends

- [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

## Implements

- [`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleTrendsQueriesListElementItem()

> **new GoogleTrendsQueriesListElementItem**(`data`?): [`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

Defined in: main.ts:134697

#### Parameters

##### data?

[`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md)

#### Returns

[`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`constructor`](BaseGoogleTrendsItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22707

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`_discriminator`](BaseGoogleTrendsItem.md#_discriminator)

***

### data?

> `optional` **data**: [`QueriesListDataInfo`](QueriesListDataInfo.md)

Defined in: main.ts:134693

Google Trends data from the corresponding item

#### Implementation of

[`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md).[`data`](../interfaces/IGoogleTrendsQueriesListElementItem.md#data)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:22705

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md).[`keywords`](../interfaces/IGoogleTrendsQueriesListElementItem.md#keywords)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`keywords`](BaseGoogleTrendsItem.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:22700

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md).[`position`](../interfaces/IGoogleTrendsQueriesListElementItem.md#position)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`position`](BaseGoogleTrendsItem.md#position)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:22702

title of the element in Google Trends

#### Implementation of

[`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md).[`title`](../interfaces/IGoogleTrendsQueriesListElementItem.md#title)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`title`](BaseGoogleTrendsItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22697

type of element

#### Implementation of

[`IGoogleTrendsQueriesListElementItem`](../interfaces/IGoogleTrendsQueriesListElementItem.md).[`type`](../interfaces/IGoogleTrendsQueriesListElementItem.md#type)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`type`](BaseGoogleTrendsItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:134702

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`init`](BaseGoogleTrendsItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:134720

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`toJSON`](BaseGoogleTrendsItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

Defined in: main.ts:134713

#### Parameters

##### data

`any`

#### Returns

[`GoogleTrendsQueriesListElementItem`](GoogleTrendsQueriesListElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`fromJS`](BaseGoogleTrendsItem.md#fromjs)
