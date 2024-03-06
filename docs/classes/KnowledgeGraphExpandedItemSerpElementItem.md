[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KnowledgeGraphExpandedItemSerpElementItem

# Class: KnowledgeGraphExpandedItemSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`KnowledgeGraphExpandedItemSerpElementItem`**

## Implements

- [`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphExpandedItemSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphExpandedItemSerpElementItem.md#_discriminator)
- [data\_attrid](KnowledgeGraphExpandedItemSerpElementItem.md#data_attrid)
- [expanded\_element](KnowledgeGraphExpandedItemSerpElementItem.md#expanded_element)
- [position](KnowledgeGraphExpandedItemSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphExpandedItemSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphExpandedItemSerpElementItem.md#rank_group)
- [rectangle](KnowledgeGraphExpandedItemSerpElementItem.md#rectangle)
- [title](KnowledgeGraphExpandedItemSerpElementItem.md#title)
- [xpath](KnowledgeGraphExpandedItemSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphExpandedItemSerpElementItem.md#init)
- [toJSON](KnowledgeGraphExpandedItemSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphExpandedItemSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphExpandedItemSerpElementItem**(`data?`): [`KnowledgeGraphExpandedItemSerpElementItem`](KnowledgeGraphExpandedItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md) |

#### Returns

[`KnowledgeGraphExpandedItemSerpElementItem`](KnowledgeGraphExpandedItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:27077](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27077)

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

[IKnowledgeGraphExpandedItemSerpElementItem](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[data_attrid](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#data_attrid)

#### Defined in

[main.ts:27067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27067)

___


### expanded\_element

• `Optional` **expanded\_element**: [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)[]

link of the element

#### Implementation of

[IKnowledgeGraphExpandedItemSerpElementItem](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[expanded_element](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#expanded_element)

#### Defined in

[main.ts:27069](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27069)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphExpandedItemSerpElementItem](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[position](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#position)

#### Defined in

[main.ts:27059](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27059)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphExpandedItemSerpElementItem](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:27055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27055)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphExpandedItemSerpElementItem](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#rank_group)

#### Defined in

[main.ts:27052](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27052)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IKnowledgeGraphExpandedItemSerpElementItem](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[rectangle](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#rectangle)

#### Defined in

[main.ts:27073](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27073)

___


### title

• `Optional` **title**: `string`

title of the link

#### Implementation of

[IKnowledgeGraphExpandedItemSerpElementItem](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[title](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#title)

#### Defined in

[main.ts:27063](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27063)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphExpandedItemSerpElementItem](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#xpath)

#### Defined in

[main.ts:27061](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27061)

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

[main.ts:27082](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27082)

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

[main.ts:27111](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27111)

___


### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphExpandedItemSerpElementItem`](KnowledgeGraphExpandedItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphExpandedItemSerpElementItem`](KnowledgeGraphExpandedItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:27104](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27104)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")