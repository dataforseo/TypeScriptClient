[**Documentation**](../README.md)

***

[Documentation](../README.md) / RecipesElement

# Class: RecipesElement

Defined in: main.ts:34181

## Implements

- [`IRecipesElement`](../interfaces/IRecipesElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RecipesElement()

> **new RecipesElement**(`data`?): [`RecipesElement`](RecipesElement.md)

Defined in: main.ts:34203

#### Parameters

##### data?

[`IRecipesElement`](../interfaces/IRecipesElement.md)

#### Returns

[`RecipesElement`](RecipesElement.md)

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:34194

description

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`description`](../interfaces/IRecipesElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:34189

website domain

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`domain`](../interfaces/IRecipesElement.md#domain)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:34199

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`rating`](../interfaces/IRecipesElement.md#rating)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:34192

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`source`](../interfaces/IRecipesElement.md#source)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:34196

the total time it takes to prepare the cook the dish

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`time`](../interfaces/IRecipesElement.md#time)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:34185

title of a given link element

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`title`](../interfaces/IRecipesElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:34183

type of element

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`type`](../interfaces/IRecipesElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:34187

URL

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`url`](../interfaces/IRecipesElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:34212

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:34236

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`RecipesElement`](RecipesElement.md)

Defined in: main.ts:34229

#### Parameters

##### data

`any`

#### Returns

[`RecipesElement`](RecipesElement.md)
