[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingDomainRankOverviewLiveRequestInfo

# Class: DataforseoLabsBingDomainRankOverviewLiveRequestInfo

## Implements

- [`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#constructor)

### Properties

- [language\_code](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#offset)
- [tag](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#tag)
- [target](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#target)

### Methods

- [init](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingDomainRankOverviewLiveRequestInfo**(`data?`): [`DataforseoLabsBingDomainRankOverviewLiveRequestInfo`](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveRequestInfo`](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)

#### Defined in

main.ts:104129

## Properties

### language\_code

• `Optional` **language\_code**: `string`

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#language_code)

#### Defined in

main.ts:104109

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#language_name)

#### Defined in

main.ts:104100

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned results for domain
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#limit)

#### Defined in

main.ts:104114

___

### location\_code

• `Optional` **location\_code**: `number`

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#location_code)

#### Defined in

main.ts:104091

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#location_name)

#### Defined in

main.ts:104081

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned items
optional field
default value: 0
if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#offset)

#### Defined in

main.ts:104119

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#tag)

#### Defined in

main.ts:104125

___

### target

• `Optional` **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[target](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#target)

#### Defined in

main.ts:104071

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

main.ts:104138

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

main.ts:104162

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingDomainRankOverviewLiveRequestInfo`](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveRequestInfo`](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)

#### Defined in

main.ts:104155
