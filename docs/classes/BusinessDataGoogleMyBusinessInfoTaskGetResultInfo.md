[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessInfoTaskGetResultInfo

# Class: BusinessDataGoogleMyBusinessInfoTaskGetResultInfo

Defined in: main.ts:214966

## Implements

- [`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessInfoTaskGetResultInfo()

> **new BusinessDataGoogleMyBusinessInfoTaskGetResultInfo**(`data`?): [`BusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

Defined in: main.ts:215000

#### Parameters

##### data?

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:214982

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:214987

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:214991

item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`item_types`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:214996

array of directory items

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:214994

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:214973

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:214979

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:214977

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:214975

search engine domain as specified in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#se_domain)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:215009

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:215042

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

Defined in: main.ts:215035

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)
