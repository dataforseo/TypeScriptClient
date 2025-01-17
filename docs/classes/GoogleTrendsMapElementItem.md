[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleTrendsMapElementItem

# Class: GoogleTrendsMapElementItem

Defined in: main.ts:134361

## Extends

- [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)

## Implements

- [`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleTrendsMapElementItem()

> **new GoogleTrendsMapElementItem**(`data`?): [`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

Defined in: main.ts:134367

#### Parameters

##### data?

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md)

#### Returns

[`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

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

> `optional` **data**: [`TrendsMapDataInfo`](TrendsMapDataInfo.md)[]

Defined in: main.ts:134363

Google Trends data from the corresponding item

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`data`](../interfaces/IGoogleTrendsMapElementItem.md#data)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:22705

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`keywords`](../interfaces/IGoogleTrendsMapElementItem.md#keywords)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`keywords`](BaseGoogleTrendsItem.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:22700

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`position`](../interfaces/IGoogleTrendsMapElementItem.md#position)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`position`](BaseGoogleTrendsItem.md#position)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:22702

title of the element in Google Trends

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`title`](../interfaces/IGoogleTrendsMapElementItem.md#title)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`title`](BaseGoogleTrendsItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22697

type of element

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`type`](../interfaces/IGoogleTrendsMapElementItem.md#type)

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`type`](BaseGoogleTrendsItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:134372

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

Defined in: main.ts:134394

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`toJSON`](BaseGoogleTrendsItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

Defined in: main.ts:134387

#### Parameters

##### data

`any`

#### Returns

[`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`fromJS`](BaseGoogleTrendsItem.md#fromjs)
