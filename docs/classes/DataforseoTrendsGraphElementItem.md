[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoTrendsGraphElementItem

# Class: DataforseoTrendsGraphElementItem

## Extends

- [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

## Implements

- [`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoTrendsGraphElementItem()

> **new DataforseoTrendsGraphElementItem**(`data`?): [`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

#### Parameters

• **data?**: [`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md)

#### Returns

[`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`constructor`](BaseDataforseoTrendsItem.md#constructors)

#### Defined in

main.ts:128664

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`_discriminator`](BaseDataforseoTrendsItem.md#_discriminator)

#### Defined in

main.ts:21638

***

### averages?

> `optional` **averages**: `number`[]

keyword popularity values averaged over the whole time range

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`averages`](../interfaces/IDataforseoTrendsGraphElementItem.md#averages)

#### Defined in

main.ts:128660

***

### data?

> `optional` **data**: [`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)[]

DataForSEO Trends data for the specified parameters

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`data`](../interfaces/IDataforseoTrendsGraphElementItem.md#data)

#### Defined in

main.ts:128658

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`keywords`](../interfaces/IDataforseoTrendsGraphElementItem.md#keywords)

#### Defined in

main.ts:128656

***

### position?

> `optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`position`](../interfaces/IDataforseoTrendsGraphElementItem.md#position)

#### Defined in

main.ts:128653

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`init`](BaseDataforseoTrendsItem.md#init)

#### Defined in

main.ts:128669

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`toJSON`](BaseDataforseoTrendsItem.md#tojson)

#### Defined in

main.ts:128702

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`fromJS`](BaseDataforseoTrendsItem.md#fromjs)

#### Defined in

main.ts:128695
