**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordsDataBingKeywordPerformanceLiveRequestInfo

# Interface: IKeywordsDataBingKeywordPerformanceLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### device?

> **`optional`** **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device typepossible values: desktop, mobile, tablet, all
default value: all

#### Source

main.ts:133206

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 2500.
The maximum number of characters for each keyword: 80.
The maximum number of words for each keyword phrase: 10.
the specified keywords will be converted to lowercase, data will be provided in a separate array

#### Source

main.ts:133201

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
you can receive the list of available locations and languages by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages
example:
"en"

#### Source

main.ts:133249

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available locations and languages by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages
example:
English

#### Source

main.ts:133243

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations and languages by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages
example:
2840

#### Source

main.ts:133228

***

### location\_coordinate?

> **`optional`** **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the data will be provided for the country the specified coordinates belong to
example:
52.6178549,-155.352142

#### Source

main.ts:133236

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations and languages by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages
example:
"United States"

#### Source

main.ts:133221

***

### match?

> **`optional`** **match**: `string`

keywords match type
optional field
can take the following values:
aggregate returns data across all match types;
broad returns data for all user queries containing the specified keyword with varying word order;
phrase returns data for all user queries containing the specified keyword with identical word order;
exact returns data for user query that matches the specified keyword;Note: the aggregate match type is applied by default

#### Source

main.ts:133214

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:133255
