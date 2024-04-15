**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AuthorsElement

# Class: AuthorsElement

## Implements

- [`IAuthorsElement`](../interfaces/IAuthorsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AuthorsElement(data)

> **new AuthorsElement**(`data`?): [`AuthorsElement`](AuthorsElement.md)

#### Parameters

• **data?**: [`IAuthorsElement`](../interfaces/IAuthorsElement.md)

#### Returns

[`AuthorsElement`](AuthorsElement.md)

#### Source

main.ts:53029

## Properties

### domain?

> **`optional`** **domain**: `string`

author’s link domain

#### Implementation of

[`IAuthorsElement`](../interfaces/IAuthorsElement.md).[`domain`](../interfaces/IAuthorsElement.md#domain)

#### Source

main.ts:53025

***

### name?

> **`optional`** **name**: `string`

name of the dataset author

#### Implementation of

[`IAuthorsElement`](../interfaces/IAuthorsElement.md).[`name`](../interfaces/IAuthorsElement.md#name)

#### Source

main.ts:53021

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IAuthorsElement`](../interfaces/IAuthorsElement.md).[`type`](../interfaces/IAuthorsElement.md#type)

#### Source

main.ts:53019

***

### url?

> **`optional`** **url**: `string`

author’s link URL

#### Implementation of

[`IAuthorsElement`](../interfaces/IAuthorsElement.md).[`url`](../interfaces/IAuthorsElement.md#url)

#### Source

main.ts:53023

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:53038

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:53058

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AuthorsElement`](AuthorsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`AuthorsElement`](AuthorsElement.md)

#### Source

main.ts:53051
