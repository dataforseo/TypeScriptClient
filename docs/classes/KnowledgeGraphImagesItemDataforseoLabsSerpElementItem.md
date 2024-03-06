[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KnowledgeGraphImagesItemDataforseoLabsSerpElementItem

# Class: KnowledgeGraphImagesItemDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`**

## Implements

- [`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#_discriminator)
- [items](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#items)
- [link](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#link)
- [position](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#init)
- [toJSON](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphImagesItemDataforseoLabsSerpElementItem**(`data?`): [`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md) |

#### Returns

[`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:91640](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91640)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___


### items

• `Optional` **items**: [`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[items](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:91636](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91636)

___


### link

• `Optional` **link**: `any`

link of the element

#### Implementation of

[IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[link](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#link)

#### Defined in

[main.ts:91633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91633)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[position](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:91629](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91629)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:91625](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91625)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:91622](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91622)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:91631](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91631)

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

[main.ts:91645](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91645)

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

[main.ts:91672](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91672)

___


### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:91665](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L91665)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")