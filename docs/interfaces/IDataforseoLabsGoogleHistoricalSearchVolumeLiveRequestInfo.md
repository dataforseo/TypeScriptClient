**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo

# Interface: IDataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### include\_clickstream\_data?

> **`optional`** **include\_clickstream\_data**: `boolean`

include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_keyword_info object with clickstream data in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
Note: clickstream data is available for roughly 15% of keywords in the response
learn more about how clickstream-based metrics are calculated in this help center article

#### Source

main.ts:86598

***

### include\_serp\_info?

> **`optional`** **include\_serp\_info**: `boolean`

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Source

main.ts:86590

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 700
The maximum number of characters for each keyword: 80
The maximum number of words for each keyword phrase: 10
the specified keywords will be converted to lowercase format, data will be provided in a separate array
note that if some of the keywords specified in this array are omitted in the results you receive, then our database doesn’t contain such keywords and cannot return data on them
you will not be charged for the keywords omitted in the results

#### Source

main.ts:86553

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Source

main.ts:86585

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Source

main.ts:86577

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Source

main.ts:86569

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Source

main.ts:86561

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:86604
