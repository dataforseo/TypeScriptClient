[dataforseo-client](../README.md) / [Exports](../modules.md) / IYelpSearchPaidBusinessDataSerpElementItem

# Interface: IYelpSearchPaidBusinessDataSerpElementItem

## Hierarchy

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

  ↳ **`IYelpSearchPaidBusinessDataSerpElementItem`**

## Implemented by

- [`YelpSearchPaidBusinessDataSerpElementItem`](../classes/YelpSearchPaidBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [alias](IYelpSearchPaidBusinessDataSerpElementItem.md#alias)
- [business\_highlights](IYelpSearchPaidBusinessDataSerpElementItem.md#business_highlights)
- [business\_url](IYelpSearchPaidBusinessDataSerpElementItem.md#business_url)
- [categories](IYelpSearchPaidBusinessDataSerpElementItem.md#categories)
- [description](IYelpSearchPaidBusinessDataSerpElementItem.md#description)
- [is\_guaranteed](IYelpSearchPaidBusinessDataSerpElementItem.md#is_guaranteed)
- [location](IYelpSearchPaidBusinessDataSerpElementItem.md#location)
- [name](IYelpSearchPaidBusinessDataSerpElementItem.md#name)
- [phone](IYelpSearchPaidBusinessDataSerpElementItem.md#phone)
- [photos](IYelpSearchPaidBusinessDataSerpElementItem.md#photos)
- [price\_range](IYelpSearchPaidBusinessDataSerpElementItem.md#price_range)
- [rank\_absolute](IYelpSearchPaidBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](IYelpSearchPaidBusinessDataSerpElementItem.md#rank_group)
- [rating](IYelpSearchPaidBusinessDataSerpElementItem.md#rating)
- [service\_offerings](IYelpSearchPaidBusinessDataSerpElementItem.md#service_offerings)
- [tags](IYelpSearchPaidBusinessDataSerpElementItem.md#tags)
- [yelp\_business\_id](IYelpSearchPaidBusinessDataSerpElementItem.md#yelp_business_id)

## Properties

### alias

• `Optional` **alias**: `string`

Yelp business identifier
displayed only if the request contained the corresponding field

#### Defined in

[main.ts:204388](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204388)

___

### business\_highlights

• `Optional` **business\_highlights**: `string`[]

highlights describing business offerings
example:
"casual_dining"

#### Defined in

[main.ts:204417](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204417)

___

### business\_url

• `Optional` **business\_url**: `string`

link to the Yelp profile of the business entity

#### Defined in

[main.ts:204385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204385)

___

### categories

• `Optional` **categories**: `string`[]

categories related to the business entity

#### Defined in

[main.ts:204407](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204407)

___

### description

• `Optional` **description**: `string`

description containing the featured review

#### Defined in

[main.ts:204392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204392)

___

### is\_guaranteed

• `Optional` **is\_guaranteed**: `boolean`

Yelp guaranteed label

#### Defined in

[main.ts:204403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204403)

___

### location

• `Optional` **location**: [`BusinessAddressLocationInfo`](../classes/BusinessAddressLocationInfo.md)

information about the location of the business entity

#### Defined in

[main.ts:204394](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204394)

___

### name

• `Optional` **name**: `string`

name of the business entity

#### Defined in

[main.ts:204390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204390)

___

### phone

• `Optional` **phone**: `string`

contact phone number
example:
(804) 342-1981

#### Defined in

[main.ts:204401](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204401)

___

### photos

• `Optional` **photos**: `string`[]

links to photos appearing in the result

#### Defined in

[main.ts:204409](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204409)

___

### price\_range

• `Optional` **price\_range**: `number`

price range of the business entity
indicates the number of currency signs next to the business listing corresponding to its price score

#### Defined in

[main.ts:204397](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204397)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed results
absolute position among all reviews on the list

#### Defined in

[main.ts:204379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204379)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:204376](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204376)

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

[main.ts:204405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204405)

___

### service\_offerings

• `Optional` **service\_offerings**: [`ServiceOfferingsElement`](../classes/ServiceOfferingsElement.md)[]

tags corresponding to the availability of certain business offerings

#### Defined in

[main.ts:204419](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204419)

___

### tags

• `Optional` **tags**: `string`[]

tags generated by Yelp
example:
"New on Yelp"

#### Defined in

[main.ts:204413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204413)

___

### yelp\_business\_id

• `Optional` **yelp\_business\_id**: `string`

the unique identifier of a business identity on Yelp
example:
2sWZ17vpEF2vuM_7ic721w

#### Defined in

[main.ts:204383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204383)
