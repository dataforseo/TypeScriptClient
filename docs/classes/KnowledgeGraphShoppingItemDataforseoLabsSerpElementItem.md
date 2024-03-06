[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`**

## Implements

- [`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#_discriminator)
- [data\_attrid](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#data_attrid)
- [items](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#items)
- [position](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#rank_group)
- [title](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#title)
- [xpath](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#init)
- [toJSON](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem**(`data?`): [`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md) |

#### Returns

[`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:93931](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93931)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___


### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers

#### Implementation of

[IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[data_attrid](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Defined in

[main.ts:93925](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93925)

___


### items

• `Optional` **items**: [`KnowledgeGraphShoppingElement`](KnowledgeGraphShoppingElement.md)[]

elements of search results found in SERP

#### Implementation of

[IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[items](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:93927](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93927)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[position](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:93917](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93917)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:93913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93913)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:93910](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93910)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[title](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:93921](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93921)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:93919](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93919)

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

[main.ts:93936](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93936)

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

[main.ts:93964](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93964)

___


### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:93957](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93957)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")