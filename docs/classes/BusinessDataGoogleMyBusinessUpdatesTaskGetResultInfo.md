**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo(data)

> **new BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo**(`data`?): [`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

#### Source

main.ts:198141

## Properties

### business\_updates\_id?

> **`optional`** **business\_updates\_id**: `string`

identifier of the business updates element in SERP

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`business_updates_id`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#business_updates_id)

#### Source

main.ts:198119

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#check_url)

#### Source

main.ts:198112

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the cid identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`cid`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#cid)

#### Source

main.ts:198123

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#datetime)

#### Source

main.ts:198117

***

### feature\_id?

> **`optional`** **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`feature_id`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#feature_id)

#### Source

main.ts:198126

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

item types
types of search engine results encountered in the items array;
possible item types: google_business_post

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`item_types`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#item_types)

#### Source

main.ts:198130

***

### items?

> **`optional`** **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#items)

#### Source

main.ts:198137

***

### items\_count?

> **`optional`** **items\_count**: `number`

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#items_count)

#### Source

main.ts:198133

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#keyword)

#### Source

main.ts:198103

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#language_code)

#### Source

main.ts:198109

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#location_code)

#### Source

main.ts:198107

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain as specified in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#se_domain)

#### Source

main.ts:198105

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:198150

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:198186

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

#### Source

main.ts:198179
