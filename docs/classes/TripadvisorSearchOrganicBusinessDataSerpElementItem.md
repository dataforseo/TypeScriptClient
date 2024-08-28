[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / TripadvisorSearchOrganicBusinessDataSerpElementItem

# Class: TripadvisorSearchOrganicBusinessDataSerpElementItem

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TripadvisorSearchOrganicBusinessDataSerpElementItem()

> **new TripadvisorSearchOrganicBusinessDataSerpElementItem**(`data`?): [`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Returns

[`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Defined in

main.ts:217883

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21279

***

### category?

> `optional` **category**: `string`

place category

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`category`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#category)

#### Defined in

main.ts:217875

***

### is\_sponsored?

> `optional` **is\_sponsored**: `boolean`

indicates a sponsored placement
if true, related tripadvisor_search_organic item is a paid advertising on Tripadvisor

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`is_sponsored`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#is_sponsored)

#### Defined in

main.ts:217871

***

### price\_rate?

> `optional` **price\_rate**: `string`

average price rate

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`price_rate`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#price_rate)

#### Defined in

main.ts:217877

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the listed results
absolute position among all reviews on the list

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:217862

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:217859

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score of the establishment submitted by the reviewers

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`rating`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#rating)

#### Defined in

main.ts:217879

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`reviews_count`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#reviews_count)

#### Defined in

main.ts:217873

***

### title?

> `optional` **title**: `string`

name of the business entity

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`title`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#title)

#### Defined in

main.ts:217864

***

### url\_path?

> `optional` **url\_path**: `string`

URL path of the business entity
URL path to the Tripadvisor page of the business entity
you can use this identifier to collect reviews for the business entity using Tripadvisor Reviews

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`url_path`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#url_path)

#### Defined in

main.ts:217868

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

#### Defined in

main.ts:217888

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

#### Defined in

main.ts:217914

***

### fromJS()

> `static` **fromJS**(`data`): [`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:217907
