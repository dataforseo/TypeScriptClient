[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / RecipesSerpElementItem

# Class: RecipesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RecipesSerpElementItem()

> **new RecipesSerpElementItem**(`data`?): [`RecipesSerpElementItem`](RecipesSerpElementItem.md)

#### Parameters

• **data?**: [`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md)

#### Returns

[`RecipesSerpElementItem`](RecipesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:33355

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`RecipesElement`](RecipesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`items`](../interfaces/IRecipesSerpElementItem.md#items)

#### Defined in

main.ts:33347

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`position`](../interfaces/IRecipesSerpElementItem.md#position)

#### Defined in

main.ts:33342

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`rank_absolute`](../interfaces/IRecipesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:33338

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`rank_group`](../interfaces/IRecipesSerpElementItem.md#rank_group)

#### Defined in

main.ts:33334

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`rectangle`](../interfaces/IRecipesSerpElementItem.md#rectangle)

#### Defined in

main.ts:33351

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`xpath`](../interfaces/IRecipesSerpElementItem.md#xpath)

#### Defined in

main.ts:33344

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

main.ts:33360

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

main.ts:33387

***

### fromJS()

> `static` **fromJS**(`data`): [`RecipesSerpElementItem`](RecipesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`RecipesSerpElementItem`](RecipesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:33380
