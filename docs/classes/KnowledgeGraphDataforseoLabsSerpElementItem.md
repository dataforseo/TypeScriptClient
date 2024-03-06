[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KnowledgeGraphDataforseoLabsSerpElementItem

# Class: KnowledgeGraphDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`KnowledgeGraphDataforseoLabsSerpElementItem`**

## Implements

- [`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphDataforseoLabsSerpElementItem.md#_discriminator)
- [card\_id](KnowledgeGraphDataforseoLabsSerpElementItem.md#card_id)
- [cid](KnowledgeGraphDataforseoLabsSerpElementItem.md#cid)
- [description](KnowledgeGraphDataforseoLabsSerpElementItem.md#description)
- [image\_url](KnowledgeGraphDataforseoLabsSerpElementItem.md#image_url)
- [items](KnowledgeGraphDataforseoLabsSerpElementItem.md#items)
- [logo\_url](KnowledgeGraphDataforseoLabsSerpElementItem.md#logo_url)
- [position](KnowledgeGraphDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphDataforseoLabsSerpElementItem.md#rank_group)
- [se\_type](KnowledgeGraphDataforseoLabsSerpElementItem.md#se_type)
- [sub\_title](KnowledgeGraphDataforseoLabsSerpElementItem.md#sub_title)
- [title](KnowledgeGraphDataforseoLabsSerpElementItem.md#title)
- [url](KnowledgeGraphDataforseoLabsSerpElementItem.md#url)
- [xpath](KnowledgeGraphDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphDataforseoLabsSerpElementItem.md#init)
- [toJSON](KnowledgeGraphDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphDataforseoLabsSerpElementItem**(`data?`): [`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md) |

#### Returns

[`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:91868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91868)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___


### card\_id

• `Optional` **card\_id**: `string`

card id

#### Implementation of

[IKnowledgeGraphDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[card_id](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#card_id)

#### Defined in

[main.ts:91854](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91854)

___


### cid

• `Optional` **cid**: `string`

google-defined client id

#### Implementation of

[IKnowledgeGraphDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[cid](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#cid)

#### Defined in

[main.ts:91862](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91862)

___


### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IKnowledgeGraphDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[description](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#description)

#### Defined in

[main.ts:91852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91852)

___


### image\_url

• `Optional` **image\_url**: `string`

URL of the image from knowledge graph

#### Implementation of

[IKnowledgeGraphDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[image_url](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#image_url)

#### Defined in

[main.ts:91858](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91858)

___


### items

• `Optional` **items**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[IKnowledgeGraphDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[items](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:91864](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91864)

___


### logo\_url

• `Optional` **logo\_url**: `string`

URL of the logo from knowledge graph

#### Implementation of

[IKnowledgeGraphDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[logo_url](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#logo_url)

#### Defined in

[main.ts:91860](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91860)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[position](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:91844](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91844)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:91840](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91840)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:91837](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91837)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IKnowledgeGraphDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[se_type](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

[main.ts:91834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91834)

___


### sub\_title

• `Optional` **sub\_title**: `string`

subtitle of the item

#### Implementation of

[IKnowledgeGraphDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[sub_title](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#sub_title)

#### Defined in

[main.ts:91850](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91850)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IKnowledgeGraphDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[title](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:91848](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91848)

___


### url

• `Optional` **url**: `string`

URL link

#### Implementation of

[IKnowledgeGraphDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[url](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#url)

#### Defined in

[main.ts:91856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91856)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:91846](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91846)

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

[main.ts:91873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91873)

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

[main.ts:91908](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91908)

___


### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:91901](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91901)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")