[**Documentation**](../README.md)

***

[Documentation](../README.md) / TripadvisorSearchOrganicBusinessDataSerpElementItem

# Class: TripadvisorSearchOrganicBusinessDataSerpElementItem

Defined in: main.ts:228694

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TripadvisorSearchOrganicBusinessDataSerpElementItem()

> **new TripadvisorSearchOrganicBusinessDataSerpElementItem**(`data`?): [`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

Defined in: main.ts:228715

#### Parameters

##### data?

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Returns

[`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22211

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

***

### category?

> `optional` **category**: `string`

Defined in: main.ts:228707

place category

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`category`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#category)

***

### is\_sponsored?

> `optional` **is\_sponsored**: `boolean`

Defined in: main.ts:228703

indicates a sponsored placement
if true, related tripadvisor_search_organic item is a paid advertising on Tripadvisor

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`is_sponsored`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#is_sponsored)

***

### price\_rate?

> `optional` **price\_rate**: `string`

Defined in: main.ts:228709

average price rate

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`price_rate`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#price_rate)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22209

absolute rank among all the elements

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_absolute`](BaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22207

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#rank_group)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_group`](BaseBusinessDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:228711

the rating score of the establishment submitted by the reviewers

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`rating`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#rating)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:228705

the total number of reviews

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`reviews_count`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#reviews_count)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:228696

name of the business entity

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`title`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22204

type of element

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`type`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#type)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`type`](BaseBusinessDataSerpElementItem.md#type)

***

### url\_path?

> `optional` **url\_path**: `string`

Defined in: main.ts:228700

URL path of the business entity
URL path to the Tripadvisor page of the business entity
you can use this identifier to collect reviews for the business entity using Tripadvisor Reviews

#### Implementation of

[`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md).[`url_path`](../interfaces/ITripadvisorSearchOrganicBusinessDataSerpElementItem.md#url_path)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:228720

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:228744

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

Defined in: main.ts:228737

#### Parameters

##### data

`any`

#### Returns

[`TripadvisorSearchOrganicBusinessDataSerpElementItem`](TripadvisorSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)
