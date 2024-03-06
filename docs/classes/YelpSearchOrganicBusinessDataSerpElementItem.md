[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / YelpSearchOrganicBusinessDataSerpElementItem

# Class: YelpSearchOrganicBusinessDataSerpElementItem

## Hierarchy

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)
  
  ↳ **`YelpSearchOrganicBusinessDataSerpElementItem`**

## Implements

- [`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](YelpSearchOrganicBusinessDataSerpElementItem.md#constructor)

### Properties

- [\_discriminator](YelpSearchOrganicBusinessDataSerpElementItem.md#_discriminator)
- [alias](YelpSearchOrganicBusinessDataSerpElementItem.md#alias)
- [business\_highlights](YelpSearchOrganicBusinessDataSerpElementItem.md#business_highlights)
- [business\_url](YelpSearchOrganicBusinessDataSerpElementItem.md#business_url)
- [categories](YelpSearchOrganicBusinessDataSerpElementItem.md#categories)
- [description](YelpSearchOrganicBusinessDataSerpElementItem.md#description)
- [is\_guaranteed](YelpSearchOrganicBusinessDataSerpElementItem.md#is_guaranteed)
- [location](YelpSearchOrganicBusinessDataSerpElementItem.md#location)
- [name](YelpSearchOrganicBusinessDataSerpElementItem.md#name)
- [phone](YelpSearchOrganicBusinessDataSerpElementItem.md#phone)
- [photos](YelpSearchOrganicBusinessDataSerpElementItem.md#photos)
- [price\_range](YelpSearchOrganicBusinessDataSerpElementItem.md#price_range)
- [rank\_absolute](YelpSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](YelpSearchOrganicBusinessDataSerpElementItem.md#rank_group)
- [rating](YelpSearchOrganicBusinessDataSerpElementItem.md#rating)
- [service\_offerings](YelpSearchOrganicBusinessDataSerpElementItem.md#service_offerings)
- [tags](YelpSearchOrganicBusinessDataSerpElementItem.md#tags)
- [yelp\_business\_id](YelpSearchOrganicBusinessDataSerpElementItem.md#yelp_business_id)

### Methods

- [init](YelpSearchOrganicBusinessDataSerpElementItem.md#init)
- [toJSON](YelpSearchOrganicBusinessDataSerpElementItem.md#tojson)
- [fromJS](YelpSearchOrganicBusinessDataSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new YelpSearchOrganicBusinessDataSerpElementItem**(`data?`): [`YelpSearchOrganicBusinessDataSerpElementItem`](YelpSearchOrganicBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IYelpSearchOrganicBusinessDataSerpElementItem`](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md) |

#### Returns

[`YelpSearchOrganicBusinessDataSerpElementItem`](YelpSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[constructor](BaseBusinessDataSerpElementItem.md#constructor)

#### Defined in

[main.ts:204058](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204058)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[_discriminator](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:20076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20076)

___


### alias

• `Optional` **alias**: `string`

Yelp business identifier
displayed only if the request contained the corresponding field

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[alias](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#alias)

#### Defined in

[main.ts:204023](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204023)

___


### business\_highlights

• `Optional` **business\_highlights**: `string`[]

highlights describing business offerings
example:
"casual_dining"

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[business_highlights](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#business_highlights)

#### Defined in

[main.ts:204052](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204052)

___


### business\_url

• `Optional` **business\_url**: `string`

link to the Yelp profile of the business entity

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[business_url](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#business_url)

#### Defined in

[main.ts:204020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204020)

___


### categories

• `Optional` **categories**: `string`[]

categories related to the business entity

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[categories](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#categories)

#### Defined in

[main.ts:204042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204042)

___


### description

• `Optional` **description**: `string`

description containing the featured review

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[description](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#description)

#### Defined in

[main.ts:204027](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204027)

___


### is\_guaranteed

• `Optional` **is\_guaranteed**: `boolean`

Yelp guaranteed label

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[is_guaranteed](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#is_guaranteed)

#### Defined in

[main.ts:204038](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204038)

___


### location

• `Optional` **location**: [`BusinessAddressLocationInfo`](BusinessAddressLocationInfo.md)

information about the location of the business entity

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[location](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#location)

#### Defined in

[main.ts:204029](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204029)

___


### name

• `Optional` **name**: `string`

name of the business entity

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[name](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#name)

#### Defined in

[main.ts:204025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204025)

___


### phone

• `Optional` **phone**: `string`

contact phone number
example:
(804) 342-1981

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[phone](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#phone)

#### Defined in

[main.ts:204036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204036)

___


### photos

• `Optional` **photos**: `string`[]

links to photos appearing in the result

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[photos](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#photos)

#### Defined in

[main.ts:204044](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204044)

___


### price\_range

• `Optional` **price\_range**: `number`

price range of the business entity
indicates the number of currency signs next to the business listing corresponding to its price score

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[price_range](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#price_range)

#### Defined in

[main.ts:204032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204032)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed results
absolute position among all reviews on the list

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[rank_absolute](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:204014](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204014)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[rank_group](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#rank_group)

#### Defined in

[main.ts:204011](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204011)

___


### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[rating](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#rating)

#### Defined in

[main.ts:204040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204040)

___


### service\_offerings

• `Optional` **service\_offerings**: [`ServiceOfferingsElement`](ServiceOfferingsElement.md)[]

tags corresponding to the availability of certain business offerings

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[service_offerings](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#service_offerings)

#### Defined in

[main.ts:204054](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204054)

___


### tags

• `Optional` **tags**: `string`[]

tags generated by Yelp
example:
"New on Yelp"

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[tags](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#tags)

#### Defined in

[main.ts:204048](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204048)

___


### yelp\_business\_id

• `Optional` **yelp\_business\_id**: `string`

the unique identifier of a business identity on Yelp
example:
2sWZ17vpEF2vuM_7ic721w

#### Implementation of

[IYelpSearchOrganicBusinessDataSerpElementItem](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md).[yelp_business_id](../interfaces/IYelpSearchOrganicBusinessDataSerpElementItem.md#yelp_business_id)

#### Defined in

[main.ts:204018](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204018)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[init](BaseBusinessDataSerpElementItem.md#init)

#### Defined in

[main.ts:204063](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204063)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[toJSON](BaseBusinessDataSerpElementItem.md#tojson)

#### Defined in

[main.ts:204117](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204117)

___


### fromJS

▸ **fromJS**(`data`): [`YelpSearchOrganicBusinessDataSerpElementItem`](YelpSearchOrganicBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`YelpSearchOrganicBusinessDataSerpElementItem`](YelpSearchOrganicBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[fromJS](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

[main.ts:204110](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204110)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")