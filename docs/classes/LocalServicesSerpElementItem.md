[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocalServicesSerpElementItem

# Class: LocalServicesSerpElementItem

Defined in: main.ts:36025

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new LocalServicesSerpElementItem()

> **new LocalServicesSerpElementItem**(`data`?): [`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

Defined in: main.ts:36041

#### Parameters

##### data?

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md)

#### Returns

[`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:36031

source domain

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`domain`](../interfaces/ILocalServicesSerpElementItem.md#domain)

***

### items?

> `optional` **items**: [`LocalServicesElement`](LocalServicesElement.md)[]

Defined in: main.ts:36033

contains arrays of specific images

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`items`](../interfaces/ILocalServicesSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`position`](../interfaces/ILocalServicesSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`rank_absolute`](../interfaces/ILocalServicesSerpElementItem.md#rank_absolute)

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

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`rank_group`](../interfaces/ILocalServicesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:36037

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`rectangle`](../interfaces/ILocalServicesSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:36027

title of the row

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`title`](../interfaces/ILocalServicesSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`type`](../interfaces/ILocalServicesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:36029

source URL

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`url`](../interfaces/ILocalServicesSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`ILocalServicesSerpElementItem`](../interfaces/ILocalServicesSerpElementItem.md).[`xpath`](../interfaces/ILocalServicesSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:36046

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

Defined in: main.ts:36072

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

Defined in: main.ts:36065

#### Parameters

##### data

`any`

#### Returns

[`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
