[**Documentation**](../README.md) • **Docs**

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

• **data?**: [`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md)

#### Returns

[`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`constructor`](BaseGoogleTrendsItem.md#constructors)

#### Defined in

main.ts:126626

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`_discriminator`](BaseGoogleTrendsItem.md#_discriminator)

#### Defined in

main.ts:21570

***

### averages?

> `optional` **averages**: `number`[]

keyword popularity values averaged over the whole time range

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`averages`](../interfaces/IGoogleTrendsGraphElementItem.md#averages)

#### Defined in

main.ts:126622

***

### data?

> `optional` **data**: [`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)[]

Google Trends data for the specified parameters

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`data`](../interfaces/IGoogleTrendsGraphElementItem.md#data)

#### Defined in

main.ts:126620

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`keywords`](../interfaces/IGoogleTrendsGraphElementItem.md#keywords)

#### Defined in

main.ts:126618

***

### position?

> `optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`position`](../interfaces/IGoogleTrendsGraphElementItem.md#position)

#### Defined in

main.ts:126613

***

### title?

> `optional` **title**: `string`

title of the element in Google Trends

#### Implementation of

[`IGoogleTrendsGraphElementItem`](../interfaces/IGoogleTrendsGraphElementItem.md).[`title`](../interfaces/IGoogleTrendsGraphElementItem.md#title)

#### Defined in

main.ts:126615

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

main.ts:126631

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

main.ts:126665

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleTrendsGraphElementItem`](GoogleTrendsGraphElementItem.md)

#### Overrides

[`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md).[`fromJS`](BaseGoogleTrendsItem.md#fromjs)

#### Defined in

main.ts:126658
