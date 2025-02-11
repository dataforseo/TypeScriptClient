[**Documentation**](../README.md)

***

[Documentation](../README.md) / TwitterSerpElementItem

# Class: TwitterSerpElementItem

Defined in: main.ts:32349

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TwitterSerpElementItem()

> **new TwitterSerpElementItem**(`data`?): [`TwitterSerpElementItem`](TwitterSerpElementItem.md)

Defined in: main.ts:32363

#### Parameters

##### data?

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md)

#### Returns

[`TwitterSerpElementItem`](TwitterSerpElementItem.md)

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

> `optional` **items**: [`TwitterElement`](TwitterElement.md)[]

Defined in: main.ts:32355

contains arrays of specific images

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`items`](../interfaces/ITwitterSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`position`](../interfaces/ITwitterSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`rank_absolute`](../interfaces/ITwitterSerpElementItem.md#rank_absolute)

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

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`rank_group`](../interfaces/ITwitterSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:32359

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`rectangle`](../interfaces/ITwitterSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:32351

title of the row

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`title`](../interfaces/ITwitterSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`type`](../interfaces/ITwitterSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:32353

source URL

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`url`](../interfaces/ITwitterSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md).[`xpath`](../interfaces/ITwitterSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:32368

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

Defined in: main.ts:32393

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`TwitterSerpElementItem`](TwitterSerpElementItem.md)

Defined in: main.ts:32386

#### Parameters

##### data

`any`

#### Returns

[`TwitterSerpElementItem`](TwitterSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
