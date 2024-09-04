[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoTrendsSubregionInterestsElementItem

# Class: DataforseoTrendsSubregionInterestsElementItem

## Extends

- [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)

## Implements

- [`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoTrendsSubregionInterestsElementItem()

> **new DataforseoTrendsSubregionInterestsElementItem**(`data`?): [`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

#### Parameters

• **data?**: [`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md)

#### Returns

[`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`constructor`](BaseDataforseoTrendsItem.md#constructors)

#### Defined in

main.ts:126395

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`_discriminator`](BaseDataforseoTrendsItem.md#_discriminator)

#### Defined in

main.ts:21894

***

### interests?

> `optional` **interests**: [`Interests`](Interests.md)[]

subregional keyword popuarity data for each specified term

#### Implementation of

[`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[`interests`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#interests)

#### Defined in

main.ts:126388

***

### interests\_comparison?

> `optional` **interests\_comparison**: [`InterestsComparison`](InterestsComparison.md)

comparison of data on subregional keyword popularity for the specified parameters
if you specified a single keyword, the value will be null

#### Implementation of

[`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[`interests_comparison`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#interests_comparison)

#### Defined in

main.ts:126391

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Implementation of

[`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[`keywords`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#keywords)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`keywords`](BaseDataforseoTrendsItem.md#keywords)

#### Defined in

main.ts:21892

***

### position?

> `optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Implementation of

[`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[`position`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#position)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`position`](BaseDataforseoTrendsItem.md#position)

#### Defined in

main.ts:21889

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IDataforseoTrendsSubregionInterestsElementItem`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md).[`type`](../interfaces/IDataforseoTrendsSubregionInterestsElementItem.md#type)

#### Inherited from

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`type`](BaseDataforseoTrendsItem.md#type)

#### Defined in

main.ts:21886

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

main.ts:126400

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

main.ts:126423

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoTrendsSubregionInterestsElementItem`](DataforseoTrendsSubregionInterestsElementItem.md)

#### Overrides

[`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md).[`fromJS`](BaseDataforseoTrendsItem.md#fromjs)

#### Defined in

main.ts:126416
