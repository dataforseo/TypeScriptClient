[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForSiteLiveRequestInfo

# Class: KeywordsDataBingKeywordsForSiteLiveRequestInfo

## Implements

- [`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#constructor)

### Properties

- [date\_from](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#date_from)
- [date\_to](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#date_to)
- [device](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#device)
- [keywords\_negative](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#keywords_negative)
- [language\_code](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#language_code)
- [language\_name](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#language_name)
- [location\_code](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#location_code)
- [location\_coordinate](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#location_coordinate)
- [location\_name](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#location_name)
- [search\_partners](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#search_partners)
- [sort\_by](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#sort_by)
- [tag](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#tag)
- [target](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#target)

### Methods

- [init](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForSiteLiveRequestInfo**(`data?`): [`KeywordsDataBingKeywordsForSiteLiveRequestInfo`](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForSiteLiveRequestInfo`](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md)

#### Defined in

main.ts:129916

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months
date format: "yyyy-mm-dd"
example:
"2020-01-01"

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[date_from](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#date_from)

#### Defined in

main.ts:129886

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

[IKeywordsDataBingKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[date_to](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#date_to)

#### Defined in

main.ts:129896

___

### device

• `Optional` **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device typepossible values: all, mobile, desktop, tablet
default value: all

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[device](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#device)

#### Defined in

main.ts:129879

___

### keywords\_negative

• `Optional` **keywords\_negative**: `string`[]

keywords negative array
optional field
These keywords will be ignored in the results array;
You can specify a maximum of 200 terms that you want to exclude from the results;
the specified keywords will be converted to lowercase format

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[keywords_negative](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#keywords_negative)

#### Defined in

main.ts:129874

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[language_code](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#language_code)

#### Defined in

main.ts:129868

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[language_name](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#language_name)

#### Defined in

main.ts:129862

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

[IKeywordsDataBingKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[location_code](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#location_code)

#### Defined in

main.ts:129848

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

[IKeywordsDataBingKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[location_coordinate](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#location_coordinate)

#### Defined in

main.ts:129856

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

[IKeywordsDataBingKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[location_name](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#location_name)

#### Defined in

main.ts:129841

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[search_partners](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#search_partners)

#### Defined in

main.ts:129906

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[sort_by](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#sort_by)

#### Defined in

main.ts:129901

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[tag](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#tag)

#### Defined in

main.ts:129912

___

### target

• `Optional` **target**: `string`

domain or URL
required field
the domain name or URL of the target website

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveRequestInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[target](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#target)

#### Defined in

main.ts:129834

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

main.ts:129925

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

main.ts:129958

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteLiveRequestInfo`](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForSiteLiveRequestInfo`](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md)

#### Defined in

main.ts:129951
