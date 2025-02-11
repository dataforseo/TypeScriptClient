[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo

# Interface: IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo

Defined in: main.ts:105209

## Indexable

\[`key`: `string`\]: `any`

## Properties

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:105255

ignore highly similar keywords
optional field
if set to true, all highly similar keywords will be excluded from the ranking and traffic calculations, the results will be based on data for main keywords from groups of synonyms
default value: false

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:105250

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:105241

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:105260

the maximum number of returned results for domain
optional field
default value: 100
maximum value: 1000

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:105232

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:105223

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:105265

offset in the results array of returned items
optional field
default value: 0
if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:105271

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:105214

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.
