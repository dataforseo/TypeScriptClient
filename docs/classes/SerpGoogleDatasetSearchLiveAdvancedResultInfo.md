[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetSearchLiveAdvancedResultInfo

# Class: SerpGoogleDatasetSearchLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md#item_types)
- [items](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md#language_code)
- [se\_domain](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md#spell)

### Methods

- [init](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetSearchLiveAdvancedResultInfo**(`data?`): [`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetSearchLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:51566](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51566)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:51544](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51544)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:51549](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51549)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:51556](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51556)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#items)

#### Defined in

[main.ts:51562](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51562)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:51560](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51560)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:51537](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51537)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:51541](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51541)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:51539](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51539)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:51558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51558)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:51552](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51552)

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

[main.ts:51575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51575)

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

[main.ts:51609](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51609)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedResultInfo`](SerpGoogleDatasetSearchLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:51602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51602)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")