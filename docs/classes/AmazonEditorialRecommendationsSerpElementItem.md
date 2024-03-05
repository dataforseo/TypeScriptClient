[dataforseo-client](../README.md) / [Exports](../modules.md) / AmazonEditorialRecommendationsSerpElementItem

# Class: AmazonEditorialRecommendationsSerpElementItem

## Hierarchy

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

  ↳ **`AmazonEditorialRecommendationsSerpElementItem`**

## Implements

- [`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AmazonEditorialRecommendationsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AmazonEditorialRecommendationsSerpElementItem.md#_discriminator)
- [items](AmazonEditorialRecommendationsSerpElementItem.md#items)
- [position](AmazonEditorialRecommendationsSerpElementItem.md#position)
- [rank\_absolute](AmazonEditorialRecommendationsSerpElementItem.md#rank_absolute)
- [rank\_group](AmazonEditorialRecommendationsSerpElementItem.md#rank_group)
- [xpath](AmazonEditorialRecommendationsSerpElementItem.md#xpath)

### Methods

- [init](AmazonEditorialRecommendationsSerpElementItem.md#init)
- [toJSON](AmazonEditorialRecommendationsSerpElementItem.md#tojson)
- [fromJS](AmazonEditorialRecommendationsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AmazonEditorialRecommendationsSerpElementItem**(`data?`): [`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAmazonEditorialRecommendationsSerpElementItem`](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md) |

#### Returns

[`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

#### Overrides

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[constructor](BaseAmazonSerpElementItem.md#constructor)

#### Defined in

[main.ts:171028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171028)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[_discriminator](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:20756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20756)

___

### items

• `Optional` **items**: [`AmazonSerpElement`](AmazonSerpElement.md)[]

Amazon product items

#### Implementation of

[IAmazonEditorialRecommendationsSerpElementItem](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[items](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#items)

#### Defined in

[main.ts:171024](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171024)

___

### position

• `Optional` **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Implementation of

[IAmazonEditorialRecommendationsSerpElementItem](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[position](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#position)

#### Defined in

[main.ts:171020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171020)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon SERP

#### Implementation of

[IAmazonEditorialRecommendationsSerpElementItem](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[rank_absolute](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:171016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171016)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAmazonEditorialRecommendationsSerpElementItem](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[rank_group](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:171013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171013)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IAmazonEditorialRecommendationsSerpElementItem](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md).[xpath](../interfaces/IAmazonEditorialRecommendationsSerpElementItem.md#xpath)

#### Defined in

[main.ts:171022](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171022)

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

[main.ts:171033](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171033)

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

[main.ts:171059](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171059)

___

### fromJS

▸ **fromJS**(`data`): [`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

#### Overrides

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[fromJS](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

[main.ts:171052](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171052)
