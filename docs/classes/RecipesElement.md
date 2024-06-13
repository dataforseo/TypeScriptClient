**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / RecipesElement

# Class: RecipesElement

## Implements

- [`IRecipesElement`](../interfaces/IRecipesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RecipesElement(data)

> **new RecipesElement**(`data`?): [`RecipesElement`](RecipesElement.md)

#### Parameters

• **data?**: [`IRecipesElement`](../interfaces/IRecipesElement.md)

#### Returns

[`RecipesElement`](RecipesElement.md)

#### Source

main.ts:32688

## Properties

### description?

> **`optional`** **description**: `string`

description

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`description`](../interfaces/IRecipesElement.md#description)

#### Source

main.ts:32679

***

### domain?

> **`optional`** **domain**: `string`

website domain

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`domain`](../interfaces/IRecipesElement.md#domain)

#### Source

main.ts:32674

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`rating`](../interfaces/IRecipesElement.md#rating)

#### Source

main.ts:32684

***

### source?

> **`optional`** **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`source`](../interfaces/IRecipesElement.md#source)

#### Source

main.ts:32677

***

### time?

> **`optional`** **time**: `string`

the total time it takes to prepare the cook the dish

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`time`](../interfaces/IRecipesElement.md#time)

#### Source

main.ts:32681

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`title`](../interfaces/IRecipesElement.md#title)

#### Source

main.ts:32670

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`type`](../interfaces/IRecipesElement.md#type)

#### Source

main.ts:32668

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`url`](../interfaces/IRecipesElement.md#url)

#### Source

main.ts:32672

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:32697

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:32721

***

### fromJS()

> **`static`** **fromJS**(`data`): [`RecipesElement`](RecipesElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`RecipesElement`](RecipesElement.md)

#### Source

main.ts:32714
