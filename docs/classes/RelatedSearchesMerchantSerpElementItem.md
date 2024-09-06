[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / RelatedSearchesMerchantSerpElementItem

# Class: RelatedSearchesMerchantSerpElementItem

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RelatedSearchesMerchantSerpElementItem()

> **new RelatedSearchesMerchantSerpElementItem**(`data`?): [`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md)

#### Returns

[`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Defined in

main.ts:175022

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21044

***

### items?

> `optional` **items**: `string`[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`items`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#items)

#### Defined in

main.ts:175018

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`position`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#position)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`position`](BaseMerchantSerpElementItem.md#position)

#### Defined in

main.ts:21042

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_absolute`](BaseMerchantSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21038

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`rank_group`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#rank_group)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_group`](BaseMerchantSerpElementItem.md#rank_group)

#### Defined in

main.ts:21035

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`type`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#type)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`type`](BaseMerchantSerpElementItem.md#type)

#### Defined in

main.ts:21032

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`xpath`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#xpath)

#### Defined in

main.ts:175015

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

#### Defined in

main.ts:175027

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

#### Defined in

main.ts:175050

***

### fromJS()

> `static` **fromJS**(`data`): [`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Defined in

main.ts:175043
