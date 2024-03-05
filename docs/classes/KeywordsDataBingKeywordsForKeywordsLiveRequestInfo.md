[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForKeywordsLiveRequestInfo

# Class: KeywordsDataBingKeywordsForKeywordsLiveRequestInfo

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#constructor)

### Properties

- [date\_from](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#date_from)
- [date\_to](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#date_to)
- [device](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#device)
- [keywords](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#keywords)
- [keywords\_negative](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#keywords_negative)
- [language\_code](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#language_code)
- [language\_name](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#language_name)
- [location\_code](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#location_code)
- [location\_coordinate](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#location_coordinate)
- [location\_name](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#location_name)
- [search\_partners](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#search_partners)
- [sort\_by](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#sort_by)
- [tag](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#tag)

### Methods

- [init](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForKeywordsLiveRequestInfo**(`data?`): [`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

#### Defined in

[main.ts:125906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125906)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
you can specify a date from the past 24 months
if you don’t specify this field, data will be provided for the last 12 months
date format: "yyyy-mm-dd"
example:
"2020-01-01"

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[date_from](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#date_from)

#### Defined in

[main.ts:125881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125881)

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

[IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[date_to](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#date_to)

#### Defined in

[main.ts:125891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125891)

___

### device

• `Optional` **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device type;
possible values: all, mobile, desktop, tablet
default value: all

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[device](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#device)

#### Defined in

[main.ts:125873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125873)

___

### keywords

• `Optional` **keywords**: `string`[]

keywords
required field
you can specify the maximum of 200 keywords with each keyword containing no more than 100 characters;
the specified keywords will be converted to lowercase, data will be provided in a separate array

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[keywords](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#keywords)

#### Defined in

[main.ts:125822](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125822)

___

### keywords\_negative

• `Optional` **keywords\_negative**: `string`[]

keywords negative array
optional field
These keywords will be ignored in the results array;
You can specify a maximum of 200 terms that you want to exclude from the results;
the specified keywords will be converted to lowercase format

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[keywords_negative](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#keywords_negative)

#### Defined in

[main.ts:125867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125867)

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[language_code](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:125856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125856)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[language_name](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:125850](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125850)

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

[IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[location_code](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:125836](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125836)

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

[IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[location_coordinate](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#location_coordinate)

#### Defined in

[main.ts:125844](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125844)

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

[IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[location_name](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:125829](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125829)

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[search_partners](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#search_partners)

#### Defined in

[main.ts:125896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125896)

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[sort_by](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#sort_by)

#### Defined in

[main.ts:125861](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125861)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[tag](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#tag)

#### Defined in

[main.ts:125902](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125902)

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

[main.ts:125915](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125915)

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

[main.ts:125952](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125952)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

#### Defined in

[main.ts:125945](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125945)
