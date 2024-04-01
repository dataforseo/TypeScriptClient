[Documentation](../README.md) / [Exports](../modules.md) / AboutThisResultElement

# Class: AboutThisResultElement

## Implements

- [`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AboutThisResultElement.md#constructor)

### Properties

- [language](AboutThisResultElement.md#language)
- [location](AboutThisResultElement.md#location)
- [related\_terms](AboutThisResultElement.md#related_terms)
- [search\_terms](AboutThisResultElement.md#search_terms)
- [source](AboutThisResultElement.md#source)
- [source\_info](AboutThisResultElement.md#source_info)
- [source\_url](AboutThisResultElement.md#source_url)
- [type](AboutThisResultElement.md#type)
- [url](AboutThisResultElement.md#url)

### Methods

- [init](AboutThisResultElement.md#init)
- [toJSON](AboutThisResultElement.md#tojson)
- [fromJS](AboutThisResultElement.md#fromjs)

## Constructors

### constructor

• **new AboutThisResultElement**(`data?`): [`AboutThisResultElement`](AboutThisResultElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md) |

#### Returns

[`AboutThisResultElement`](AboutThisResultElement.md)

#### Defined in

main.ts:21178

## Properties

### language

• `Optional` **language**: `string`

the language of the result

#### Implementation of

[IAboutThisResultElement](../interfaces/IAboutThisResultElement.md).[language](../interfaces/IAboutThisResultElement.md#language)

#### Defined in

main.ts:21168

___

### location

• `Optional` **location**: `string`

location for which the result is relevant

#### Implementation of

[IAboutThisResultElement](../interfaces/IAboutThisResultElement.md).[location](../interfaces/IAboutThisResultElement.md#location)

#### Defined in

main.ts:21170

___

### related\_terms

• `Optional` **related\_terms**: `string`[]

related search terms that appear in the result

#### Implementation of

[IAboutThisResultElement](../interfaces/IAboutThisResultElement.md).[related_terms](../interfaces/IAboutThisResultElement.md#related_terms)

#### Defined in

main.ts:21174

___

### search\_terms

• `Optional` **search\_terms**: `string`[]

matching search terms that appear in the result

#### Implementation of

[IAboutThisResultElement](../interfaces/IAboutThisResultElement.md).[search_terms](../interfaces/IAboutThisResultElement.md#search_terms)

#### Defined in

main.ts:21172

___

### source

• `Optional` **source**: `string`

source of additional information about the result

#### Implementation of

[IAboutThisResultElement](../interfaces/IAboutThisResultElement.md).[source](../interfaces/IAboutThisResultElement.md#source)

#### Defined in

main.ts:21161

___

### source\_info

• `Optional` **source\_info**: `string`

additional information about the result
description of the website from Wikipedia or another additional context

#### Implementation of

[IAboutThisResultElement](../interfaces/IAboutThisResultElement.md).[source_info](../interfaces/IAboutThisResultElement.md#source_info)

#### Defined in

main.ts:21164

___

### source\_url

• `Optional` **source\_url**: `string`

URL to full information from the 'source'

#### Implementation of

[IAboutThisResultElement](../interfaces/IAboutThisResultElement.md).[source_url](../interfaces/IAboutThisResultElement.md#source_url)

#### Defined in

main.ts:21166

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IAboutThisResultElement](../interfaces/IAboutThisResultElement.md).[type](../interfaces/IAboutThisResultElement.md#type)

#### Defined in

main.ts:21157

___

### url

• `Optional` **url**: `string`

result’s URL

#### Implementation of

[IAboutThisResultElement](../interfaces/IAboutThisResultElement.md).[url](../interfaces/IAboutThisResultElement.md#url)

#### Defined in

main.ts:21159

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

main.ts:21187

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

main.ts:21220

___

### fromJS

▸ **fromJS**(`data`): [`AboutThisResultElement`](AboutThisResultElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AboutThisResultElement`](AboutThisResultElement.md)

#### Defined in

main.ts:21213
