[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo

# Class: DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#constructor)

### Properties

- [ignore\_synonyms](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#ignore_synonyms)
- [language\_code](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#offset)
- [tag](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#tag)
- [target](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#target)

### Methods

- [init](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo**(`data?`): [`DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md)

#### Defined in

[main.ts:90548](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90548)

## Properties

### ignore\_synonyms

• `Optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true, all highly similar keywords will be excluded from the ranking and traffic calculations, the results will be based on data for main keywords from groups of synonyms
default value: false

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[ignore_synonyms](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#ignore_synonyms)

#### Defined in

[main.ts:90528](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90528)

___


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

[IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:90523](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90523)

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

[IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:90514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90514)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned results for domain
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#limit)

#### Defined in

[main.ts:90533](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90533)

___


### location\_code

• `Optional` **location\_code**: `number`

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:90505](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90505)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:90496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90496)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned items
optional field
default value: 0
if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#offset)

#### Defined in

[main.ts:90538](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90538)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#tag)

#### Defined in

[main.ts:90544](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90544)

___


### target

• `Optional` **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md).[target](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md#target)

#### Defined in

[main.ts:90487](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90487)

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

[main.ts:90557](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90557)

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

[main.ts:90582](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90582)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md)

#### Defined in

[main.ts:90575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90575)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")