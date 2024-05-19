**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / YelpSearchPaidBusinessDataSerpElementItem

# Class: YelpSearchPaidBusinessDataSerpElementItem

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new YelpSearchPaidBusinessDataSerpElementItem(data)

> **new YelpSearchPaidBusinessDataSerpElementItem**(`data`?): [`YelpSearchPaidBusinessDataSerpElementItem`](YelpSearchPaidBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md)

#### Returns

[`YelpSearchPaidBusinessDataSerpElementItem`](YelpSearchPaidBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Source

main.ts:213612

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Source

main.ts:20904

***

### alias?

> **`optional`** **alias**: `string`

Yelp business identifier
displayed only if the request contained the corresponding field

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`alias`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#alias)

#### Source

main.ts:213577

***

### business\_highlights?

> **`optional`** **business\_highlights**: `string`[]

highlights describing business offerings
example:
"casual_dining"

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`business_highlights`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#business_highlights)

#### Source

main.ts:213606

***

### business\_url?

> **`optional`** **business\_url**: `string`

link to the Yelp profile of the business entity

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`business_url`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#business_url)

#### Source

main.ts:213574

***

### categories?

> **`optional`** **categories**: `string`[]

categories related to the business entity

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`categories`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#categories)

#### Source

main.ts:213596

***

### description?

> **`optional`** **description**: `string`

description containing the featured review

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`description`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#description)

#### Source

main.ts:213581

***

### is\_guaranteed?

> **`optional`** **is\_guaranteed**: `boolean`

Yelp guaranteed label

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`is_guaranteed`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#is_guaranteed)

#### Source

main.ts:213592

***

### location?

> **`optional`** **location**: [`BusinessAddressLocationInfo`](BusinessAddressLocationInfo.md)

information about the location of the business entity

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`location`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#location)

#### Source

main.ts:213583

***

### name?

> **`optional`** **name**: `string`

name of the business entity

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`name`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#name)

#### Source

main.ts:213579

***

### phone?

> **`optional`** **phone**: `string`

contact phone number
example:
(804) 342-1981

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`phone`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#phone)

#### Source

main.ts:213590

***

### photos?

> **`optional`** **photos**: `string`[]

links to photos appearing in the result

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`photos`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#photos)

#### Source

main.ts:213598

***

### price\_range?

> **`optional`** **price\_range**: `number`

price range of the business entity
indicates the number of currency signs next to the business listing corresponding to its price score

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`price_range`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#price_range)

#### Source

main.ts:213586

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed results
absolute position among all reviews on the list

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#rank_absolute)

#### Source

main.ts:213568

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#rank_group)

#### Source

main.ts:213565

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`rating`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#rating)

#### Source

main.ts:213594

***

### service\_offerings?

> **`optional`** **service\_offerings**: [`ServiceOfferingsElement`](ServiceOfferingsElement.md)[]

tags corresponding to the availability of certain business offerings

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`service_offerings`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#service_offerings)

#### Source

main.ts:213608

***

### tags?

> **`optional`** **tags**: `string`[]

tags generated by Yelp
example:
"New on Yelp"

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`tags`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#tags)

#### Source

main.ts:213602

***

### yelp\_business\_id?

> **`optional`** **yelp\_business\_id**: `string`

the unique identifier of a business identity on Yelp
example:
2sWZ17vpEF2vuM_7ic721w

#### Implementation of

[`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[`yelp_business_id`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#yelp_business_id)

#### Source

main.ts:213572

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

main.ts:213617

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

main.ts:213671

***

### fromJS()

> **`static`** **fromJS**(`data`): [`YelpSearchPaidBusinessDataSerpElementItem`](YelpSearchPaidBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`YelpSearchPaidBusinessDataSerpElementItem`](YelpSearchPaidBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Source

main.ts:213664
