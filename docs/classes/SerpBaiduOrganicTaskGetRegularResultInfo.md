[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBaiduOrganicTaskGetRegularResultInfo

# Class: SerpBaiduOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduOrganicTaskGetRegularResultInfo.md#constructor)

### Properties

- [check\_url](SerpBaiduOrganicTaskGetRegularResultInfo.md#check_url)
- [datetime](SerpBaiduOrganicTaskGetRegularResultInfo.md#datetime)
- [item\_types](SerpBaiduOrganicTaskGetRegularResultInfo.md#item_types)
- [items](SerpBaiduOrganicTaskGetRegularResultInfo.md#items)
- [items\_count](SerpBaiduOrganicTaskGetRegularResultInfo.md#items_count)
- [keyword](SerpBaiduOrganicTaskGetRegularResultInfo.md#keyword)
- [language\_code](SerpBaiduOrganicTaskGetRegularResultInfo.md#language_code)
- [location\_code](SerpBaiduOrganicTaskGetRegularResultInfo.md#location_code)
- [se\_domain](SerpBaiduOrganicTaskGetRegularResultInfo.md#se_domain)
- [se\_results\_count](SerpBaiduOrganicTaskGetRegularResultInfo.md#se_results_count)
- [spell](SerpBaiduOrganicTaskGetRegularResultInfo.md#spell)
- [type](SerpBaiduOrganicTaskGetRegularResultInfo.md#type)

### Methods

- [init](SerpBaiduOrganicTaskGetRegularResultInfo.md#init)
- [toJSON](SerpBaiduOrganicTaskGetRegularResultInfo.md#tojson)
- [fromJS](SerpBaiduOrganicTaskGetRegularResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduOrganicTaskGetRegularResultInfo**(`data?`): [`SerpBaiduOrganicTaskGetRegularResultInfo`](SerpBaiduOrganicTaskGetRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md) |

#### Returns

[`SerpBaiduOrganicTaskGetRegularResultInfo`](SerpBaiduOrganicTaskGetRegularResultInfo.md)

#### Defined in

[main.ts:66629](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66629)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResultInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[check_url](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#check_url)

#### Defined in

[main.ts:66606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66606)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResultInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[datetime](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#datetime)

#### Defined in

[main.ts:66611](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66611)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
organic, paid

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResultInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[item_types](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#item_types)

#### Defined in

[main.ts:66619](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66619)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResultInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[items](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#items)

#### Defined in

[main.ts:66625](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66625)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResultInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[items_count](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#items_count)

#### Defined in

[main.ts:66623](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66623)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResultInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[keyword](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#keyword)

#### Defined in

[main.ts:66595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66595)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResultInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[language_code](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#language_code)

#### Defined in

[main.ts:66603](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66603)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResultInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[location_code](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#location_code)

#### Defined in

[main.ts:66601](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66601)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResultInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[se_domain](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#se_domain)

#### Defined in

[main.ts:66599](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66599)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResultInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[se_results_count](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Defined in

[main.ts:66621](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66621)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResultInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[spell](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#spell)

#### Defined in

[main.ts:66614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66614)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResultInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[type](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#type)

#### Defined in

[main.ts:66597](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66597)

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

[main.ts:66638](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66638)

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

[main.ts:66674](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66674)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBaiduOrganicTaskGetRegularResultInfo`](SerpBaiduOrganicTaskGetRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduOrganicTaskGetRegularResultInfo`](SerpBaiduOrganicTaskGetRegularResultInfo.md)

#### Defined in

[main.ts:66667](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66667)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")