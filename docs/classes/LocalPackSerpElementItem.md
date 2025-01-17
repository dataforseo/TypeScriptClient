[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocalPackSerpElementItem

# Class: LocalPackSerpElementItem

Defined in: main.ts:32889

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new LocalPackSerpElementItem()

> **new LocalPackSerpElementItem**(`data`?): [`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

Defined in: main.ts:32914

#### Parameters

##### data?

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md)

#### Returns

[`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:32906

google-defined client id

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`cid`](../interfaces/ILocalPackSerpElementItem.md#cid)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:32893

description of the results element in SERP

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`description`](../interfaces/ILocalPackSerpElementItem.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:32895

source domain

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`domain`](../interfaces/ILocalPackSerpElementItem.md#domain)

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

Defined in: main.ts:32901

indicates whether the element is an ad

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`is_paid`](../interfaces/ILocalPackSerpElementItem.md#is_paid)

***

### phone?

> `optional` **phone**: `string`

Defined in: main.ts:32897

phone number

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`phone`](../interfaces/ILocalPackSerpElementItem.md#phone)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`position`](../interfaces/ILocalPackSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rank_absolute`](../interfaces/ILocalPackSerpElementItem.md#rank_absolute)

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

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rank_group`](../interfaces/ILocalPackSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:32904

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rating`](../interfaces/ILocalPackSerpElementItem.md#rating)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:32910

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rectangle`](../interfaces/ILocalPackSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:32891

title of the row

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`title`](../interfaces/ILocalPackSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`type`](../interfaces/ILocalPackSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:32899

source URL

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`url`](../interfaces/ILocalPackSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`xpath`](../interfaces/ILocalPackSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:32919

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

Defined in: main.ts:32945

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

Defined in: main.ts:32938

#### Parameters

##### data

`any`

#### Returns

[`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
