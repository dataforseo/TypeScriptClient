[Documentation](../README.md) / [Exports](../modules.md) / ImagesSearchSerpElementItem

# Class: ImagesSearchSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`ImagesSearchSerpElementItem`**

## Implements

- [`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ImagesSearchSerpElementItem.md#constructor)

### Properties

- [\_discriminator](ImagesSearchSerpElementItem.md#_discriminator)
- [alt](ImagesSearchSerpElementItem.md#alt)
- [encoded\_url](ImagesSearchSerpElementItem.md#encoded_url)
- [rank\_absolute](ImagesSearchSerpElementItem.md#rank_absolute)
- [rank\_group](ImagesSearchSerpElementItem.md#rank_group)
- [source\_url](ImagesSearchSerpElementItem.md#source_url)
- [subtitle](ImagesSearchSerpElementItem.md#subtitle)
- [title](ImagesSearchSerpElementItem.md#title)
- [url](ImagesSearchSerpElementItem.md#url)
- [xpath](ImagesSearchSerpElementItem.md#xpath)

### Methods

- [init](ImagesSearchSerpElementItem.md#init)
- [toJSON](ImagesSearchSerpElementItem.md#tojson)
- [fromJS](ImagesSearchSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new ImagesSearchSerpElementItem**(`data?`): [`ImagesSearchSerpElementItem`](ImagesSearchSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IImagesSearchSerpElementItem`](../interfaces/IImagesSearchSerpElementItem.md) |

#### Returns

[`ImagesSearchSerpElementItem`](ImagesSearchSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:46261

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### alt

• `Optional` **alt**: `string`

the alt tag of the image

#### Implementation of

[IImagesSearchSerpElementItem](../interfaces/IImagesSearchSerpElementItem.md).[alt](../interfaces/IImagesSearchSerpElementItem.md#alt)

#### Defined in

main.ts:46251

___

### encoded\_url

• `Optional` **encoded\_url**: `string`

the URL of the cached version of the image stored on Google’s servers

#### Implementation of

[IImagesSearchSerpElementItem](../interfaces/IImagesSearchSerpElementItem.md).[encoded_url](../interfaces/IImagesSearchSerpElementItem.md#encoded_url)

#### Defined in

main.ts:46257

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[IImagesSearchSerpElementItem](../interfaces/IImagesSearchSerpElementItem.md).[rank_absolute](../interfaces/IImagesSearchSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:46243

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IImagesSearchSerpElementItem](../interfaces/IImagesSearchSerpElementItem.md).[rank_group](../interfaces/IImagesSearchSerpElementItem.md#rank_group)

#### Defined in

main.ts:46240

___

### source\_url

• `Optional` **source\_url**: `string`

the URL of the source image

#### Implementation of

[IImagesSearchSerpElementItem](../interfaces/IImagesSearchSerpElementItem.md).[source_url](../interfaces/IImagesSearchSerpElementItem.md#source_url)

#### Defined in

main.ts:46255

___

### subtitle

• `Optional` **subtitle**: `string`

subtitle of the result in SERP

#### Implementation of

[IImagesSearchSerpElementItem](../interfaces/IImagesSearchSerpElementItem.md).[subtitle](../interfaces/IImagesSearchSerpElementItem.md#subtitle)

#### Defined in

main.ts:46249

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IImagesSearchSerpElementItem](../interfaces/IImagesSearchSerpElementItem.md).[title](../interfaces/IImagesSearchSerpElementItem.md#title)

#### Defined in

main.ts:46247

___

### url

• `Optional` **url**: `string`

the URL of the page where the image is hosted

#### Implementation of

[IImagesSearchSerpElementItem](../interfaces/IImagesSearchSerpElementItem.md).[url](../interfaces/IImagesSearchSerpElementItem.md#url)

#### Defined in

main.ts:46253

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IImagesSearchSerpElementItem](../interfaces/IImagesSearchSerpElementItem.md).[xpath](../interfaces/IImagesSearchSerpElementItem.md#xpath)

#### Defined in

main.ts:46245

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

main.ts:46266

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

main.ts:46292

___

### fromJS

▸ **fromJS**(`data`): [`ImagesSearchSerpElementItem`](ImagesSearchSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ImagesSearchSerpElementItem`](ImagesSearchSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:46285
