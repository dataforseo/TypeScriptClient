[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo()

> **new BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo**(`data`?): [`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

#### Defined in

main.ts:202814

## Properties

### business\_updates\_id?

> `optional` **business\_updates\_id**: `string`

identifier of the business updates element in SERP

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`business_updates_id`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#business_updates_id)

#### Defined in

main.ts:202792

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#check_url)

#### Defined in

main.ts:202785

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the cid identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`cid`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#cid)

#### Defined in

main.ts:202796

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#datetime)

#### Defined in

main.ts:202790

***

### feature\_id?

> `optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`feature_id`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#feature_id)

#### Defined in

main.ts:202799

***

### item\_types?

> `optional` **item\_types**: `string`[]

item types
types of search engine results encountered in the items array;
possible item types: google_business_post

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`item_types`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#item_types)

#### Defined in

main.ts:202803

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_post

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#items)

#### Defined in

main.ts:202810

***

### items\_count?

> `optional` **items\_count**: `number`

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#items_count)

#### Defined in

main.ts:202806

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:202776

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:202782

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:202780

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain as specified in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#se_domain)

#### Defined in

main.ts:202778

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:202823

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:202859

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

#### Defined in

main.ts:202852
