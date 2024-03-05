[dataforseo-client](../README.md) / [Exports](../modules.md) / KnowledgeGraphImagesItemSerpElementItem

# Class: KnowledgeGraphImagesItemSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`KnowledgeGraphImagesItemSerpElementItem`**

## Implements

- [`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphImagesItemSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphImagesItemSerpElementItem.md#_discriminator)
- [items](KnowledgeGraphImagesItemSerpElementItem.md#items)
- [link](KnowledgeGraphImagesItemSerpElementItem.md#link)
- [position](KnowledgeGraphImagesItemSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphImagesItemSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphImagesItemSerpElementItem.md#rank_group)
- [rectangle](KnowledgeGraphImagesItemSerpElementItem.md#rectangle)
- [xpath](KnowledgeGraphImagesItemSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphImagesItemSerpElementItem.md#init)
- [toJSON](KnowledgeGraphImagesItemSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphImagesItemSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphImagesItemSerpElementItem**(`data?`): [`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md) |

#### Returns

[`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:26539](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26539)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___

### items

• `Optional` **items**: [`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)[]

items featured in the faq_box

#### Implementation of

[IKnowledgeGraphImagesItemSerpElementItem](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[items](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#items)

#### Defined in

[main.ts:26531](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26531)

___

### link

• `Optional` **link**: [`LinkElement`](LinkElement.md)

link of the element

#### Implementation of

[IKnowledgeGraphImagesItemSerpElementItem](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[link](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#link)

#### Defined in

[main.ts:26529](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26529)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphImagesItemSerpElementItem](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[position](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#position)

#### Defined in

[main.ts:26525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26525)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphImagesItemSerpElementItem](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:26521](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26521)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphImagesItemSerpElementItem](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#rank_group)

#### Defined in

[main.ts:26518](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26518)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IKnowledgeGraphImagesItemSerpElementItem](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[rectangle](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#rectangle)

#### Defined in

[main.ts:26535](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26535)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphImagesItemSerpElementItem](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#xpath)

#### Defined in

[main.ts:26527](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26527)

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

[main.ts:26544](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26544)

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

[main.ts:26572](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26572)

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:26565](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26565)
