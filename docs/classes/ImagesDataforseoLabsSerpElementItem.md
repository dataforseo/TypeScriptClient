[Documentation](../README.md) / [Exports](../modules.md) / ImagesDataforseoLabsSerpElementItem

# Class: ImagesDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`ImagesDataforseoLabsSerpElementItem`**

## Implements

- [`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ImagesDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](ImagesDataforseoLabsSerpElementItem.md#_discriminator)
- [items](ImagesDataforseoLabsSerpElementItem.md#items)
- [position](ImagesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](ImagesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](ImagesDataforseoLabsSerpElementItem.md#rank_group)
- [related\_image\_searches](ImagesDataforseoLabsSerpElementItem.md#related_image_searches)
- [title](ImagesDataforseoLabsSerpElementItem.md#title)
- [url](ImagesDataforseoLabsSerpElementItem.md#url)
- [xpath](ImagesDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](ImagesDataforseoLabsSerpElementItem.md#init)
- [toJSON](ImagesDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](ImagesDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new ImagesDataforseoLabsSerpElementItem**(`data?`): [`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IImagesDataforseoLabsSerpElementItem`](../interfaces/IImagesDataforseoLabsSerpElementItem.md) |

#### Returns

[`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:96953

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20171

___

### items

• `Optional` **items**: [`ImagesElement`](ImagesElement.md)[]

elements of search results found in SERP

#### Implementation of

[IImagesDataforseoLabsSerpElementItem](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[items](../interfaces/IImagesDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:96946

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IImagesDataforseoLabsSerpElementItem](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[position](../interfaces/IImagesDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:96938

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IImagesDataforseoLabsSerpElementItem](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IImagesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:96934

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IImagesDataforseoLabsSerpElementItem](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IImagesDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:96931

___

### related\_image\_searches

• `Optional` **related\_image\_searches**: [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)[]

contains keywords and images related to the specified search term
if there are none, equals null

#### Implementation of

[IImagesDataforseoLabsSerpElementItem](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[related_image_searches](../interfaces/IImagesDataforseoLabsSerpElementItem.md#related_image_searches)

#### Defined in

main.ts:96949

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IImagesDataforseoLabsSerpElementItem](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[title](../interfaces/IImagesDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:96942

___

### url

• `Optional` **url**: `string`

relevant URL of the Ad element in SERP

#### Implementation of

[IImagesDataforseoLabsSerpElementItem](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[url](../interfaces/IImagesDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:96944

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IImagesDataforseoLabsSerpElementItem](../interfaces/IImagesDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IImagesDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:96940

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

main.ts:96958

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

main.ts:96991

___

### fromJS

▸ **fromJS**(`data`): [`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:96984
