[**Documentation**](../README.md)

***

[Documentation](../README.md) / CompareSitesSerpElementItem

# Class: CompareSitesSerpElementItem

Defined in: main.ts:37813

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new CompareSitesSerpElementItem()

> **new CompareSitesSerpElementItem**(`data`?): [`CompareSitesSerpElementItem`](CompareSitesSerpElementItem.md)

Defined in: main.ts:37825

#### Parameters

##### data?

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md)

#### Returns

[`CompareSitesSerpElementItem`](CompareSitesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`CompareSitesElement`](CompareSitesElement.md)[]

Defined in: main.ts:37817

contains arrays of specific images

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`items`](../interfaces/ICompareSitesSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`position`](../interfaces/ICompareSitesSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`rank_absolute`](../interfaces/ICompareSitesSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21034

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`rank_group`](../interfaces/ICompareSitesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:37821

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`rectangle`](../interfaces/ICompareSitesSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:37815

title of the row

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`title`](../interfaces/ICompareSitesSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`type`](../interfaces/ICompareSitesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`ICompareSitesSerpElementItem`](../interfaces/ICompareSitesSerpElementItem.md).[`xpath`](../interfaces/ICompareSitesSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:37830

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:37854

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`CompareSitesSerpElementItem`](CompareSitesSerpElementItem.md)

Defined in: main.ts:37847

#### Parameters

##### data

`any`

#### Returns

[`CompareSitesSerpElementItem`](CompareSitesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
