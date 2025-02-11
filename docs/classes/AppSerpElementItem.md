[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppSerpElementItem

# Class: AppSerpElementItem

Defined in: main.ts:32831

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppSerpElementItem()

> **new AppSerpElementItem**(`data`?): [`AppSerpElementItem`](AppSerpElementItem.md)

Defined in: main.ts:32841

#### Parameters

##### data?

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md)

#### Returns

[`AppSerpElementItem`](AppSerpElementItem.md)

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

> `optional` **items**: [`AppElement`](AppElement.md)[]

Defined in: main.ts:32833

contains arrays of specific images

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`items`](../interfaces/IAppSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`position`](../interfaces/IAppSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`rank_absolute`](../interfaces/IAppSerpElementItem.md#rank_absolute)

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

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`rank_group`](../interfaces/IAppSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:32837

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`rectangle`](../interfaces/IAppSerpElementItem.md#rectangle)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`type`](../interfaces/IAppSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`xpath`](../interfaces/IAppSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:32846

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

Defined in: main.ts:32869

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppSerpElementItem`](AppSerpElementItem.md)

Defined in: main.ts:32862

#### Parameters

##### data

`any`

#### Returns

[`AppSerpElementItem`](AppSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
