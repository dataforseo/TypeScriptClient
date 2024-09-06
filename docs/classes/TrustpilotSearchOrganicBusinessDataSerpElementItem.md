[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / TrustpilotSearchOrganicBusinessDataSerpElementItem

# Class: TrustpilotSearchOrganicBusinessDataSerpElementItem

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TrustpilotSearchOrganicBusinessDataSerpElementItem()

> **new TrustpilotSearchOrganicBusinessDataSerpElementItem**(`data`?): [`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Returns

[`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Defined in

main.ts:210957

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21313

***

### domain?

> `optional` **domain**: `string`

domain of the establishment

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`domain`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#domain)

#### Defined in

main.ts:210947

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_absolute`](BaseBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21311

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#rank_group)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_group`](BaseBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:21309

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score of the establishment submitted by reviewers

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`rating`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#rating)

#### Defined in

main.ts:210953

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`reviews_count`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#reviews_count)

#### Defined in

main.ts:210951

***

### title?

> `optional` **title**: `string`

title of the establishment

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`title`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#title)

#### Defined in

main.ts:210945

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`type`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#type)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`type`](BaseBusinessDataSerpElementItem.md#type)

#### Defined in

main.ts:21306

***

### url?

> `optional` **url**: `string`

URL to the establishment

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`url`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#url)

#### Defined in

main.ts:210949

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

main.ts:210962

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

main.ts:210984

***

### fromJS()

> `static` **fromJS**(`data`): [`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:210977
