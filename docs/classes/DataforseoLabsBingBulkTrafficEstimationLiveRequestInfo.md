[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo

# Class: DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo

## Implements

- [`IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#constructor)

### Properties

- [item\_types](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#item_types)
- [language\_code](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#language_name)
- [location\_code](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#location_name)
- [tag](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#tag)
- [targets](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#targets)

### Methods

- [init](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo**(`data?`): [`DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md)

#### Defined in

[main.ts:102496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102496)

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

[IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md).[item_types](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#item_types)

#### Defined in

[main.ts:102486](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102486)

___


### language\_code

• `Optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:102477](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102477)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:102470](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102470)

___


### location\_code

• `Optional` **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:102463](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102463)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:102455](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102455)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#tag)

#### Defined in

[main.ts:102492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102492)

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

[IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md).[targets](../interfaces/IDataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md#targets)

#### Defined in

[main.ts:102447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102447)

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

[main.ts:102505](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102505)

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

[main.ts:102536](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102536)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md)

#### Defined in

[main.ts:102529](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102529)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")