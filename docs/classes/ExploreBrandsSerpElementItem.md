**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ExploreBrandsSerpElementItem

# Class: ExploreBrandsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ExploreBrandsSerpElementItem(data)

> **new ExploreBrandsSerpElementItem**(`data`?): [`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

#### Parameters

• **data?**: [`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md)

#### Returns

[`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:36573

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19994

***

### items?

> **`optional`** **items**: [`ExploreBrandsElement`](ExploreBrandsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`items`](../interfaces/IExploreBrandsSerpElementItem.md#items)

#### Source

main.ts:36565

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`position`](../interfaces/IExploreBrandsSerpElementItem.md#position)

#### Source

main.ts:36558

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`rank_absolute`](../interfaces/IExploreBrandsSerpElementItem.md#rank_absolute)

#### Source

main.ts:36554

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`rank_group`](../interfaces/IExploreBrandsSerpElementItem.md#rank_group)

#### Source

main.ts:36550

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`rectangle`](../interfaces/IExploreBrandsSerpElementItem.md#rectangle)

#### Source

main.ts:36569

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`title`](../interfaces/IExploreBrandsSerpElementItem.md#title)

#### Source

main.ts:36562

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`xpath`](../interfaces/IExploreBrandsSerpElementItem.md#xpath)

#### Source

main.ts:36560

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

main.ts:36578

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

main.ts:36606

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:36599
