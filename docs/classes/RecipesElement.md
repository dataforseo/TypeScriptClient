[**Documentation**](../README.md)

***

[Documentation](../README.md) / RecipesElement

# Class: RecipesElement

## Implements

- [`IRecipesElement`](../interfaces/IRecipesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RecipesElement()

> **new RecipesElement**(`data`?): [`RecipesElement`](RecipesElement.md)

#### Parameters

##### data?

[`IRecipesElement`](../interfaces/IRecipesElement.md)

#### Returns

[`RecipesElement`](RecipesElement.md)

#### Defined in

main.ts:34203

## Properties

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`description`](../interfaces/IRecipesElement.md#description)

#### Defined in

main.ts:34194

***

### domain?

> `optional` **domain**: `string`

website domain

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`domain`](../interfaces/IRecipesElement.md#domain)

#### Defined in

main.ts:34189

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`rating`](../interfaces/IRecipesElement.md#rating)

#### Defined in

main.ts:34199

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`source`](../interfaces/IRecipesElement.md#source)

#### Defined in

main.ts:34192

***

### time?

> `optional` **time**: `string`

the total time it takes to prepare the cook the dish

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`time`](../interfaces/IRecipesElement.md#time)

#### Defined in

main.ts:34196

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`title`](../interfaces/IRecipesElement.md#title)

#### Defined in

main.ts:34185

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`type`](../interfaces/IRecipesElement.md#type)

#### Defined in

main.ts:34183

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`url`](../interfaces/IRecipesElement.md#url)

#### Defined in

main.ts:34187

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:34212

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:34236

***

### fromJS()

> `static` **fromJS**(`data`): [`RecipesElement`](RecipesElement.md)

#### Parameters

##### data

`any`

#### Returns

[`RecipesElement`](RecipesElement.md)

#### Defined in

main.ts:34229
