[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KnowledgeGraphCarouselItemSerpElementItem

# Class: KnowledgeGraphCarouselItemSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`KnowledgeGraphCarouselItemSerpElementItem`**

## Implements

- [`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphCarouselItemSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphCarouselItemSerpElementItem.md#_discriminator)
- [data\_attrid](KnowledgeGraphCarouselItemSerpElementItem.md#data_attrid)
- [items](KnowledgeGraphCarouselItemSerpElementItem.md#items)
- [link](KnowledgeGraphCarouselItemSerpElementItem.md#link)
- [position](KnowledgeGraphCarouselItemSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphCarouselItemSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphCarouselItemSerpElementItem.md#rank_group)
- [rectangle](KnowledgeGraphCarouselItemSerpElementItem.md#rectangle)
- [title](KnowledgeGraphCarouselItemSerpElementItem.md#title)
- [xpath](KnowledgeGraphCarouselItemSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphCarouselItemSerpElementItem.md#init)
- [toJSON](KnowledgeGraphCarouselItemSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphCarouselItemSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphCarouselItemSerpElementItem**(`data?`): [`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md) |

#### Returns

[`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:26231](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26231)

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
action:listen_artist

#### Implementation of

[IKnowledgeGraphCarouselItemSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[data_attrid](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#data_attrid)

#### Defined in

[main.ts:26219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26219)

___


### items

• `Optional` **items**: [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)[]

elements of search results found in SERP

#### Implementation of

[IKnowledgeGraphCarouselItemSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[items](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#items)

#### Defined in

[main.ts:26223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26223)

___


### link

• `Optional` **link**: [`LinkElement`](LinkElement.md)

link of the element

#### Implementation of

[IKnowledgeGraphCarouselItemSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[link](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#link)

#### Defined in

[main.ts:26221](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26221)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphCarouselItemSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[position](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#position)

#### Defined in

[main.ts:26211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26211)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphCarouselItemSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:26207](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26207)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphCarouselItemSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#rank_group)

#### Defined in

[main.ts:26204](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26204)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IKnowledgeGraphCarouselItemSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[rectangle](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#rectangle)

#### Defined in

[main.ts:26227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26227)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IKnowledgeGraphCarouselItemSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[title](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#title)

#### Defined in

[main.ts:26215](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26215)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphCarouselItemSerpElementItem](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#xpath)

#### Defined in

[main.ts:26213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26213)

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

[main.ts:26236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26236)

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

[main.ts:26266](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26266)

___


### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:26259](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26259)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")