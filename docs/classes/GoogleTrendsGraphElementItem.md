[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleTrendsGraphElementItem

# Class: GoogleTrendsGraphElementItem

Defined in: main.ts:134018

## Extends

- [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

## Implements

- [`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleTrendsGraphElementItem()

> **new GoogleTrendsGraphElementItem**(`data`?): [`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

Defined in: main.ts:134026

#### Parameters

##### data?

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md)

#### Returns

[`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`constructor`](BaseGoogleTrendsItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22707

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`_discriminator`](BaseGoogleTrendsItem.md#_discriminator)

***

### averages?

> `optional` **averages**: `number`[]

Defined in: main.ts:134022

keyword popularity values averaged over the whole time range

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`averages`](../interfaces/IGoogleTrendsGraphElementItem.md#averages)

***

### data?

> `optional` **data**: [`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)[]

Defined in: main.ts:134020

Google Trends data for the specified parameters

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`data`](../interfaces/IGoogleTrendsGraphElementItem.md#data)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:22705

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`keywords`](../interfaces/IGoogleTrendsGraphElementItem.md#keywords)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`keywords`](BaseGoogleTrendsItem.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:22700

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`position`](../interfaces/IGoogleTrendsGraphElementItem.md#position)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`position`](BaseGoogleTrendsItem.md#position)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:22702

title of the element in Google Trends

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`title`](../interfaces/IGoogleTrendsGraphElementItem.md#title)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`title`](BaseGoogleTrendsItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22697

type of element

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`type`](../interfaces/IGoogleTrendsGraphElementItem.md#type)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`type`](BaseGoogleTrendsItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:134031

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

Defined in: main.ts:134058

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`toJSON`](BaseGoogleTrendsItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

Defined in: main.ts:134051

#### Parameters

##### data

`any`

#### Returns

[`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`fromJS`](BaseGoogleTrendsItem.md#fromjs)
