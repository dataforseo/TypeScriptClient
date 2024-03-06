[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleSearchIntentLiveRequestInfo

# Class: DataforseoLabsGoogleSearchIntentLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleSearchIntentLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md#constructor)

### Properties

- [keywords](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md#keywords)
- [language\_code](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md#language_name)
- [tag](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleSearchIntentLiveRequestInfo**(`data?`): [`DataforseoLabsGoogleSearchIntentLiveRequestInfo`](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleSearchIntentLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveRequestInfo`](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md)

#### Defined in

[main.ts:82685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82685)

## Properties

### keywords

• `Optional` **keywords**: `string`[]

target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000;
the keywords will be converted to lowercase format

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md).[keywords](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md#keywords)

#### Defined in

[main.ts:82636](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82636)

___


### language\_code

• `Optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
Note: this endpoint currently supports these languages only;
example:
en

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:82675](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82675)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages

Note: this endpoint currently supports the following languages only:
Arabic, ar,
Chinese(Traditional), zh-TW,
Czech, cs,
Danish, da,
Dutch, nl,
English, en,
Finnish, fi,
French, fr,
German, de,
Hebrew, he,
Hindi, hi,
Italian, it,
Japanese, ja,
Korean, ko,
Malay, ms,
Norwegian(Bokmål), nb,
Polish, pl,
Portuguese, pt,
Russian, ru,
Spanish, es,
Swedish, sv,
Thai, th,
Ukrainian, uk,
Vietnamese, vi
example:
English

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:82668](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82668)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveRequestInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsGoogleSearchIntentLiveRequestInfo.md#tag)

#### Defined in

[main.ts:82681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82681)

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

[main.ts:82694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82694)

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

[main.ts:82718](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82718)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleSearchIntentLiveRequestInfo`](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveRequestInfo`](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md)

#### Defined in

[main.ts:82711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82711)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")