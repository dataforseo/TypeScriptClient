[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleTrendsGraphElementItem

# Class: GoogleTrendsGraphElementItem

## Extends

- [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

## Implements

- [`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleTrendsGraphElementItem()

> **new GoogleTrendsGraphElementItem**(`data`?): [`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

#### Parameters

##### data?

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md)

#### Returns

[`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`constructor`](BaseGoogleTrendsItem.md#constructors)

#### Defined in

main.ts:133958

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`_discriminator`](BaseGoogleTrendsItem.md#_discriminator)

#### Defined in

main.ts:22707

***

### averages?

> `optional` **averages**: `number`[]

keyword popularity values averaged over the whole time range

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`averages`](../interfaces/IGoogleTrendsGraphElementItem.md#averages)

#### Defined in

main.ts:133954

***

### data?

> `optional` **data**: [`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)[]

Google Trends data for the specified parameters

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`data`](../interfaces/IGoogleTrendsGraphElementItem.md#data)

#### Defined in

main.ts:133952

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`keywords`](../interfaces/IGoogleTrendsGraphElementItem.md#keywords)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`keywords`](BaseGoogleTrendsItem.md#keywords)

#### Defined in

main.ts:22705

***

### position?

> `optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`position`](../interfaces/IGoogleTrendsGraphElementItem.md#position)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`position`](BaseGoogleTrendsItem.md#position)

#### Defined in

main.ts:22700

***

### title?

> `optional` **title**: `string`

title of the element in Google Trends

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`title`](../interfaces/IGoogleTrendsGraphElementItem.md#title)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`title`](BaseGoogleTrendsItem.md#title)

#### Defined in

main.ts:22702

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`type`](../interfaces/IGoogleTrendsGraphElementItem.md#type)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`type`](BaseGoogleTrendsItem.md#type)

#### Defined in

main.ts:22697

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`init`](BaseGoogleTrendsItem.md#init)

#### Defined in

main.ts:133963

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`toJSON`](BaseGoogleTrendsItem.md#tojson)

#### Defined in

main.ts:133990

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`fromJS`](BaseGoogleTrendsItem.md#fromjs)

#### Defined in

main.ts:133983
