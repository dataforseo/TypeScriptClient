**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / RecipesSerpElementItem

# Class: RecipesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RecipesSerpElementItem(data)

> **new RecipesSerpElementItem**(`data`?): [`RecipesSerpElementItem`](RecipesSerpElementItem.md)

#### Parameters

• **data?**: [`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md)

#### Returns

[`RecipesSerpElementItem`](RecipesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:32832

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19855

***

### items?

> **`optional`** **items**: [`RecipesElement`](RecipesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`items`](../interfaces/IRecipesSerpElementItem.md#items)

#### Source

main.ts:32824

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`position`](../interfaces/IRecipesSerpElementItem.md#position)

#### Source

main.ts:32819

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`rank_absolute`](../interfaces/IRecipesSerpElementItem.md#rank_absolute)

#### Source

main.ts:32815

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`rank_group`](../interfaces/IRecipesSerpElementItem.md#rank_group)

#### Source

main.ts:32811

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`rectangle`](../interfaces/IRecipesSerpElementItem.md#rectangle)

#### Source

main.ts:32828

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IRecipesSerpElementItem`](../interfaces/IRecipesSerpElementItem.md).[`xpath`](../interfaces/IRecipesSerpElementItem.md#xpath)

#### Source

main.ts:32821

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

main.ts:32837

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

main.ts:32864

***

### fromJS()

> **`static`** **fromJS**(`data`): [`RecipesSerpElementItem`](RecipesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`RecipesSerpElementItem`](RecipesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:32857
