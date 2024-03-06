[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / GoogleShoppingSponsoredCarouselMerchantSerpElementItem

# Class: GoogleShoppingSponsoredCarouselMerchantSerpElementItem

## Hierarchy

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)
  
  ↳ **`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`**

## Implements

- [`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#_discriminator)
- [items](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#items)
- [position](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#position)
- [rank\_absolute](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#rank_absolute)
- [rank\_group](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#rank_group)
- [title](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#title)
- [xpath](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#xpath)

### Methods

- [init](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#init)
- [toJSON](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#tojson)
- [fromJS](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleShoppingSponsoredCarouselMerchantSerpElementItem**(`data?`): [`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md) |

#### Returns

[`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[constructor](BaseMerchantSerpElementItem.md#constructor)

#### Defined in

[main.ts:165205](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165205)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[_discriminator](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19988)

___


### items

• `Optional` **items**: [`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)[]

items in SERP

#### Implementation of

[IGoogleShoppingSponsoredCarouselMerchantSerpElementItem](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[items](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#items)

#### Defined in

[main.ts:165201](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165201)

___


### position

• `Optional` **position**: `string`

alignment of the element in Google Shopping SERP
possible values:
left, right

#### Implementation of

[IGoogleShoppingSponsoredCarouselMerchantSerpElementItem](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[position](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#position)

#### Defined in

[main.ts:165195](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165195)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[IGoogleShoppingSponsoredCarouselMerchantSerpElementItem](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[rank_absolute](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:165191](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165191)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGoogleShoppingSponsoredCarouselMerchantSerpElementItem](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[rank_group](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#rank_group)

#### Defined in

[main.ts:165188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165188)

___


### title

• `Optional` **title**: `string`

product title

#### Implementation of

[IGoogleShoppingSponsoredCarouselMerchantSerpElementItem](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[title](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#title)

#### Defined in

[main.ts:165199](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165199)

___


### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Implementation of

[IGoogleShoppingSponsoredCarouselMerchantSerpElementItem](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[xpath](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#xpath)

#### Defined in

[main.ts:165197](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165197)

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

[main.ts:165210](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165210)

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

[main.ts:165237](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165237)

___


### fromJS

▸ **fromJS**(`data`): [`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[fromJS](BaseMerchantSerpElementItem.md#fromjs)

#### Defined in

[main.ts:165230](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165230)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")