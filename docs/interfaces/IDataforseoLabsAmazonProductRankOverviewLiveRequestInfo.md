[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo

# Interface: IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo

Defined in: main.ts:113718

## Indexable

\[`key`: `string`\]: `any`

## Properties

### asins?

> `optional` **asins**: `string`[]

Defined in: main.ts:113727

product IDs to compare
required field
product IDs to receive ranking data for;
the maximum number of ASINs you can specify in this array is 1000;
you can receive the asin parameter by making a separate request to the Amazon Products endpoint
Note: all letters in ASIN code must be specified in uppercase format;
example:
B01LW2SL7R

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:113757

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:113750

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:113743

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:113735

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:113763

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
