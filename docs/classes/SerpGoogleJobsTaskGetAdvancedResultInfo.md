[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleJobsTaskGetAdvancedResultInfo

# Class: SerpGoogleJobsTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleJobsTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleJobsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleJobsTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleJobsTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpGoogleJobsTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleJobsTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleJobsTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleJobsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleJobsTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleJobsTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleJobsTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleJobsTaskGetAdvancedResultInfo.md#spell)
- [type](SerpGoogleJobsTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleJobsTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleJobsTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleJobsTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleJobsTaskGetAdvancedResultInfo**(`data?`): [`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:49309](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49309)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:49286](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49286)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:49291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49291)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
google_jobs_item

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:49299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49299)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:49305](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49305)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:49303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49303)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:49275](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49275)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:49283](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49283)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:49281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49281)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:49279](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49279)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:49301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49301)

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:49294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49294)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:49277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49277)

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

[main.ts:49318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49318)

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

[main.ts:49354](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49354)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:49347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49347)
