[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingSearchVolumeLiveRequestInfo

# Class: KeywordsDataBingSearchVolumeLiveRequestInfo

## Implements

- [`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingSearchVolumeLiveRequestInfo.md#constructor)

### Properties

- [date\_from](KeywordsDataBingSearchVolumeLiveRequestInfo.md#date_from)
- [date\_to](KeywordsDataBingSearchVolumeLiveRequestInfo.md#date_to)
- [device](KeywordsDataBingSearchVolumeLiveRequestInfo.md#device)
- [keywords](KeywordsDataBingSearchVolumeLiveRequestInfo.md#keywords)
- [language\_code](KeywordsDataBingSearchVolumeLiveRequestInfo.md#language_code)
- [language\_name](KeywordsDataBingSearchVolumeLiveRequestInfo.md#language_name)
- [location\_code](KeywordsDataBingSearchVolumeLiveRequestInfo.md#location_code)
- [location\_coordinate](KeywordsDataBingSearchVolumeLiveRequestInfo.md#location_coordinate)
- [location\_name](KeywordsDataBingSearchVolumeLiveRequestInfo.md#location_name)
- [search\_partners](KeywordsDataBingSearchVolumeLiveRequestInfo.md#search_partners)
- [sort\_by](KeywordsDataBingSearchVolumeLiveRequestInfo.md#sort_by)
- [tag](KeywordsDataBingSearchVolumeLiveRequestInfo.md#tag)

### Methods

- [init](KeywordsDataBingSearchVolumeLiveRequestInfo.md#init)
- [toJSON](KeywordsDataBingSearchVolumeLiveRequestInfo.md#tojson)
- [fromJS](KeywordsDataBingSearchVolumeLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingSearchVolumeLiveRequestInfo**(`data?`): [`KeywordsDataBingSearchVolumeLiveRequestInfo`](KeywordsDataBingSearchVolumeLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md) |

#### Returns

[`KeywordsDataBingSearchVolumeLiveRequestInfo`](KeywordsDataBingSearchVolumeLiveRequestInfo.md)

#### Defined in

[main.ts:123202](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123202)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months
minimum value: two years back from today’s date
date format: "yyyy-mm-dd"
example:
"2020-01-01"

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[date_from](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#date_from)

#### Defined in

[main.ts:123177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123177)

___


### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months;
minimum value: two years back from today’s date;
maximum value: one month from today’s date;
note: we do not recommend using a custom time range for the past year’s dates;
date format: "yyyy-mm-dd"
example:
"2020-03-15"

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[date_to](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#date_to)

#### Defined in

[main.ts:123187](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123187)

___


### device

• `Optional` **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device typepossible values: all, mobile, desktop, tablet
default value: all

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[device](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#device)

#### Defined in

[main.ts:123164](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123164)

___


### keywords

• `Optional` **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 200
The maximum number of characters for each keyword: 100
the specified keywords will be converted to lowercase, data will be provided in a separate array

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[keywords](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#keywords)

#### Defined in

[main.ts:123125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123125)

___


### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[language_code](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:123159](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123159)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[language_name](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:123153](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123153)

___


### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[location_code](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:123139](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123139)

___


### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the data will be provided for the country the specified coordinates belong to
example:
52.6178549,-155.352142

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[location_coordinate](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#location_coordinate)

#### Defined in

[main.ts:123147](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123147)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[location_name](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:123132](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123132)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[search_partners](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#search_partners)

#### Defined in

[main.ts:123192](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123192)

___


### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[sort_by](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#sort_by)

#### Defined in

[main.ts:123169](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123169)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[tag](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#tag)

#### Defined in

[main.ts:123198](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123198)

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

[main.ts:123211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123211)

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

[main.ts:123243](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123243)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingSearchVolumeLiveRequestInfo`](KeywordsDataBingSearchVolumeLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingSearchVolumeLiveRequestInfo`](KeywordsDataBingSearchVolumeLiveRequestInfo.md)

#### Defined in

[main.ts:123236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123236)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")