[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksBulkNewLostReferringDomainsLiveRequestInfo

# Class: BacklinksBulkNewLostReferringDomainsLiveRequestInfo

## Implements

- [`IBacklinksBulkNewLostReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md#constructor)

### Properties

- [date\_from](BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md#date_from)
- [tag](BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md#tag)
- [targets](BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md#targets)

### Methods

- [init](BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md#init)
- [toJSON](BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md#tojson)
- [fromJS](BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkNewLostReferringDomainsLiveRequestInfo**(`data?`): [`BacklinksBulkNewLostReferringDomainsLiveRequestInfo`](BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkNewLostReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveRequestInfo.md) |

#### Returns

[`BacklinksBulkNewLostReferringDomainsLiveRequestInfo`](BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md)

#### Defined in

[main.ts:141091](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141091)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
this field indicates the date which will be used as a threshold for new and lost referring domains;
the referring domains that appeared in our index after the specified date will be considered as new;
the referring domains that weren’t found after the specified date, but were present before, will be considered as lost;
default value: today’s date -(minus) one month;
e.g. if today is 2021-10-13, default date_from will be 2021-09-13.
minimum value equals today’s date -(minus) one year;
e.g. if today is 2021-10-13, minimum date_from will be 2020-10-13.
date format: "yyyy-mm-dd"
example:
"2021-01-01"

#### Implementation of

[IBacklinksBulkNewLostReferringDomainsLiveRequestInfo](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveRequestInfo.md).[date_from](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveRequestInfo.md#date_from)

#### Defined in

[main.ts:141081](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141081)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBacklinksBulkNewLostReferringDomainsLiveRequestInfo](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveRequestInfo.md).[tag](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveRequestInfo.md#tag)

#### Defined in

[main.ts:141087](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141087)

___


### targets

• `Optional` **targets**: `string`[]

domains, subdomains or webpages to get  new & lost referring domains for
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

[IBacklinksBulkNewLostReferringDomainsLiveRequestInfo](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveRequestInfo.md).[targets](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveRequestInfo.md#targets)

#### Defined in

[main.ts:141068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141068)

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

[main.ts:141100](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141100)

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

[main.ts:141123](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141123)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkNewLostReferringDomainsLiveRequestInfo`](BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkNewLostReferringDomainsLiveRequestInfo`](BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md)

#### Defined in

[main.ts:141116](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141116)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")