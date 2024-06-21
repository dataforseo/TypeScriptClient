**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo

# Class: DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo(data)

> **new DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md)

#### Source

main.ts:112531

## Properties

### app\_ids?

> **`optional`** **app\_ids**: `string`[]

ids of the app
required field
IDs of the mobile applications on Google Play;
you can find the ID in the URL of every app listed on Google Play;
example:
in the URL https://play.google.com/store/apps/details?id=org.telegram.messenger
the id is org.telegram.messenger;
the maximum number of IDs you can specify in this field is 1000

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md).[`app_ids`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#app_ids)

#### Source

main.ts:112485

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only
example:
en

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#language_code)

#### Source

main.ts:112521

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the English language only;
example:
English

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#language_name)

#### Source

main.ts:112512

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#location_code)

#### Source

main.ts:112503

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#location_name)

#### Source

main.ts:112494

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md#tag)

#### Source

main.ts:112527

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:112540

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:112566

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md)

#### Source

main.ts:112559
