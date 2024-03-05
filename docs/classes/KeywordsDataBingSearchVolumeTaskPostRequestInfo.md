[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingSearchVolumeTaskPostRequestInfo

# Class: KeywordsDataBingSearchVolumeTaskPostRequestInfo

## Implements

- [`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#constructor)

### Properties

- [date\_from](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#date_from)
- [date\_to](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#date_to)
- [device](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#device)
- [keywords](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#keywords)
- [language\_code](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#language_code)
- [language\_name](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#language_name)
- [location\_code](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#location_code)
- [location\_coordinate](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#location_coordinate)
- [location\_name](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#location_name)
- [pingback\_url](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#pingback_url)
- [postback\_url](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#postback_url)
- [search\_partners](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#search_partners)
- [sort\_by](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#sort_by)
- [tag](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#tag)

### Methods

- [init](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#init)
- [toJSON](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#tojson)
- [fromJS](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingSearchVolumeTaskPostRequestInfo**(`data?`): [`KeywordsDataBingSearchVolumeTaskPostRequestInfo`](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md) |

#### Returns

[`KeywordsDataBingSearchVolumeTaskPostRequestInfo`](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md)

#### Defined in

[main.ts:122388](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122388)

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

[IKeywordsDataBingSearchVolumeTaskPostRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[date_from](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#date_from)

#### Defined in

[main.ts:122343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122343)

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

[IKeywordsDataBingSearchVolumeTaskPostRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[date_to](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#date_to)

#### Defined in

[main.ts:122353](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122353)

___

### device

• `Optional` **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device typepossible values: all, mobile, desktop, tablet
default value: all

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[device](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#device)

#### Defined in

[main.ts:122330](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122330)

___

### keywords

• `Optional` **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 200
The maximum number of characters for each keyword: 100
the specified keywords will be converted to lowercase, data will be provided in a separate array

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[keywords](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#keywords)

#### Defined in

[main.ts:122291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122291)

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[language_code](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#language_code)

#### Defined in

[main.ts:122325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122325)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[language_name](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#language_name)

#### Defined in

[main.ts:122319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122319)

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

[IKeywordsDataBingSearchVolumeTaskPostRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[location_code](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#location_code)

#### Defined in

[main.ts:122305](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122305)

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

[IKeywordsDataBingSearchVolumeTaskPostRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[location_coordinate](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#location_coordinate)

#### Defined in

[main.ts:122313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122313)

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

[IKeywordsDataBingSearchVolumeTaskPostRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[location_name](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#location_name)

#### Defined in

[main.ts:122298](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122298)

___

### pingback\_url

• `Optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[pingback_url](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#pingback_url)

#### Defined in

[main.ts:122373](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122373)

___

### postback\_url

• `Optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[postback_url](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#postback_url)

#### Defined in

[main.ts:122363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122363)

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[search_partners](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#search_partners)

#### Defined in

[main.ts:122378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122378)

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[sort_by](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#sort_by)

#### Defined in

[main.ts:122335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122335)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostRequestInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[tag](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#tag)

#### Defined in

[main.ts:122384](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122384)

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

[main.ts:122397](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122397)

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

[main.ts:122431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122431)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTaskPostRequestInfo`](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingSearchVolumeTaskPostRequestInfo`](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md)

#### Defined in

[main.ts:122424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122424)
