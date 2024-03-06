[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KnowledgeGraphPartItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphPartItemDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`**

## Implements

- [`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#_discriminator)
- [data\_attrid](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#data_attrid)
- [links](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#links)
- [position](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_group)
- [text](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#text)
- [title](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#title)
- [xpath](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#init)
- [toJSON](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphPartItemDataforseoLabsSerpElementItem**(`data?`): [`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md) |

#### Returns

[`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:93717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93717)

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
kc:/local:place qa

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[data_attrid](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Defined in

[main.ts:93709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93709)

___


### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

link of the element

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[links](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#links)

#### Defined in

[main.ts:93713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93713)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[position](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:93701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93701)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:93697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93697)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:93694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93694)

___


### text

• `Optional` **text**: `string`

content within the item

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[text](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#text)

#### Defined in

[main.ts:93711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93711)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[title](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:93705](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93705)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphPartItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:93703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93703)

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

[main.ts:93722](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93722)

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

[main.ts:93751](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93751)

___


### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:93744](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93744)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")