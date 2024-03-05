[dataforseo-client](../README.md) / [Exports](../modules.md) / KnowledgeGraphListItemSerpElementItem

# Class: KnowledgeGraphListItemSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`KnowledgeGraphListItemSerpElementItem`**

## Implements

- [`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphListItemSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphListItemSerpElementItem.md#_discriminator)
- [data\_attrid](KnowledgeGraphListItemSerpElementItem.md#data_attrid)
- [items](KnowledgeGraphListItemSerpElementItem.md#items)
- [link](KnowledgeGraphListItemSerpElementItem.md#link)
- [position](KnowledgeGraphListItemSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphListItemSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphListItemSerpElementItem.md#rank_group)
- [rectangle](KnowledgeGraphListItemSerpElementItem.md#rectangle)
- [title](KnowledgeGraphListItemSerpElementItem.md#title)
- [xpath](KnowledgeGraphListItemSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphListItemSerpElementItem.md#init)
- [toJSON](KnowledgeGraphListItemSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphListItemSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphListItemSerpElementItem**(`data?`): [`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphListItemSerpElementItem`](../interfaces/IKnowledgeGraphListItemSerpElementItem.md) |

#### Returns

[`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:26652](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26652)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
ss:/webfacts:net_worth

#### Implementation of

[IKnowledgeGraphListItemSerpElementItem](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[data_attrid](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#data_attrid)

#### Defined in

[main.ts:26639](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26639)

___

### items

• `Optional` **items**: [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IKnowledgeGraphListItemSerpElementItem](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[items](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#items)

#### Defined in

[main.ts:26644](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26644)

___

### link

• `Optional` **link**: [`LinkElement`](LinkElement.md)

link of the element

#### Implementation of

[IKnowledgeGraphListItemSerpElementItem](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[link](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#link)

#### Defined in

[main.ts:26641](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26641)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphListItemSerpElementItem](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[position](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#position)

#### Defined in

[main.ts:26631](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26631)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphListItemSerpElementItem](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:26627](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26627)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphListItemSerpElementItem](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#rank_group)

#### Defined in

[main.ts:26624](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26624)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IKnowledgeGraphListItemSerpElementItem](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[rectangle](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#rectangle)

#### Defined in

[main.ts:26648](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26648)

___

### title

• `Optional` **title**: `string`

title of the link element

#### Implementation of

[IKnowledgeGraphListItemSerpElementItem](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[title](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#title)

#### Defined in

[main.ts:26635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26635)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphListItemSerpElementItem](../interfaces/IKnowledgeGraphListItemSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphListItemSerpElementItem.md#xpath)

#### Defined in

[main.ts:26633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26633)

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

[main.ts:26657](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26657)

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

[main.ts:26687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26687)

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:26680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26680)
