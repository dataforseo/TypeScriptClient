[**Documentation**](../README.md)

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

##### data?

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md)

#### Returns

[`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`constructor`](BaseDataforseoTrendsItem.md#constructors)

#### Defined in

main.ts:135882

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`_discriminator`](BaseDataforseoTrendsItem.md#_discriminator)

#### Defined in

main.ts:22797

***

### averages?

> `optional` **averages**: `number`[]

keyword popularity values averaged over the whole time range

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`averages`](../interfaces/IDataforseoTrendsGraphElementItem.md#averages)

#### Defined in

main.ts:135878

***

### data?

> `optional` **data**: [`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)[]

DataForSEO Trends data for the specified parameters

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`data`](../interfaces/IDataforseoTrendsGraphElementItem.md#data)

#### Defined in

main.ts:135876

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`keywords`](../interfaces/IDataforseoTrendsGraphElementItem.md#keywords)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`keywords`](BaseDataforseoTrendsItem.md#keywords)

#### Defined in

main.ts:22795

***

### position?

> `optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`position`](../interfaces/IDataforseoTrendsGraphElementItem.md#position)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`position`](BaseDataforseoTrendsItem.md#position)

#### Defined in

main.ts:22792

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`type`](../interfaces/IDataforseoTrendsGraphElementItem.md#type)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`type`](BaseDataforseoTrendsItem.md#type)

#### Defined in

main.ts:22789

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`init`](BaseDataforseoTrendsItem.md#init)

#### Defined in

main.ts:135887

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`toJSON`](BaseDataforseoTrendsItem.md#tojson)

#### Defined in

main.ts:135914

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`fromJS`](BaseDataforseoTrendsItem.md#fromjs)

#### Defined in

main.ts:135907
