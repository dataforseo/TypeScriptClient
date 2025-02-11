[**Documentation**](../README.md)

***

[Documentation](../README.md) / CommercialUnitsSerpElementItem

# Class: CommercialUnitsSerpElementItem

Defined in: main.ts:35865

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new CommercialUnitsSerpElementItem()

> **new CommercialUnitsSerpElementItem**(`data`?): [`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

Defined in: main.ts:35877

#### Parameters

##### data?

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md)

#### Returns

[`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

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

> `optional` **items**: [`CommercialUnitsElement`](CommercialUnitsElement.md)[]

Defined in: main.ts:35869

contains arrays of specific images

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`items`](../interfaces/ICommercialUnitsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`position`](../interfaces/ICommercialUnitsSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`rank_absolute`](../interfaces/ICommercialUnitsSerpElementItem.md#rank_absolute)

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

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`rank_group`](../interfaces/ICommercialUnitsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:35873

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`rectangle`](../interfaces/ICommercialUnitsSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:35867

title of the row

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`title`](../interfaces/ICommercialUnitsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`type`](../interfaces/ICommercialUnitsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md).[`xpath`](../interfaces/ICommercialUnitsSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:35882

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

Defined in: main.ts:35906

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

Defined in: main.ts:35899

#### Parameters

##### data

`any`

#### Returns

[`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
