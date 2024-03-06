[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ProductConsiderationsExpandedElement

# Class: ProductConsiderationsExpandedElement

## Implements

- [`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductConsiderationsExpandedElement.md#constructor)

### Properties

- [about\_this\_result](ProductConsiderationsExpandedElement.md#about_this_result)
- [breadcrumb](ProductConsiderationsExpandedElement.md#breadcrumb)
- [domain](ProductConsiderationsExpandedElement.md#domain)
- [featured\_title](ProductConsiderationsExpandedElement.md#featured_title)
- [related\_searches](ProductConsiderationsExpandedElement.md#related_searches)
- [snippet](ProductConsiderationsExpandedElement.md#snippet)
- [timestamp](ProductConsiderationsExpandedElement.md#timestamp)
- [title](ProductConsiderationsExpandedElement.md#title)
- [type](ProductConsiderationsExpandedElement.md#type)
- [url](ProductConsiderationsExpandedElement.md#url)

### Methods

- [init](ProductConsiderationsExpandedElement.md#init)
- [toJSON](ProductConsiderationsExpandedElement.md#tojson)
- [fromJS](ProductConsiderationsExpandedElement.md#fromjs)

## Constructors

### constructor

• **new ProductConsiderationsExpandedElement**(`data?`): [`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductConsiderationsExpandedElement`](../interfaces/IProductConsiderationsExpandedElement.md) |

#### Returns

[`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

#### Defined in

[main.ts:34439](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34439)

## Properties

### about\_this\_result

• `Optional` **about\_this\_result**: [`AboutThisResultElement`](AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Implementation of

[IProductConsiderationsExpandedElement](../interfaces/IProductConsiderationsExpandedElement.md).[about_this_result](../interfaces/IProductConsiderationsExpandedElement.md#about_this_result)

#### Defined in

[main.ts:34435](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34435)

___


### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Implementation of

[IProductConsiderationsExpandedElement](../interfaces/IProductConsiderationsExpandedElement.md).[breadcrumb](../interfaces/IProductConsiderationsExpandedElement.md#breadcrumb)

#### Defined in

[main.ts:34418](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34418)

___


### domain

• `Optional` **domain**: `string`

website domain

#### Implementation of

[IProductConsiderationsExpandedElement](../interfaces/IProductConsiderationsExpandedElement.md).[domain](../interfaces/IProductConsiderationsExpandedElement.md#domain)

#### Defined in

[main.ts:34422](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34422)

___


### featured\_title

• `Optional` **featured\_title**: `string`

the title of the featured snippets source page

#### Implementation of

[IProductConsiderationsExpandedElement](../interfaces/IProductConsiderationsExpandedElement.md).[featured_title](../interfaces/IProductConsiderationsExpandedElement.md#featured_title)

#### Defined in

[main.ts:34416](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34416)

___


### related\_searches

• `Optional` **related\_searches**: `string`[]

search queries related to the elment

#### Implementation of

[IProductConsiderationsExpandedElement](../interfaces/IProductConsiderationsExpandedElement.md).[related_searches](../interfaces/IProductConsiderationsExpandedElement.md#related_searches)

#### Defined in

[main.ts:34431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34431)

___


### snippet

• `Optional` **snippet**: `string`

text alongside the link title

#### Implementation of

[IProductConsiderationsExpandedElement](../interfaces/IProductConsiderationsExpandedElement.md).[snippet](../interfaces/IProductConsiderationsExpandedElement.md#snippet)

#### Defined in

[main.ts:34420](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34420)

___


### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IProductConsiderationsExpandedElement](../interfaces/IProductConsiderationsExpandedElement.md).[timestamp](../interfaces/IProductConsiderationsExpandedElement.md#timestamp)

#### Defined in

[main.ts:34429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34429)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IProductConsiderationsExpandedElement](../interfaces/IProductConsiderationsExpandedElement.md).[title](../interfaces/IProductConsiderationsExpandedElement.md#title)

#### Defined in

[main.ts:34414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34414)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IProductConsiderationsExpandedElement](../interfaces/IProductConsiderationsExpandedElement.md).[type](../interfaces/IProductConsiderationsExpandedElement.md#type)

#### Defined in

[main.ts:34412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34412)

___


### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IProductConsiderationsExpandedElement](../interfaces/IProductConsiderationsExpandedElement.md).[url](../interfaces/IProductConsiderationsExpandedElement.md#url)

#### Defined in

[main.ts:34424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34424)

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

[main.ts:34448](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34448)

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

[main.ts:34478](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34478)

___


### fromJS

▸ **fromJS**(`data`): [`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

#### Defined in

[main.ts:34471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34471)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")