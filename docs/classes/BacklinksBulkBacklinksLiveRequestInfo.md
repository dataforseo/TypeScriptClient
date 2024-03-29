[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksBulkBacklinksLiveRequestInfo

# Class: BacklinksBulkBacklinksLiveRequestInfo

## Implements

- [`IBacklinksBulkBacklinksLiveRequestInfo`](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkBacklinksLiveRequestInfo.md#constructor)

### Properties

- [tag](BacklinksBulkBacklinksLiveRequestInfo.md#tag)
- [targets](BacklinksBulkBacklinksLiveRequestInfo.md#targets)

### Methods

- [init](BacklinksBulkBacklinksLiveRequestInfo.md#init)
- [toJSON](BacklinksBulkBacklinksLiveRequestInfo.md#tojson)
- [fromJS](BacklinksBulkBacklinksLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkBacklinksLiveRequestInfo**(`data?`): [`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkBacklinksLiveRequestInfo`](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md) |

#### Returns

[`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)

#### Defined in

[main.ts:139666](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139666)

## Properties

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBacklinksBulkBacklinksLiveRequestInfo](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md).[tag](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md#tag)

#### Defined in

[main.ts:139662](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139662)

___


### targets

• `Optional` **targets**: `string`[]

domains, subdomains or webpages to get the number of backlinks for
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

[IBacklinksBulkBacklinksLiveRequestInfo](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md).[targets](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md#targets)

#### Defined in

[main.ts:139656](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139656)

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

[main.ts:139675](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139675)

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

[main.ts:139697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139697)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)

#### Defined in

[main.ts:139690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139690)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")