**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TrustpilotSearchOrganicBusinessDataSerpElementItem

# Class: TrustpilotSearchOrganicBusinessDataSerpElementItem

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TrustpilotSearchOrganicBusinessDataSerpElementItem(data)

> **new TrustpilotSearchOrganicBusinessDataSerpElementItem**(`data`?): [`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Returns

[`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Source

main.ts:204741

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Source

main.ts:20532

***

### domain?

> **`optional`** **domain**: `string`

domain of the establishment

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`domain`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#domain)

#### Source

main.ts:204731

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)

#### Source

main.ts:204727

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#rank_group)

#### Source

main.ts:204724

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the rating score of the establishment submitted by reviewers

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`rating`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#rating)

#### Source

main.ts:204737

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`reviews_count`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#reviews_count)

#### Source

main.ts:204735

***

### title?

> **`optional`** **title**: `string`

title of the establishment

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`title`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#title)

#### Source

main.ts:204729

***

### url?

> **`optional`** **url**: `string`

URL to the establishment

#### Implementation of

[`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md).[`url`](../interfaces/ITrustpilotSearchOrganicBusinessDataSerpElementItem.md#url)

#### Source

main.ts:204733

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

#### Source

main.ts:204746

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

#### Source

main.ts:204770

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TrustpilotSearchOrganicBusinessDataSerpElementItem`](TrustpilotSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Source

main.ts:204763
