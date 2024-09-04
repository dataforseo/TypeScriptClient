[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / RecipesElement

# Class: RecipesElement

## Implements

- [`IRecipesElement`](../interfaces/IRecipesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RecipesElement()

> **new RecipesElement**(`data`?): [`RecipesElement`](RecipesElement.md)

#### Parameters

• **data?**: [`IRecipesElement`](../interfaces/IRecipesElement.md)

#### Returns

[`RecipesElement`](RecipesElement.md)

#### Defined in

main.ts:32403

## Properties

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`description`](../interfaces/IRecipesElement.md#description)

#### Defined in

main.ts:32394

***

### domain?

> `optional` **domain**: `string`

website domain

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`domain`](../interfaces/IRecipesElement.md#domain)

#### Defined in

main.ts:32389

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`rating`](../interfaces/IRecipesElement.md#rating)

#### Defined in

main.ts:32399

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`source`](../interfaces/IRecipesElement.md#source)

#### Defined in

main.ts:32392

***

### time?

> `optional` **time**: `string`

the total time it takes to prepare the cook the dish

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`time`](../interfaces/IRecipesElement.md#time)

#### Defined in

main.ts:32396

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`title`](../interfaces/IRecipesElement.md#title)

#### Defined in

main.ts:32385

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`type`](../interfaces/IRecipesElement.md#type)

#### Defined in

main.ts:32383

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`url`](../interfaces/IRecipesElement.md#url)

#### Defined in

main.ts:32387

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:32412

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:32436

***

### fromJS()

> `static` **fromJS**(`data`): [`RecipesElement`](RecipesElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`RecipesElement`](RecipesElement.md)

#### Defined in

main.ts:32429
