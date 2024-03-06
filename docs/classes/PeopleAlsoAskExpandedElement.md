[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / PeopleAlsoAskExpandedElement

# Class: PeopleAlsoAskExpandedElement

## Implements

- [`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PeopleAlsoAskExpandedElement.md#constructor)

### Properties

- [description](PeopleAlsoAskExpandedElement.md#description)
- [domain](PeopleAlsoAskExpandedElement.md#domain)
- [featured\_title](PeopleAlsoAskExpandedElement.md#featured_title)
- [images](PeopleAlsoAskExpandedElement.md#images)
- [table](PeopleAlsoAskExpandedElement.md#table)
- [timestamp](PeopleAlsoAskExpandedElement.md#timestamp)
- [title](PeopleAlsoAskExpandedElement.md#title)
- [type](PeopleAlsoAskExpandedElement.md#type)
- [url](PeopleAlsoAskExpandedElement.md#url)

### Methods

- [init](PeopleAlsoAskExpandedElement.md#init)
- [toJSON](PeopleAlsoAskExpandedElement.md#tojson)
- [fromJS](PeopleAlsoAskExpandedElement.md#fromjs)

## Constructors

### constructor

• **new PeopleAlsoAskExpandedElement**(`data?`): [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPeopleAlsoAskExpandedElement`](../interfaces/IPeopleAlsoAskExpandedElement.md) |

#### Returns

[`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Defined in

[main.ts:28402](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28402)

## Properties

### description

• `Optional` **description**: `string`

description of the hotel booking element

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[description](../interfaces/IPeopleAlsoAskExpandedElement.md#description)

#### Defined in

[main.ts:28388](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28388)

___


### domain

• `Optional` **domain**: `string`

website domain

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[domain](../interfaces/IPeopleAlsoAskExpandedElement.md#domain)

#### Defined in

[main.ts:28384](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28384)

___


### featured\_title

• `Optional` **featured\_title**: `string`

the title of the featured snippets source page

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[featured_title](../interfaces/IPeopleAlsoAskExpandedElement.md#featured_title)

#### Defined in

[main.ts:28380](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28380)

___


### images

• `Optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[images](../interfaces/IPeopleAlsoAskExpandedElement.md#images)

#### Defined in

[main.ts:28390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28390)

___


### table

• `Optional` **table**: [`Table`](Table.md)

results table
if there are none, equals null

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[table](../interfaces/IPeopleAlsoAskExpandedElement.md#table)

#### Defined in

[main.ts:28398](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28398)

___


### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[timestamp](../interfaces/IPeopleAlsoAskExpandedElement.md#timestamp)

#### Defined in

[main.ts:28395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28395)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[title](../interfaces/IPeopleAlsoAskExpandedElement.md#title)

#### Defined in

[main.ts:28386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28386)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[type](../interfaces/IPeopleAlsoAskExpandedElement.md#type)

#### Defined in

[main.ts:28378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28378)

___


### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IPeopleAlsoAskExpandedElement](../interfaces/IPeopleAlsoAskExpandedElement.md).[url](../interfaces/IPeopleAlsoAskExpandedElement.md#url)

#### Defined in

[main.ts:28382](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28382)

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

[main.ts:28411](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28411)

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

[main.ts:28440](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28440)

___


### fromJS

▸ **fromJS**(`data`): [`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PeopleAlsoAskExpandedElement`](PeopleAlsoAskExpandedElement.md)

#### Defined in

[main.ts:28433](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28433)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")