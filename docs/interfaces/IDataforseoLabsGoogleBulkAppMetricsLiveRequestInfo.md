[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo

# Interface: IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../classes/DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_ids](IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#app_ids)
- [language\_code](IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#language_name)
- [location\_code](IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#location_name)
- [tag](IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#tag)

## Properties

### app\_ids

• `Optional` **app\_ids**: `string`[]

ids of the app
required field
IDs of the mobile applications on Google Play;
you can find the ID in the URL of every app listed on Google Play;
example:
in the URL https://play.google.com/store/apps/details?id=org.telegram.messenger
the id is org.telegram.messenger;
the maximum number of IDs you can specify in this field is 1000

#### Defined in

main.ts:108047

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only
example:
en

#### Defined in

main.ts:108083

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only;
example:
English

#### Defined in

main.ts:108074

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Defined in

main.ts:108065

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Defined in

main.ts:108056

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:108089
