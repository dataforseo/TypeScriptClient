[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsBingDomainRankOverviewLiveRequestInfo

# Interface: IDataforseoLabsBingDomainRankOverviewLiveRequestInfo

Defined in: main.ts:117328

## Indexable

\[`key`: `string`\]: `any`

## Properties

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:117371

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

Defined in: main.ts:117362

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

Defined in: main.ts:117376

the maximum number of returned results for domain
optional field
default value: 100
maximum value: 1000

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:117353

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:117343

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
United States

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:117381

offset in the results array of returned items
optional field
default value: 0
if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:117387

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:117333

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.
