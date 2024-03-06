[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTaskGetRegularResultInfo

# Class: SerpNaverOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTaskGetRegularResultInfo.md#constructor)

### Properties

- [check\_url](SerpNaverOrganicTaskGetRegularResultInfo.md#check_url)
- [datetime](SerpNaverOrganicTaskGetRegularResultInfo.md#datetime)
- [item\_types](SerpNaverOrganicTaskGetRegularResultInfo.md#item_types)
- [items](SerpNaverOrganicTaskGetRegularResultInfo.md#items)
- [items\_count](SerpNaverOrganicTaskGetRegularResultInfo.md#items_count)
- [keyword](SerpNaverOrganicTaskGetRegularResultInfo.md#keyword)
- [language\_code](SerpNaverOrganicTaskGetRegularResultInfo.md#language_code)
- [location\_code](SerpNaverOrganicTaskGetRegularResultInfo.md#location_code)
- [se\_domain](SerpNaverOrganicTaskGetRegularResultInfo.md#se_domain)
- [se\_results\_count](SerpNaverOrganicTaskGetRegularResultInfo.md#se_results_count)
- [spell](SerpNaverOrganicTaskGetRegularResultInfo.md#spell)
- [type](SerpNaverOrganicTaskGetRegularResultInfo.md#type)

### Methods

- [init](SerpNaverOrganicTaskGetRegularResultInfo.md#init)
- [toJSON](SerpNaverOrganicTaskGetRegularResultInfo.md#tojson)
- [fromJS](SerpNaverOrganicTaskGetRegularResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTaskGetRegularResultInfo**(`data?`): [`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTaskGetRegularResultInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md) |

#### Returns

[`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)

#### Defined in

[main.ts:68046](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68046)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResultInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[check_url](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#check_url)

#### Defined in

[main.ts:68020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68020)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResultInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[datetime](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#datetime)

#### Defined in

[main.ts:68025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68025)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
images, local_pack, map, organic, paid, related_searches, video
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for organic and paid types only
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Naver Organiс Advanced SERP endpoint

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResultInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[item_types](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#item_types)

#### Defined in

[main.ts:68036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68036)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResultInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[items](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#items)

#### Defined in

[main.ts:68042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68042)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResultInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[items_count](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#items_count)

#### Defined in

[main.ts:68040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68040)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResultInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[keyword](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#keyword)

#### Defined in

[main.ts:68009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68009)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResultInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[language_code](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#language_code)

#### Defined in

[main.ts:68017](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68017)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResultInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[location_code](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#location_code)

#### Defined in

[main.ts:68015](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68015)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResultInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[se_domain](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#se_domain)

#### Defined in

[main.ts:68013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68013)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResultInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[se_results_count](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Defined in

[main.ts:68038](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68038)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResultInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[spell](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#spell)

#### Defined in

[main.ts:68028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68028)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResultInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md).[type](../interfaces/ISerpNaverOrganicTaskGetRegularResultInfo.md#type)

#### Defined in

[main.ts:68011](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68011)

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

[main.ts:68055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68055)

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

[main.ts:68091](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68091)

___


### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTaskGetRegularResultInfo`](SerpNaverOrganicTaskGetRegularResultInfo.md)

#### Defined in

[main.ts:68084](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68084)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")