[**Documentation**](../README.md) • **Docs**

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

• **data?**: [`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md)

#### Returns

[`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`constructor`](BaseGoogleTrendsItem.md#constructors)

#### Defined in

main.ts:126997

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`_discriminator`](BaseGoogleTrendsItem.md#_discriminator)

#### Defined in

main.ts:21570

***

### data?

> `optional` **data**: [`TrendsMapDataInfo`](TrendsMapDataInfo.md)[]

Google Trends data from the corresponding item

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`data`](../interfaces/IGoogleTrendsMapElementItem.md#data)

#### Defined in

main.ts:126993

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_map element is based on the keywords listed in this array

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`keywords`](../interfaces/IGoogleTrendsMapElementItem.md#keywords)

#### Defined in

main.ts:126991

***

### position?

> `optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`position`](../interfaces/IGoogleTrendsMapElementItem.md#position)

#### Defined in

main.ts:126986

***

### title?

> `optional` **title**: `string`

title of the element in Google Trends

#### Implementation of

[`IGoogleTrendsMapElementItem`](../interfaces/IGoogleTrendsMapElementItem.md).[`title`](../interfaces/IGoogleTrendsMapElementItem.md#title)

#### Defined in

main.ts:126988

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`init`](BaseGoogleTrendsItem.md#init)

#### Defined in

main.ts:127002

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`toJSON`](BaseGoogleTrendsItem.md#tojson)

#### Defined in

main.ts:127031

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleTrendsMapElementItem`](GoogleTrendsMapElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`fromJS`](BaseGoogleTrendsItem.md#fromjs)

#### Defined in

main.ts:127024
