[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / LocalPackSerpElementItem

# Class: LocalPackSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocalPackSerpElementItem()

> **new LocalPackSerpElementItem**(`data`?): [`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

#### Parameters

• **data?**: [`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md)

#### Returns

[`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:31094

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### cid?

> `optional` **cid**: `string`

google-defined client id

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`cid`](../interfaces/ILocalPackSerpElementItem.md#cid)

#### Defined in

main.ts:31086

***

### description?

> `optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`description`](../interfaces/ILocalPackSerpElementItem.md#description)

#### Defined in

main.ts:31073

***

### domain?

> `optional` **domain**: `string`

source domain

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`domain`](../interfaces/ILocalPackSerpElementItem.md#domain)

#### Defined in

main.ts:31075

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`is_paid`](../interfaces/ILocalPackSerpElementItem.md#is_paid)

#### Defined in

main.ts:31081

***

### phone?

> `optional` **phone**: `string`

phone number

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`phone`](../interfaces/ILocalPackSerpElementItem.md#phone)

#### Defined in

main.ts:31077

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`position`](../interfaces/ILocalPackSerpElementItem.md#position)

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

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rank_absolute`](../interfaces/ILocalPackSerpElementItem.md#rank_absolute)

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

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rank_group`](../interfaces/ILocalPackSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:20356

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rating`](../interfaces/ILocalPackSerpElementItem.md#rating)

#### Defined in

main.ts:31084

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rectangle`](../interfaces/ILocalPackSerpElementItem.md#rectangle)

#### Defined in

main.ts:31090

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`title`](../interfaces/ILocalPackSerpElementItem.md#title)

#### Defined in

main.ts:31071

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`type`](../interfaces/ILocalPackSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### url?

> `optional` **url**: `string`

source URL

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`url`](../interfaces/ILocalPackSerpElementItem.md#url)

#### Defined in

main.ts:31079

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`xpath`](../interfaces/ILocalPackSerpElementItem.md#xpath)

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

main.ts:31099

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

main.ts:31125

***

### fromJS()

> `static` **fromJS**(`data`): [`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:31118
