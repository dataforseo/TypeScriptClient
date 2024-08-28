[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / CompareSitesSerpElementItem

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

main.ts:37865

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`CompareSitesElement`](CompareSitesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`items`](../interfaces/ICompareSitesSerpElementItem.md#items)

#### Defined in

main.ts:37857

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`position`](../interfaces/ICompareSitesSerpElementItem.md#position)

#### Defined in

main.ts:37850

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`rank_absolute`](../interfaces/ICompareSitesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:37846

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`rank_group`](../interfaces/ICompareSitesSerpElementItem.md#rank_group)

#### Defined in

main.ts:37842

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`rectangle`](../interfaces/ICompareSitesSerpElementItem.md#rectangle)

#### Defined in

main.ts:37861

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`title`](../interfaces/ICompareSitesSerpElementItem.md#title)

#### Defined in

main.ts:37854

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`xpath`](../interfaces/ICompareSitesSerpElementItem.md#xpath)

#### Defined in

main.ts:37852

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

main.ts:37870

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

main.ts:37898

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

main.ts:37891
