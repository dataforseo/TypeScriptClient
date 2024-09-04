[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / TopSightsDataforseoLabsSerpElementItem

# Class: TopSightsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopSightsDataforseoLabsSerpElementItem()

> **new TopSightsDataforseoLabsSerpElementItem**(`data`?): [`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md)

#### Returns

[`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:98800

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20742

***

### items?

> `optional` **items**: [`TopSightsElement`](TopSightsElement.md)[]

elements of search results found in SERP

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:98796

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:20738

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20734

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:20731

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:98794

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:20728

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ITopSightsDataforseoLabsSerpElementItem`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ITopSightsDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:20740

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:98805

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:98828

***

### fromJS()

> `static` **fromJS**(`data`): [`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:98821
