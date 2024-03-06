[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ScholarlyArticlesDataforseoLabsSerpElementItem

# Class: ScholarlyArticlesDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`ScholarlyArticlesDataforseoLabsSerpElementItem`**

## Implements

- [`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ScholarlyArticlesDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](ScholarlyArticlesDataforseoLabsSerpElementItem.md#_discriminator)
- [items](ScholarlyArticlesDataforseoLabsSerpElementItem.md#items)
- [position](ScholarlyArticlesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](ScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](ScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_group)
- [title](ScholarlyArticlesDataforseoLabsSerpElementItem.md#title)
- [url](ScholarlyArticlesDataforseoLabsSerpElementItem.md#url)
- [xpath](ScholarlyArticlesDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](ScholarlyArticlesDataforseoLabsSerpElementItem.md#init)
- [toJSON](ScholarlyArticlesDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](ScholarlyArticlesDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new ScholarlyArticlesDataforseoLabsSerpElementItem**(`data?`): [`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md) |

#### Returns

[`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:95259](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95259)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___


### items

• `Optional` **items**: [`ScholarlyArticlesElement`](ScholarlyArticlesElement.md)[]

elements of search results found in SERP

#### Implementation of

[IScholarlyArticlesDataforseoLabsSerpElementItem](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[items](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:95255](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95255)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IScholarlyArticlesDataforseoLabsSerpElementItem](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[position](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:95247](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95247)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IScholarlyArticlesDataforseoLabsSerpElementItem](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:95243](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95243)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IScholarlyArticlesDataforseoLabsSerpElementItem](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:95240](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95240)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IScholarlyArticlesDataforseoLabsSerpElementItem](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[title](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:95251](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95251)

___


### url

• `Optional` **url**: `string`

URL link

#### Implementation of

[IScholarlyArticlesDataforseoLabsSerpElementItem](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[url](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#url)

#### Defined in

[main.ts:95253](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95253)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IScholarlyArticlesDataforseoLabsSerpElementItem](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:95249](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95249)

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

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[init](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

[main.ts:95264](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95264)

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

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[toJSON](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

[main.ts:95292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95292)

___


### fromJS

▸ **fromJS**(`data`): [`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:95285](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95285)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")