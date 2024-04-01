[Documentation](../README.md) / [Exports](../modules.md) / AppsInfo

# Class: AppsInfo

## Implements

- [`IAppsInfo`](../interfaces/IAppsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppsInfo.md#constructor)

### Properties

- [app\_id](AppsInfo.md#app_id)
- [title](AppsInfo.md#title)
- [url](AppsInfo.md#url)

### Methods

- [init](AppsInfo.md#init)
- [toJSON](AppsInfo.md#tojson)
- [fromJS](AppsInfo.md#fromjs)

## Constructors

### constructor

• **new AppsInfo**(`data?`): [`AppsInfo`](AppsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppsInfo`](../interfaces/IAppsInfo.md) |

#### Returns

[`AppsInfo`](AppsInfo.md)

#### Defined in

main.ts:185221

## Properties

### app\_id

• `Optional` **app\_id**: `string`

ID of the app

#### Implementation of

[IAppsInfo](../interfaces/IAppsInfo.md).[app_id](../interfaces/IAppsInfo.md#app_id)

#### Defined in

main.ts:185213

___

### title

• `Optional` **title**: `string`

title of the app

#### Implementation of

[IAppsInfo](../interfaces/IAppsInfo.md).[title](../interfaces/IAppsInfo.md#title)

#### Defined in

main.ts:185215

___

### url

• `Optional` **url**: `string`

URL to the app page on Google Play

#### Implementation of

[IAppsInfo](../interfaces/IAppsInfo.md).[url](../interfaces/IAppsInfo.md#url)

#### Defined in

main.ts:185217

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

main.ts:185230

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

main.ts:185249

___

### fromJS

▸ **fromJS**(`data`): [`AppsInfo`](AppsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppsInfo`](AppsInfo.md)

#### Defined in

main.ts:185242
