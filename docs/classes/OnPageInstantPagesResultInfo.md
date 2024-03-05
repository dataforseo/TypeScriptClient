[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageInstantPagesResultInfo

# Class: OnPageInstantPagesResultInfo

## Implements

- [`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageInstantPagesResultInfo.md#constructor)

### Properties

- [crawl\_gateway\_address](OnPageInstantPagesResultInfo.md#crawl_gateway_address)
- [crawl\_progress](OnPageInstantPagesResultInfo.md#crawl_progress)
- [crawl\_status](OnPageInstantPagesResultInfo.md#crawl_status)
- [items](OnPageInstantPagesResultInfo.md#items)
- [items\_count](OnPageInstantPagesResultInfo.md#items_count)

### Methods

- [init](OnPageInstantPagesResultInfo.md#init)
- [toJSON](OnPageInstantPagesResultInfo.md#tojson)
- [fromJS](OnPageInstantPagesResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageInstantPagesResultInfo**(`data?`): [`OnPageInstantPagesResultInfo`](OnPageInstantPagesResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageInstantPagesResultInfo`](../interfaces/IOnPageInstantPagesResultInfo.md) |

#### Returns

[`OnPageInstantPagesResultInfo`](OnPageInstantPagesResultInfo.md)

#### Defined in

[main.ts:153327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153327)

## Properties

### crawl\_gateway\_address

• `Optional` **crawl\_gateway\_address**: `string`

crawler ip address
displays the IP address used by the crawler to initiate the current crawling session
you can find the full list of IPs used by our crawler in the Overview section

#### Implementation of

[IOnPageInstantPagesResultInfo](../interfaces/IOnPageInstantPagesResultInfo.md).[crawl_gateway_address](../interfaces/IOnPageInstantPagesResultInfo.md#crawl_gateway_address)

#### Defined in

[main.ts:153319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153319)

___

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageInstantPagesResultInfo](../interfaces/IOnPageInstantPagesResultInfo.md).[crawl_progress](../interfaces/IOnPageInstantPagesResultInfo.md#crawl_progress)

#### Defined in

[main.ts:153312](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153312)

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session
in this case the value will be null

#### Implementation of

[IOnPageInstantPagesResultInfo](../interfaces/IOnPageInstantPagesResultInfo.md).[crawl_status](../interfaces/IOnPageInstantPagesResultInfo.md#crawl_status)

#### Defined in

[main.ts:153315](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153315)

___

### items

• `Optional` **items**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

items array

#### Implementation of

[IOnPageInstantPagesResultInfo](../interfaces/IOnPageInstantPagesResultInfo.md).[items](../interfaces/IOnPageInstantPagesResultInfo.md#items)

#### Defined in

[main.ts:153323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153323)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPageInstantPagesResultInfo](../interfaces/IOnPageInstantPagesResultInfo.md).[items_count](../interfaces/IOnPageInstantPagesResultInfo.md#items_count)

#### Defined in

[main.ts:153321](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153321)

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

[main.ts:153336](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153336)

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

[main.ts:153361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153361)

___

### fromJS

▸ **fromJS**(`data`): [`OnPageInstantPagesResultInfo`](OnPageInstantPagesResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageInstantPagesResultInfo`](OnPageInstantPagesResultInfo.md)

#### Defined in

[main.ts:153354](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153354)
