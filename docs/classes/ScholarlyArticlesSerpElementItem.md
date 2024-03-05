[dataforseo-client](../README.md) / [Exports](../modules.md) / ScholarlyArticlesSerpElementItem

# Class: ScholarlyArticlesSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`ScholarlyArticlesSerpElementItem`**

## Implements

- [`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ScholarlyArticlesSerpElementItem.md#constructor)

### Properties

- [\_discriminator](ScholarlyArticlesSerpElementItem.md#_discriminator)
- [items](ScholarlyArticlesSerpElementItem.md#items)
- [position](ScholarlyArticlesSerpElementItem.md#position)
- [rank\_absolute](ScholarlyArticlesSerpElementItem.md#rank_absolute)
- [rank\_group](ScholarlyArticlesSerpElementItem.md#rank_group)
- [rectangle](ScholarlyArticlesSerpElementItem.md#rectangle)
- [title](ScholarlyArticlesSerpElementItem.md#title)
- [url](ScholarlyArticlesSerpElementItem.md#url)
- [xpath](ScholarlyArticlesSerpElementItem.md#xpath)

### Methods

- [init](ScholarlyArticlesSerpElementItem.md#init)
- [toJSON](ScholarlyArticlesSerpElementItem.md#tojson)
- [fromJS](ScholarlyArticlesSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new ScholarlyArticlesSerpElementItem**(`data?`): [`ScholarlyArticlesSerpElementItem`](ScholarlyArticlesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md) |

#### Returns

[`ScholarlyArticlesSerpElementItem`](ScholarlyArticlesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:31895](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31895)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___

### items

• `Optional` **items**: [`ScholarlyArticlesElement`](ScholarlyArticlesElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IScholarlyArticlesSerpElementItem](../interfaces/IScholarlyArticlesSerpElementItem.md).[items](../interfaces/IScholarlyArticlesSerpElementItem.md#items)

#### Defined in

[main.ts:31887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31887)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IScholarlyArticlesSerpElementItem](../interfaces/IScholarlyArticlesSerpElementItem.md).[position](../interfaces/IScholarlyArticlesSerpElementItem.md#position)

#### Defined in

[main.ts:31879](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31879)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IScholarlyArticlesSerpElementItem](../interfaces/IScholarlyArticlesSerpElementItem.md).[rank_absolute](../interfaces/IScholarlyArticlesSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:31875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31875)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IScholarlyArticlesSerpElementItem](../interfaces/IScholarlyArticlesSerpElementItem.md).[rank_group](../interfaces/IScholarlyArticlesSerpElementItem.md#rank_group)

#### Defined in

[main.ts:31872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31872)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IScholarlyArticlesSerpElementItem](../interfaces/IScholarlyArticlesSerpElementItem.md).[rectangle](../interfaces/IScholarlyArticlesSerpElementItem.md#rectangle)

#### Defined in

[main.ts:31891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31891)

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IScholarlyArticlesSerpElementItem](../interfaces/IScholarlyArticlesSerpElementItem.md).[title](../interfaces/IScholarlyArticlesSerpElementItem.md#title)

#### Defined in

[main.ts:31883](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31883)

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IScholarlyArticlesSerpElementItem](../interfaces/IScholarlyArticlesSerpElementItem.md).[url](../interfaces/IScholarlyArticlesSerpElementItem.md#url)

#### Defined in

[main.ts:31885](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31885)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IScholarlyArticlesSerpElementItem](../interfaces/IScholarlyArticlesSerpElementItem.md).[xpath](../interfaces/IScholarlyArticlesSerpElementItem.md#xpath)

#### Defined in

[main.ts:31881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31881)

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

[main.ts:31900](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31900)

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

[main.ts:31929](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31929)

___

### fromJS

▸ **fromJS**(`data`): [`ScholarlyArticlesSerpElementItem`](ScholarlyArticlesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ScholarlyArticlesSerpElementItem`](ScholarlyArticlesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:31922](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31922)
