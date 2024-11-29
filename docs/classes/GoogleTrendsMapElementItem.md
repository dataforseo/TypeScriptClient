[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleTrendsMapElementItem

# Class: GoogleTrendsMapElementItem

## Extends

- [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

## Implements

- [`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleTrendsMapElementItem()

> **new GoogleTrendsMapElementItem**(`data`?): [`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Parameters

##### data?

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md)

#### Returns

[`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`constructor`](BaseGoogleTrendsItem.md#constructors)

#### Defined in

main.ts:134299

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`_discriminator`](BaseGoogleTrendsItem.md#_discriminator)

#### Defined in

main.ts:22707

***

### data?

> `optional` **data**: [`TrendsMapDataInfo`](TrendsMapDataInfo.md)[]

Google Trends data from the corresponding item

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`data`](../interfaces/IGoogleTrendsMapElementItem.md#data)

#### Defined in

main.ts:134295

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`keywords`](../interfaces/IGoogleTrendsMapElementItem.md#keywords)

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

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`position`](../interfaces/IGoogleTrendsMapElementItem.md#position)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`position`](BaseGoogleTrendsItem.md#position)

#### Defined in

main.ts:22700

***

### title?

> `optional` **title**: `string`

title of the element in Google Trends

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`title`](../interfaces/IGoogleTrendsMapElementItem.md#title)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`title`](BaseGoogleTrendsItem.md#title)

#### Defined in

main.ts:22702

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`type`](../interfaces/IGoogleTrendsMapElementItem.md#type)

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

main.ts:134304

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

main.ts:134326

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`fromJS`](BaseGoogleTrendsItem.md#fromjs)

#### Defined in

main.ts:134319
