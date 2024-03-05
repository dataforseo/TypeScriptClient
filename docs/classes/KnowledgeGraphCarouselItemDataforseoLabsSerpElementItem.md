[dataforseo-client](../README.md) / [Exports](../modules.md) / KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`**

## Implements

- [`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#_discriminator)
- [data\_attrid](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#data_attrid)
- [items](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#items)
- [link](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#link)
- [position](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#rank_group)
- [title](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#title)
- [xpath](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#init)
- [toJSON](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem**(`data?`): [`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md) |

#### Returns

[`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:92160](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92160)

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
ss:/webfacts:net_worth

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[data_attrid](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#data_attrid)

#### Defined in

[main.ts:92151](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92151)

___

### items

• `Optional` **items**: [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[items](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:92156](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92156)

___

### link

• `Optional` **link**: `any`

link of the element

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[link](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#link)

#### Defined in

[main.ts:92153](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92153)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[position](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:92143](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92143)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:92139](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92139)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:92136](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92136)

___

### title

• `Optional` **title**: `string`

title of the link

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[title](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:92147](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92147)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:92145](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92145)

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

[main.ts:92165](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92165)

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

[main.ts:92194](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92194)

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:92187](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92187)
