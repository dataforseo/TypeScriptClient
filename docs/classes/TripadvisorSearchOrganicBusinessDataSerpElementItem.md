[**Documentation**](../README.md)

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

##### data?

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Returns

[`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Defined in

main.ts:228139

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:22211

***

### category?

> `optional` **category**: `string`

place category

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`category`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#category)

#### Defined in

main.ts:228131

***

### is\_sponsored?

> `optional` **is\_sponsored**: `boolean`

indicates a sponsored placement
if true, related tripadvisor_search_organic item is a paid advertising on Tripadvisor

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`is_sponsored`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#is_sponsored)

#### Defined in

main.ts:228127

***

### price\_rate?

> `optional` **price\_rate**: `string`

average price rate

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`price_rate`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#price_rate)

#### Defined in

main.ts:228133

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_absolute`](BaseBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22209

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#rank_group)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_group`](BaseBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:22207

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score of the establishment submitted by the reviewers

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`rating`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#rating)

#### Defined in

main.ts:228135

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`reviews_count`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#reviews_count)

#### Defined in

main.ts:228129

***

### title?

> `optional` **title**: `string`

name of the business entity

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`title`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#title)

#### Defined in

main.ts:228120

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`type`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#type)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`type`](BaseBusinessDataSerpElementItem.md#type)

#### Defined in

main.ts:22204

***

### url\_path?

> `optional` **url\_path**: `string`

URL path of the business entity
URL path to the Tripadvisor page of the business entity
you can use this identifier to collect reviews for the business entity using Tripadvisor Reviews

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`url_path`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#url_path)

#### Defined in

main.ts:228124

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

#### Defined in

main.ts:228144

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

#### Defined in

main.ts:228168

***

### fromJS()

> `static` **fromJS**(`data`): [`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:228161
