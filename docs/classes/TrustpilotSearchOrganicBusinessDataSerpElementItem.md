[**Documentation**](../README.md)

***

[Documentation](../README.md) / TrustpilotSearchOrganicBusinessDataSerpElementItem

# Class: TrustpilotSearchOrganicBusinessDataSerpElementItem

Defined in: main.ts:225940

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TrustpilotSearchOrganicBusinessDataSerpElementItem()

> **new TrustpilotSearchOrganicBusinessDataSerpElementItem**(`data`?): [`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

Defined in: main.ts:225954

#### Parameters

##### data?

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Returns

[`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22211

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:225944

domain of the establishment

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`domain`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#domain)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22209

absolute rank among all the elements

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_absolute`](BaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22207

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#rank_group)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_group`](BaseBusinessDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:225950

the rating score of the establishment submitted by reviewers

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`rating`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#rating)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:225948

the total number of reviews

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`reviews_count`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#reviews_count)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:225942

title of the establishment

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`title`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22204

type of element

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`type`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#type)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`type`](BaseBusinessDataSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:225946

URL to the establishment

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`url`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:225959

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

Defined in: main.ts:225981

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

Defined in: main.ts:225974

#### Parameters

##### data

`any`

#### Returns

[`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)
