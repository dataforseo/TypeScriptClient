[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksBulkRanksLiveRequestInfo

# Class: BacklinksBulkRanksLiveRequestInfo

## Implements

- [`IBacklinksBulkRanksLiveRequestInfo`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkRanksLiveRequestInfo.md#constructor)

### Properties

- [tag](BacklinksBulkRanksLiveRequestInfo.md#tag)
- [targets](BacklinksBulkRanksLiveRequestInfo.md#targets)

### Methods

- [init](BacklinksBulkRanksLiveRequestInfo.md#init)
- [toJSON](BacklinksBulkRanksLiveRequestInfo.md#tojson)
- [fromJS](BacklinksBulkRanksLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkRanksLiveRequestInfo**(`data?`): [`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkRanksLiveRequestInfo`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md) |

#### Returns

[`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)

#### Defined in

[main.ts:139326](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139326)

## Properties

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBacklinksBulkRanksLiveRequestInfo](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md).[tag](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md#tag)

#### Defined in

[main.ts:139322](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139322)

___


### targets

• `Optional` **targets**: `string`[]

domains, subdomains or webpages to get rank for
required field
you can set up to 1000 domains, subdomains or webpages
the domain or subdomain should be specified without https:// and www.
the page should be specified with absolute URL (including http:// or https://)
example:
"targets": [
"forbes.com",
"cnn.com",
"bbc.com",
"yelp.com",
"https://www.apple.com/iphone/",
"https://ahrefs.com/blog/",
"ibm.com",
"https://variety.com/",
"https://stackoverflow.com/",
"www.trustpilot.com"
]

#### Implementation of

[IBacklinksBulkRanksLiveRequestInfo](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md).[targets](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md#targets)

#### Defined in

[main.ts:139316](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139316)

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

[main.ts:139335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139335)

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

[main.ts:139357](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139357)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)

#### Defined in

[main.ts:139350](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139350)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")