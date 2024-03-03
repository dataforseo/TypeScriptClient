[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo

# Interface: IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo

## Implemented by

- [`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../classes/BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [business\_updates\_id](IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#business_updates_id)
- [check\_url](IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#check_url)
- [cid](IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#cid)
- [datetime](IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#datetime)
- [feature\_id](IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#feature_id)
- [item\_types](IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#item_types)
- [items](IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#items)
- [items\_count](IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#items_count)
- [keyword](IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#keyword)
- [language\_code](IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#language_code)
- [location\_code](IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#location_code)
- [se\_domain](IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#se_domain)

## Properties

### business\_updates\_id

• `Optional` **business\_updates\_id**: `string`

identifier of the business updates element in SERP

#### Defined in

main.ts:192748

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:192741

___

### cid

• `Optional` **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the cid identifier in this help center article

#### Defined in

main.ts:192752

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:192746

___

### feature\_id

• `Optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Defined in

main.ts:192755

___

### item\_types

• `Optional` **item\_types**: `string`[]

item types
types of search engine results encountered in the items array;
possible item types: google_business_post

#### Defined in

main.ts:192759

___

### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Defined in

main.ts:192766

___

### items\_count

• `Optional` **items\_count**: `number`

item types
the number of items in the items array

#### Defined in

main.ts:192762

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

#### Defined in

main.ts:192732

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:192738

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:192736

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain as specified in a POST array

#### Defined in

main.ts:192734
