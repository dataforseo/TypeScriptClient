[**Documentation**](../README.md)

***

[Documentation](../README.md) / RecipesSerpElementItem

# Class: RecipesSerpElementItem

Defined in: main.ts:34293

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RecipesSerpElementItem()

> **new RecipesSerpElementItem**(`data`?): [`RecipesSerpElementItem`](RecipesSerpElementItem.md)

Defined in: main.ts:34303

#### Parameters

##### data?

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md)

#### Returns

[`RecipesSerpElementItem`](RecipesSerpElementItem.md)

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

> `optional` **items**: [`RecipesElement`](RecipesElement.md)[]

Defined in: main.ts:34295

contains arrays of specific images

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`items`](../interfaces/IRecipesSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`position`](../interfaces/IRecipesSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`rank_absolute`](../interfaces/IRecipesSerpElementItem.md#rank_absolute)

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

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`rank_group`](../interfaces/IRecipesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:34299

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`rectangle`](../interfaces/IRecipesSerpElementItem.md#rectangle)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`type`](../interfaces/IRecipesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`xpath`](../interfaces/IRecipesSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:34308

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

Defined in: main.ts:34331

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`RecipesSerpElementItem`](RecipesSerpElementItem.md)

Defined in: main.ts:34324

#### Parameters

##### data

`any`

#### Returns

[`RecipesSerpElementItem`](RecipesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
