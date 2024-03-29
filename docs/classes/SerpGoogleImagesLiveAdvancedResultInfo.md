[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleImagesLiveAdvancedResultInfo

# Class: SerpGoogleImagesLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesLiveAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleImagesLiveAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleImagesLiveAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleImagesLiveAdvancedResultInfo.md#item_types)
- [items](SerpGoogleImagesLiveAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleImagesLiveAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleImagesLiveAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleImagesLiveAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleImagesLiveAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleImagesLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleImagesLiveAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleImagesLiveAdvancedResultInfo.md#spell)
- [type](SerpGoogleImagesLiveAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleImagesLiveAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleImagesLiveAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleImagesLiveAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesLiveAdvancedResultInfo**(`data?`): [`SerpGoogleImagesLiveAdvancedResultInfo`](SerpGoogleImagesLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesLiveAdvancedResultInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleImagesLiveAdvancedResultInfo`](SerpGoogleImagesLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:46711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46711)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResultInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:46688](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46688)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResultInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:46693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46693)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
carousel, images_search, related_searches

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResultInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:46701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46701)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

contains keywords and images related to the specified search term

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResultInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#items)

#### Defined in

[main.ts:46707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46707)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResultInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:46705](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46705)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResultInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:46677](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46677)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResultInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:46685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46685)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResultInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:46683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46683)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResultInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:46681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46681)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResultInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:46703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46703)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResultInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:46696](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46696)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleImagesLiveAdvancedResultInfo](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleImagesLiveAdvancedResultInfo.md#type)

#### Defined in

[main.ts:46679](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46679)

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

[main.ts:46720](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46720)

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

[main.ts:46756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46756)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesLiveAdvancedResultInfo`](SerpGoogleImagesLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesLiveAdvancedResultInfo`](SerpGoogleImagesLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:46749](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46749)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")