[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleMyBusinessInfoLiveResultInfo

# Class: BusinessDataGoogleMyBusinessInfoLiveResultInfo

## Implements

- [`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessInfoLiveResultInfo()

> **new BusinessDataGoogleMyBusinessInfoLiveResultInfo**(`data`?): [`BusinessDataGoogleMyBusinessInfoLiveResultInfo`](BusinessDataGoogleMyBusinessInfoLiveResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessInfoLiveResultInfo`](BusinessDataGoogleMyBusinessInfoLiveResultInfo.md)

#### Defined in

main.ts:202043

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#check_url)

#### Defined in

main.ts:202023

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#datetime)

#### Defined in

main.ts:202028

***

### item\_types?

> `optional` **item\_types**: `string`[]

item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`item_types`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#item_types)

#### Defined in

main.ts:202032

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#items)

#### Defined in

main.ts:202039

***

### items\_count?

> `optional` **items\_count**: `number`

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#items_count)

#### Defined in

main.ts:202035

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

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#keyword)

#### Defined in

main.ts:202014

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#language_code)

#### Defined in

main.ts:202020

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#location_code)

#### Defined in

main.ts:202018

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain as specified in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#se_domain)

#### Defined in

main.ts:202016

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:202052

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:202085

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoLiveResultInfo`](BusinessDataGoogleMyBusinessInfoLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleMyBusinessInfoLiveResultInfo`](BusinessDataGoogleMyBusinessInfoLiveResultInfo.md)

#### Defined in

main.ts:202078
