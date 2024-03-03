[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo

# Class: DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#constructor)

### Properties

- [item\_types](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#item_types)
- [language\_code](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#language_name)
- [location\_code](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#location_name)
- [tag](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#tag)
- [targets](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#targets)

### Methods

- [init](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo**(`data?`): [`DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md)

#### Defined in

main.ts:97648

## Properties

### item\_types

• `Optional` **item\_types**: `string`[]

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid"]

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md).[item_types](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#item_types)

#### Defined in

main.ts:97638

___

### language\_code

• `Optional` **language\_code**: `string`

language code
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#language_code)

#### Defined in

main.ts:97629

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#language_name)

#### Defined in

main.ts:97621

___

### location\_code

• `Optional` **location\_code**: `number`

location code
if you use this field, you don’t have to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#location_code)

#### Defined in

main.ts:97613

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
if you use this field, you don’t have to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#location_name)

#### Defined in

main.ts:97605

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#tag)

#### Defined in

main.ts:97644

___

### targets

• `Optional` **targets**: `string`[]

target domains and websites
required field
you can specify domains, subdomains, and webpages in this field;
domains and subdomains should be specified without https:// and www.;
pages should be specified with absolute URL, including https:// and www.;
you can set up to 1000 domains, subdomains or webpages

#### Implementation of

[IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md).[targets](../interfaces/IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md#targets)

#### Defined in

main.ts:97597

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

main.ts:97657

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

main.ts:97688

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md)

#### Defined in

main.ts:97681
