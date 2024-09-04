[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / CompareSitesSerpElementItem

# Class: CompareSitesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CompareSitesSerpElementItem()

> **new CompareSitesSerpElementItem**(`data`?): [`CompareSitesSerpElementItem`](CompareSitesSerpElementItem.md)

#### Parameters

• **data?**: [`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md)

#### Returns

[`CompareSitesSerpElementItem`](CompareSitesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:36124

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: [`CompareSitesElement`](CompareSitesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`items`](../interfaces/ICompareSitesSerpElementItem.md#items)

#### Defined in

main.ts:36116

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`position`](../interfaces/ICompareSitesSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

#### Defined in

main.ts:20363

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`rank_absolute`](../interfaces/ICompareSitesSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20359

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`rank_group`](../interfaces/ICompareSitesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:20356

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`rectangle`](../interfaces/ICompareSitesSerpElementItem.md#rectangle)

#### Defined in

main.ts:36120

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`title`](../interfaces/ICompareSitesSerpElementItem.md#title)

#### Defined in

main.ts:36113

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`type`](../interfaces/ICompareSitesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`xpath`](../interfaces/ICompareSitesSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

#### Defined in

main.ts:20365

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:36129

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:36153

***

### fromJS()

> `static` **fromJS**(`data`): [`CompareSitesSerpElementItem`](CompareSitesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`CompareSitesSerpElementItem`](CompareSitesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:36146
