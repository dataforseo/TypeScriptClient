[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IYelpSearchOrganicBusinessDataSerpElementItem

# Interface: IYelpSearchOrganicBusinessDataSerpElementItem

## Hierarchy

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)
  
  ↳ **`IYelpSearchOrganicBusinessDataSerpElementItem`**

## Implemented by

- [`YelpSearchOrganicBusinessDataSerpElementItem`](../classes/YelpSearchOrganicBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [alias](IYelpSearchOrganicBusinessDataSerpElementItem.md#alias)
- [business\_highlights](IYelpSearchOrganicBusinessDataSerpElementItem.md#business_highlights)
- [business\_url](IYelpSearchOrganicBusinessDataSerpElementItem.md#business_url)
- [categories](IYelpSearchOrganicBusinessDataSerpElementItem.md#categories)
- [description](IYelpSearchOrganicBusinessDataSerpElementItem.md#description)
- [is\_guaranteed](IYelpSearchOrganicBusinessDataSerpElementItem.md#is_guaranteed)
- [location](IYelpSearchOrganicBusinessDataSerpElementItem.md#location)
- [name](IYelpSearchOrganicBusinessDataSerpElementItem.md#name)
- [phone](IYelpSearchOrganicBusinessDataSerpElementItem.md#phone)
- [photos](IYelpSearchOrganicBusinessDataSerpElementItem.md#photos)
- [price\_range](IYelpSearchOrganicBusinessDataSerpElementItem.md#price_range)
- [rank\_absolute](IYelpSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](IYelpSearchOrganicBusinessDataSerpElementItem.md#rank_group)
- [rating](IYelpSearchOrganicBusinessDataSerpElementItem.md#rating)
- [service\_offerings](IYelpSearchOrganicBusinessDataSerpElementItem.md#service_offerings)
- [tags](IYelpSearchOrganicBusinessDataSerpElementItem.md#tags)
- [yelp\_business\_id](IYelpSearchOrganicBusinessDataSerpElementItem.md#yelp_business_id)

## Properties

### alias

• `Optional` **alias**: `string`

Yelp business identifier
displayed only if the request contained the corresponding field

#### Defined in

[main.ts:204180](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204180)

___


### business\_highlights

• `Optional` **business\_highlights**: `string`[]

highlights describing business offerings
example:
"casual_dining"

#### Defined in

[main.ts:204209](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204209)

___


### business\_url

• `Optional` **business\_url**: `string`

link to the Yelp profile of the business entity

#### Defined in

[main.ts:204177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204177)

___


### categories

• `Optional` **categories**: `string`[]

categories related to the business entity

#### Defined in

[main.ts:204199](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204199)

___


### description

• `Optional` **description**: `string`

description containing the featured review

#### Defined in

[main.ts:204184](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204184)

___


### is\_guaranteed

• `Optional` **is\_guaranteed**: `boolean`

Yelp guaranteed label

#### Defined in

[main.ts:204195](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204195)

___


### location

• `Optional` **location**: [`BusinessAddressLocationInfo`](../classes/BusinessAddressLocationInfo.md)

information about the location of the business entity

#### Defined in

[main.ts:204186](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204186)

___


### name

• `Optional` **name**: `string`

name of the business entity

#### Defined in

[main.ts:204182](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204182)

___


### phone

• `Optional` **phone**: `string`

contact phone number
example:
(804) 342-1981

#### Defined in

[main.ts:204193](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204193)

___


### photos

• `Optional` **photos**: `string`[]

links to photos appearing in the result

#### Defined in

[main.ts:204201](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204201)

___


### price\_range

• `Optional` **price\_range**: `number`

price range of the business entity
indicates the number of currency signs next to the business listing corresponding to its price score

#### Defined in

[main.ts:204189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204189)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed results
absolute position among all reviews on the list

#### Defined in

[main.ts:204171](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204171)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:204168](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204168)

___


### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

[main.ts:204197](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204197)

___


### service\_offerings

• `Optional` **service\_offerings**: [`ServiceOfferingsElement`](../classes/ServiceOfferingsElement.md)[]

tags corresponding to the availability of certain business offerings

#### Defined in

[main.ts:204211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204211)

___


### tags

• `Optional` **tags**: `string`[]

tags generated by Yelp
example:
"New on Yelp"

#### Defined in

[main.ts:204205](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204205)

___


### yelp\_business\_id

• `Optional` **yelp\_business\_id**: `string`

the unique identifier of a business identity on Yelp
example:
2sWZ17vpEF2vuM_7ic721w

#### Defined in

[main.ts:204175](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204175)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")