[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#constructor)

### Properties

- [business\_updates\_id](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#business_updates_id)
- [check\_url](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#check_url)
- [cid](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#cid)
- [datetime](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#datetime)
- [feature\_id](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#feature_id)
- [item\_types](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#item_types)
- [items](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#items)
- [items\_count](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#items_count)
- [keyword](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#keyword)
- [language\_code](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#language_code)
- [location\_code](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#location_code)
- [se\_domain](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#se_domain)

### Methods

- [init](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#init)
- [toJSON](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo**(`data?`): [`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md) |

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

#### Defined in

[main.ts:192530](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192530)

## Properties

### business\_updates\_id

• `Optional` **business\_updates\_id**: `string`

identifier of the business updates element in SERP

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[business_updates_id](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#business_updates_id)

#### Defined in

[main.ts:192508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192508)

___


### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[check_url](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#check_url)

#### Defined in

[main.ts:192501](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192501)

___


### cid

• `Optional` **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the cid identifier in this help center article

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[cid](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#cid)

#### Defined in

[main.ts:192512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192512)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[datetime](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#datetime)

#### Defined in

[main.ts:192506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192506)

___


### feature\_id

• `Optional` **feature\_id**: `string`

the unique identifier of the element in SERP
learn more about the identifier in this help center article

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[feature_id](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#feature_id)

#### Defined in

[main.ts:192515](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192515)

___


### item\_types

• `Optional` **item\_types**: `string`[]

item types
types of search engine results encountered in the items array;
possible item types: google_business_post

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[item_types](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#item_types)

#### Defined in

[main.ts:192519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192519)

___


### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[items](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#items)

#### Defined in

[main.ts:192526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192526)

___


### items\_count

• `Optional` **items\_count**: `number`

item types
the number of items in the items array

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[items_count](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#items_count)

#### Defined in

[main.ts:192522](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192522)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[keyword](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#keyword)

#### Defined in

[main.ts:192492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192492)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[language_code](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#language_code)

#### Defined in

[main.ts:192498](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192498)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[location_code](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#location_code)

#### Defined in

[main.ts:192496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192496)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain as specified in a POST array

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md).[se_domain](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md#se_domain)

#### Defined in

[main.ts:192494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192494)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:192539](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192539)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:192575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192575)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo.md)

#### Defined in

[main.ts:192568](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192568)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")