[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppSerpElementItem

# Class: AppSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppSerpElementItem()

> **new AppSerpElementItem**(`data`?): [`AppSerpElementItem`](AppSerpElementItem.md)

#### Parameters

• **data?**: [`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md)

#### Returns

[`AppSerpElementItem`](AppSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:31461

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`AppElement`](AppElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`items`](../interfaces/IAppSerpElementItem.md#items)

#### Defined in

main.ts:31453

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`position`](../interfaces/IAppSerpElementItem.md#position)

#### Defined in

main.ts:31448

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`rank_absolute`](../interfaces/IAppSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:31444

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`rank_group`](../interfaces/IAppSerpElementItem.md#rank_group)

#### Defined in

main.ts:31440

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`rectangle`](../interfaces/IAppSerpElementItem.md#rectangle)

#### Defined in

main.ts:31457

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAppSerpElementItem`](../interfaces/IAppSerpElementItem.md).[`xpath`](../interfaces/IAppSerpElementItem.md#xpath)

#### Defined in

main.ts:31450

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

main.ts:31466

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

main.ts:31493

***

### fromJS()

> `static` **fromJS**(`data`): [`AppSerpElementItem`](AppSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppSerpElementItem`](AppSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:31486
