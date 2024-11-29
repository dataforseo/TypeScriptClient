[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseMerchantSerpElementItem

# Class: BaseMerchantSerpElementItem

## Extended by

- [`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)
- [`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)
- [`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)
- [`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)
- [`ShopsListMerchantSerpElementItem`](ShopsListMerchantSerpElementItem.md)
- [`BuyOnGoogleMerchantSerpElementItem`](BuyOnGoogleMerchantSerpElementItem.md)
- [`ShoppingSpecificationMerchantSerpElementItem`](ShoppingSpecificationMerchantSerpElementItem.md)
- [`ProductInfoElementMerchantSerpElementItem`](ProductInfoElementMerchantSerpElementItem.md)

## Implements

- [`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md)

## Constructors

### new BaseMerchantSerpElementItem()

> **new BaseMerchantSerpElementItem**(`data`?): [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Parameters

##### data?

[`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md)

#### Returns

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Defined in

main.ts:21724

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:21722

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md).[`position`](../interfaces/IBaseMerchantSerpElementItem.md#position)

#### Defined in

main.ts:21720

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseMerchantSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21716

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md).[`rank_group`](../interfaces/IBaseMerchantSerpElementItem.md#rank_group)

#### Defined in

main.ts:21713

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseMerchantSerpElementItem`](../interfaces/IBaseMerchantSerpElementItem.md).[`type`](../interfaces/IBaseMerchantSerpElementItem.md#type)

#### Defined in

main.ts:21710

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:21734

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:21790

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

#### Defined in

main.ts:21743
