[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleImagesLiveHtmlResultInfo

# Class: SerpGoogleImagesLiveHtmlResultInfo

## Implements

- [`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesLiveHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpGoogleImagesLiveHtmlResultInfo.md#datetime)
- [items](SerpGoogleImagesLiveHtmlResultInfo.md#items)
- [items\_count](SerpGoogleImagesLiveHtmlResultInfo.md#items_count)
- [keyword](SerpGoogleImagesLiveHtmlResultInfo.md#keyword)
- [language\_code](SerpGoogleImagesLiveHtmlResultInfo.md#language_code)
- [location\_code](SerpGoogleImagesLiveHtmlResultInfo.md#location_code)
- [se\_domain](SerpGoogleImagesLiveHtmlResultInfo.md#se_domain)
- [type](SerpGoogleImagesLiveHtmlResultInfo.md#type)

### Methods

- [init](SerpGoogleImagesLiveHtmlResultInfo.md#init)
- [toJSON](SerpGoogleImagesLiveHtmlResultInfo.md#tojson)
- [fromJS](SerpGoogleImagesLiveHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesLiveHtmlResultInfo**(`data?`): [`SerpGoogleImagesLiveHtmlResultInfo`](SerpGoogleImagesLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md) |

#### Returns

[`SerpGoogleImagesLiveHtmlResultInfo`](SerpGoogleImagesLiveHtmlResultInfo.md)

#### Defined in

[main.ts:46958](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46958)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleImagesLiveHtmlResultInfo](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[datetime](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:46950](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46950)

___


### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleImagesLiveHtmlResultInfo](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[items](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#items)

#### Defined in

[main.ts:46954](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46954)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleImagesLiveHtmlResultInfo](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[items_count](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:46952](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46952)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleImagesLiveHtmlResultInfo](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[keyword](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#keyword)

#### Defined in

[main.ts:46937](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46937)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleImagesLiveHtmlResultInfo](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[language_code](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:46945](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46945)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleImagesLiveHtmlResultInfo](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[location_code](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:46943](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46943)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleImagesLiveHtmlResultInfo](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[se_domain](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:46941](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46941)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleImagesLiveHtmlResultInfo](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[type](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#type)

#### Defined in

[main.ts:46939](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46939)

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

[main.ts:46967](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46967)

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

[main.ts:46995](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46995)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesLiveHtmlResultInfo`](SerpGoogleImagesLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesLiveHtmlResultInfo`](SerpGoogleImagesLiveHtmlResultInfo.md)

#### Defined in

[main.ts:46988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46988)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")