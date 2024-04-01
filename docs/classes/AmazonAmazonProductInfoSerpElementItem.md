[Documentation](../README.md) / [Exports](../modules.md) / AmazonAmazonProductInfoSerpElementItem

# Class: AmazonAmazonProductInfoSerpElementItem

## Hierarchy

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

  ↳ **`AmazonAmazonProductInfoSerpElementItem`**

## Implements

- [`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AmazonAmazonProductInfoSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AmazonAmazonProductInfoSerpElementItem.md#_discriminator)
- [author](AmazonAmazonProductInfoSerpElementItem.md#author)
- [categories](AmazonAmazonProductInfoSerpElementItem.md#categories)
- [currency](AmazonAmazonProductInfoSerpElementItem.md#currency)
- [data\_asin](AmazonAmazonProductInfoSerpElementItem.md#data_asin)
- [description](AmazonAmazonProductInfoSerpElementItem.md#description)
- [details](AmazonAmazonProductInfoSerpElementItem.md#details)
- [image\_url](AmazonAmazonProductInfoSerpElementItem.md#image_url)
- [is\_amazon\_choice](AmazonAmazonProductInfoSerpElementItem.md#is_amazon_choice)
- [is\_available](AmazonAmazonProductInfoSerpElementItem.md#is_available)
- [is\_newer\_model\_available](AmazonAmazonProductInfoSerpElementItem.md#is_newer_model_available)
- [newer\_model](AmazonAmazonProductInfoSerpElementItem.md#newer_model)
- [parent\_asin](AmazonAmazonProductInfoSerpElementItem.md#parent_asin)
- [position](AmazonAmazonProductInfoSerpElementItem.md#position)
- [price\_from](AmazonAmazonProductInfoSerpElementItem.md#price_from)
- [price\_to](AmazonAmazonProductInfoSerpElementItem.md#price_to)
- [product\_asins](AmazonAmazonProductInfoSerpElementItem.md#product_asins)
- [product\_images\_list](AmazonAmazonProductInfoSerpElementItem.md#product_images_list)
- [product\_information](AmazonAmazonProductInfoSerpElementItem.md#product_information)
- [product\_videos\_list](AmazonAmazonProductInfoSerpElementItem.md#product_videos_list)
- [rank\_absolute](AmazonAmazonProductInfoSerpElementItem.md#rank_absolute)
- [rank\_group](AmazonAmazonProductInfoSerpElementItem.md#rank_group)
- [rating](AmazonAmazonProductInfoSerpElementItem.md#rating)
- [title](AmazonAmazonProductInfoSerpElementItem.md#title)
- [xpath](AmazonAmazonProductInfoSerpElementItem.md#xpath)

### Methods

- [init](AmazonAmazonProductInfoSerpElementItem.md#init)
- [toJSON](AmazonAmazonProductInfoSerpElementItem.md#tojson)
- [fromJS](AmazonAmazonProductInfoSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AmazonAmazonProductInfoSerpElementItem**(`data?`): [`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAmazonAmazonProductInfoSerpElementItem`](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md) |

#### Returns

[`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

#### Overrides

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[constructor](BaseAmazonSerpElementItem.md#constructor)

#### Defined in

main.ts:178305

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[_discriminator](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21275

___

### author

• `Optional` **author**: `string`

product brand name

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[author](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#author)

#### Defined in

main.ts:178261

___

### categories

• `Optional` **categories**: [`ProductCategoryInfo`](ProductCategoryInfo.md)[]

contains related product categories

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[categories](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#categories)

#### Defined in

main.ts:178290

___

### currency

• `Optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[currency](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#currency)

#### Defined in

main.ts:178279

___

### data\_asin

• `Optional` **data\_asin**: `string`

ASIN of the product received in a POST array

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[data_asin](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#data_asin)

#### Defined in

main.ts:178263

___

### description

• `Optional` **description**: `string`

contains description of the product

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[description](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#description)

#### Defined in

main.ts:178298

___

### details

• `Optional` **details**: `string`

product specs and other details

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[details](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#details)

#### Defined in

main.ts:178257

___

### image\_url

• `Optional` **image\_url**: `string`

the URL of the product image

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[image_url](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#image_url)

#### Defined in

main.ts:178259

___

### is\_amazon\_choice

• `Optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[is_amazon_choice](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#is_amazon_choice)

#### Defined in

main.ts:178282

___

### is\_available

• `Optional` **is\_available**: `boolean`

indicates whether the product is available for ordering
if the value is true, the product can be ordered

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[is_available](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#is_available)

#### Defined in

main.ts:178301

___

### is\_newer\_model\_available

• `Optional` **is\_newer\_model\_available**: `boolean`

indicates whether the newer model of the product is available

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[is_newer_model_available](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#is_newer_model_available)

#### Defined in

main.ts:178286

___

### newer\_model

• `Optional` **newer\_model**: [`AmazonProductNewerModelInfo`](AmazonProductNewerModelInfo.md)

information about the newer model of the product

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[newer_model](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#newer_model)

#### Defined in

main.ts:178288

___

### parent\_asin

• `Optional` **parent\_asin**: `string`

parent ASIN of the product

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[parent_asin](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#parent_asin)

#### Defined in

main.ts:178265

___

### position

• `Optional` **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[position](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#position)

#### Defined in

main.ts:178251

___

### price\_from

• `Optional` **price\_from**: `number`

the lower limit of the product price range
example:
49.98

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[price_from](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#price_from)

#### Defined in

main.ts:178271

___

### price\_to

• `Optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[price_to](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#price_to)

#### Defined in

main.ts:178275

___

### product\_asins

• `Optional` **product\_asins**: `string`[]

ASINs of all found product modifications

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[product_asins](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_asins)

#### Defined in

main.ts:178267

___

### product\_images\_list

• `Optional` **product\_images\_list**: `string`[]

contains URLs for all images of the product displayed on the left side of the main image

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[product_images_list](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_images_list)

#### Defined in

main.ts:178294

___

### product\_information

• `Optional` **product\_information**: [`BaseProductInformationItem`](BaseProductInformationItem.md)[]

contains related product information

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[product_information](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_information)

#### Defined in

main.ts:178292

___

### product\_videos\_list

• `Optional` **product\_videos\_list**: `string`[]

contains URLs for all videos of the product displayed on the right side of the main video

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[product_videos_list](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#product_videos_list)

#### Defined in

main.ts:178296

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank
absolute position among all the elements in the response array

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[rank_absolute](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:178247

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[rank_group](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#rank_group)

#### Defined in

main.ts:178244

___

### rating

• `Optional` **rating**: [`RatingElement`](RatingElement.md)

product rating info

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[rating](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#rating)

#### Defined in

main.ts:178284

___

### title

• `Optional` **title**: `string`

product title

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[title](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#title)

#### Defined in

main.ts:178255

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IAmazonAmazonProductInfoSerpElementItem](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md).[xpath](../interfaces/IAmazonAmazonProductInfoSerpElementItem.md#xpath)

#### Defined in

main.ts:178253

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

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[init](BaseAmazonSerpElementItem.md#init)

#### Defined in

main.ts:178310

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

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[toJSON](BaseAmazonSerpElementItem.md#tojson)

#### Defined in

main.ts:178371

___

### fromJS

▸ **fromJS**(`data`): [`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

#### Overrides

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[fromJS](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

main.ts:178364
