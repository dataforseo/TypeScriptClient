[Documentation](../README.md) / [Exports](../modules.md) / RecipesElement

# Class: RecipesElement

## Implements

- [`IRecipesElement`](../interfaces/IRecipesElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RecipesElement.md#constructor)

### Properties

- [description](RecipesElement.md#description)
- [domain](RecipesElement.md#domain)
- [rating](RecipesElement.md#rating)
- [source](RecipesElement.md#source)
- [time](RecipesElement.md#time)
- [title](RecipesElement.md#title)
- [type](RecipesElement.md#type)
- [url](RecipesElement.md#url)

### Methods

- [init](RecipesElement.md#init)
- [toJSON](RecipesElement.md#tojson)
- [fromJS](RecipesElement.md#fromjs)

## Constructors

### constructor

• **new RecipesElement**(`data?`): [`RecipesElement`](RecipesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRecipesElement`](../interfaces/IRecipesElement.md) |

#### Returns

[`RecipesElement`](RecipesElement.md)

#### Defined in

main.ts:32289

## Properties

### description

• `Optional` **description**: `string`

description

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[description](../interfaces/IRecipesElement.md#description)

#### Defined in

main.ts:32280

___

### domain

• `Optional` **domain**: `string`

website domain

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[domain](../interfaces/IRecipesElement.md#domain)

#### Defined in

main.ts:32275

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[rating](../interfaces/IRecipesElement.md#rating)

#### Defined in

main.ts:32285

___

### source

• `Optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[source](../interfaces/IRecipesElement.md#source)

#### Defined in

main.ts:32278

___

### time

• `Optional` **time**: `string`

the total time it takes to prepare the cook the dish

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[time](../interfaces/IRecipesElement.md#time)

#### Defined in

main.ts:32282

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[title](../interfaces/IRecipesElement.md#title)

#### Defined in

main.ts:32271

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[type](../interfaces/IRecipesElement.md#type)

#### Defined in

main.ts:32269

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[url](../interfaces/IRecipesElement.md#url)

#### Defined in

main.ts:32273

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:32298

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:32322

___

### fromJS

▸ **fromJS**(`data`): [`RecipesElement`](RecipesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RecipesElement`](RecipesElement.md)

#### Defined in

main.ts:32315
