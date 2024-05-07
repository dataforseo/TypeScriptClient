**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / YelpSearchOrganicBusinessDataSerpElementItem

# Class: YelpSearchOrganicBusinessDataSerpElementItem

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new YelpSearchOrganicBusinessDataSerpElementItem(data)

> **new YelpSearchOrganicBusinessDataSerpElementItem**(`data`?): [`YelpSearchOrganicBusinessDataSerpElementItem`](YelpSearchOrganicBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md)

#### Returns

[`YelpSearchOrganicBusinessDataSerpElementItem`](YelpSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Source

main.ts:212878

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Source

main.ts:20824

***

### alias?

> **`optional`** **alias**: `string`

Yelp business identifier
displayed only if the request contained the corresponding field

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`alias`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#alias)

#### Source

main.ts:212843

***

### business\_highlights?

> **`optional`** **business\_highlights**: `string`[]

highlights describing business offerings
example:
"casual_dining"

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`business_highlights`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#business_highlights)

#### Source

main.ts:212872

***

### business\_url?

> **`optional`** **business\_url**: `string`

link to the Yelp profile of the business entity

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`business_url`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#business_url)

#### Source

main.ts:212840

***

### categories?

> **`optional`** **categories**: `string`[]

categories related to the business entity

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`categories`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#categories)

#### Source

main.ts:212862

***

### description?

> **`optional`** **description**: `string`

description containing the featured review

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`description`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#description)

#### Source

main.ts:212847

***

### is\_guaranteed?

> **`optional`** **is\_guaranteed**: `boolean`

Yelp guaranteed label

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`is_guaranteed`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#is_guaranteed)

#### Source

main.ts:212858

***

### location?

> **`optional`** **location**: [`BusinessAddressLocationInfo`](BusinessAddressLocationInfo.md)

information about the location of the business entity

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`location`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#location)

#### Source

main.ts:212849

***

### name?

> **`optional`** **name**: `string`

name of the business entity

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`name`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#name)

#### Source

main.ts:212845

***

### phone?

> **`optional`** **phone**: `string`

contact phone number
example:
(804) 342-1981

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`phone`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#phone)

#### Source

main.ts:212856

***

### photos?

> **`optional`** **photos**: `string`[]

links to photos appearing in the result

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`photos`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#photos)

#### Source

main.ts:212864

***

### price\_range?

> **`optional`** **price\_range**: `number`

price range of the business entity
indicates the number of currency signs next to the business listing corresponding to its price score

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`price_range`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#price_range)

#### Source

main.ts:212852

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed results
absolute position among all reviews on the list

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)

#### Source

main.ts:212834

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#rank_group)

#### Source

main.ts:212831

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`rating`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#rating)

#### Source

main.ts:212860

***

### service\_offerings?

> **`optional`** **service\_offerings**: [`ServiceOfferingsElement`](ServiceOfferingsElement.md)[]

tags corresponding to the availability of certain business offerings

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`service_offerings`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#service_offerings)

#### Source

main.ts:212874

***

### tags?

> **`optional`** **tags**: `string`[]

tags generated by Yelp
example:
"New on Yelp"

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`tags`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#tags)

#### Source

main.ts:212868

***

### yelp\_business\_id?

> **`optional`** **yelp\_business\_id**: `string`

the unique identifier of a business identity on Yelp
example:
2sWZ17vpEF2vuM_7ic721w

#### Implementation of

[`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[`yelp_business_id`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#yelp_business_id)

#### Source

main.ts:212838

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

main.ts:212883

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

main.ts:212937

***

### fromJS()

> **`static`** **fromJS**(`data`): [`YelpSearchOrganicBusinessDataSerpElementItem`](YelpSearchOrganicBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`YelpSearchOrganicBusinessDataSerpElementItem`](YelpSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Source

main.ts:212930
