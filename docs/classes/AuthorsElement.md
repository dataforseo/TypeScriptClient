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

main.ts:54099

## Properties

### domain?

> **`optional`** **domain**: `string`

author’s link domain

#### Implementation of

[`IAuthorsElement`](../interfaces/IAuthorsElement.md).[`domain`](../interfaces/IAuthorsElement.md#domain)

#### Source

main.ts:54095

***

### name?

> **`optional`** **name**: `string`

name of the dataset author

#### Implementation of

[`IAuthorsElement`](../interfaces/IAuthorsElement.md).[`name`](../interfaces/IAuthorsElement.md#name)

#### Source

main.ts:54091

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IAuthorsElement`](../interfaces/IAuthorsElement.md).[`type`](../interfaces/IAuthorsElement.md#type)

#### Source

main.ts:54089

***

### url?

> **`optional`** **url**: `string`

author’s link URL

#### Implementation of

[`IAuthorsElement`](../interfaces/IAuthorsElement.md).[`url`](../interfaces/IAuthorsElement.md#url)

#### Source

main.ts:54093

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:54108

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:54128

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AuthorsElement`](AuthorsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`AuthorsElement`](AuthorsElement.md)

#### Source

main.ts:54121
