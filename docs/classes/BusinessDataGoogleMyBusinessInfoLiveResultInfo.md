[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessInfoLiveResultInfo

# Class: BusinessDataGoogleMyBusinessInfoLiveResultInfo

Defined in: main.ts:214892

## Implements

- [`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessInfoLiveResultInfo()

> **new BusinessDataGoogleMyBusinessInfoLiveResultInfo**(`data`?): [`BusinessDataGoogleMyBusinessInfoLiveResultInfo`](BusinessDataGoogleMyBusinessInfoLiveResultInfo.md)

Defined in: main.ts:214928

#### Parameters

##### data?

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessInfoLiveResultInfo`](BusinessDataGoogleMyBusinessInfoLiveResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:214908

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:214913

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:214917

item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`item_types`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:214924

encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:214920

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:214899

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:214905

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:214903

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:214901

search engine domain as specified in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoLiveResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleMyBusinessInfoLiveResultInfo.md#se_domain)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:214937

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:214970

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoLiveResultInfo`](BusinessDataGoogleMyBusinessInfoLiveResultInfo.md)

Defined in: main.ts:214963

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleMyBusinessInfoLiveResultInfo`](BusinessDataGoogleMyBusinessInfoLiveResultInfo.md)
