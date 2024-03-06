[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ProductInfoElementMerchantSerpElementItem

# Class: ProductInfoElementMerchantSerpElementItem

## Hierarchy

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)
  
  ↳ **`ProductInfoElementMerchantSerpElementItem`**

## Implements

- [`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductInfoElementMerchantSerpElementItem.md#constructor)

### Properties

- [\_discriminator](ProductInfoElementMerchantSerpElementItem.md#_discriminator)
- [description](ProductInfoElementMerchantSerpElementItem.md#description)
- [features](ProductInfoElementMerchantSerpElementItem.md#features)
- [images](ProductInfoElementMerchantSerpElementItem.md#images)
- [position](ProductInfoElementMerchantSerpElementItem.md#position)
- [product\_id](ProductInfoElementMerchantSerpElementItem.md#product_id)
- [rank\_absolute](ProductInfoElementMerchantSerpElementItem.md#rank_absolute)
- [rank\_group](ProductInfoElementMerchantSerpElementItem.md#rank_group)
- [rating](ProductInfoElementMerchantSerpElementItem.md#rating)
- [seller\_reviews\_count](ProductInfoElementMerchantSerpElementItem.md#seller_reviews_count)
- [sellers](ProductInfoElementMerchantSerpElementItem.md#sellers)
- [title](ProductInfoElementMerchantSerpElementItem.md#title)
- [url](ProductInfoElementMerchantSerpElementItem.md#url)
- [variations](ProductInfoElementMerchantSerpElementItem.md#variations)

### Methods

- [init](ProductInfoElementMerchantSerpElementItem.md#init)
- [toJSON](ProductInfoElementMerchantSerpElementItem.md#tojson)
- [fromJS](ProductInfoElementMerchantSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new ProductInfoElementMerchantSerpElementItem**(`data?`): [`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductInfoElementMerchantSerpElementItem`](../interfaces/IProductInfoElementMerchantSerpElementItem.md) |

#### Returns

[`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[constructor](BaseMerchantSerpElementItem.md#constructor)

#### Defined in

[main.ts:169185](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169185)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[_discriminator](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19988)

___


### description

• `Optional` **description**: `string`

description of the product

#### Implementation of

[IProductInfoElementMerchantSerpElementItem](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[description](../interfaces/IProductInfoElementMerchantSerpElementItem.md#description)

#### Defined in

[main.ts:169160](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169160)

___


### features

• `Optional` **features**: `string`[]

product features
contains snippets with the description of product features

#### Implementation of

[IProductInfoElementMerchantSerpElementItem](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[features](../interfaces/IProductInfoElementMerchantSerpElementItem.md#features)

#### Defined in

[main.ts:169169](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169169)

___


### images

• `Optional` **images**: `string`[]

product images
contains urls to product images

#### Implementation of

[IProductInfoElementMerchantSerpElementItem](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[images](../interfaces/IProductInfoElementMerchantSerpElementItem.md#images)

#### Defined in

[main.ts:169166](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169166)

___


### position

• `Optional` **position**: `string`

alignment of the element on the product specification page
can take the following values:
right, left

#### Implementation of

[IProductInfoElementMerchantSerpElementItem](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[position](../interfaces/IProductInfoElementMerchantSerpElementItem.md#position)

#### Defined in

[main.ts:169153](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169153)

___


### product\_id

• `Optional` **product\_id**: `string`

product_id received in a POST array
ilearn more about the parameter in this help center guide

#### Implementation of

[IProductInfoElementMerchantSerpElementItem](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[product_id](../interfaces/IProductInfoElementMerchantSerpElementItem.md#product_id)

#### Defined in

[main.ts:169156](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169156)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank on the product specification page
absolute position among all the elements found on the product specification page

#### Implementation of

[IProductInfoElementMerchantSerpElementItem](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[rank_absolute](../interfaces/IProductInfoElementMerchantSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:169149](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169149)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IProductInfoElementMerchantSerpElementItem](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[rank_group](../interfaces/IProductInfoElementMerchantSerpElementItem.md#rank_group)

#### Defined in

[main.ts:169146](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169146)

___


### rating

• `Optional` **rating**: [`RatingElement`](RatingElement.md)

product rating
the popularity rate based on reviews

#### Implementation of

[IProductInfoElementMerchantSerpElementItem](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[rating](../interfaces/IProductInfoElementMerchantSerpElementItem.md#rating)

#### Defined in

[main.ts:169172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169172)

___


### seller\_reviews\_count

• `Optional` **seller\_reviews\_count**: `number`

number of seller reviews
number of reviews on the product seller’s account

#### Implementation of

[IProductInfoElementMerchantSerpElementItem](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[seller_reviews_count](../interfaces/IProductInfoElementMerchantSerpElementItem.md#seller_reviews_count)

#### Defined in

[main.ts:169175](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169175)

___


### sellers

• `Optional` **sellers**: [`ProductSeller`](ProductSeller.md)[]

sellers of the product
number of reviews on the product seller’s account

#### Implementation of

[IProductInfoElementMerchantSerpElementItem](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[sellers](../interfaces/IProductInfoElementMerchantSerpElementItem.md#sellers)

#### Defined in

[main.ts:169178](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169178)

___


### title

• `Optional` **title**: `string`

title of the product

#### Implementation of

[IProductInfoElementMerchantSerpElementItem](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[title](../interfaces/IProductInfoElementMerchantSerpElementItem.md#title)

#### Defined in

[main.ts:169158](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169158)

___


### url

• `Optional` **url**: `string`

product url
url of the product on Google Shopping

#### Implementation of

[IProductInfoElementMerchantSerpElementItem](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[url](../interfaces/IProductInfoElementMerchantSerpElementItem.md#url)

#### Defined in

[main.ts:169163](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169163)

___


### variations

• `Optional` **variations**: [`ProductVariation`](ProductVariation.md)[]

variations of the product
contains brief information about different product variations

#### Implementation of

[IProductInfoElementMerchantSerpElementItem](../interfaces/IProductInfoElementMerchantSerpElementItem.md).[variations](../interfaces/IProductInfoElementMerchantSerpElementItem.md#variations)

#### Defined in

[main.ts:169181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169181)

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

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[init](BaseMerchantSerpElementItem.md#init)

#### Defined in

[main.ts:169190](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169190)

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

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[toJSON](BaseMerchantSerpElementItem.md#tojson)

#### Defined in

[main.ts:169236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169236)

___


### fromJS

▸ **fromJS**(`data`): [`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[fromJS](BaseMerchantSerpElementItem.md#fromjs)

#### Defined in

[main.ts:169229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169229)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")