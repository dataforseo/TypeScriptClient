[**Documentation**](../README.md)

***

[Documentation](../README.md) / RelatedSearchesMerchantSerpElementItem

# Class: RelatedSearchesMerchantSerpElementItem

Defined in: main.ts:186810

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RelatedSearchesMerchantSerpElementItem()

> **new RelatedSearchesMerchantSerpElementItem**(`data`?): [`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)

Defined in: main.ts:186819

#### Parameters

##### data?

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md)

#### Returns

[`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21722

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: `string`[]

Defined in: main.ts:186815

additional items present in the element
if there are none, equals null

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`items`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21720

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`position`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#position)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`position`](BaseMerchantSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21716

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_absolute`](BaseMerchantSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21713

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`rank_group`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#rank_group)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_group`](BaseMerchantSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21710

type of element

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`type`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#type)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`type`](BaseMerchantSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:186812

XPath of the element

#### Implementation of

[`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[`xpath`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:186824

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:186847

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)

Defined in: main.ts:186840

#### Parameters

##### data

`any`

#### Returns

[`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)
