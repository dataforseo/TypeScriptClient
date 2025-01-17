[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoTrendsGraphElementItem

# Class: DataforseoTrendsGraphElementItem

Defined in: main.ts:135942

## Extends

- [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

## Implements

- [`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoTrendsGraphElementItem()

> **new DataforseoTrendsGraphElementItem**(`data`?): [`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

Defined in: main.ts:135950

#### Parameters

##### data?

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md)

#### Returns

[`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`constructor`](BaseDataforseoTrendsItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22797

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`_discriminator`](BaseDataforseoTrendsItem.md#_discriminator)

***

### averages?

> `optional` **averages**: `number`[]

Defined in: main.ts:135946

keyword popularity values averaged over the whole time range

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`averages`](../interfaces/IDataforseoTrendsGraphElementItem.md#averages)

***

### data?

> `optional` **data**: [`TrendsGraphDataInfo`](TrendsGraphDataInfo.md)[]

Defined in: main.ts:135944

DataForSEO Trends data for the specified parameters

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`data`](../interfaces/IDataforseoTrendsGraphElementItem.md#data)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:22795

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`keywords`](../interfaces/IDataforseoTrendsGraphElementItem.md#keywords)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`keywords`](BaseDataforseoTrendsItem.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:22792

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`position`](../interfaces/IDataforseoTrendsGraphElementItem.md#position)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`position`](BaseDataforseoTrendsItem.md#position)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22789

type of element

#### Implementation of

[`IDataforseoTrendsGraphElementItem`](../interfaces/IDataforseoTrendsGraphElementItem.md).[`type`](../interfaces/IDataforseoTrendsGraphElementItem.md#type)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`type`](BaseDataforseoTrendsItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:135955

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`init`](BaseDataforseoTrendsItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:135982

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`toJSON`](BaseDataforseoTrendsItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

Defined in: main.ts:135975

#### Parameters

##### data

`any`

#### Returns

[`DataforseoTrendsGraphElementItem`](DataforseoTrendsGraphElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`fromJS`](BaseDataforseoTrendsItem.md#fromjs)
