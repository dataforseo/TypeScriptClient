[dataforseo-client](../README.md) / [Exports](../modules.md) / KnowledgeGraphPartItemSerpElementItem

# Class: KnowledgeGraphPartItemSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`KnowledgeGraphPartItemSerpElementItem`**

## Implements

- [`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphPartItemSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphPartItemSerpElementItem.md#_discriminator)
- [data\_attrid](KnowledgeGraphPartItemSerpElementItem.md#data_attrid)
- [links](KnowledgeGraphPartItemSerpElementItem.md#links)
- [position](KnowledgeGraphPartItemSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphPartItemSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphPartItemSerpElementItem.md#rank_group)
- [rectangle](KnowledgeGraphPartItemSerpElementItem.md#rectangle)
- [text](KnowledgeGraphPartItemSerpElementItem.md#text)
- [title](KnowledgeGraphPartItemSerpElementItem.md#title)
- [xpath](KnowledgeGraphPartItemSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphPartItemSerpElementItem.md#init)
- [toJSON](KnowledgeGraphPartItemSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphPartItemSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphPartItemSerpElementItem**(`data?`): [`KnowledgeGraphPartItemSerpElementItem`](KnowledgeGraphPartItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphPartItemSerpElementItem`](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md) |

#### Returns

[`KnowledgeGraphPartItemSerpElementItem`](KnowledgeGraphPartItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:27197](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27197)

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
kc:/local:place qa

#### Implementation of

[IKnowledgeGraphPartItemSerpElementItem](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[data_attrid](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#data_attrid)

#### Defined in

[main.ts:27183](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27183)

___

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[IKnowledgeGraphPartItemSerpElementItem](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[links](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#links)

#### Defined in

[main.ts:27189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27189)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphPartItemSerpElementItem](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[position](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#position)

#### Defined in

[main.ts:27175](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27175)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphPartItemSerpElementItem](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:27171](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27171)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphPartItemSerpElementItem](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#rank_group)

#### Defined in

[main.ts:27168](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27168)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IKnowledgeGraphPartItemSerpElementItem](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[rectangle](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#rectangle)

#### Defined in

[main.ts:27193](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27193)

___

### text

• `Optional` **text**: `string`

content within the item

#### Implementation of

[IKnowledgeGraphPartItemSerpElementItem](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[text](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#text)

#### Defined in

[main.ts:27185](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27185)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IKnowledgeGraphPartItemSerpElementItem](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[title](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#title)

#### Defined in

[main.ts:27179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27179)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphPartItemSerpElementItem](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphPartItemSerpElementItem.md#xpath)

#### Defined in

[main.ts:27177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27177)

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

[main.ts:27202](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27202)

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

[main.ts:27232](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27232)

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphPartItemSerpElementItem`](KnowledgeGraphPartItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphPartItemSerpElementItem`](KnowledgeGraphPartItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:27225](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27225)
