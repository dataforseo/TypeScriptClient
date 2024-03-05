[dataforseo-client](../README.md) / [Exports](../modules.md) / RecipesElement

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

[main.ts:31438](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31438)

## Properties

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[description](../interfaces/IRecipesElement.md#description)

#### Defined in

[main.ts:31429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31429)

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[domain](../interfaces/IRecipesElement.md#domain)

#### Defined in

[main.ts:31424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31424)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[rating](../interfaces/IRecipesElement.md#rating)

#### Defined in

[main.ts:31434](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31434)

___

### source

• `Optional` **source**: `string`

web source of the hotel booking element
indicates the source of information included in the element

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[source](../interfaces/IRecipesElement.md#source)

#### Defined in

[main.ts:31427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31427)

___

### time

• `Optional` **time**: `string`

the total time it takes to prepare the cook the dish

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[time](../interfaces/IRecipesElement.md#time)

#### Defined in

[main.ts:31431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31431)

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[title](../interfaces/IRecipesElement.md#title)

#### Defined in

[main.ts:31420](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31420)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[type](../interfaces/IRecipesElement.md#type)

#### Defined in

[main.ts:31418](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31418)

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IRecipesElement](../interfaces/IRecipesElement.md).[url](../interfaces/IRecipesElement.md#url)

#### Defined in

[main.ts:31422](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31422)

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

[main.ts:31447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31447)

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

[main.ts:31471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31471)

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

[main.ts:31464](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31464)
