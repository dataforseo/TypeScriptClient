**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / LocalPackSerpElementItem

# Class: LocalPackSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocalPackSerpElementItem(data)

> **new LocalPackSerpElementItem**(`data`?): [`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

#### Parameters

• **data?**: [`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md)

#### Returns

[`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:30743

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19830

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`cid`](../interfaces/ILocalPackSerpElementItem.md#cid)

#### Source

main.ts:30735

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`description`](../interfaces/ILocalPackSerpElementItem.md#description)

#### Source

main.ts:30722

***

### domain?

> **`optional`** **domain**: `string`

source domain

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`domain`](../interfaces/ILocalPackSerpElementItem.md#domain)

#### Source

main.ts:30724

***

### is\_paid?

> **`optional`** **is\_paid**: `boolean`

indicates whether the element is an ad

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`is_paid`](../interfaces/ILocalPackSerpElementItem.md#is_paid)

#### Source

main.ts:30730

***

### phone?

> **`optional`** **phone**: `string`

phone number

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`phone`](../interfaces/ILocalPackSerpElementItem.md#phone)

#### Source

main.ts:30726

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`position`](../interfaces/ILocalPackSerpElementItem.md#position)

#### Source

main.ts:30716

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rank_absolute`](../interfaces/ILocalPackSerpElementItem.md#rank_absolute)

#### Source

main.ts:30712

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rank_group`](../interfaces/ILocalPackSerpElementItem.md#rank_group)

#### Source

main.ts:30708

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rating`](../interfaces/ILocalPackSerpElementItem.md#rating)

#### Source

main.ts:30733

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rectangle`](../interfaces/ILocalPackSerpElementItem.md#rectangle)

#### Source

main.ts:30739

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`title`](../interfaces/ILocalPackSerpElementItem.md#title)

#### Source

main.ts:30720

***

### url?

> **`optional`** **url**: `string`

source URL

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`url`](../interfaces/ILocalPackSerpElementItem.md#url)

#### Source

main.ts:30728

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`xpath`](../interfaces/ILocalPackSerpElementItem.md#xpath)

#### Source

main.ts:30718

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:30748

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:30778

***

### fromJS()

> **`static`** **fromJS**(`data`): [`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:30771
