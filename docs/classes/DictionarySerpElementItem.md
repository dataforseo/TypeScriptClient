[dataforseo-client](../README.md) / [Exports](../modules.md) / DictionarySerpElementItem

# Class: DictionarySerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`DictionarySerpElementItem`**

## Implements

- [`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DictionarySerpElementItem.md#constructor)

### Properties

- [\_discriminator](DictionarySerpElementItem.md#_discriminator)
- [breadcrumb](DictionarySerpElementItem.md#breadcrumb)
- [domain](DictionarySerpElementItem.md#domain)
- [keyword](DictionarySerpElementItem.md#keyword)
- [links](DictionarySerpElementItem.md#links)
- [position](DictionarySerpElementItem.md#position)
- [rank\_absolute](DictionarySerpElementItem.md#rank_absolute)
- [rank\_group](DictionarySerpElementItem.md#rank_group)
- [rectangle](DictionarySerpElementItem.md#rectangle)
- [snippet](DictionarySerpElementItem.md#snippet)
- [text](DictionarySerpElementItem.md#text)
- [title](DictionarySerpElementItem.md#title)
- [url](DictionarySerpElementItem.md#url)
- [xpath](DictionarySerpElementItem.md#xpath)

### Methods

- [init](DictionarySerpElementItem.md#init)
- [toJSON](DictionarySerpElementItem.md#tojson)
- [fromJS](DictionarySerpElementItem.md#fromjs)

## Constructors

### constructor

• **new DictionarySerpElementItem**(`data?`): [`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDictionarySerpElementItem`](../interfaces/IDictionarySerpElementItem.md) |

#### Returns

[`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:66891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66891)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___

### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Implementation of

[IDictionarySerpElementItem](../interfaces/IDictionarySerpElementItem.md).[breadcrumb](../interfaces/IDictionarySerpElementItem.md#breadcrumb)

#### Defined in

[main.ts:66873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66873)

___

### domain

• `Optional` **domain**: `string`

domain in SERP

#### Implementation of

[IDictionarySerpElementItem](../interfaces/IDictionarySerpElementItem.md).[domain](../interfaces/IDictionarySerpElementItem.md#domain)

#### Defined in

[main.ts:66871](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66871)

___

### keyword

• `Optional` **keyword**: `string`

keyword highlighted in the result

#### Implementation of

[IDictionarySerpElementItem](../interfaces/IDictionarySerpElementItem.md).[keyword](../interfaces/IDictionarySerpElementItem.md#keyword)

#### Defined in

[main.ts:66875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66875)

___

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of search results
if there are none, equals null

#### Implementation of

[IDictionarySerpElementItem](../interfaces/IDictionarySerpElementItem.md).[links](../interfaces/IDictionarySerpElementItem.md#links)

#### Defined in

[main.ts:66883](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66883)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IDictionarySerpElementItem](../interfaces/IDictionarySerpElementItem.md).[position](../interfaces/IDictionarySerpElementItem.md#position)

#### Defined in

[main.ts:66863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66863)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IDictionarySerpElementItem](../interfaces/IDictionarySerpElementItem.md).[rank_absolute](../interfaces/IDictionarySerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:66859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66859)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IDictionarySerpElementItem](../interfaces/IDictionarySerpElementItem.md).[rank_group](../interfaces/IDictionarySerpElementItem.md#rank_group)

#### Defined in

[main.ts:66856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66856)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for Baidu search engine, that’s why rectangle always equals null

#### Implementation of

[IDictionarySerpElementItem](../interfaces/IDictionarySerpElementItem.md).[rectangle](../interfaces/IDictionarySerpElementItem.md#rectangle)

#### Defined in

[main.ts:66887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66887)

___

### snippet

• `Optional` **snippet**: `string`

snippet of the element

#### Implementation of

[IDictionarySerpElementItem](../interfaces/IDictionarySerpElementItem.md).[snippet](../interfaces/IDictionarySerpElementItem.md#snippet)

#### Defined in

[main.ts:66877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66877)

___

### text

• `Optional` **text**: `boolean`

description of the results element in SERP

#### Implementation of

[IDictionarySerpElementItem](../interfaces/IDictionarySerpElementItem.md).[text](../interfaces/IDictionarySerpElementItem.md#text)

#### Defined in

[main.ts:66879](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66879)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IDictionarySerpElementItem](../interfaces/IDictionarySerpElementItem.md).[title](../interfaces/IDictionarySerpElementItem.md#title)

#### Defined in

[main.ts:66867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66867)

___

### url

• `Optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[IDictionarySerpElementItem](../interfaces/IDictionarySerpElementItem.md).[url](../interfaces/IDictionarySerpElementItem.md#url)

#### Defined in

[main.ts:66869](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66869)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IDictionarySerpElementItem](../interfaces/IDictionarySerpElementItem.md).[xpath](../interfaces/IDictionarySerpElementItem.md#xpath)

#### Defined in

[main.ts:66865](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66865)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

[main.ts:66896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66896)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

[main.ts:66930](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66930)

___

### fromJS

▸ **fromJS**(`data`): [`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DictionarySerpElementItem`](DictionarySerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:66923](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66923)
