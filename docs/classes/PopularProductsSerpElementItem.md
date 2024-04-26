**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PopularProductsSerpElementItem

# Class: PopularProductsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PopularProductsSerpElementItem(data)

> **new PopularProductsSerpElementItem**(`data`?): [`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

#### Parameters

• **data?**: [`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md)

#### Returns

[`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:33093

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19830

***

### items?

> **`optional`** **items**: [`PopularProductsElement`](PopularProductsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`items`](../interfaces/IPopularProductsSerpElementItem.md#items)

#### Source

main.ts:33085

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`position`](../interfaces/IPopularProductsSerpElementItem.md#position)

#### Source

main.ts:33078

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`rank_absolute`](../interfaces/IPopularProductsSerpElementItem.md#rank_absolute)

#### Source

main.ts:33074

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`rank_group`](../interfaces/IPopularProductsSerpElementItem.md#rank_group)

#### Source

main.ts:33070

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`rectangle`](../interfaces/IPopularProductsSerpElementItem.md#rectangle)

#### Source

main.ts:33089

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`title`](../interfaces/IPopularProductsSerpElementItem.md#title)

#### Source

main.ts:33082

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`xpath`](../interfaces/IPopularProductsSerpElementItem.md#xpath)

#### Source

main.ts:33080

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

main.ts:33098

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

main.ts:33126

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:33119
