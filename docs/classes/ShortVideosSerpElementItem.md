[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ShortVideosSerpElementItem

# Class: ShortVideosSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ShortVideosSerpElementItem()

> **new ShortVideosSerpElementItem**(`data`?): [`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

#### Parameters

• **data?**: [`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md)

#### Returns

[`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:36857

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`ShortVideosElement`](ShortVideosElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`items`](../interfaces/IShortVideosSerpElementItem.md#items)

#### Defined in

main.ts:36849

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`position`](../interfaces/IShortVideosSerpElementItem.md#position)

#### Defined in

main.ts:36842

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`rank_absolute`](../interfaces/IShortVideosSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:36838

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`rank_group`](../interfaces/IShortVideosSerpElementItem.md#rank_group)

#### Defined in

main.ts:36834

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`rectangle`](../interfaces/IShortVideosSerpElementItem.md#rectangle)

#### Defined in

main.ts:36853

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`title`](../interfaces/IShortVideosSerpElementItem.md#title)

#### Defined in

main.ts:36846

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`xpath`](../interfaces/IShortVideosSerpElementItem.md#xpath)

#### Defined in

main.ts:36844

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

main.ts:36862

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

main.ts:36890

***

### fromJS()

> `static` **fromJS**(`data`): [`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:36883
