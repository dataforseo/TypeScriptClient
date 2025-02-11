[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoTrendsSubregionInterestsElementItem

# Class: DataforseoTrendsSubregionInterestsElementItem

Defined in: main.ts:136906

## Extends

- [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

## Implements

- [`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoTrendsSubregionInterestsElementItem()

> **new DataforseoTrendsSubregionInterestsElementItem**(`data`?): [`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

Defined in: main.ts:136915

#### Parameters

##### data?

[`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md)

#### Returns

[`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`constructor`](BaseDataforseoTrendsItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22797

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`_discriminator`](BaseDataforseoTrendsItem.md#_discriminator)

***

### interests?

> `optional` **interests**: [`Interests`](Interests.md)[]

Defined in: main.ts:136908

subregional keyword popuarity data for each specified term

#### Implementation of

[`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[`interests`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#interests)

***

### interests\_comparison?

> `optional` **interests\_comparison**: [`InterestsComparison`](InterestsComparison.md)

Defined in: main.ts:136911

comparison of data on subregional keyword popularity for the specified parameters
if you specified a single keyword, the value will be null

#### Implementation of

[`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[`interests_comparison`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#interests_comparison)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:22795

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[`keywords`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#keywords)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`keywords`](BaseDataforseoTrendsItem.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:22792

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[`position`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#position)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`position`](BaseDataforseoTrendsItem.md#position)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22789

type of element

#### Implementation of

[`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[`type`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#type)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`type`](BaseDataforseoTrendsItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:136920

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

Defined in: main.ts:136943

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`toJSON`](BaseDataforseoTrendsItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

Defined in: main.ts:136936

#### Parameters

##### data

`any`

#### Returns

[`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`fromJS`](BaseDataforseoTrendsItem.md#fromjs)
