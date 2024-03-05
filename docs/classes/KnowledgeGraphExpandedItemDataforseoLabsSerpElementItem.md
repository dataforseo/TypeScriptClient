[dataforseo-client](../README.md) / [Exports](../modules.md) / KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`**

## Implements

- [`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#_discriminator)
- [data\_attrid](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#data_attrid)
- [expanded\_element](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#expanded_element)
- [position](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#rank_group)
- [title](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#title)
- [xpath](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#init)
- [toJSON](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem**(`data?`): [`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md) |

#### Returns

[`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:93826](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93826)

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

[IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[data_attrid](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Defined in

[main.ts:93820](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93820)

___

### expanded\_element

• `Optional` **expanded\_element**: [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)[]

link of the element

#### Implementation of

[IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[expanded_element](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#expanded_element)

#### Defined in

[main.ts:93822](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93822)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[position](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:93812](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93812)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:93808](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93808)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:93805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93805)

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[title](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:93816](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93816)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:93814](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93814)

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

[main.ts:93831](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93831)

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

[main.ts:93859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93859)

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:93852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93852)
