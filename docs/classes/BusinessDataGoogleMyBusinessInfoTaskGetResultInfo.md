[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleMyBusinessInfoTaskGetResultInfo

# Class: BusinessDataGoogleMyBusinessInfoTaskGetResultInfo

## Implements

- [`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessInfoTaskGetResultInfo()

> **new BusinessDataGoogleMyBusinessInfoTaskGetResultInfo**(`data`?): [`BusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

#### Defined in

main.ts:201793

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#check_url)

#### Defined in

main.ts:201775

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#datetime)

#### Defined in

main.ts:201780

***

### item\_types?

> `optional` **item\_types**: `string`[]

item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`item_types`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#item_types)

#### Defined in

main.ts:201784

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

array of directory items

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#items)

#### Defined in

main.ts:201789

***

### items\_count?

> `optional` **items\_count**: `number`

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#items_count)

#### Defined in

main.ts:201787

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

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:201766

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:201772

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:201770

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain as specified in a POST array

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#se_domain)

#### Defined in

main.ts:201768

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:201802

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:201835

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

#### Defined in

main.ts:201828
