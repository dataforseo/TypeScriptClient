[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo

# Interface: IDataforseoLabsAppleBulkAppMetricsLiveRequestInfo

Defined in: main.ts:123406

## Indexable

\[`key`: `string`\]: `any`

## Properties

### app\_ids?

> `optional` **app\_ids**: `string`[]

Defined in: main.ts:123415

ids of the apps
required field
IDs of mobile applications on App Store;
you can find the ID in the URL of every app listed on App Store;
example:
in the URL https://apps.apple.com/us/app/id835599320
the id is 835599320;
the maximum number of IDs you can specify in this field is 1000

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:123451

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:123442

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only;
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:123433

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:123424

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:123457

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
