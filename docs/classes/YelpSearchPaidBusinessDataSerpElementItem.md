[dataforseo-client](../README.md) / [Exports](../modules.md) / YelpSearchPaidBusinessDataSerpElementItem

# Class: YelpSearchPaidBusinessDataSerpElementItem

## Hierarchy

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

  ↳ **`YelpSearchPaidBusinessDataSerpElementItem`**

## Implements

- [`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](YelpSearchPaidBusinessDataSerpElementItem.md#constructor)

### Properties

- [\_discriminator](YelpSearchPaidBusinessDataSerpElementItem.md#_discriminator)
- [alias](YelpSearchPaidBusinessDataSerpElementItem.md#alias)
- [business\_highlights](YelpSearchPaidBusinessDataSerpElementItem.md#business_highlights)
- [business\_url](YelpSearchPaidBusinessDataSerpElementItem.md#business_url)
- [categories](YelpSearchPaidBusinessDataSerpElementItem.md#categories)
- [description](YelpSearchPaidBusinessDataSerpElementItem.md#description)
- [is\_guaranteed](YelpSearchPaidBusinessDataSerpElementItem.md#is_guaranteed)
- [location](YelpSearchPaidBusinessDataSerpElementItem.md#location)
- [name](YelpSearchPaidBusinessDataSerpElementItem.md#name)
- [phone](YelpSearchPaidBusinessDataSerpElementItem.md#phone)
- [photos](YelpSearchPaidBusinessDataSerpElementItem.md#photos)
- [price\_range](YelpSearchPaidBusinessDataSerpElementItem.md#price_range)
- [rank\_absolute](YelpSearchPaidBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](YelpSearchPaidBusinessDataSerpElementItem.md#rank_group)
- [rating](YelpSearchPaidBusinessDataSerpElementItem.md#rating)
- [service\_offerings](YelpSearchPaidBusinessDataSerpElementItem.md#service_offerings)
- [tags](YelpSearchPaidBusinessDataSerpElementItem.md#tags)
- [yelp\_business\_id](YelpSearchPaidBusinessDataSerpElementItem.md#yelp_business_id)

### Methods

- [init](YelpSearchPaidBusinessDataSerpElementItem.md#init)
- [toJSON](YelpSearchPaidBusinessDataSerpElementItem.md#tojson)
- [fromJS](YelpSearchPaidBusinessDataSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new YelpSearchPaidBusinessDataSerpElementItem**(`data?`): [`YelpSearchPaidBusinessDataSerpElementItem`](YelpSearchPaidBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IYelpSearchPaidBusinessDataSerpElementItem`](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md) |

#### Returns

[`YelpSearchPaidBusinessDataSerpElementItem`](YelpSearchPaidBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[constructor](BaseBusinessDataSerpElementItem.md#constructor)

#### Defined in

[main.ts:204266](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204266)

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

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[alias](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#alias)

#### Defined in

[main.ts:204231](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204231)

___

### business\_highlights

• `Optional` **business\_highlights**: `string`[]

highlights describing business offerings
example:
"casual_dining"

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[business_highlights](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#business_highlights)

#### Defined in

[main.ts:204260](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204260)

___

### business\_url

• `Optional` **business\_url**: `string`

link to the Yelp profile of the business entity

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[business_url](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#business_url)

#### Defined in

[main.ts:204228](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204228)

___

### categories

• `Optional` **categories**: `string`[]

categories related to the business entity

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[categories](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#categories)

#### Defined in

[main.ts:204250](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204250)

___

### description

• `Optional` **description**: `string`

description containing the featured review

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[description](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#description)

#### Defined in

[main.ts:204235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204235)

___

### is\_guaranteed

• `Optional` **is\_guaranteed**: `boolean`

Yelp guaranteed label

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[is_guaranteed](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#is_guaranteed)

#### Defined in

[main.ts:204246](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204246)

___

### location

• `Optional` **location**: [`BusinessAddressLocationInfo`](BusinessAddressLocationInfo.md)

information about the location of the business entity

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[location](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#location)

#### Defined in

[main.ts:204237](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204237)

___

### name

• `Optional` **name**: `string`

name of the business entity

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[name](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#name)

#### Defined in

[main.ts:204233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204233)

___

### phone

• `Optional` **phone**: `string`

contact phone number
example:
(804) 342-1981

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[phone](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#phone)

#### Defined in

[main.ts:204244](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204244)

___

### photos

• `Optional` **photos**: `string`[]

links to photos appearing in the result

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[photos](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#photos)

#### Defined in

[main.ts:204252](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204252)

___

### price\_range

• `Optional` **price\_range**: `number`

price range of the business entity
indicates the number of currency signs next to the business listing corresponding to its price score

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[price_range](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#price_range)

#### Defined in

[main.ts:204240](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204240)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed results
absolute position among all reviews on the list

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[rank_absolute](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:204222](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204222)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[rank_group](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#rank_group)

#### Defined in

[main.ts:204219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204219)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[rating](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#rating)

#### Defined in

[main.ts:204248](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204248)

___

### service\_offerings

• `Optional` **service\_offerings**: [`ServiceOfferingsElement`](ServiceOfferingsElement.md)[]

tags corresponding to the availability of certain business offerings

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[service_offerings](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#service_offerings)

#### Defined in

[main.ts:204262](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204262)

___

### tags

• `Optional` **tags**: `string`[]

tags generated by Yelp
example:
"New on Yelp"

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[tags](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#tags)

#### Defined in

[main.ts:204256](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204256)

___

### yelp\_business\_id

• `Optional` **yelp\_business\_id**: `string`

the unique identifier of a business identity on Yelp
example:
2sWZ17vpEF2vuM_7ic721w

#### Implementation of

[IYelpSearchPaidBusinessDataSerpElementItem](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md).[yelp_business_id](../interfaces/IYelpSearchPaidBusinessDataSerpElementItem.md#yelp_business_id)

#### Defined in

[main.ts:204226](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204226)

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

[main.ts:204271](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204271)

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

[main.ts:204325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204325)

___

### fromJS

▸ **fromJS**(`data`): [`YelpSearchPaidBusinessDataSerpElementItem`](YelpSearchPaidBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`YelpSearchPaidBusinessDataSerpElementItem`](YelpSearchPaidBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[fromJS](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

[main.ts:204318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204318)
