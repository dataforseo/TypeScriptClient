[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicTaskGetRegularResultInfo

# Class: SerpBingOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTaskGetRegularResultInfo.md#constructor)

### Properties

- [check\_url](SerpBingOrganicTaskGetRegularResultInfo.md#check_url)
- [datetime](SerpBingOrganicTaskGetRegularResultInfo.md#datetime)
- [item\_types](SerpBingOrganicTaskGetRegularResultInfo.md#item_types)
- [items](SerpBingOrganicTaskGetRegularResultInfo.md#items)
- [items\_count](SerpBingOrganicTaskGetRegularResultInfo.md#items_count)
- [keyword](SerpBingOrganicTaskGetRegularResultInfo.md#keyword)
- [language\_code](SerpBingOrganicTaskGetRegularResultInfo.md#language_code)
- [location\_code](SerpBingOrganicTaskGetRegularResultInfo.md#location_code)
- [se\_domain](SerpBingOrganicTaskGetRegularResultInfo.md#se_domain)
- [se\_results\_count](SerpBingOrganicTaskGetRegularResultInfo.md#se_results_count)
- [spell](SerpBingOrganicTaskGetRegularResultInfo.md#spell)
- [type](SerpBingOrganicTaskGetRegularResultInfo.md#type)

### Methods

- [init](SerpBingOrganicTaskGetRegularResultInfo.md#init)
- [toJSON](SerpBingOrganicTaskGetRegularResultInfo.md#tojson)
- [fromJS](SerpBingOrganicTaskGetRegularResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTaskGetRegularResultInfo**(`data?`): [`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md) |

#### Returns

[`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)

#### Defined in

[main.ts:54245](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54245)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpBingOrganicTaskGetRegularResultInfo](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[check_url](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#check_url)

#### Defined in

[main.ts:54222](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54222)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpBingOrganicTaskGetRegularResultInfo](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[datetime](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#datetime)

#### Defined in

[main.ts:54227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54227)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types: organic, paid

#### Implementation of

[ISerpBingOrganicTaskGetRegularResultInfo](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[item_types](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#item_types)

#### Defined in

[main.ts:54234](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54234)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items inside the element
array of 8 search queries related to the keyword

#### Implementation of

[ISerpBingOrganicTaskGetRegularResultInfo](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[items](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#items)

#### Defined in

[main.ts:54241](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54241)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpBingOrganicTaskGetRegularResultInfo](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[items_count](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#items_count)

#### Defined in

[main.ts:54238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54238)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpBingOrganicTaskGetRegularResultInfo](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[keyword](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#keyword)

#### Defined in

[main.ts:54211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54211)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpBingOrganicTaskGetRegularResultInfo](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[language_code](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#language_code)

#### Defined in

[main.ts:54219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54219)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpBingOrganicTaskGetRegularResultInfo](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[location_code](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#location_code)

#### Defined in

[main.ts:54217](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54217)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpBingOrganicTaskGetRegularResultInfo](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[se_domain](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#se_domain)

#### Defined in

[main.ts:54215](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54215)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpBingOrganicTaskGetRegularResultInfo](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[se_results_count](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Defined in

[main.ts:54236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54236)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpBingOrganicTaskGetRegularResultInfo](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[spell](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#spell)

#### Defined in

[main.ts:54230](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54230)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpBingOrganicTaskGetRegularResultInfo](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[type](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#type)

#### Defined in

[main.ts:54213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54213)

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

[main.ts:54254](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54254)

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

[main.ts:54290](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54290)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)

#### Defined in

[main.ts:54283](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54283)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")