[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataBingSearchVolumeTaskPostRequestInfo

# Interface: IKeywordsDataBingSearchVolumeTaskPostRequestInfo

## Implemented by

- [`KeywordsDataBingSearchVolumeTaskPostRequestInfo`](../classes/KeywordsDataBingSearchVolumeTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#date_from)
- [date\_to](IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#date_to)
- [device](IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#device)
- [keywords](IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#keywords)
- [language\_code](IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#language_code)
- [language\_name](IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#language_name)
- [location\_code](IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#location_code)
- [location\_coordinate](IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#location_coordinate)
- [location\_name](IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#location_name)
- [pingback\_url](IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#pingback_url)
- [postback\_url](IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#postback_url)
- [search\_partners](IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#search_partners)
- [sort\_by](IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#sort_by)
- [tag](IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#tag)

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

#### Defined in

main.ts:127884

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

#### Defined in

main.ts:127894

___

### device

• `Optional` **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device typepossible values: all, mobile, desktop, tablet
default value: all

#### Defined in

main.ts:127871

___

### keywords

• `Optional` **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 200
The maximum number of characters for each keyword: 100
the specified keywords will be converted to lowercase, data will be provided in a separate array

#### Defined in

main.ts:127832

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de

#### Defined in

main.ts:127866

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German

#### Defined in

main.ts:127860

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840

#### Defined in

main.ts:127846

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

#### Defined in

main.ts:127854

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom

#### Defined in

main.ts:127839

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

#### Defined in

main.ts:127914

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

#### Defined in

main.ts:127904

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks

#### Defined in

main.ts:127919

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance

#### Defined in

main.ts:127876

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:127925
